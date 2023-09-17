export default function InputText({label, id, ...props}){
    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} {...props} className="bg-slate-800 rounded py-1 px-2 outline-none focus:ring-1 focus:ring-red-500 " />
        </div>
    )
}