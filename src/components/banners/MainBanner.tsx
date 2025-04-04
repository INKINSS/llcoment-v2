import PrimaryButton from '../commons/buttons/PrimaryButton'

const MainBanner = () => {
  return (
    <section className='md:w-[70%]'>
      <h1 className="text-primary-black font-bold text-center leading-7 ssm:text-[1.7rem]">
        un sitio dedicado a la programación y a las nuevas tecnologías
      </h1>
      <p className="font-normal mt-3 text-gray-light text-center leading-5">
        Explora tendencias tecnológicas, aprende sobre programación y comparte
        tus propios artículos con la comunidad
      </p>
      <div className="flex gap-2 mt-4 justify-center">
        <PrimaryButton title="Explorar" />
        <PrimaryButton title="Comienza ahora" />
      </div>
    </section>
  )
}

export default MainBanner