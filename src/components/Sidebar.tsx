import { AccordionDemo } from './AccordionDemo'
import { AvatarDemo } from './AvatarDemo'

export default function Sidebar() {
  return (
    <div className="bg-sidebar z-49 flex w-64 flex-col justify-between p-[10px] pt-[22px] shadow-[2px_0px_5px_rgba(0,_0,_0,_0.1)]">
      <AccordionDemo />
      <AvatarDemo />
    </div>
  )
}
