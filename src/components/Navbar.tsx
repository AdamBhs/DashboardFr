import logo from '@/assets/iconwhite.png'
import { cleanPath } from '@/utils/helpers'
import { useRouter } from 'next/router'
import { BreadcrumbDemo } from './BreadcrumbDemo'

export default function Navbar() {
  const router = useRouter()

  return (
    <div className="custom-shadow flex h-15 w-[100%]">
      <div className="custom-shadow flex h-[100%] w-64 items-center justify-center bg-[#0E1B6B]">
        <img className="w-38" src={logo.src} alt="logo" />
      </div>
      <div className="ml-10 flex items-center text-sm font-medium">
        <BreadcrumbDemo path={cleanPath(router.pathname).split('/')} />
      </div>
    </div>
  )
}
