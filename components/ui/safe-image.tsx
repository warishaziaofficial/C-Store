"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { fallbackImage } from "@/lib/data/images";
import { cn } from "@/lib/utils";

interface SafeImageProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export function SafeImage({
  src,
  alt,
  fallbackSrc = fallbackImage,
  className,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      className={cn(className)}
      onError={() => {
        if (imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
      }}
    />
  );
}
