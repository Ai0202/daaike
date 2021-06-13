import React, { useState } from 'react'
import Layout from '@/components/Layout/Admin'
import { useForm } from 'react-hook-form'
import ButtonLoader from '@/components/atoms/ButtonLoader'
import Alert from '@/components/atoms/Alert'

type Inputs = {
  title: string
  tech: string
  description: string
}

const CreatePortfolio: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const [isLoading, setisLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSuucess, setisSuucess] = useState(false)

  const onSubmit = async (data: Inputs): Promise<void> => {
    setisLoading(true)
    setIsError(false)
    setisSuucess(false)
    try {
      console.log('post data')
      setTimeout(() => {
        setisLoading(false)
        setisSuucess(true)
      }, 1000)
    } catch (e) {
      setIsError(true)
      setisLoading(false)
      console.error('エラー処理')
    }
    console.log(data)
  }

  return (
    <>
      <Layout title="create Portfolio">
        <div className="mt-8 text-neutral-text">
          <section>
            <h1 className="text-xl">Create Portfolio</h1>
          </section>
          <section className="shadow-xl p-8 mt-4">
            <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <label htmlFor="">Title</label>
                <input
                  className="mt-1 w-60 md:w-80 rounded-md"
                  type="text"
                  {...register('title')}
                />
              </div>

              <div className="mt-8 flex flex-col">
                <label htmlFor="">Tech</label>
                <input
                  className="mt-1 w-60 md:w-80 rounded-md"
                  type="text"
                  {...register('tech')}
                />
              </div>

              <div className="mt-8 flex flex-col">
                <label htmlFor="">description</label>
                <textarea
                  className="mt-1 w-60 md:w-80 rounded-md h-52"
                  {...register('description')}
                ></textarea>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-2 w-28 h-10 rounded-md bg-primary-main text-primary-text hover:opacity-70 disabled:opacity-70"
                  disabled={isLoading}
                >
                  {isLoading ? <ButtonLoader /> : 'Save'}
                </button>
              </div>
            </form>
          </section>
        </div>
      </Layout>
      <div className="w-screen flex justify-center">
        <div className="fixed top-20">
          {isError && (
            <Alert
              text="error"
              severity="error"
              closeAlert={() => {
                setIsError(false)
                setisSuucess(false)
              }}
            />
          )}
          {isSuucess && !isError && (
            <Alert
              text="save successfully"
              severity="success"
              closeAlert={() => {
                setIsError(false)
                setisSuucess(false)
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}
export default CreatePortfolio
