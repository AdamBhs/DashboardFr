import { ChartAreaInteractive } from "@/components/ChartArea";
import { SectionCards } from "@/components/SectionCard";

export default function index() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 md:gap-6 md:py-6">
        <SectionCards />
        <div>
          <ChartAreaInteractive />
        </div>
      </div>
    </div>

  )
}
