'use client'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export function AccountMenu() {
  const router = useRouter()

  const handleLogout = () => {
    alert('Logout realizado!')
    router.push('/login')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full border-2 border-orange-800 focus:outline-none">
          <Image
            src="https://github.com/niciuoss.png"
            alt="Profile Picture"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-48 rounded-md bg-white shadow-lg p-2"
      >
        <DropdownMenuItem className="cursor-pointer p-2 hover:bg-gray-100">
          <span className="font-semibold">Vinícius</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer p-2 hover:bg-gray-100">
          <span>vinicius@email.com</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer p-2 hover:bg-gray-100">
          <span>Configurações</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer p-2 hover:bg-gray-100 text-red-500"
        >
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
