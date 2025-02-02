"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import {
  ChevronDown,
  ChevronRight,
  LucideIcon,
  MoreHorizontal,
  Plus,
  Trash,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface ItemProps {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  icon: LucideIcon;
  onClick?: () => void;
}

const Item: React.FC<ItemProps> & {
  Skeleton: React.FC<{ level?: number }>;
} = ({
  label,
  icon: Icon,
  onClick,
  id,
  active,
  documentIcon,
  expanded,
  isSearch,
  level = 0,
  onExpand,
}) => {
  const create = useMutation(api.documents.create);
  const archive = useMutation(api.documents.archive);
  const router = useRouter();
  const HandleExpand = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e?.stopPropagation();
    onExpand?.();
  };
  const { user } = useUser();

  const onCreate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e?.stopPropagation();
    if (!id) return;
    const promise = create({ title: "Untitled", parentDocument: id }).then(
      (docId) => {
        if (!expanded) {
          onExpand?.();
        }
        router.push(`/documents/${docId}`);
      }
    );
    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note",
    });
  };

  const onArchive = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (!id) return;
    const promise = archive({ id }).then(() => router.push("/documents"));
    toast.promise(promise, {
      loading: "Moving to trash...",
      success: "Note has been moved to trash bin.",
      error: "Failed to archived the note.",
    });
  };

  const ChevronIcon = expanded ? ChevronDown : ChevronRight;

  return (
    <div
      onClick={onClick}
      role="button"
      style={{ paddingLeft: level ? `${level * 12 + 12}px` : "12px" }}
      className={cn(
        "group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-slate-200 flex items-center text-zinc-400 font-medium",
        active && "bg-slate-300 text-slate-500"
      )}
    >
      {!!id && (
        <div
          role="button"
          className="h-full ronded-sm hove:bg-neutral-300  dark:bg-neutral-600 mr-1 "
          onClick={HandleExpand}
        >
          <ChevronIcon className="h-4 w-4 shrink-0 text-zinc-400/50" />
        </div>
      )}
      {documentIcon ? (
        <div className="shrink-0 mr-2 text-[10px]">{documentIcon}</div>
      ) : (
        <Icon className="shrink-0 h-[18px] w-{18px} mr-2 text-zinc-400" />
      )}
      {/* <Icon className="shrink-0 h-[18px] mr-2 text-zinc-400" /> */}
      <span className="text-zinc-600 truncate">{label}</span>
      {isSearch && (
        <kbd className="ml-auto pointer-events-none inline-flex h-5 sleect-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreround opacity-100">
          <span className="text-[9px]">CRTL+</span>K
        </kbd>
      )}
      {!!id && (
        <div className="ml-auto flex items-center gap-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
              <div
                className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-nuetral-600"
                role="button"
              >
                <MoreHorizontal className="h-4 w-4 text-zinc-400"></MoreHorizontal>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-60"
              align="start"
              side="right"
              forceMount
            >
              <DropdownMenuItem onClick={onArchive}>
                <Trash className="h-4w-4 mr-2" />
                Delete
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <div>Last edited by : {user?.fullName}</div>
            </DropdownMenuContent>
          </DropdownMenu>
          <div
            role="button"
            onClick={onCreate}
            className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
          >
            <Plus className="h-4 w-4 text-zinc-400" />
          </div>
        </div>
      )}
    </div>
  );
};

Item.Skeleton = function ItemSkeleton({ level }: { level?: number }) {
  return (
    <div
      style={{ paddingLeft: level ? `${level * 12 + 25}px` : "12px" }}
      className="flex gap-x-2 py-[3px]"
    >
      <Skeleton className="h-4 w-4" />
      <Skeleton className="h-4 w-[30%]" />
    </div>
  );
};

export default Item;
