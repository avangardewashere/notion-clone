 'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Your Ideas Documents, & Plans. Unified. Welcome o <span className="underline">Solution</span>    </h1>
    <h3 className="text-base sm:text-xl md:text-2xl font-medium">Solution is the connected workspace for everyone<br />
    to make everything better</h3>
    <Button variant={"outline"} className="text-white bg-slate-800 rounded-xl">
        Enter Solution
        <ArrowRight className="h-4 w-4 ml-2"/> 
    </Button>

    </div>
  )
}

export default Heading
