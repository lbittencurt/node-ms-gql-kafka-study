import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function Home() {
  const { user } = useUser()

  return (
    <>
      <h1>Hello {user?.name}</h1>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()