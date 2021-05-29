import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import Recommendation from '@/components/Recommendation'

const Home: React.FC = () => {
  return (
    <Layout title="トップページ">
      <Hero />
      <Profile />
      <Recommendation />
    </Layout>
  )
}
export default Home
