"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={"/empty-image.png"}
        alt="error"
        height={"300"}
        width={"300"}
        className="dark:hidden"
      />
      <Image
        src={"/empty-image.png"}
        alt="Error"
        height={"300"}
        width={"300"}
        style={{ filter: "invert(100%)" }}
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">Somthing went wrong!</h2>
      <Button asChild>
        <Link href="/documents">Go Back</Link>
      </Button>
    </div>
  );
};
export default ErrorPage;
