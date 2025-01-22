"use-client";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/style.css";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import { useEdgeStore } from "@/lib/edgestore";

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
  const edgestore = useEdgeStore();

  const handleUpload = async (file: File) => {
    const res = await edgestore.edgestore.publicFiles.upload({
      file,
    });

    return res.url;
  };

  const editor: BlockNoteEditor = useCreateBlockNote({
    // editable:true,
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
  });

  return (
    <div>
      <BlockNoteView editable={editable} editor={editor} theme="light" />;
    </div>
  );
};

export default Editor;
