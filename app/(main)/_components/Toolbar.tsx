"use client";

import { Doc } from "@/convex/_generated/dataModel";

interface ToolBarProps {
  initialData: Doc<"documents">;
  preview?: boolean;
}

const Toolbar: React.FC<ToolBarProps> = ({ initialData, preview }) => {
  return (
    <div className="pl-[54px] group relative">
      {!!initialData.icon && !preview && (
        <div className="flex items-center gap-x-2 group/icon pt-6" />
      )}
    </div>
  );
};

export default Toolbar;
