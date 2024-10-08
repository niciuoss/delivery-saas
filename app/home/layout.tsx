import { ReactNode } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import NavBar from './components/navbar'

export default function DeliveryHome({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-full grid grid-rows-[auto_1fr_auto] gap-5">
      <Header />
      <div className="grid grid-cols-[250px_1fr] gap-5">
        {' '}
        <NavBar />
        <main className="p-5">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
