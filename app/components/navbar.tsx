"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Membership", href: "#" },
    { name: "Community", href: "#" },
    { name: "PavilionU", href: "#" },
    { name: "Events", href: "#" },
    { name: "Stay Informed", href: "#" },
  ]

  return (
    <nav className="relative z-20 bg-transparent py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            Pavilion
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-white/90 hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Log In
            </Button>
            <Button className="bg-white text-purple-700 hover:bg-white/90">JOIN NOW</Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-purple-900/95 p-4">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-white/90 hover:text-white transition-colors">
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" className="text-white border-white hover:bg-white/10 w-full">
                  Log In
                </Button>
                <Button className="bg-white text-purple-700 hover:bg-white/90 w-full">JOIN NOW</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

