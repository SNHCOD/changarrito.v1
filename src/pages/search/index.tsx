import AppHeader from "@/components/site/AppHeader";
import SearchFilter from "@/components/inputs/SearchFilter"

export default function Home() {
  return (
    <div className="relative h-full w-full">
      <AppHeader
        menu={[{name: "Búsqueda y filtrado", url: "/search", active: true}, {name: "MENU_2", url: "/menu-2"}]}
        mode="gray-700"
        />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 m-auto justify-center">
            <div className="w-full py-8 md:w-3/4 px-24 md:px-8 col-span-2 justify-center justify-self-center mx-auto">
                <SearchFilter
                  title="Buscar establecimiento"
                  type="text"
                  placeholder="Ingresa el parámetro para realizar la búsqueda"
                  values={[{name: "Nombre", key: "name"}, {name: "Costo promedio", key: "price"}, {name: "Valoracion", key: "rating"}]}
                  sort={true}
                />
              </div>
          </div>
        </div>
    </div>
  )
}