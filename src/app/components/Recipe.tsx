import Image from "next/image";
import React from "react";

export default function Recipe({ src, text }: any) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        className="w-[300px] h-[300px] rounded-lg"
        src={src}
        alt="imagine cu reteta"
        width={300}
        height={300}
      />
      <p className="w-[150px] h-[250px]">{text}</p>
    </div>
  );
}
