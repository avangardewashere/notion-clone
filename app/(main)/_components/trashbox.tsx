"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery, useMutation } from "convex/react";
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
  };

  return <div></div>;
};

export default TrashBox;
