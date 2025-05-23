import Link from "next/link"
import { Instagram, Facebook, MapPin,Phone,Mail } from "lucide-react"

import { quickLinks } from "./quickLinks.data"

function Footer() {
  return (
    <footer className="py-8 bg-accent-500 text-white">

    <div className="container mx-auto px-4 md:px-12">

      <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Health & Arthritis Clinic</h3>
          <p className="text-sm text-gray-300">
            Providing specialized care for arthritis and joint conditions since 2005.
          </p>
          <div className="flex gap-2">
            <Link href="#" className="text-gray-100 hover:text-primary-500">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-100 hover:text-primary-500 social-icon">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>

        <div className="grid justify-center space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            {quickLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm text-gray-100 hover:text-primary-600">
                  {link.name}
                </Link>
            ))}
          </nav>
        </div>


        <div className="space-y-2 col-span-2 lg:col-auto">
          <h3 className="text-lg font-bold">Contact</h3>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-primary-500" />
            <span className="text-sm text-gray-300">Football chowk, Delhi Rd, Meerut, Uttar Pradesh 250002</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-primary-500" />
            <span className="text-sm text-gray-300">+91 9319797986</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-primary-500" />
            <span className="text-sm text-gray-300">officialorthopain@gmail.com</span>
          </div>
        </div>
      </div>


      <div className="mt-6">
        <p className="text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Health & Arthritis Clinic. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer