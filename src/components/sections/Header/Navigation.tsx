import Link from "next/link";
import { Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { navLinks } from "./navLinks.data";

function Navigation() {
    return (
        <nav className="ml-auto hidden gap-4 md:flex md:items-center">
            {navLinks.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium hover:text-primary-500 nav-link"
                >
                    {item.name}
                </Link>
            ))}

            {/* Contact Number */}
            <Link
                href="tel:9319797986"
                className="text-base font-medium flex items-center gap-2 bg-primary-500 text-white rounded-md px-4 py-1 hover:bg-primary-600"
            >
                <Phone className="h-4 w-4 " />
                <span>Call us</span>
              
            </Link>

            {/* Appointment Button */}
            {/* <Button className="bg-primary-500 hover:bg-primary-600 text-white cursor-pointer">
                Book Appointment
            </Button> */}
        </nav>
    )
}

export  {Navigation};