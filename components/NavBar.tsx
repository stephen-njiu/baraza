'use client'
import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/constants'
import { neobrutalism } from '@clerk/themes'
import { cn } from '@/lib/utils'

const NavBar = () => {
  const pathname = usePathname()

  return (
    <>
      <nav className="flex justify-between items-center fixed z-50 w-full h-16 sm:h-20 lg:h-24 bg-gray-200 px-2 sm:px-4 lg:px-10 gap-2 shadow-2xl overflow-hidden">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1 hover:scale-105 duration-300 shrink-0"
        >
          <Image
            src="/assets/logo.svg"
            width={40}
            height={40}
            alt="Baraza"
            className="sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] lg:w-[55px] lg:h-[55px]"
          />
        </Link>

        {/* Nav Links */}
        <section className="flex justify-between text-black flex-1 overflow-hidden">
          <div className="flex flex-1 gap-1 sm:gap-2 md:gap-3 lg:gap-6 items-center justify-center overflow-hidden">
            {navLinks.map((item) => {
              const isActive =
                pathname === item.route ||
                pathname.startsWith(`${item.route}/`)

              return (
                <Link
                  href={item.route}
                  key={item.label}
                  className={cn(
                    // Big icons on mobile, shrink at lg when text shows
                    'flex items-center justify-center lg:justify-start rounded-lg hover:scale-105 duration-300 ' +
                      'w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] lg:w-auto lg:h-auto px-2 sm:px-3 lg:px-4 py-2 shrink-0',
                    isActive && 'bg-blue-100 rounded-3xl'
                  )}
                >
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    width={22}
                    height={22}
                    className="sm:w-[28px] sm:h-[28px] md:w-[34px] md:h-[34px] lg:w-[24px] lg:h-[24px]"
                  />
                  {/* Show text on lg+ screens */}
                  <p className="hidden lg:inline-block ml-2 text-base font-semibold whitespace-nowrap">
                    {item.label}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>

        {/* User button */}
        <div className="hover:scale-105 duration-300 shrink-0">
          <SignedIn>
            <UserButton
              appearance={{
                baseTheme: neobrutalism,
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </>
  )
}

export default NavBar
