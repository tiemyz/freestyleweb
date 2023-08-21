import Link from "next/link";

export default function NavBar({ active }) {
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

            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div>
        </nav>
    )
}