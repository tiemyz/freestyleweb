"use server"

import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/conta"

export async function create(formData){
   
    const options = {
        method: "POST",
        body: JSON.stringify( Object.fromEntries(formData) ),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 201){
        const json = await resp.json()
        const errors = json.reduce((str, error) => str += error.message + ". ", "")
        return {message: `Erro ao cadastrar conta. ${errors}`}
    }

    revalidatePath("/contas")
    return {success: "ok"}
}

export async function getContas() {
    await new Promise(r => setTimeout(r, 5000))
    const resp = await fetch(url)
    return resp.json()
}

export async function destroy(id){

    const urlDelete = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(urlDelete, options)

    if (resp.status !== 204)
        return {error: "Erro ao apagar a conta. " + resp.status}

    revalidatePath("/contas")

}

export async function getConta(id){
    const getUrl = url + "/" + id

    const resp = await fetch(getUrl)

    if(resp.status !== 200)
        return {error: "Erro ao buscar dados da conta"}

    return await resp.json()
}

export async function update(conta){
    const updateUrl = url + "/" + conta.id

    const options = {
        method: "PUT",
        body: JSON.stringify( conta ),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(updateUrl, options)

    if(resp.status !== 200)
        return {error: "erro ao atualizar conta"}

    revalidatePath("/contas")
}