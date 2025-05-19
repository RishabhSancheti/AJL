import Link from "../../node_modules/next/link"
import Menu from "./Menu"
import Image from "../../node_modules/next/image"
import SearchBar from "./SearchBar"
import NavIcons from "./NavIcons"

const Navbar = () => {
    return (
      <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
        {/* Mobile */}
        <div className="h-full flex items-center justify-between md:hidden">
          <Link href="/">
          <Image src="/AJLogo.png" alt="" width={80} height={80} className="rounded-md"></Image>
          </Link>
          <Menu/>
        </div>
        {/* Bigger Screen */}
        <div className="hidden md:flex items-center justify-between gap-8 h-full">
          {/* Left */}
          <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3">
            <Image src="/AJLogo.png" alt="" width={80} height={80} className="rounded-md"></Image>
            </Link>
            <div className="hidden xl:flex gap-4">
              <Link href="/">Home</Link>
              <Link href="/">Shop</Link>
              <Link href="/">Deals</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Cart(1)</Link>
            </div>
          </div>
          {/* Right */}
          <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
            <SearchBar/>
            <NavIcons/>
          </div>
        </div>
      </div>
    )
  }
  
  export default Navbar