import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Tree() {
  return (
    <div className="w-64 text-sm">
      <Collapsible>
        <CollapsibleTrigger className="flex items-center gap-2">
          <ChevronRight className="size-4 transition-transform data-[state=open]:rotate-90" />
          <span>Fruits</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-6">
          <ul className="list-disc">
            <li>
              <Link href="/blog">Blog-apple</Link>
            </li>
            <li>Banana</li>
            <li>Orange</li>
          </ul>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger className="mt-2 flex items-center gap-2">
          <ChevronRight className="size-4 transition-transform data-[state=open]:rotate-90" />
          <span>Vegetables</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-6">
          <ul className="list-disc">
            <li>Carrot</li>
            <li>Broccoli</li>
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
