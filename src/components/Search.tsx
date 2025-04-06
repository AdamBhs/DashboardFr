import { Command, CommandInput } from '@/components/ui/command'

export function Search() {
  return (
    <>
      <Command className="border-lucky-point-600 w-full rounded-[10px] border py-1">
        <CommandInput placeholder="You are looking for which user..." />
      </Command>
    </>
  )
}
