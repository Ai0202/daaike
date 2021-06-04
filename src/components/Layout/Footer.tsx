import Image from 'next/image'

Image

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 p-8 w-full flex flex-col justify-center items-center bg-primary-main text-primary-text">
      <div className="py-4">
        <Image width={72} height={72} src="/images/logo.png" />
      </div>
      <ul className="py-2 flex justify-center">
        <li className="px-2">
          <a
            href="https://www.linkedin.com/in/atsushi-ikeda-412753170/"
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-primary-text hover:opacity-70"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </li>
        <li className="px-2">
          <a
            href="https://github.com/Ai0202"
            className="cursor-pointer  hover:opacity-70"
          >
            <Image width={24} height={24} src="/images/GitHub.png" />
          </a>
        </li>
      </ul>
      <div className="py-2">©︎ {new Date().getFullYear()} daaike</div>
    </footer>
  )
}

export default Footer
