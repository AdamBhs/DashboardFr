import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { firstWord } from '@/utils/helpers'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import { RxDashboard } from 'react-icons/rx'
import { FaRegFileLines } from 'react-icons/fa6'
import { MdComputer } from 'react-icons/md'

export function AccordionDemo() {
  const router = useRouter()
  const [accordionState, setAccordionState] = useState(true)
  const [placeRouter, setPlaceRouter] = useState(firstWord(router.pathname))

  const handleAccordionState = (place: string) => {
    if (placeRouter === place) setAccordionState(!accordionState)
    else setPlaceRouter(place)
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      <div className="flex flex-col gap-4">
        <AccordionItem value="item-1">
          <Link href="/dashboard">
            <AccordionTrigger
              className={`${firstWord(router.pathname) === 'Dashboard' ? 'bg-blue-500' : ''} cursor-pointer rounded-md`}
            >
              <div className="flex items-center gap-2">
                <RxDashboard className="size-[20px]" />
                Dashboard
              </div>
            </AccordionTrigger>
          </Link>
        </AccordionItem>

        <AccordionItem value="item-2" className="rounded-md">
          <Link href="/configuration">
            <AccordionTrigger
              onClick={() => handleAccordionState(firstWord(router.pathname))}
              className={`${firstWord(router.pathname) === 'Configuration' && accordionState ? 'bg-blue-500' : ''} cursor-pointer rounded-md`}
              ChevronDown="true"
            >
              <div className="flex items-center gap-2">
                <IoSettingsOutline className="size-[20px]" />
                Configuration
              </div>
            </AccordionTrigger>
          </Link>
          <AccordionContent>
            <ul>
              <Link href="/configuration/users">
                <li className="sou-links">Users</li>
              </Link>
              <Link href="/configuration/base">
                <li className="sou-links">Base</li>
              </Link>
              <Link href="/configuration/control">
                <li className="sou-links">Control</li>
              </Link>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger ChevronDown="true">
            <div className="flex items-center gap-2">
              <FaRegFileLines className="size-[20px]" />
              Project
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger ChevronDown="true">
            <div className="flex items-center gap-2">
              <MdComputer className="size-[20px]" />
              Tech Department
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </div>
    </Accordion>
  )
}
