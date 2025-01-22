"use client";

import { useState, useEffect } from "react";
import Toolbar from "@/app/(main)/_components/Toolbar";
import Cover from "@/components/Cover";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Skeleton } from "@/components/ui/skeleton";

interface DocumentsIdpageProps {
  params?: Promise<{ documentId: Id<"documents"> }>;
}

const DocumentIdPage = ({ params }: DocumentsIdpageProps) => {
  const [documentId, setDocumentId] = useState<Id<"documents"> | null>(null);

  useEffect(() => {
    params?.then((resolvedParams) => setDocumentId(resolvedParams.documentId));
  }, [params]);

  const document = useQuery(
    api.documents.getById,
    documentId ? { docId: documentId } : "skip"
  );

  if (!documentId) {
    return <div>Loading...</div>; // Wait for documentId to resolve
  }

  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="md:max-w-2xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-6 w-[80%]" />
            <Skeleton className="h-6 w-[40%]" />
            <Skeleton className="h-6 w-[60%]" />
          </div>
        </div>
      </div>
    ); // Loading document data
  }

  if (document === null) {
    return <div>Not Found</div>; // Document not found
  }

  return (
    <div className="pb-40">
      <Cover url={document.coverImage} />
      <div className="mt-40 md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={document} />
      </div>
    </div>
  );
};

export default DocumentIdPage;
