import Image from "next/image";
import { Button } from "./ui/button";
import logo from "@/public/key-logo.png";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto w-full text-white">
      <div className="relative w-20 h-12">
        <Image
          src={logo}
          alt="keysystem-logo"
          className="object-contain"
          priority
          fill
        />
      </div>

      <nav className="flex-1 flex justify-center">
        <ul className="list-none flex gap-4 sm:gap-8">
          <li className="hover:text-primary cursor-pointer">Home</li>
          <li className="hover:text-primary cursor-pointer">About</li>
          <li className="hover:text-primary cursor-pointer flex items-center gap-1">
            Services
            <ChevronDown size={16} />
          </li>
          <li className="hover:text-primary cursor-pointer">Contact</li>
        </ul>
      </nav>

      <div>
        <Button
          variant="outline"
          className="bg-gradient-to-r from-blue-600 to-blue-400"
        >
          +234 818 444 1404
        </Button>
      </div>
    </header>
  );
}
