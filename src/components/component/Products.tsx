"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading'
import Product from './Product'


const Products = () => {
  const [perfume, setPerfumes] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)

  const fetchPerfumes = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/perfume/?page=${page}&page_size=9`)
      setPerfumes(response.data)
      setLoading(false)
    } catch (error) {
      console.error("Ошибка:", error)
    }
  }

  useEffect(() => {
    fetchPerfumes()
  }, [page])

  useEffect(() => {
    console.log(perfume)
  }, [perfume])

  if (loading) {
    return (
      <Loading />
    )
  }



  return (
    <section className='w-full h-screen px-[8%] py-[30px]'>
      <h1 className='text-2xl font-bold'>Каталог</h1>
        <div className="grid grid-cols-3 gap-3">
          {
            perfume.map((item: any) => (
              <Product key={item.id} name={item.name} brand={item.brand} type={item.type} price={item.price} description={item.description} attributes={item.attributes} image={item.image} url={item.url} />
            ))
          }
        </div>
    </section>
    
  )
}

export default Products