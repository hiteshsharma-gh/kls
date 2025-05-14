'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import profile from '../../public/kls-logo-removebg-preview.png'
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={`px-4 py-2  font-medium text-sm transition-colors ${isScrolled ? 'text-gray-700 hover:text-sky-500' : 'text-white hover:text-sky-300'}`}
    >
      {children}
    </Link>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#top" className="flex items-center">
          <Image src={profile} alt="Keshav Service Logistics Logo" width={100} height={100} className="w-40 h-16" />
        </Link>

        <div className="hidden md:flex space-x-1 items-center">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button className="ml-2 bg-orange-500 hover:bg-orange-600">
            <a href="tel:+919313961073">Call Us</a>
          </Button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 focus:outline-none"
          >
            {!isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-3">
            <MobileNavLink href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
            <Button className="bg-sky-500 hover:bg-sky-600 w-full">
              <a href="tel:+919313961073" className="w-full text-center">Call Us</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};


const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <Link
    href={href}
    onClick={onClick}
    className="px-2 py-3 text-gray-700 hover:text-sky-700 border-b border-gray-100 font-medium"
  >
    {children}
  </Link>
)
