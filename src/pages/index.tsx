import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import Recommendation from '@/components/Recommendation'
import Works from '@/components/Works'

const Home: React.FC = () => {
  return (
    <Layout title="トップページ">
      <Hero />
      <Profile />
      <Recommendation />
      <Works />
    </Layout>
  )
}
export default Home
