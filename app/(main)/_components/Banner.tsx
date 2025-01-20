import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

interface BannerProps {
  docId: Id<"documents">;
}
const Banner: React.FC<BannerProps> = ({ docId }) => {
    const router = useRouter();
    const remove = useMutation(api.documents.remove);
    const restore = useMutation(api.documents.restore);

    const onRemove = () => {
        const promise = remove({id:docId})

        toast.promise(promise,{
            loading:"Deleting note...",
            success:"Note Deleted!",
            error:"Failed to delete note."
        })
    }
    const onRestore = () => {
        const promise = restore({id:docId})

        toast.promise(promise,{
            loading:"Restoring note...",
            success:"Note Restored!",
            error:"Failed to restore note."
        })
    }


  return (
    <div>
      <span>Banner</span>
    </div>
  );
};

export default Banner;
