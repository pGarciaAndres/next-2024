import { PrimeReactProvider } from 'primereact/api'
import Tailwind from 'primereact/passthrough/tailwind'

export default function Home() {
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <main className='flex min-h-screen flex-col items-center justify-center p-10'></main>
    </PrimeReactProvider>
  )
}
