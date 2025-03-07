import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuIcon } from 'lucide-react'

const Navbar = async () => {
  return (
      <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">

        {/* Логотип экосистемы */}
        <aside className="flex items-center gap-3">
          <Image
              src="/logo.png" // Поменяй на реальный логотип Fluttrium
              width={40}
              height={40}
              alt="Fluttrium Logo"
              className="shadow-sm"
          />
          <div className="flex flex-col">
            <p className="text-sm text-neutral-400">Часть экосистемы</p>
            <p className="text-xl font-bold text-white">Fluttrium</p>
          </div>
        </aside>

        {/* Логотип продукта */}
        <aside className="flex items-center gap-[2px]">
          <p className="text-3xl font-bold">Automatium</p>

        </aside>

        {/* Кнопка */}
        <aside className="flex items-center gap-4">
          <Link
              href="/"
              className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
             Начать работу
          </span>
          </Link>
        </aside>

      </header>
  )
}

export default Navbar
