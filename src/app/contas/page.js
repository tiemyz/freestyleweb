import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { getContas } from "@/actions/contas";

export default async function Contas() {
  const contas = await getContas()

  return (
    <>
      <NavBar active={"contas"} />

      <main className="bg-slate-900 mt-10 p-9 rounded max-w-xl m-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-slate-100 text-2xl">Contas</h2>
          <Button href="/contas/new">
            <PlusIcon className="h-6 w-6" />
            criar conta
          </Button>
        </div>

        <div id="data">
          {contas?.map(conta => <DataRow key={conta.id} conta={conta} />)}        
        </div>
      </main>
    </>


  )
}