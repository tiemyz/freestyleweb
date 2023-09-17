"use client"

import { create } from "@/actions/contas";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { CheckIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'

export default function FormContas() {
    const [error, setError] = useState("")

    async function handleSubmit(formData){
        const resp = await create(formData)

        if (!resp.success) {
            setError(resp.message)
            return
        }

        redirect("/contas")
        
    }

    return (
        <>
            <NavBar active="contas" />

            <main className="border-solid border-2 border-red-500 mt-20 m-auto p-12 rounded max-w-lg">
                <h2 className="text-2xl text-slate-100">Cadastrar Conta</h2>

                <form action={handleSubmit} className="flex flex-col gap-7">
                    <InputText
                        label="nome"
                        id="nome"
                        name="nome"
                    />
                    <InputText
                        label="saldo inicial"
                        id="saldo-inicial"
                        name="saldo_inicial"
                    />
                    <InputText
                        label="ícone"
                        id="icone"
                        name="icone"
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
        </>


    )
}