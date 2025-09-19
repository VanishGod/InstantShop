'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Product } from '@/app/utils/types'
import { productList } from '@/app/utils/products'
import Image from 'next/image'
import Link from 'next/link'
import { montserrat } from '@/app/utils/fonts'

export default function Products(){

  const [ProductList, setProducts] = useState<Product[]>([])
  useEffect(()=>{
    setProducts(productList)
  }, [])

    useEffect(()=>{
    localStorage.setItem('products', JSON.stringify(ProductList))
  }, [])


  return (
    <main className='flex flex-wrap items-center justify-center gap-4 p-12'>
        {
          ProductList.map((product, index)=>(
            <div className='flex flex-col relative wrap w-70 h-130 items-center justify-center border gap-2.5 custom-gradient border-y-black p-6 rounded-md text-center' key={product.id}>
                <div className='absolute top-0 left-0 p-2 bg-black h-10 rounded-r-[20] text-white'>{index}</div>
                <span className='text-gray-400 text-[10px] w-full'>ID: {product.id}</span>
                <Image 
                className={index %2 === 0? 'rounded-r-2xl': 'rounded-l-2xl'}
                src={"/" + product.img + ".webp"} 
                alt=""
                width={220} 
                height={180}
                />

                <h1 className='border-2 p-1.5 bg-black text-white text-shadow-amber-50 border-l-black w-full rounded-md'>{product.name}</h1>
                <p className='flex flex-wrap items-center text-shadow-amber-400 justify-center text-center border p-2.5 rounded-md w-full min-h-15'>{product.desc.slice(0, 40) + '...'}</p>
                <div className='flex w-full text-sm justify-center items-center nowrap gap-4 border border-black p-1.5 rounded-md'>
                  <span className='product-span'>${product.price}</span>
                  <span className='product-span'>{product.status}</span>
                  <span className='product-span'>{product.date}</span>
                </div>
               <button className='btn'><Link href={'products/' + product.id}>Ver oferta completa</Link></button>
            </div>
          ))
        }
    </main>
  )
}
