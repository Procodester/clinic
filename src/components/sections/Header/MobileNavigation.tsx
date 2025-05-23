import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import Link from 'next/link';
import { navLinks } from "./navLinks.data";


function MobileNavigation() {
    return (
        <div className="ml-auto md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button type="button" variant="default" size="default" className="md:hidden cursor-pointer">
                        <Menu size={64} />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>

                <SheetContent side="right" className="bg-primary-50">

                    <SheetHeader>
                        <SheetTitle className="sr-only">Menu</SheetTitle>
                    </SheetHeader>

                    <nav className="grid gap-4 mt-4 px-4">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-base font-medium hover:text-primary-500"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <Link
                            href="tel:9319797986"
                            className="text-base font-medium flex items-center gap-2 justify-center bg-primary-500 text-white rounded-md px-4 py-1 hover:bg-primary-600"
                        >
                            <Phone className="h-4 w-4 " />
                            <span>Call us</span>

                        </Link>

                        {/* <Button className="mt-2 bg-primary-500 hover:bg-primary-600 text-white cursor-pointer">
                            Book Appointment
                        </Button> */}
                    </nav>

                </SheetContent>
            </Sheet>
        </div>
    )
}

export { MobileNavigation };