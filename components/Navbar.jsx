import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { Press } from "./animations"

export default function Navbar({ dark, trial }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <>
      <header className={`fixed w-full z-30 ${dark ? "dark-theme" : "light-theme"}`}>
        {/* Computer Menu */}
        <div className="bg-inherit">
          <div className="navbar">
            {/* Logo */}
            <Link href="/" className="logo">
              <Image src="/assets/images/smt_logo.jpg" alt="SMT Mastery and Academy Logo" fill />
            </Link>

            {/* NavLinks */}
            <div className="navlinks">
              <Link href="/" className={router?.pathname === "/" ? "active" : ""}>
                Mastery
              </Link>
              <Link href="/trading" className={router?.pathname === "/trading" ? "active" : ""}>
                Academy
              </Link>
            </div>

            {/* Navbar Buttons */}
            <div className="flex items-center">
              <Press>
                <Link
                    href={trial ? "/#SMTExclusivePassSection" : "/trading/#offerCosts"}
                    className="brand-btn"
                >
                  {trial ? "Get a FREE Trial" : "Join Me"}
                </Link>
              </Press>

              <button
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className={`menubar ${menuOpen ? "open" : ""}`}
              >
                <div></div>
                <div></div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-navbar ${menuOpen ? "open" : ""}`}>
          <div className="mobile-navlinks">
            <Link href="/" className={router?.pathname === "/" ? "active" : ""}>
              Mastery
            </Link>
            <Link href="/trading" className={router?.pathname === "/trading" ? "active" : ""}>
              Academy
            </Link>
          </div>
        </div>
      </header>
      <div className="pt-16"></div>
    </>
  )
}
