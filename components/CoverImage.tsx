import clsx from "clsx";

interface CoverImageProps {
  src: string;

  alt: string;

  className?: string;

  [prop: string]: any;
}

export function CoverImage({
  src,
  alt,
  className,
  as: Component = "div",
  ...rest
}: CoverImageProps) {
  return (
    <Component
      className="block relative rounded-md drop-shadow-lg overflow-hidden"
      {...rest}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={clsx(className, "object-contain")} />
    </Component>
  );
}
