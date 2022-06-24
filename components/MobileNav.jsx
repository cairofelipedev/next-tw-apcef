import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          {navShow ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      <div
        className={`fixed top-20 right-0 z-10 h-full w-full transform bg-blue-apcef opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed h-full w-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed mt-8 h-full w-full">
          <div className="px-12 py-4 text-center">
            <Link
              href="#"
              className="text-2xl font-bold tracking-widest text-white dark:text-gray-100"
              onClick={onToggleNav}
            >
              HOME
            </Link>
          </div>
          <div className="group flex justify-center">
            <button className="inline-flex items-center rounded py-2 px-4">
              <span className="text-2xl font-bold tracking-widest text-white dark:text-gray-100">
                QUEM SOMOS
              </span>
              <svg
                className="h-4 w-4 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className="absolute z-10 hidden rounded bg-white pt-1 shadow-md shadow-gray-300 group-hover:block dark:bg-gray-800">
              <li>
                <button className="inline-flex items-center rounded py-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="#E96708"
                    className="bi bi-chevron-right font-bold"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <h1 className="ml-2 mr-5 text-sm">MISSÃO, VISSÃO, VALORES</h1>
                </button>
              </li>
              <li>
                <button className="inline-flex items-center rounded py-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="#E96708"
                    className="bi bi-chevron-right font-bold"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <h1 className="ml-2 mr-5 text-sm">DIRETORIA</h1>
                </button>
              </li>
              <li>
                <button className="inline-flex items-center rounded py-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="#E96708"
                    className="bi bi-chevron-right font-bold"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <h1 className="ml-2 mr-5 text-sm">SUBSEDES</h1>
                </button>
              </li>
            </ul>
          </div>
          <div className="group flex justify-center pt-2">
            <button className="inline-flex items-center rounded py-2 px-4">
              <span className="text-2xl font-bold tracking-widest text-white dark:text-gray-100">
                ESPORTES
              </span>
              <svg
                className="h-4 w-4 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className="absolute z-10 hidden rounded bg-white pt-1 shadow-md shadow-gray-300 group-hover:block dark:bg-gray-800">
              <li>
                <button className="inline-flex items-center rounded py-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="#E96708"
                    className="bi bi-chevron-right font-bold"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <h1 className="ml-2 mr-5 text-sm">TODAS AS MODALIDADES</h1>
                </button>
              </li>
            </ul>
          </div>
          <div className="px-12 py-4 text-center">
            <Link
              href="#"
              className="text-2xl font-bold tracking-widest text-white dark:text-gray-100"
              onClick={onToggleNav}
            >
              NOSSAS SEDES
            </Link>
          </div>
          <div className="px-12 py-4 text-center">
            <Link
              href="#"
              className="text-2xl font-bold tracking-widest text-white dark:text-gray-100"
              onClick={onToggleNav}
            >
              NOTÍCIAS
            </Link>
          </div>
          <div className="group flex justify-center pt-4">
            <button className="inline-flex w-1/2 items-center justify-center rounded-md bg-orange-apcef py-4 px-4 font-bold text-white dark:border-gray-800">
              ASSOCIE-SE
              <svg
                className="h-4 w-4 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className="absolute z-10 hidden rounded bg-white pt-1 shadow-md shadow-gray-300 group-hover:block dark:bg-gray-800">
              <li>
                <button className="inline-flex items-center rounded py-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="#E96708"
                    className="bi bi-chevron-right font-bold"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <h1 className="ml-2 mr-5 text-sm">EMPREGADO CAIXA</h1>
                </button>
              </li>
              <li>
                <button className="inline-flex items-center rounded py-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="#E96708"
                    className="bi bi-chevron-right font-bold"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <h1 className="ml-2 mr-5 text-sm">CONTRIBUITE</h1>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
