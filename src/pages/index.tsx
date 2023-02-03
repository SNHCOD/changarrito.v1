import AppHeader from "@/components/site/AppHeader"

export default function Home() {
  return (
    <div className="bg-cover bg-main-bg h-screen">
      <AppHeader
        menu={[{name: "INICIO", url: "/", active: true}, {name: "NOSOTROS", url: "/about-us"}, {name: "CONTACTANOS", url: "/contact-us"}]}
        mode="light"
        />
        <div className="h-3/4 grid grid-cols-1 gap-4 justify-items-center content-center">
          <div className="pb-10">
            <h1 className="text-white text-5xl font-bold md:text-7xl">
              ¡ANTOJATE!
            </h1>
          </div>
          <div className="items-center w-3/4 p-4 space-y-4 inline-flex md:space-y-0">
            <input type="text" name="" id="" className="rounded-lg border-transparent flex-1 appearance-none  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base" placeholder="¿Qué estás buscando?"/>
          </div>
        </div>
    </div>
  )
}