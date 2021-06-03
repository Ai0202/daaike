// import {
//   useAuthUser,
//   withAuthUser,
//   withAuthUserTokenSSR,
//   AuthAction,
// } from 'next-firebase-auth'
import { useAuthUser, withAuthUser, AuthAction } from 'next-firebase-auth'
import FullPageLoader from '@/components/atoms/FullPageLoader'

const Dashboard: React.FC = () => {
  const AuthUser = useAuthUser()
  return (
    <div>
      <div>管理者ダッシュボード</div>
      <div>{AuthUser.email}</div>
      <button onClick={AuthUser.signOut}>サインアウト</button>
    </div>
  )
}

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  LoaderComponent: FullPageLoader,
})(Dashboard)
