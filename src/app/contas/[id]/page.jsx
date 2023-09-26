import { getConta } from "@/actions/contas";
import NavBar from "@/components/NavBar";
import FormEdit from "./FormEdit";

export default async function ContaEdit({params}) {
   
    const conta = await getConta(params.id)
    
    return (
        <>
            <NavBar active="contas" />
            <FormEdit conta={conta} />
        </>
    )
}
