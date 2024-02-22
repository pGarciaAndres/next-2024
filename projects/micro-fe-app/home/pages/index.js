import React, { Suspense, lazy } from 'react'
const Button = lazy(() => {
  return import('remote/button')
})

const Home = (props) => {
  return (
    <>
      <h1 className='bg-red-800 text-white text-6xl'>
        HOLA MUNDO DESDE EL NEXT HOME
      </h1>
      <p>{JSON.stringify(props)}</p>
      <Suspense fallback={'loading button'}>
        <Button label={'Click'} />
      </Suspense>
    </>
  )
}

Home.getInitialProps = async () => {
  return {
    ssr: 'HOLA SSR home'
  }
}

export default Home
