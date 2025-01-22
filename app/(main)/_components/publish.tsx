import { Doc } from "@/convex/_generated/dataModel";
import React from "react";

interface PublishProps {
  initialData: Doc<"documents">;
}

const Publish = ({ initialData }: PublishProps) => {
  return (
    <div>
      <span>Publish</span>
    </div>
  );
};

export default Publish;
