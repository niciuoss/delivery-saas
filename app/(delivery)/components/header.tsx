import Link from 'next/link'
// import Logo from '@/assets/Logo.png'
import { IoSearch } from 'react-icons/io5'
import { FaBasketShopping } from 'react-icons/fa6'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { MenuSheet } from './menu-sheet'
import { AccountMenu } from './account-menu'

export default function Header() {
  return (
    <div className="relative flex items-center justify-between bg-primary pr-4 pl-4 z-10">
      <div className="flex items-center gap-5">
        <MenuSheet />
        <Link href="/" className="text-2xl font-extrabold text-white">
          FoodDelivery
        </Link>
        <form className="flex w-[320px] items-center gap-3 rounded-full bg-orange-300 px-5 py-3 ring-red-400">
          <IoSearch className="w-5 h-5 text-white" />
          <input
            type="text"
            placeholder="Faça sua busca..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-white"
          />
        </form>
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={Logo}
          alt="Logo"
          width={100}
          height={100}
          className="rounded-full h-16 w-16 z-0"
        />
      </div> */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <MdOutlineFavoriteBorder className="h-5 w-5 text-white" />
          <FaBasketShopping className="h-5 w-5 text-white" />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
