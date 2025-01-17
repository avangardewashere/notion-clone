import Image from "next/image";
import React from "react";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl ">
      <div className="flex items-cener">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h:-[400px] md:w-[400]">
          <Image
            src="/documents.png"
            fill
            className="object-contain"
            alt="documents"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
