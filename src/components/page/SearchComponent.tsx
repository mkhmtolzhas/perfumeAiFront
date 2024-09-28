"use client"
import React, { useState } from 'react'
import StaticHeader from '../layout/StaticHeader'
import { Sparkles } from 'lucide-react'
import axios from 'axios'
import Product from '../component/Product'
import Footer from '../layout/Footer'



const SearchComponent = () => {
  const [name, setName] = useState('')
  const [perfumes, setPerfumes] = useState([])
  const [loading, setLoading] = useState(false)
  const [IsArrayEmpty, setIsArrayEmpty] = useState(true)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsArrayEmpty(false)
    setLoading(true)
    handleSearch()
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/perfume/search/${name}`)
      if (response.data.length === 0) {
        setIsArrayEmpty(true)
      }
      setPerfumes(response.data)
      setLoading(false)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <StaticHeader />
      <div className="w-full px-[7%] py-6">
        <form className="flex justify-center items-center text-center gap-2 px-[9%]" onSubmit={handleFormSubmit}>
          <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Опишите что вы хотите...'
          className='border-[2px] border-black flex h-10 w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          />
          <button className={`h-10 px-3 bg-[#e2ff42] rounded-md flex justify-center items-center text-black text-xs`} type='submit'>
            <Sparkles className="h-4 w-4" />
          </button>
        </form>
      </div>
      <h1 className='text-3xl font-bold text-center mt-3'>Результаты поиска:</h1>
      <div className="w-full px-[7%] py-6">
        {IsArrayEmpty && <div className="w-full h-[40vh] flex items-center justify-center"> <h1 className='text-2xl font-bold text-center'>Ничего не найдено...</h1> </div>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            loading ? Array.from({ length: 9 }).map((_, index) => (
              <div className="w-full px-5 py-5" key={index}>
                <div className="relative flex p-4 flex-col justify-end w-full lg:h-[50vh] h-[35vh] rounded-md shadow-lg bg-gray-200 animate-pulse" />
              </div>
            )) : perfumes.map((item: any) => (
              <Product key={item.id} name={item.name} brand={item.brand} type={item.type} price={item.price} image={item.image} url={item.url} />
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SearchComponent