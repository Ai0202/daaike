type Props = {
  title: string
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <h2 className="pb-1 text-2xl border-b-4 border-primary-main border-opacity-20">
      {title}
    </h2>
  )
}

export default SectionTitle
