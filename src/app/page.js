import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="min-h-screen bg-black flex items-center justify-center p-12 bg-[url('/img/fundo-banner.png')] bg-contain bg-no-repeat bg-center">
        <div>
            <img src="/img/logo-freestyle.png" alt="Logo da Freestyle" />
        </div>
      </main>
    </>
  )
}