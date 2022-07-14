import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
export default function EspacoItem({ espacos }) {
  return (
    <>
      <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-blue-apcef dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-3xl md:leading-14">
        {espacos.nome}
      </h1>
      <Image
        src={espacos.imagem ? espacos.imagem.url : 'No Image'}
        alt="avatar"
        width="500px"
        height="300px"
        className="rounded-md"
      />
      <h2 className="title-font mb-1 pt-4 text-lg font-semibold text-blue-apcef">
        <ReactMarkdown escapeHtml={false}>{espacos.detalhes}</ReactMarkdown>
      </h2>
    </>
  )
}
