"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { MenuIcon } from "lucide-react";
import { useParams } from "next/navigation";
import Title from "./Title";
import Banner from "./Banner";
import Menu from "./Menu";

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isCollapsed, onResetWidth }) => {
  const params = useParams();

  const document = useQuery(api.documents.getById, {
    docId: params.documentId as Id<"documents">,
  });

  console.log(params.documentId);

  if (document === undefined) {
    return (
      <nav className="bg-white dark:bg-[#1f1f1f] px-2 py-2 w-full flex items-center justify-between">
        <Title.Skeleton />
      </nav>
    );
  }

  if (document === null) {
    return null;
  }

  return (
    <>
      <nav className="bg-white dark:bg-[#1f1f1f] px-2 py-2 w-full flex items-center gap-x-4">
        {isCollapsed && (
          <MenuIcon
            role="button"
            onClick={onResetWidth}
            className="h-6 w-6 text-slate-200"
          />
        )}

        <div className="flex items-center ustify-between w-full">
          <Title initialData={document} />
          <div className="flex items-center gap-x-2">
            <Menu docId={document._id} />
          </div>
        </div>
      </nav>
      {document.isArchived && <Banner docId={document._id} />}
    </>
  );
};

export default Navbar;
