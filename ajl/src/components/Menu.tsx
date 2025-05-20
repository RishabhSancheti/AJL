"use client"

import Image from "../../node_modules/next/image"
import { useState } from "react"
import Link from "../../node_modules/next/link"
import { motion, AnimatePresence } from "framer-motion"

const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative z-50">
      <Image
        src="/menu.png"
        alt="menu"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-[80%] h-full bg-white shadow-lg p-6 flex flex-col gap-6 text-lg z-40"
          >
            <h2 className="text-2xl mt-6 mb-6">AAYUSHI JAIN LABEL</h2>
            <Link href="/" className="text-sm" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/" className="text-sm" onClick={() => setOpen(false)}>Shop</Link>
            <Link href="/" className="text-sm" onClick={() => setOpen(false)}>Deals</Link>
            <hr />
            <Link href="/login" className="text-sm" onClick={() => setOpen(false)}>Login/Register</Link>
            <Link href="/" className="text-sm" onClick={() => setOpen(false)}>About</Link>
            <Link href="/" className="text-sm" onClick={() => setOpen(false)}>Contact Us</Link>
            <hr />
            <Link href="/" className="text-sm" onClick={() => setOpen(false)}>Search</Link>
            <hr />
            <Image src="/AJLogo.png" alt="" width={120} height={120} className="rounded-md"></Image>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optional: Click outside to close */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default Menu