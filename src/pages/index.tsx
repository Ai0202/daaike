import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Recommendation from '@/components/Recommendation'

const Home: React.FC = () => {
  return (
    <Layout title="トップページ">
      <Hero />
      <Recommendation />
    </Layout>
  )
}
export default Home
