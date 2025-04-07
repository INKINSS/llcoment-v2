import PrimaryButton from "../commons/buttons/PrimaryButton";
import { BlurFade } from "../magicui/blur-fade";

const MainBanner = () => {
  return (
    <section className="md:w-[70%]">
      <BlurFade>
        <h1 className="text-primary-black font-bold text-center leading-9 ssm:text-[1.7rem] md:text-[2rem] lg:text-[2.3rem]">
          un sitio dedicado a la programación y a las nuevas tecnologías
        </h1>
        <p className="font-normal mt-3 text-gray-light text-center leading-6 md:text-[1.2rem] lg:text-[1.3rem]">
          Explora tendencias tecnológicas, aprende sobre programación y comparte
          tus propios artículos con la comunidad
        </p>
        <div className="flex gap-2 mt-4 justify-center">
          <PrimaryButton href="/explore" title="Explorar" />
          <PrimaryButton href="/publish" title="Comienza ahora" />
        </div>
      </BlurFade>
    </section>
  );
};

export default MainBanner;
