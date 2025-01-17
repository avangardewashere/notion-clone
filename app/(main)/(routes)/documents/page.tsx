"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import { toast } from "sonner";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitle" });
    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        className="dark:hidden"
        height={40}
        src="/empty-image.png"
        width={40}
        alt="solution-logo"
      />
      <Image
        className="hidden dark:block"
        height={40}
        src="/empty-image.png"
        style={{ filter: "invert(100%) brightness(150%)" }}
        width={40}
        alt="solution-logo"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Solution
      </h2>
      <Button
        onClick={onCreate}
        className="bg-zinc-300 rounded-xl"
        variant={"outline"}
      >
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
