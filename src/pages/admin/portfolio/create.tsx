import Layout from '@/components/Layout/Admin'
import { useForm } from 'react-hook-form'

type Inputs = {
  title: string
  tech: string
  description: string
}

const CreatePortfolio: React.FC = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data: Inputs): Promise<void> => {
    console.log(data)
  }

  return (
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
                className="px-8 py-2 rounded-md bg-primary-main text-primary-text hover:opacity-70"
              >
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}
export default CreatePortfolio
