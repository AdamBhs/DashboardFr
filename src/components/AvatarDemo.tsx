import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function AvatarDemo() {
  return (
    <div className="flex gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="text-white">
        <h4 className="text-base font-medium">Adem BH</h4>
        <p className="text-sm">adem.bh@gmail.com</p>
      </div>
    </div>
  )
}
