import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Restaurante from '@/assets/restaurante.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div className="gap-2 p-4">
      <h1 className="text-xl font-bold">Restaurantes em destaque</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader>
              <Image
                src={Restaurante}
                alt={`Restaurant ${index + 1}`}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-t-md"
              />
              <CardTitle>Restaurante {index + 1}</CardTitle>
              <CardDescription>
                Culinária diversa, pratos feitos na hora e entrega rápida.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Localização: Rua da Sé, 123</p>
              <p>Especialidade: Cozinha Nacional</p>
            </CardContent>
            <CardFooter>
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
