import {Logo} from "@/components/ui/Logo";
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";



function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-400 bg-background/90
     backdrop-blur">

      <div className="flex items-center p-4">
        <Logo />
        <Navigation />
        <MobileNavigation />
      </div>
    </header>
  );
}

export default Header;
