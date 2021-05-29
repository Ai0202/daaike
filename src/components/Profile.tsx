import SectionTitle from '@/components/atoms/SectionTitle'

const Profile: React.FC = () => {
  return (
    <section className="w-full mt-8 px-8 text-neutral-text">
      <SectionTitle title="Profile" />
      <section className="p-4">
        <p>Name: daaike</p>
        <p className="mt-4">
          <span className="text-primary-main font-bold">Ukulele player</span>
          (someday) | Web Developer
        </p>
        <p className="mt-2">Bio: comming soon.</p>
      </section>
    </section>
  )
}

export default Profile
