"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product'


const Products = () => {
  const [perfume, setPerfumes] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)

  const pageIncrement = () => {
    setPage(page + 1)
  }

  const pageDecrement = () => {
    if (page === 0) return
    setPage(page - 1)
  }

  const fetchPerfumes = async () => {
    try {
      const response = await axios.get(`https://perfume-ai-production.up.railway.app/api/perfume/?page=${page}&page_size=9`)
      setPerfumes(response.data)
      setLoading(false)
    } catch (error) {
      console.error("Ошибка:", error)
    }
  }
  useEffect(() => {
    console.log(loading)
  }, [loading])

  useEffect(() => {
    setLoading(true)
    fetchPerfumes()
  }, [page])

  useEffect(() => {
    console.log(perfume)
  }, [perfume])

  return (
    <>
    <section className='w-full px-[8%] py-[30px]'>
      <h1 className='text-3xl font-bold px-5'>Каталог</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 items-center gap-3">
          {
            loading ? Array.from({ length: 9 }).map((_, index) => (
              <div className="w-full px-5 py-5" key={index}>
                <div className="relative flex p-4 flex-col justify-end w-full lg:h-[50vh] h-[30vh] rounded-md shadow-lg bg-gray-200 animate-pulse" />
              </div>
            )) : perfume.map((item: any) => (
              <Product key={item.id} name={item.name} brand={item.brand} type={item.type} price={item.price} image={item.image} url={item.url} />
            ))
          }
        </div>
      <div className="flex items-center justify-center text-center">
        <button onClick={() => pageDecrement()} className="text-black text-2xl font-bold py-2 px-4 rounded">{'<'}</button>
        <p className='font-bold text-xl'>{page}</p>
        <button onClick={() => pageIncrement()} className="text-black text-2xl font-bold py-2 px-4 rounded">{'>'}</button>
      </div>
    </section>
    </>
  )
}

export default Products