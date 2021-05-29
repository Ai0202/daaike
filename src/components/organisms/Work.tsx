import Image from 'next/image'
import Link from 'next/link'

type Props = {
  id: string
  image: string
  name: string
  info: string
  description: string
}

const Work: React.FC<Props> = ({ id, image, name, info, description }) => {
  return (
    <div className="h-80 md:h-96 shadow-2xl rounded-t-3xl overflow-hidden">
      <Link href={`/portfolio/${id}`}>
        <a>
          <div>
            <Image
              height={415}
              width={621}
              src={image}
              objectFit="contain"
              className="cursor-pointer hover:opacity-70"
            />
          </div>
        </a>
      </Link>
      <div className="py-2 px-4">
        <h3 className="text-primary-main font-bold">{name}</h3>
        <p className="mt-2">{info}</p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  )
}

export default Work
