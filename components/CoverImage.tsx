import clsx from "clsx";
import { forwardRef } from "react";

interface CoverImageProps {
  src: string;

  alt: string;

  className?: string;

  [prop: string]: any;
}

export const CoverImage = forwardRef(
  (
    { src, alt, className, as: Component = "div", ...rest }: CoverImageProps,
    ref
  ) => (
    <Component
      className="block relative rounded-md drop-shadow-lg overflow-hidden"
      {...rest}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={clsx(className, "object-contain")} />
    </Component>
  )
);

CoverImage.displayName = "forwardRef(CoverImage)";
