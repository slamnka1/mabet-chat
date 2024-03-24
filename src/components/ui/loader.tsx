import { cn } from "@/lib/utils"

const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("p-6", className)}>
      <span className="loader"></span>
    </div>
  )
}

export default Loader
