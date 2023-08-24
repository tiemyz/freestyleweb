import NavBar from "@/components/NavBar";

export default function Despesas() {
  return (
    <>
      <NavBar active={"despesas"} />

      <main className="bg-black min-h-screen flex flex-col items-center gap-y-7 p-10">

        <div>
          <h1 className="text-red-500 font-bold text-5xl font-jura">DESPESAS - INFRAESTRUTURA</h1>
        </div>

        <section className="border-solid border-2 border-red-500 w-8/12 h-max p-10  ">
          <label className="text-red-500 font-bold flex items-center gap-3 m-2 font-jura"><img src="/icons/predio.svg" alt="icon de prédio - label" className="h-7"/>
            Empresa:
          </label>
          <input placeholder="ex: FIAP" className="border-solid border-2 border-red-600 bg-zinc-900 rounded-xl w-5/12 m-2"></input>


          <label className="text-red-500 font-bold flex items-center gap-3 m-2 font-jura"><img src="/icons/moeda.svg" alt="icon de prédio - label" className="h-7"/>
            Valor:
          </label>
          <input placeholder="ex: R$5.000,00" className="border-solid border-2 border-red-600 bg-zinc-900 rounded-xl w-5/12 mb-2"></input>

          <label className="text-red-500 font-bold flex items-center gap-3 m-2 font-jura"><img src="/icons/calendário.svg" alt="icon de prédio - label" className="h-7"/>
            Data:
          </label>
          <input type="date"  className="text-slate-100 border-solid border-2 border-red-600 bg-zinc-900 rounded-xl w-1.5/12 mb-2"></input>

          <label className="text-red-500 font-bold flex items-center gap-3 m-2 font-jura"><img src="/icons/usuário.svg" alt="icon de prédio - label" className="h-7"/>
            Conta:
          </label>
          <input placeholder="ex: Nubank" className="border-solid border-2 border-red-600 bg-zinc-900 rounded-xl w-5/12 mb-2"></input>

          <label className="text-red-500 font-bold flex items-center gap-3 m-2 font-jura"><img src="/icons/detalhes.svg" alt="icon de prédio - label" className="h-7"/>
            Detalhes e extras:
          </label>
          <input placeholder="" className="border-solid border-2 border-red-600 bg-zinc-900 rounded-xl w-11/12 h-60 mb-2"></input>

          <div className="items-center w-11/12">
            <button type="submit" className="bg-red-600 rounded-xl w-2/12 mt-2 font-jura font-bold">ENVIAR</button>
          </div>

        </section>
      </main>
    </>


  )
}