import Loader from 'react-loader-spinner'

const ButtonLoader: React.FC = () => (
  <Loader
    type="ThreeDots"
    color="#fff" // primary-text
    height={16}
    width="100%"
  />
)

export default ButtonLoader
