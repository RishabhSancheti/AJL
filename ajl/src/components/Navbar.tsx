"use client"

import { useState, useRef, useEffect } from "react"
import Link from "../../node_modules/next/link"
import Image from "../../node_modules/next/image"
import Menu from "./Menu"
import SearchBar from "./SearchBar"
import NavIcons from "./NavIcons"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  // Optional: close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearch(false)
      }
    }

    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showSearch])

  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      
      {/* Mobile & Tablet View */}
      <div className="flex md:hidden items-center justify-between h-full relative">
        {/* Left Side: Menu + Search Icon */}
        <div className="flex items-center gap-3">
          <Menu />
          <button onClick={() => setShowSearch((prev) => !prev)}>
            <Image src="/search.png" alt="Search" width={22} height={22} />
          </button>
        </div>

        {/* Center: Logo Text */}
        <div className="absolute left-1/2 -translate-x-1/2 text-lg font-bold">AJL</div>

        {/* Right Side: Cart Icon */}
        <div>
          <div className="relative cursor-pointer">
            <Image
              src="/cart.png"
              alt="Cart"
              width={22}
              height={22}
              className="cursor-pointer"
            />
            <div className="absolute -top-3 -right-3 w-5 h-5 bg-brand rounded-full text-white text-xs flex items-center justify-center">
              2
            </div>
          </div>
        </div>
      </div>

      {/* Animated Mobile SearchBar Toggle */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            ref={searchRef}
            className="md:hidden mt-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SearchBar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left Side */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/AJLogo.png"
              alt="AJL Logo"
              width={80}
              height={80}
              className="rounded-md"
            />
          </Link>
          <div className="hidden xl:flex gap-4 font-medium">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/cart">Cart(1)</Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar