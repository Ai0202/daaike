import Layout from '@/components/Layout/Default'
import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import Recommendation from '@/components/Recommendation'
import Works from '@/components/Works'

const Home: React.FC = () => {
  return (
    <Layout title="トップページ">
      <Hero />
      <Profile />
      <Works />
      <Recommendation />
    </Layout>
  )
}
export default Home
