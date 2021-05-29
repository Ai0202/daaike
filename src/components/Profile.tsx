import SectionTitle from '@/components/atoms/SectionTitle'

const Profile: React.FC = () => {
  return (
    <section className="w-full mt-8 px-8 text-neutral-text">
      <SectionTitle title="プロフィール" />
      <div className="p-4">
        <p>Name: daaike</p>
        <p className="mt-4">
          <span className="text-primary-main font-bold">Ukulele player</span>
          (someday) / Web Developer
        </p>
        <p className="mt-2">comming soon.</p>
      </div>
    </section>
  )
}

export default Profile
