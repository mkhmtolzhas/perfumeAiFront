"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../component/Loading'
import StaticHeader from '../layout/StaticHeader'
import PerfumeCard from '../perfume-card'
import Footer from '../layout/Footer'

interface AIRecommendationProps {
    userPrompt: string
}

const AIRecommendation: React.FC<AIRecommendationProps> = ({ userPrompt }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [parfumeData, setParfumeData] = useState<any>([])


    const fetchData = async () => {
        try {
            const response = await axios.post(`https://perfume-ai-production.up.railway.app/api/ai/response`, {
                prompt: userPrompt
            })

            if (response.status === 200) {
                setIsLoading(false)
                setParfumeData(response.data)
            }
            else {
                console.error("Ошибка:", response)
            }
            console.log(response)
        } catch (error) {
            console.error("Ошибка:", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (isLoading) {
        return (
            <>
                <Loading />
            </>
        )
    }
    

    return (
        <>
            <StaticHeader />
            <section className='w-full h-[20vh] lg:h-[45vh]'>
                <div className="w-full h-full relative">
                    <div className='absolute inset-0 bg-black opacity-20 z-10'></div>
                    <div className='absolute inset-0 lg:bg-[url("https://pcdn.goldapple.ru/p/c/3000000007/web/5f63617465676f72798dc3715fde3f6a3fullhd.webp")] md:bg-[url("https://pcdn.goldapple.ru/p/c/3000000007/web/5f63617465676f72798dc3715fde3f6a3fullhd.webp")] bg-[url("https://pcdn.goldapple.ru/p/c/3000000007/web/5f63617465676f72798dc3715fde3f6a3mobile.webp")] bg-cover bg-center'></div>
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="w-full flex flex-col items-center justify-center">
                            <div className='text-white text-center w-full flex justify-center items-center lg:max-w-[40%] max-w-[70%]'>
                                <h1 className='text-shadow text-2xl md:text-4xl lg:text-4xl font-bold'>
                                    <span className='text-[#e2ff42]'>
                                        Ответ по запросу : {''}
                                    </span>
                                    {userPrompt}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full px-[8%] py-[30px]'>
                <h1 className='text-3xl font-bold px-5'>Рекомендации от ИИ:</h1>
                <div className="flex flex-col justify-center items-center gap-10 mt-7">
                    {
                        parfumeData.map((item: any) => (
                            <PerfumeCard key={item.id} name={item.name} brand={item.brand} type={item.type} price={item.price} image={item.image} link={item.link} description={item.description} notes={item.notes} opinion={item.opinion} event={item.event} season={item.season} style={item.style} pluses={item.pluses} minuses={item.minuses} />
                        ))
                    }
                </div>
            </section>
            <br />
            <Footer />
        </>
    )
}

export default AIRecommendation