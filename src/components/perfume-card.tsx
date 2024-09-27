"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { StarIcon, PlusIcon, MinusIcon } from "lucide-react"


interface PerfumeCardProps {
  name: string
  brand: string
  type: string
  price: string
  link: string
  image: string
  description: string
  notes: {
    top: string
    middle: string
    base: string
  }
  opinion: string
  event: string
  season: string
  style: string
  pluses: string
  minuses: string
}


const PerfumeCard: React.FC<PerfumeCardProps> = ({ name, brand, type, price, link, image, description, notes, opinion, event, season, style, pluses, minuses }) => {
  return (
    <Card className="w-full overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 space-y-6">
          <CardHeader className="p-0">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-3xl font-bold">{name}</CardTitle>
                <p className="text-xl text-neutral-500 dark:text-neutral-400">{brand}</p>
              </div>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {price}₸
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Описание</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {description}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Ноты</h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium">Верхние</p>
                  <p className="text-neutral-500 dark:text-neutral-400">{notes.top}</p>
                </div>
                <div>
                  <p className="font-medium">Средние</p>
                  <p className="text-neutral-500 dark:text-neutral-400">{notes.middle}</p>
                </div>
                <div>
                  <p className="font-medium">Базовые</p>
                  <p className="text-neutral-500 dark:text-neutral-400">{notes.base}</p>
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex items-center">
                <StarIcon className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="font-medium">Мнение</span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {opinion}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Событие</p>
                <p className="text-neutral-500 dark:text-neutral-400">{event}</p>
              </div>
              <div>
                <p className="font-medium">Сезон</p>
                <p className="text-neutral-500 dark:text-neutral-400">{season}</p>
              </div>
              <div>
                <p className="font-medium">Стиль</p>
                <p className="text-neutral-500 dark:text-neutral-400">{style}</p>
              </div>
              <div>
                <p className="font-medium">Тип</p>
                <p className="text-neutral-500 dark:text-neutral-400">{type}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <PlusIcon className="w-5 h-5 text-green-500 mr-2" />
                <span className="font-medium">Плюсы</span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {pluses}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <MinusIcon className="w-5 h-5 text-red-500 mr-2" />
                <span className="font-medium">Минусы</span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {minuses}
              </p>
            </div>
          </CardContent>
          <br />
          <Link href={link} className="text-xs bg-[#e2ff42] border-[2px] border-[#e2ff42] text-[#000] hover:bg-[#e2ff42] hover:text-black rounded-md px-4 py-2" type="button">
            Купить сейчас
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default PerfumeCard