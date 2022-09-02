import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.svg'

const Header = () => {
  return (
    <header className="flex justify-between min-h-[60px] px-6 items-center">
      {/* <img src="/logo.svg" alt="logo" className="" /> */}
      <Image src={logo} alt="logo" priority />
      <nav className="font-bold text-[18px]">
        <Link href={`#`}>
          <a className=" mr-7 hover:text-primary">Docs</a>
        </Link>
        <Link href={`#`}>
          <a className=" mr-7 hover:text-primary">About</a>
        </Link>
        <Link href={`#`}>
          <a className="text-[13.5px] uppercase rounded-lg border border-primary py-2 px-4 hover:text-white hover:bg-primary">
            Support us
          </a>
        </Link>
      </nav>
    </header>
  )
}
export default Header
