import { Editor as EditorTinymce } from "@tinymce/tinymce-react";
import { useRef, useEffect, useState } from "react";

const EditorText = () => {
  const editorRef = useRef(null);
  const [fontSize, setFontSize] = useState("16px");

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setFontSize("20px");
      } else {
        setFontSize("16px");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <EditorTinymce
      apiKey="c5m6s770dt0gpi1kbgy92cyom8f5qhhqkfyfqns6hzaskaqd"
      onInit={(_evt, editor) => (editorRef.current = editor)}
      init={{
        height: 300,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style: `
                body {
                  font-family: Helvetica, Arial, sans-serif; 
                  font-size: ${fontSize} 
                },
                .tox-sidebar-wrap > .tox-edit-area > .tox-edit-area__iframe {
                  background-color: transparent;
                }
              `,
      }}
      key={fontSize}
    />
  );
};

export default EditorText;
