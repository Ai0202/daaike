import Image from 'next/image'

const Recommendation: React.FC = () => {
  return (
    <section className="p-8 text-neutral-text">
      <h1 className="text-2xl border-b-4 border-primary-main border-opacity-20">
        推薦の言葉
      </h1>
      <section className="py-8">
        <div className="p-4 flex flex-col md:flex-row flex-auto shadow-lg">
          <div className="md:w-1/2 text-center">
            <Image
              width={300}
              height={300}
              src="/images/recommendation/kirin.jpeg"
              objectFit="cover"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-8 md:w-1/2 flex flex-col">
            <h3 className="text-xl">
              彼がいなければ、私は今この星に存在していなかっただろう。
            </h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              molestias similique eos laboriosam corporis enim quos dolore
              temporibus esse deleniti eaque voluptatibus accusamus, at error
              odio ducimus a eligendi atque!
            </p>
            <p className="mt-4 self-end text-sm text-opacity-70">きりんさん</p>
          </div>
        </div>
        <div className="mt-8 p-4 flex flex-col md:flex-row-reverse flex-auto shadow-lg">
          <div className="md:w-1/2 md:ml-8 text-center">
            <Image
              width={300}
              height={300}
              src="/images/recommendation/cat.jpeg"
              objectFit="cover"
            />
          </div>
          <div className="mt-4 md:mt-0 md:w-1/2 flex flex-col">
            <h3 className="text-xl">
              when life gives you lemons make lemonade
            </h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              molestias similique eos laboriosam corporis enim quos dolore
              temporibus esse deleniti eaque voluptatibus accusamus, at error
              odio ducimus a eligendi atque!
            </p>
            <p className="mt-4 self-end text-sm text-opacity-70">ねこさん</p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Recommendation
