---
title: What I Learned from Translating React Docs
date: "2019-12-25"
cover: /posts/what-i-learned-from-translating-react-docs/cover.jpg
---

In the beginning of 2019, I took on the job of translating and managing
[ReactJS Docs for Azerbaijani Language](https://github.com/reactjs/az.reactjs.org).
Since this was the first “big” open source project that I have worked on, even
if the focus was mostly about content instead of code, I was still very excited
to take part in this community project. Now, one year and more than 75
translated pages later, it felt like a good time to write my last blog post for
this year :)

## The React Docs

The biggest gain that I got from translating the docs was that I had to read all
the pages thoroughly. React docs go further than just explaining React concepts;
it tackles a lot of problems and provides solutions for what React is trying to
make pain-free — UI Development. There are interesting topics about Testing,
Accessibility, Data Fetching, and many other concepts. Even though all these
topics are written in relation to React, many of them can be applied to any
other tool related to UI development.

### Suggested Readings

I have compiled a list of pages that I think is worth reading for anyone
familiar with React because I believe that they cover concepts that are useful
for in-depth understanding of React and use-cases that are useful in UI
regardless of the used framework:

- [Reconciliation](https://reactjs.org/docs/reconciliation.html): This page
  dives deeper into how React’s Reconciler works. Understanding Reconciler will
  help you make decisions that are more inline with React’s Heuristics to
  achieve optimal performance.
- [Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html):
  As the title suggest, this page focuses on performance optimizations. I would
  suggest looking at the first section of the docs as a pre-deployment checklist
  while reading the later sections in-depth to understand techniques for
  profiling and optimizing bottlenecks. I would also suggest you to read the
  [Profiler](https://reactjs.org/docs/profiler.html) page as it is one of the
  newer APIs that can help you log performance-critical parts of your
  application.
- [SyntheticEvent](https://reactjs.org/docs/events.html): This page talks about
  one of the very important concepts of React — Synthetic Event. I would suggest
  reading the “Overview” section of this page to understand how React manages
  events and use the “Supported Events” section as a reference for specific
  event types.
- [Hooks](https://reactjs.org/docs/hooks-intro.html): In this section, there are
  a lot of information on why hooks are added, why certain rules should be
  followed, and other interesting topics. All the pages in these docs are very
  long but at the end of it, you will have a much better understanding of Hooks.
- [Testing Recipes](https://reactjs.org/docs/testing-recipes.html): Regardless
  of your experience on software testing, I think you will be able to find
  testable use-cases in this page. I would suggest looking into it as there are
  a lot of good ideas and practices on testing.
- [Accessibility](https://reactjs.org/docs/accessibility.html): This page
  provides guides for building accessible UI in React along with lots of
  resources and tools that are very useful for accessible UI in general.
- [Versioning Policy](https://reactjs.org/docs/faq-versioning.html) talks about
  how React is being versioned. I like this FAQ because it is more about
  management than coding and the decisions here provide a fresh perspective on
  how to version software. I understand that this decision is more relevant in
  an open-source environment where requirements are different than a a closed
  environment (e.g how people view major versions); however, it still helped me
  look into other facts when adapting a versioning policy in a team.

## Challenges

There are two challenges that I have encountered and to this day I am still
encountering these challenges to some degree.

First and the hardest challenge was translating technical terms from English
language to a language that is not rich in technical terms. There were times
where I had to invent a word based on “street” language of local developers,
write definition of a word that ended up being a phrase instead of a word, or
change the structure of a sentence completely to maintain the meaning and
context while removing the awkwardness of direct translation. Sometimes these
solution had to be applied to general terms that had no direct translation.

Second challenge has been related to project management. Managing a project in a
“closed environment” with developers being compensated for their work is much
different than managing an open source project. Logically, this fact was always
obvious to me but this is the first time I experienced it. In my experience,
commitment is the most important value to sucessfully set expectations in a
team. I believe that this value is much more relevant when working on an open
source project. In this project, it has been very hard to measure and set
expectations for the contributing parties due to lack of commitment. In order to
accommodate for that, I have limited my expectations and it has helped me
tremendously.

These challenges taught me to understand and limit my expectations. I know that
I do not have the power to amend the local language nor do I have the strength
to motivate people to contribute to a project when the local open source culture
is not as advanced enough.

## Final Thoughts

Experiencing localization of a documentation ended being much more useful than I
expected because it helped me understand the technology much better and provided
me new insights on how to contribute, how to manage time, expectations, and
skills. Additionally, because React that has a larger community of developers,
managers, and content creators, it was really exciting to get involved in and to
see the types of workflows and systems that are in-place. If you are good at
another human language and the technology that you are using has localized docs
that need contribution, I would strongly suggest getting involved in the
localization project because you are going to learn a lot more than you expect.
You might even get ideas on how to improve the original docs page (source code
or content improvements).

## What’s Next?

I am going to work on this project until documentation is 100% complete — this
includes “Contributing” and “Concurrent Mode” sections in the docs.
Additionally, because I have contributed to this project and the original docs
project with small changes, I have lost my “shyness” in contributing to open
source. So, hopefully I get a chance to contribute to more open-source projects
whether it is code, content, or localization contributions.
