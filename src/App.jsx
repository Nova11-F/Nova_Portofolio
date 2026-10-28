import { ShoppingCart } from "lucide-react"

export default function App() {

  return (
    <>
    <div className="p-6">
      <button className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white">
        <ShoppingCart size={20} />
        Keranjang
      </button>
    </div>
    </>
  )
}
