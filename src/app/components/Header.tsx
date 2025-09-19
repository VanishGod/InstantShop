import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { montserrat } from '@/app/utils/fonts'

const Header = () => {
  return (
    <header className=' bg-sky-600 w-full'>
        <nav className={`${montserrat.className} p-2.5 text-xl flex justify-around text-white`}>
            <Link className='' href='../'>Inicio</Link>
            <Link href='../products'>Productos</Link>
            <Link href='../profile'>Perfil</Link>
        </nav>
    </header>
  )
}

export default Header