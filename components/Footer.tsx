import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#020924] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-white">Key</span>
                <span className="text-blue-400">System</span>
              </span>
            </div>
            <div className="text-xs text-gray-400">
              <p>Technology Limited</p>
              <p className="mt-4">© 2025 KeySystem Technology Limited. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <Link href="#" aria-label="Instagram">
                <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
              </Link>
              <Link href="#" aria-label="Twitter">
                <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </div>
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
              </Link>
              <Link href="#" aria-label="Facebook">
                <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Core refresh
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Application management services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Evolution & enhancement services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Solution Assurance & validation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Digital Banking & financial inclusion
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Online/mobile lending solution
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Staff augmentation solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Risk management & internal audit solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Data Warehouse & Business Intelligence (BI)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Enterprise Document Management Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  KeySystem software testing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Cybersecurity Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links and Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm mb-8">
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  About U
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Contact</h3>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-medium mb-1">Nigeria</h4>
                <p className="text-gray-300">55G Adebisi Omotola Close,</p>
                <p className="text-gray-300">Off Samuel Adedoyin Street,</p>
                <p className="text-gray-300">Victoria Island</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">United Kingdom</h4>
                <p className="text-gray-300">Tel: +44 161 948 1444</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Nigeria</h4>
                <p className="text-gray-300">Tel: +234 818 444 1404</p>
              </div>
            </div>
          </div>

          {/* Additional Contact Information */}
          <div className="space-y-4 text-sm pt-[52px]">
            <div>
              <h4 className="font-medium mb-1">United Kingdom</h4>
              <p className="text-gray-300">39 Kenyon Lane, Off Moston</p>
              <p className="text-gray-300">Lane,Moston, Manchester,</p>
              <p className="text-gray-300">United Kingdom, M40 9JG</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">United Arab Emirates</h4>
              <p className="text-gray-300">Tel: +971 50 423 8817</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Canada</h4>
              <p className="text-gray-300">Tel: +1 647 977 1435</p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Email</h4>
              <p className="text-gray-300">
                <Link href="mailto:enquiries@keysystemltd.com" className="hover:text-blue-400 transition-colors">
                  enquiries@keysystemltd.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
