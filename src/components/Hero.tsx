import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <section className="w-screen px-8 py-8">
      <div className="relative bg-cover bg-bottom bg-no-repeat bg-gradient-to-tr from-primary-main to-primary-valiant h-72 md:h-96">
        <div
          className="
          h-32
          w-32
          md:h-48
          md:w-48
          absolute
          right-12
          -bottom-12
          md:right-24
          rounded-full
          overflow-hidden
          shadow-lg"
        >
          <Image
            width={424}
            height={424}
            src="/images/avator.jpeg"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
