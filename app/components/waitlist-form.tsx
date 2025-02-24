"use client"

import { useState } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { addToWaitlist } from "../actions/waitlist"

export default function WaitlistForm() {
  const [state, formAction] = useActionState(addToWaitlist, null)
  const [email, setEmail] = useState("")

  return (
    <form action={formAction} className="space-y-4">
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">
        Join Waitlist
      </Button>
      {state && <p className="text-green-600">{state}</p>}
    </form>
  )
}

