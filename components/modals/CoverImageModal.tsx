import { useCoverImage } from "@/hooks/use-cover-image";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogHeader } from "../ui/dialog";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { SingleImageDropzone } from "../SingleImageDropzone";

export const CoverImageModal = () => {
  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const update = useMutation(api.documents.update);
  const coverImage = useCoverImage();
  const params = useParams();
  const { edgestore } = useEdgeStore();

  const onClose = () => {
    setFile(undefined);
    setIsSubmitting(false);
    coverImage.onClose();
  };

  const onChange = async (file?: File) => {
    if (file) {
      setIsSubmitting(true);
      setFile(file);
      let res;
      if (coverImage.url) {
        res = await edgestore.publicFiles.upload({
          file,
          options: {
            replaceTargetUrl: coverImage.url,
          },
        });
      } else {
        res = await edgestore.publicFiles.upload({ file });
      }

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url,
      });

      onClose();
    }
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <h2 className=" text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        {/* <div>todo:Upload Image</div> */}
        <SingleImageDropzone
          className="w-full outline-none"
          disabled={isSubmitting}
          value={file}
          width={200}
          height={200}
          onChange={onChange}
        />
      </DialogContent>
    </Dialog>
  );
};
