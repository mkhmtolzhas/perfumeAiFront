"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface ProductProps {
    name: string
    brand: string
    type: string
    price: number
    image: any
    url: string

}

const Product: React.FC<ProductProps> = ({ name, brand, type, price, image, url }) => {
    const [screen, setScreen] = useState(image[0]['screen'][0] as string)
    const [format, setFormat] = useState(image[0]['format'][0] as string)
    const [imageUrl, setImageUrl] = useState(image[0]['url'] as string)
    const [processedImageUrl, setProcessedImageUrl] = useState<string | undefined>(undefined)

    useEffect(() => {
        setFormat(image[0]['format'][0] as string)
        setScreen(image[0]['screen'][0] as string)
        setImageUrl(image[0]['url'] as string)
        setProcessedImageUrl(imageUrl
            .replace('${screen}', screen)
            .replace('${format}', format)
        )
    }, [])

    useEffect(() => {
        console.log(processedImageUrl)
    }, [processedImageUrl])
    
    return (
        <Link href={url}>
            <div className="w-full px-5 py-5">
                <div className="w-full h-full flex flex-col justify-center items-center rounded-md gap-2 shadow-md">
                    <img src={processedImageUrl} alt={name} className="w-full h-auto object-cover rounded-md" />
                    <div className="w-full px-4 py-4 grid gap-1 lg:min-h-[20vh] overflow-hidden text-ellipsis line-clamp-3">
                        <p className="text-sm">{type}</p>
                        <p className="text-md text-left font-bold"><span className='lg:text-lg text-md'>{brand}</span> {name}</p>
                        <p className="text-md font-bold">{price} ₸</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Product