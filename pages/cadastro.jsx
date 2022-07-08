import Footer from '@/components/Footer'
import { PageSEO } from '@/components/SEO'

export default function Cadastro() {
  return (
    <>
      <PageSEO title={`Cadastro - APCEF/PI`} />
      <div className="mx-auto max-w-7xl px-2 pt-4">
        <h1 className="rounded-xl bg-blue-apcef p-5 text-center text-3xl font-semibold leading-9 tracking-tight text-white dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
          REQUERIMENTO DE ADMISSÃO DE UM ASSOCIADO
        </h1>
        <div className="mt-4 flex justify-center space-x-2">
          <div className="inline-flex w-80 items-center justify-center rounded-2xl bg-orange-apcef py-2 px-4 font-bold text-white dark:border-gray-800">
            DADOS PESSOAIS
          </div>
        </div>
        <form action="" />
        <label className="text-sm font-bold uppercase text-blue-apcef">Nome Completo</label>
        <input
          type="text"
          className="mt-2 mb-4 w-full rounded border-2 border-slate-200 p-3 focus:border-slate-600 focus:outline-none"
        />
        <div className="flex items-center space-x-3">
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">Matrícula</label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
          <div className="font-medium">
            <label className="text-sm font-bold uppercase text-blue-apcef">Sexo:</label>
            <input className="mx-1" type="checkbox" />F
          </div>
          <div className="my-2 font-medium">
            <input className="mx-1" type="checkbox" />M
          </div>
          <div className="font-medium">
            <label className="ml-4 text-sm font-bold uppercase text-blue-apcef">Situação:</label>
            <input className="mx-1" type="checkbox" />
            Empregado em atividade
          </div>
          <div className="my-2 font-medium">
            <input className="mx-1" type="checkbox" />
            Aposentado
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">
              data de nascimento
            </label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">Estado Civil</label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">RG</label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">CPF</label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
        </div>
        <label className="text-sm font-bold uppercase text-blue-apcef">Endereço Residencial</label>
        <input
          type="text"
          className="mt-2 mb-4 w-full rounded border-2 border-slate-200 p-3 focus:border-slate-600 focus:outline-none"
        />
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">BAIRRO</label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">CIDADE</label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">ESTADO</label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">CEP</label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">
              TELEFONE RESIDENCIAL
            </label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">
              TELEFONE COMERCIAL
            </label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">TELEFONE CELULAR</label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-4 mt-4 flex justify-center space-x-2">
          <div className="inline-flex w-80 items-center justify-center rounded-2xl bg-orange-apcef py-2 px-4 font-bold text-white dark:border-gray-800">
            DADOS PROFISSIONAIS
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">LOTAÇÃO</label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">CÓDIGO</label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">DATA DE ADMISSÃO</label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">FUNÇÃO</label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">CONTA CORRENTE</label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-bold uppercase text-blue-apcef">AGÊNCIA</label>
            <input
              type="text"
              className="mt-2 mb-4 w-full rounded border-2 border-slate-200  p-3 focus:border-slate-600 focus:outline-none"
            />
          </div>
        </div>
        <input
          type="submit"
          className="my-2 cursor-pointer rounded bg-orange-apcef py-3 px-6 font-medium  text-white duration-300 ease-in-out hover:bg-blue-apcef"
          value="Enviar"
        />
        <form />
      </div>
      <Footer />
    </>
  )
}
