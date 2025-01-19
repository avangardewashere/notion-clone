"use client";

import { Spinner } from "@/components/spinner";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery, useMutation } from "convex/react";
import { Search, Trash, Undo } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const TrashBox = () => {
  const router = useRouter();
  const params = useParams();
  const documents = useQuery(api.documents.getTrash);
  const restore = useMutation(api.documents.restore);
  const remove = useMutation(api.documents.remove);

  const [search, setSearch] = useState("");

  const filteredDocs = documents?.filter((doc) => {
    return doc.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  const onClick = (docId: string) => {
    router.push(`/documents/${docId}`);
  };

  const onRestore = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    docId: Id<"documents">
  ) => {
    e.stopPropagation();
    const promise = restore({ id: docId });

    toast.promise(promise, {
      loading: "Restoring note...",
      success: "Note restored!",
      error: "Failed to restore note.",
    });
  };

  const onRemove = (
    //   e:React.MouseEvent<HTMLDivElement,MouseEvent>,
    docId: Id<"documents">
  ) => {
    // e.stopPropagation();
    const promise = remove({ id: docId });

    toast.promise(promise, {
      loading: "Remove note..",
      success: "Note removed!",
      error: "Failed to restore note.",
    });

    if (params.docId == docId) {
      router.push("/documents");
    }

    if (documents === undefined) {
      return (
        <div className="h-fll flex items-center justify-center p-4">
          <Spinner size="lg" />
        </div>
      );
    }
  };

  return (
    <div className="text-sm p-2">
      <div className="flex items-center gap-x-1 p-2 ">
        <Search className="h-4 w-4" />
        <Input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="h-7 px-2 focus-visible:ring-transparent border-none rounded-[5px] bg-slate-200"
          placeholder="Filter by page title..."
        />
      </div>
      <div className="mt-1 px-1 pb-1">
        <p className="hidden last:block text-sx text-center text-slate-600 pb-2">
          No documents found
        </p>
        {filteredDocs?.map((doc) => (
          <div className="text-sm rounded-sm w-full hover:bg-primary5 flex items-center text-primary justify-between">
            <span className="truncate pl-2">{doc.title}</span>
            <div className="flex-items-center">
              <div
                onClick={(e) => onRestore(e, doc._id)}
                role="button"
                className="rounded-sm p-2 hover:bg-neutral-200"
              >
                <Undo className="h-4 w-4 text-slate-600" />
              </div>
              <div className="rounded-sm p-2 hover:bg-neutral-200">
                <Trash className="h-4 2-4 text-slate-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrashBox;
