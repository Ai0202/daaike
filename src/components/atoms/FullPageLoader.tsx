import Loader from 'react-loader-spinner'
import Layout from '@/components/Layout/Guest'

const FullPageLoader = () => (
  <Layout title="loading...">
    <Loader
      type="BallTriangle"
      color="#757de8" // primary-variant
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  </Layout>
)

export default FullPageLoader
