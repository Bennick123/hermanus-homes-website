import Link from "next/link"
import { Facebook, Instagram, MessageCircle } from "lucide-react"

const CompanyName = "Onrus Accommodation"
const CompanyTagline = "Luxury holiday rentals in Onrus, Vermont, Sandbaai and Hermanus"
const PhoneNumber = "{{PhoneNumber}}"
const EmailAddress = "{{EmailAddress}}"
const InstagramURL = "{{InstagramURL}}"
const FacebookURL = "{{FacebookURL}}"
const WhatsAppURL = "{{WhatsAppURL}}"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">HH</span>
              </div>
              <span className="font-semibold text-lg">{CompanyName}</span>
            </div>
            <p className="text-gray-300 text-sm">{CompanyTagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/stays" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Stays
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>{PhoneNumber}</p>
              <p>{EmailAddress}</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href={InstagramURL}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a href={FacebookURL} className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href={WhatsAppURL} className="text-gray-300 hover:text-white transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {CompanyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
