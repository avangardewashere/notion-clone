"use client"

import { useQuery } from "convex/react";
import { useParams, useRouter } from "next/navigation"

const TrashBox = () => {
    const router = useRouter()
    const params = useParams();
    const documents = useQuery()
  return (
    <div>
      
    </div>
  )
}

export default TrashBox
