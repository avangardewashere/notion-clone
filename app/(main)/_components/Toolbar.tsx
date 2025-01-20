"use client";

import { IconPicker } from "@/components/icon-picker";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { ImageIcon, Smile, X } from "lucide-react";
import { ElementRef, useRef, useState } from "react";

interface ToolBarProps {
  initialData: Doc<"documents">;
  preview?: boolean;
}

const Toolbar: React.FC<ToolBarProps> = ({ initialData, preview }) => {
  const inputRef = useRef<ElementRef<"textarea">>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialData.title);

  const update = useMutation(api.documents.update);

  const enableInput = () => {
    if (preview) return;

    setIsEditing(true);

    setTimeout(() => {
      setValue(initialData.title);
      inputRef.current?.focus();
    }, 0);
  };

  const disableInput = () => {
    setIsEditing(false)
  }


  const onInput= (value:string) => {
    setValue(value)
    update({
        id:initialData._id;
        title:value || "Untitled"
    });
  }

  const onKeyDown = (e:React.KeyboardEvent<HTMLTextAreaElement>)=>{
    if(e.key === "Enter"){
        e.preventDefault()
    }
  }

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
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {!!initialData.icon && preview && (
        <p className="text-6xl pt-6">{initialData?.icon}</p>
      )}
      <div className="opacity-0 group-hover:opacity-100 flex items-center gap-x-1 py-4">
        {!initialData.icon && !preview && (
          <IconPicker asChild onChange={() => {}}>
            <Button
              className="text-slate-200 text-sx"
              variant={"outline"}
              size="sm"
            >
              <Smile className="h-4 w-4 mr-2" />
              Add Icon
            </Button>
          </IconPicker>
        )}

        {!initialData.coverImage && !preview && (
          <Button
            onClick={() => {}}
            className="text-slate-300 text-xs"
            variant={"outline"}
            size="sm"
          >
            <ImageIcon className="h-4 w-4 mr-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
