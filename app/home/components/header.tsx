import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/Logo.png'
import { IoSearch } from 'react-icons/io5'

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-between p-4 bg-primary">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
            className="w-14 h-14"
          />
          <span className="ml-2 text-xl font-bold text-white">
            FoodDelivery
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-full">
            Login
          </button>
          <Link href="/create-account">
            <button className="px-4 py-2 bg-green-500 text-white rounded-full">
              Crie sua conta
            </button>
          </Link>
        </div>
      </div>
      <p className="mt-8 text-3xl font-black text-white text-center">
        As melhores refeições para você <br /> entregues na porta de casa!
      </p>
      <div className="mt-4 w-full max-w-md flex items-center bg-white border border-gray-300 rounded-full shadow-md px-4 py-2">
        <IoSearch className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar restaurantes e pratos"
          className="flex-grow bg-transparent text-gray-700 text-sm px-3 py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-full"
        >
          Buscar
        </button>
      </div>
    </div>
  )
}
