import { useRef, useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { BlurFade } from "../components/magicui/blur-fade";

const Publish = () => {
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
    <main>
      <BlurFade className="flex flex-col items-center">
      <h1 className="text-primary-black mb-5 font-semibold leading-9 text-center ssm:w-full md:w-4/5 lg:w-3/5 ssm:text-[1.5rem] md:text-[2.3rem]">comparte tu conocimiento con otras personas de la comunidad</h1>
      <Editor
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
      </BlurFade>
    </main>
  );
};

export default Publish;
