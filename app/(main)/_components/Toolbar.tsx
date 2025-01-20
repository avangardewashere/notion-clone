"use client";

import { IconPicker } from "@/components/icon-picker";
import { Button } from "@/components/ui/button";
import { Doc } from "@/convex/_generated/dataModel";
import { X } from "lucide-react";

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
          </IconPicker>{" "}
          <Button
            onClick={() => {}}
            className="rounded-full opacity-0 group/hover icon:opacity-100 ransition text-slate-300 text-xs"
            size="icon"
            variant="outline"
          >
            <X className="h-4 w-4" />{" "}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
