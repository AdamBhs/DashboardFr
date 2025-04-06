import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-[#FAFAFA] p-4">{children}</main>
      </div>
    </div>
  )
}
