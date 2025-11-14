import { useState } from "react"

export function useTrackId(){
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  return {
    selectedTrackId,
    setSelectedTrackId
  }
}