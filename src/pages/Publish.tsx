import { FormDialog } from "../components/dialogs/FormDialog";
import EditorText from "../components/editor/EditorText";
import { BlurFade } from "../components/magicui/blur-fade";

const Publish = () => {
  return (
    <main>
      <BlurFade className="flex flex-col items-center">
        <h1 className="text-primary-black mb-5 font-semibold leading-9 text-center ssm:w-full md:w-4/5 lg:w-3/5 ssm:text-[1.5rem] md:text-[2.3rem]">
          comparte tu conocimiento con otras personas de la comunidad
        </h1>
        <p className="text-gray-light mb-5 text-center leading-7 ssm:w-full md:w-4/5 lg:w-3/5 ssm:text-[1.1rem] md:text-[1.3rem]">
          Aquí puedes crear artículos sobre lo que más te apasiona: tecnología,
          ciencia, diseño, programación y más. Tu experiencia puede ayudar a
          alguien más
        </p>
        <EditorText />
        <div className="mt-5">
          <FormDialog />
        </div>
      </BlurFade>
    </main>
  );
};

export default Publish;
