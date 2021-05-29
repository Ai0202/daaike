import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <section className="w-screen px-8 py-8">
      <div className="relative bg-cover bg-bottom bg-no-repeat bg-hero-background h-72 md:h-96">
        <div
          className="
          h-48
          w-48
          absolute
          -bottom-12
          right-24
          rounded-full
          overflow-hidden
          shadow-lg"
        >
          <Image
            width={424}
            height={424}
            src="/images/avator.jpg"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
