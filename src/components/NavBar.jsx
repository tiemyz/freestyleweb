"use client"

import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function NavBar({ active }) {

    const { user, logout } = useContext(AuthContext)
    const { push } = useRouter()

    function handleLogout(){
        logout()
        push("/login")
    }

    return (
        <nav className="flex justify-between items-center bg-zinc-800 px-4 py-1">

            <div>
                <Link href="/">
                    <img src="/icons/logo.svg" alt="Logo da Freestyle" />
                </Link>
            </div>

            <ul id="links" className="flex items-center gap-14 text-slate-100 font-jura text-2xl font-bold">
                <li>
                    <Link className={`hover:text-red-500 ${active === "contas" && "text-slate-100"}`} href="/">
                        HOME
                    </Link>
                </li>
                
                <li>
                    <img src="/icons/estrela.svg" alt="decoração" />
                </li>

                <li>
                    <Link className={`hover:text-red-500 ${active === "contas" && "text-slate-100"}`} href="/contas">
                        CONTAS
                    </Link>
                </li>

                <li>
                    <img src="/icons/estrela.svg" alt="decoração" />
                </li>
                
                <li>
                    <Link className={`hover:text-red-500 ${active === "contas" && "text-slate-100"}`} href="/despesas">
                        DESPESAS
                    </Link>
                </li>
                
            </ul>

            <div className="flex items-center gap-2">
                <span>{user?.email}</span>                
                <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
                </div>
                <Button onClick={handleLogout} type="button">logout</Button>
            </div>
        </nav>
    )
}