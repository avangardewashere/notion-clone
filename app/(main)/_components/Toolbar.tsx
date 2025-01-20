"use client";

import { IconPicker } from "@/components/icon-picker";
import { Doc } from "@/convex/_generated/dataModel";

interface ToolBarProps {
  initialData: Doc<"documents">;
  preview?: boolean;
}

const Toolbar: React.FC<ToolBarProps> = ({ initialData, preview }) => {
  return (
    <div className="pl-[54px] group relative">
      {!!initialData.icon && !preview && (
        <div className="flex items-center gap-x-2 group/icon pt-6">
          <IconPicker onChange={() => {}}>
            <p className="text-6xl hover:opacity-75 transition">
              {initialData.icon}
            </p>
          </IconPicker>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
