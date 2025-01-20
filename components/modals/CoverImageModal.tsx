import { useCoverImage } from "@/hooks/use-cover-image";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogHeader } from "../ui/dialog";

export const CoverImageModal = () => {
  const coverImage = useCoverImage();

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        <div>todo:Upload Image</div>
      </DialogContent>
    </Dialog>
  );
};
