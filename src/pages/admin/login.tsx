import { withAuthUser, AuthAction } from 'next-firebase-auth'
import Layout from '@/components/Layout/Guest'
import { useForm } from 'react-hook-form'
import { Login as LoginProps } from '@/types'
import firebase from 'firebase/app'

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async ({ email, password }: LoginProps): Promise<void> => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout title="ログイン">
      <div className="md:w-80 h-3/6 py-12 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              サインイン
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 focus:outline-none border border-neutral-text text-neutral-text focus:ring-primary-main focus:border-primary-main focus:z-10 sm:text-sm placeholder-neutral-text"
                  placeholder="Email address"
                  {...register('email')}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 focus:outline-none border border-neutral-text text-neutral-text focus:ring-primary-main focus:border-primary-main focus:z-10 sm:text-sm placeholder-neutral-text"
                  placeholder="Password"
                  {...register('password')}
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-secondary-main text-sm font-medium rounded-md text-secondary-text bg-secondary-main hover:bg-opacity-70"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER,
})(Login)
