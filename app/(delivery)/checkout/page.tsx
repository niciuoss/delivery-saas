import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SetStateAction } from 'react'
import Image from 'next/image'
import Produto from '@/assets/image-food.jpg'
import QuantitySelector from '@/components/Quantity-Selector'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import { FreeMode, Pagination } from 'swiper/modules'

interface CartPropsType {
  setStep: React.Dispatch<SetStateAction<number>>
}

export default function Cart({ setStep }: CartPropsType) {
  const produtos = 2435.8

  return (
    <article className="flex flex-col md:flex-row w-full max-w-[1440px] gap-6 justify-center">
      <div className="w-full pb-[170px] flex flex-col p-2 md:p-6 gap-2 bg-white">
        <p className="font-medium text-lg py-2">Seu pedido</p>
        <ScrollArea className="w-full gap-2 h-[425px]">
          <div className="flex flex-col gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Card
                key={index}
                className="w-full p-2.5 h-[100px] flex justify-between"
              >
                <CardContent className="flex items-start p-0 gap-2">
                  <Image
                    className="w-[4.375rem] h-full md:w-16 md:h-16 rounded"
                    src={Produto}
                    alt="product"
                  />
                  <div className="flex flex-col w-full">
                    <p className="text-base md:text-lg font-medium text-ellipsis overflow-hidden line-clamp-1">
                      Hamburguer de Sirí
                    </p>
                    <span className="text-gray-500 text-sm">descriao</span>
                    <span className="underline mt-3 text-sm font-semibold cursor-pointer text-orange-500">
                      Editar
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col p-0 justify-between items-end">
                  <span className="text-gray-500 text-sm">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(produtos)}
                  </span>
                  <QuantitySelector />
                </CardFooter>
              </Card>
            ))}
          </div>
        </ScrollArea>

        <p className="font-medium text-lg py-2">Aproveite e peça</p>
        <div className="w-full">
          <Swiper
            slidesPerView={3}
            spaceBetween={8}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col w-[128px] p-1 border"
              >
                <Image src={Produto} alt="prd" />
                <div className="flex flex-col">
                  <span className="text-sm">Produto</span>
                  <span className="text-sm text-gray-500">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(produtos)}
                  </span>
                  <Button className="w-full mt-3">Adicionar</Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </article>
  )
}
