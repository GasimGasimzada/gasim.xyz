---
title: "Recursing and transforming tuples in Typescript"
date: "2022-02-09"
cover: /posts/recursing-and-transforming-tuples-in-typescript/cover.jpg
---

I have recently come across a problem on trying to provide an intuitive typing
for an array of objects that represents a configuration, rather than data. So,
every configuration can have different type requirements.

In Typescript, tuple is an array where the number of items is know beforehand
and the each item can have different types. This concept is exactly what I was
looking for but there was one catch -- I still wanted to retain some form of
consistency among items:

```ts
interface ItemConfig<T> {
    /**
     * List of items
     */
    data: T[];

    /**
     * Updater function
     */
    update(point: T) => void;
}
```

Every item config object has data and an update function but the type of data
that they accept is defined by the generic. I can already use this type to
create my array:

```ts
const config: [ItemConfig<number>, ItemConfig<string>] = [
  {
    data: [1, 2, 3, 4, 5],
    update(point: number) {
      console.log(point);
    },
  },
  {
    data: ["a", "b", "c", "d"],
    update(point: string) {
      console.log(point);
    },
  },
];
```

This works well but it is very verbose and error prone. Every data type needs to
be wrapped inside `ItemConfig`; plus, you can technically add a non `ItemConfig`
type and pass in whatever you want. It would be much better if we can define the
types for the generic and the types get automatically wrapped in `ItemConfig`:

```ts
const config: Config<[number, string]> = [
  {
    data: [1, 2, 3, 4, 5],
    update(point) {
      // typeof point === number
      console.log(point);
    },
  },
  {
    data: ["a", "b", "c", "d"],
    update(point) {
      // typeof point === string
      console.log(point);
    },
  },
];
```

After a lot of research, I have come across two concepts: The `infer` keyword
and tuple desctructuring. I am going to give a quick overview of how they work
in my own words, then we can jump right into how these concepts allowed me to
achieve this.

## The `infer` keyword

The `infer` keyword allows us to extract type from a complex type if a specific
condition is met. Example:

```ts
type ExtractDataTypeFromItemConfig<Type> = Type extends ItemConfig<
  infer DataType
>
  ? DataType
  : never;

type NumberType = ExtractDataTypeFromItemConfig<ItemConfig<number>>; // == number
type NeverType = ExtractDataTypeFromItemConfig<string[]>; // never
```

In the code above, we are doing a conditional check to see if `Type` generic is
extended from `ItemConfig`. However, we do not know the generic type argument of
`ItemConfig`; so, the `infer` keywords allows us to infer it and assign it to a
newly created type named `DataType`.

Let's check two examples, one for each use-case.

```ts
type NumberType = ExtractDataTypeFromItemConfig<ItemConfig<number>>;
```

Since the passed type is extended from `ItemConfig` (it is the same as
ItemConfig); so, the the generic argument can be inferred. In this example, the
utility will return `number`.

```ts
type NeverType = ExtractDataTypeFromItemConfig<string[]>;
```

The passes type is not extended from `ItemConfig` type; so, the utility will
return the "else" case, which is `never`.

## Spreading tuples

Tuples or arrays can be spread using the `...` syntax:

```ts
type A = ["a", "b", "c"];
type B = ["d", "e", "f"];
type Merged = [...A, ...B]; // ['a', 'b', 'c', 'd', 'e', 'f']
```

## Putting it all together

By using `infer` and tuple spreading, we can recursively wrap each element of a
tuple type with anything; so, let's wrap them with `ItemConfig`:

```ts
type Config<T> = T extends [infer I, ...infer Rest]
  ? [ItemConfig<I>, ...Config<Rest>]
  : [];
```

What are we doing here? Let's look at an example below and iterate it step by
step:

```ts
type Res = Config<[string, number, boolean]>;
```

1. `[string, number, boolean]` is a tuple; so,
   `I = string, Rest = [number, boolean]` and the Config returns
   `[ItemConfig<string>, ...Config<[number, boolean]>]`
2. `[number, boolean]` is a tuple; so, `I = number, Rest = [boolean]` and Config
   returns `[ItemConfig<number>, Config<[boolean]>]`
3. `[boolean]` is a tuple; so, `I = boolean, Rest = []` and Config returns
   `[ItemConfig<boolean>, Config<[]>]`
4. `[]` is not a tuple; so, Config returns the "else" condition, which is `[]`
5. If we stich all the types together, we get the following final expression:
   `[ItemConfig<string>, ...[ItemConfig<number>, ...[ItemConfig<boolean>, ...[]]]]`
6. Evaluating the expression will give us
   `[ItemConfig<string>, ItemConfig<nu mber>, ItemConfig<boolean>]`

## Final Thoughts

This was a very interesting experiment. Understanding and utilizing `infer`
keyword in Typescript gave me a lot of insight on not just how type inference
works in Typescript but also on various applications for this concept.

The final API that I wanted to achieve was to use use variadic generic arguments
instead of tuples in my type:

```ts
const data: Config<string, number, boolean>;
```

Unfortunately, this is not possible in Typescript 4.5. I am going to keep an eye
on this since I believe that variadic generic arguments can open doors to a lot
of interesting use-cases that are currently not possible.

---

#### Changelog

- Changed the word "destructuring" to "spreading"
