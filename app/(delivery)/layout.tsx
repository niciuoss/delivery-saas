import { ReactNode } from 'react'
import Header from './components/header'
import Footer from './components/footer'

export default function DeliveyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-full grid-rows-[0.3fr_auto_4fr] gap-5">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
