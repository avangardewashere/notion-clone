"use clinet";

import { ChevronsLeft } from "lucide-react";
import {  ComponentRef, useRef } from "react";

const Navigation = () => {
  const isResizingRef = useRef(false);
  const sidebarRe = useRef<ComponentRef<"aside">>(null);

  return (
    <>
      <aside className="group/sidebar h-full bg-slate-100 overflow-y-auto relative flex w-60 flex-col z-[99999]">
        <div
          role="button"
          className="h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100"
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        <div>
          <p>Action Items</p>
        </div>
        <div className="mt-4">
          <p>Documents</p>
        </div>
        <div className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-reisze absolute h-full w-[2px] bg-emerald-200 right-0 top-0" />
      </aside>
    </>
  );
};

export default Navigation;
