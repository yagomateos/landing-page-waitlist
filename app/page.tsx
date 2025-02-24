import type { Metadata } from "next"
import Navbar from "./components/navbar"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Unlock Your Professional Potential",
  description: "Level up with community-powered learning and events around the world.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-600 via-purple-700 to-purple-900">
      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 max-w-4xl">
              Unlock your professional potential
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl">
              Level up with <span className="underline">community</span>-powered learning, in-person or virtual{" "}
              <span className="underline">events</span> around the world, and endless tools for go-to-market leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
                BECOME A MEMBER
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                OUR COMMUNITY
              </Button>
            </div>

            {/* Mailing List Section */}
            <div className="mt-24 w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Stay updated</h3>
                <p className="text-white/80 mb-4">
                  Join our mailing list to receive the latest updates and exclusive offers.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md bg-white/20 border border-white/30 placeholder:text-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button className="bg-white text-purple-700 hover:bg-white/90 whitespace-nowrap">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

