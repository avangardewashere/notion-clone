"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Solution</span>{" "}
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Solution is the connected workspace for everyone
        <br />
        to make everything better
      </h3>
      {/* {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size={"lg"} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button
          variant={"outline"}
          className="text-white bg-slate-800 rounded-xl"
          asChild
        >
          <Link href="/documents">
            Enter Solution
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button
            variant={"outline"}
            className="text-white bg-slate-800 rounded-xl"
            asChild
          >
            Get Enter Solution
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )} */}
    </div>
  );
};

export default Heading;
