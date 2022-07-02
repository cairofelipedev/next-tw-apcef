import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from 'next/image'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <header className="flex items-center justify-between border-b-4 border-t-4 border-b-orange-apcef border-t-blue-apcef sm:block sm:border-none">
        <div className="hidden bg-orange-apcef pt-1 sm:block ">
          <div className="mx-auto flex max-w-6xl justify-between">
            <div className="flex justify-between">
              <SocialIcon kind="brazil" href="#" size="5" />
              <h1 className="text-sm text-white">Outras apcefs</h1>
              <h1 className="ml-2 border-x-white text-sm text-white">| FENAE |</h1>
              <h1 className="ml-2 text-sm text-white">Inscrições</h1>
            </div>
            <div className="mb-2 flex space-x-4">
              <SocialIcon kind="youtube" href={siteMetadata.youtube} size="5" />
              <SocialIcon kind="insta" href="#" size="5" />
              <SocialIcon kind="whats" href="#" size="5" />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size="5" />
              <h1 className="text-sm font-bold text-white">Entrar</h1>
            </div>
          </div>
        </div>
        <div className="flex max-w-6xl justify-between px-2 pt-4 sm:mx-auto">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="mb-1 flex items-center">
              <div className="mr-3">
                <Image
                  src="/static/favicons/logo.png"
                  alt="avatar"
                  width="50px"
                  height="50px"
                  className="h-48 w-48 rounded-full"
                />
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="mb-4 h-6 text-2xl font-semibold text-blue-apcef dark:text-white">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
          <div className="flex justify-between space-x-3">
            <div className="relative hidden max-w-lg sm:block">
              <input
                aria-label="Pesquise no site"
                type="text"
                placeholder="Pesquise no site"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
              <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between sm:bg-blue-apcef">
          <div className="container mx-auto hidden max-w-6xl py-3 sm:block">
            <Link
              href="/"
              className="p-1 font-medium uppercase text-white dark:text-gray-100 sm:p-4"
            >
              HOME
            </Link>
            <div className="group inline-block">
              <button className="inline-flex items-center rounded py-2 px-4">
                <span className="mr-1 text-white">QUEM SOMOS</span>
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
            <div className="group inline-block">
              <button className="inline-flex items-center rounded py-2 px-4">
                <span className="mr-1 text-white">ESPORTE</span>
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
            <Link
              href="#"
              className="p-1 font-medium uppercase text-white dark:text-gray-100 sm:p-4"
            >
              CONHEÇA NOSSAS SEDES
            </Link>
            <Link
              href="/blog"
              className="p-1 font-medium uppercase text-white dark:text-gray-100 sm:p-4"
            >
              NOTÍCIAS
            </Link>
            <div className="group ml-14 inline-block">
              <button className="inline-flex items-center rounded-md bg-orange-apcef py-2 px-4 font-bold text-white dark:border-gray-800">
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
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
      <main className="mb-auto">{children}</main>
    </div>
  )
}

export default LayoutWrapper
