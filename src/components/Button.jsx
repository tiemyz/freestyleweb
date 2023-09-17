import Link from "next/link";

export default function Button({ children, variant = "primary", type = "link", ...props }) {
    const styles = {
        primary: "flex items-center gap-2 bg-red-500 py-2 px-4 rounded hover:bg-red-800",
        secondary: "flex items-center gap-2 py-2 px-4 rounded border-2 border-slate-500 hover:bg-slate-800"
    }

    const classVariant = styles[variant]

    return (
        <>
            {
                type === "link" ?
                    <Link href="#" {...props} className={classVariant}>
                        {children}
                    </Link>
                    :
                    <button {...props} className={classVariant}>
                        {children}
                    </button>
            }
        </>
    )
}