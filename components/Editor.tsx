"use-client";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/style.css";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
interface EditorProps {
    onChange: (content: string) => void; 
  initialContent?: string;
  editable?: boolean;
}

const Editor: React.FC<EditorProps> = ({
  onChange,
  initialContent,
  editable,
}) => {
  const editor: BlockNoteEditor = useCreateBlockNote({
    // editable:true,
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
  });

  const update= useMutation(api.documents.update)




  return (
    <div>
  <BlockNoteView editor={editor} theme="light" />;
    </div>
  );
};

export default Editor;
