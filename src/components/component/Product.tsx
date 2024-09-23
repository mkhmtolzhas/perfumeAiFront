"use client"
import { list } from 'postcss'
import React, { use, useEffect, useState } from 'react'

interface ProductProps {
    name: string
    brand: string
    type: string
    price: number
    description: string
    attributes: { key: string }[]
    image: any
    url: string

}

const Product: React.FC<ProductProps> = ({ name, brand, type, price, description, attributes, image, url }) => {
    const [screen, setScreen] = useState(image[0]['screen'][0] as string)
    const [format, setFormat] = useState(image[0]['format'][0] as string)
    const [imageUrl, setImageUrl] = useState(image[0]['url'] as string)
    const [processedImageUrl, setProcessedImageUrl] = useState<string | undefined>(undefined)
    const [clearDescription, setClearDescription] = useState<string | undefined>(undefined)

    useEffect(() => {
        setClearDescription(description.replace(/<[^>]*>?/gm, ''))
    }, [])

    useEffect(() => {
        setProcessedImageUrl(imageUrl
            .replace('${screen}', screen)
            .replace('${format}', format)
        )
    }, [])

    useEffect(() => {
        console.log(processedImageUrl)
    }, [processedImageUrl])
    
    return (
        <div className="flex flex-col gap-4">
            <img src={processedImageUrl} alt={name} className="w-40 h-40 object-cover rounded-md" />
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm">{attributes[0]["key"]}</p>
            <p className="text-sm">{price}</p>
        </div>
    )
}

export default Product