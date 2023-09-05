import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getContas(){
  const url = "http://localhost:8080/api/v1/conta"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  return resp.json()
}

export default async function Contas() {
  const contas = await getContas()
  return (
    <>
      <NavBar active={"contas"} />

      <main className="bg-slate-900 mt-10 p-9 rounded max-w-xl m-auto">
        <h2 className="text-slate-100 text-2xl">Contas</h2>
        <div id="data">
         {contas.map(conta => <DataRow key={conta.id} conta={conta} />)}
        </div>
      </main>
    </>


  )
}