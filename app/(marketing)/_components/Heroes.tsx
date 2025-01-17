import Image from "next/image";
import React from "react";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl ">
      <div className="flex items-cener">
        <div className="dark:hidden relative w-[300px] h-[300px] sm:w-[350px] sm:h:-[400px] md:w-[400] ml-16">
          <Image
            src="/documents.png"
            fill
            className="object-contain "
            alt="documents"
          />
        </div>
        <div className="dark:flex relative w-[400px] h-[300px] hidden ">
        <Image
            src="/reading.png"
            fill
            className="object-contain"
            alt="documents"
            style={{filter:"invert(100%)"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
