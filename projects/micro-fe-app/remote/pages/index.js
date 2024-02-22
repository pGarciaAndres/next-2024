import Button from '@/components/Button'

const remote = (props) => {
  return (
    <>
      <h1 className='bg-red-800 text-white text-6xl'>
        HOLA MUNDO DESDE EL NEXT 2
      </h1>
      <p>{JSON.stringify(props)}</p>
      <Button />
    </>
  )
}

remote.getInitialProps = async () => {
  return {
    ssr: 'HOLA SSR'
  }
}

export default remote
