"use client"
import { create, update } from "@/actions/contas";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { CheckIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'

export default function FormEdit({conta}) {
    const [error, setError] = useState("")
    const [contaEdit, setContaEdit] = useState(conta)

    async function handleSubmit() {
        const resp = await update(contaEdit)

        if (resp?.error) {
            setError(resp.error)
            return
        }

        redirect("/contas")

    }

    function handleFieldEdit(field, value){
        setContaEdit({
            ...contaEdit,
            [field]: value
        })

    }


    return (
        <main className="bg-slate-900 mt-20 m-auto p-12 rounded max-w-lg">
            <h2 className="text-2xl text-slate-100">Editar Conta</h2>

            <form action={handleSubmit} className="flex flex-col gap-4">
                <InputText
                    label="nome"
                    id="nome"
                    name="nome"
                    value={contaEdit.nome}
                    onChange={(e) => handleFieldEdit("nome", e.target.value)}
                />

                <InputText
                    label="ícone"
                    id="icone"
                    name="icone"
                    value={contaEdit.icone}
                    onChange={(e) => handleFieldEdit("icone", e.target.value)}
                />

                <div className="flex justify-around">
                    <Button href="/contas" variant="secondary">
                        <ChevronLeftIcon className="h-6 w-6 " />
                        cancelar
                    </Button>
                    <Button type="button">
                        <CheckIcon className="h-6 w-6" />
                        salvar
                    </Button>
                </div>

                <span className="text-red-500">{error}</span>

            </form>

        </main>
    )
}