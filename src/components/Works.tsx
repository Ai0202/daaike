import SectionTitle from '@/components/atoms/SectionTitle'
import Image from 'next/image'
import Link from 'next/link'
import Work from '@/components/organisms/Work'

const Works: React.FC = () => {
  return (
    <section className="w-full mt-8 px-8 text-neutral-text">
      <SectionTitle title="Portfolio" />
      <section className="py-4">
        <ul className="flex flex-wrap">
          <li className="p-4 w-full sm:w-1/2 md:w-1/3">
            <Work
              id="1"
              image="/images/recommendation/kirin.jpeg"
              name="Portfolio site"
              info="Next.js"
              description="This is my portfolio site"
            />
          </li>
          <li className="p-4 w-full sm:w-1/2 md:w-1/3">
            <Work
              id="2"
              image="/images/recommendation/cat.jpeg"
              name="Great Web service"
              info="Next.js | Laravel | AWS"
              description="This is my Great service"
            />
          </li>
          <li className="p-4 w-full sm:w-1/2 md:w-1/3">
            <Work
              id="2"
              image="/images/recommendation/cat.jpeg"
              name="Great Web service"
              info="Next.js | Laravel | AWS"
              description="This is my portfolio site"
            />
          </li>
        </ul>
        <div
          className="
            mx-auto w-1/2 w-full sm:w-1/4 mt-8 border-2 border-primary-main shadow-xl
            text-primary-main p-2 text-center rounded-lg cursor-pointer
            hover:opacity-70
            "
        >
          <Link href="/portfolio">
            <a>Read more...</a>
          </Link>
        </div>
      </section>
    </section>
  )
}

export default Works
