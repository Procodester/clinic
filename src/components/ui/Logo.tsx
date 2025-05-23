import Link from "next/link"
import { Activity } from "lucide-react"
// import Image from "next/image"


export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
    <Activity className="h-6 w-6 text-primary-500" />
    <span className="text-base md:text-xl font-playfair font-bold text-accent-500">Health & Arthritis Clinic</span>
    
    {/* <Image
      src="/logo.png"
      width={500}
      height={500}
      className="w-[60px] h-[60px] "
      alt="Picture of the author"
    />  */}
    </Link>
  )
}

