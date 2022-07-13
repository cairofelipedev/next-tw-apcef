import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export default function SedeItem({ subsedes }) {
  return (
    <>
      <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
        {subsedes.name}
      </h1>
      <div className="mb-8 mt-4 flex items-center rounded-xl p-2 shadow-md shadow-blue-200">
        <div className="mr-3">
          <Image
            src={subsedes.image ? subsedes.image.url : 'No Image'}
            alt="avatar"
            width="500px"
            height="300px"
          />
        </div>
        <div>
          <h2 className="title-font mb-1 pt-4 text-lg font-semibold text-blue-apcef">
            Localização
          </h2>
          <h2 className="title-font text-md mb-1">{subsedes.localizacao}</h2>
          <h2 className="title-font mb-1 pt-4 text-lg font-semibold text-blue-apcef">
            Infraestrutura
          </h2>
          <h2 className="title-font text-md mb-1">
            <ReactMarkdown escapeHtml={false}>{subsedes.infra}</ReactMarkdown>
          </h2>
          <Link passHref={`/subsedes/${subsedes.slug}`}>
            <button className="shadow-cla-blue mt-4 mb-4 rounded-lg bg-blue-apcef px-4 py-1 text-white drop-shadow-md hover:scale-105">
              Saiba Mais
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
