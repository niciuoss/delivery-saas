import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Pratos from '@/assets/restaurante.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div className="gap-2 p-4">
      <h1 className="text-xl font-bold">Pratos em destaque</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader>
              <Image
                src={Pratos}
                alt={`Restaurant ${index + 1}`}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-t-md"
              />
              <CardTitle>Prato {index + 1}</CardTitle>
              <CardDescription>
                <p>- Macarrão ao molho madeira</p>
                <p>- Purê de batata gourmet</p>
                <p>- Isca de frango</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Preço: R$ 123,00</p>
            </CardContent>
            <CardFooter>
              {/* tenho que lembrar de colocar esse botão num use-client */}
              <Button variant="ghost" className="text-primary hover:underline">
                Ver mais detalhes
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
