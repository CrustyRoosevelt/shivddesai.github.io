'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = ['Home', 'Experience', 'Education', 'Skills']

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Check sections in reverse order (from bottom to top)
      for (const item of [...navItems].reverse()) {
        const id = item.toLowerCase();
        if (id === 'home') {
          if (scrollPosition < window.innerHeight / 2) {
            setActiveSection('home');
            break;
          }
        } else {
          const element = document.getElementById(id);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase()
              return (
                <a
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  className={`relative py-2 text-gray-600 hover:text-forest transition-all duration-300
                    ${isActive ? 'text-forest font-medium' : ''}
                    group`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-forest transform origin-left
                    transition-transform duration-300 ease-out
                    ${isActive ? 'scale-x-100' : 'scale-x-0'}
                    group-hover:scale-x-100`}>
                  </span>
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-forest transition-all duration-300 p-2 rounded-lg
                hover:bg-forest hover:bg-opacity-10"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.toLowerCase()
                return (
                  <a
                    key={item}
                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                    className={`block px-3 py-2 rounded-lg transition-all duration-300
                      ${isActive 
                        ? 'text-forest bg-forest bg-opacity-10 font-medium' 
                        : 'text-gray-600 hover:text-forest hover:bg-forest hover:bg-opacity-5'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 