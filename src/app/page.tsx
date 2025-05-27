import { Heart, Share2, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex p-4">
        <section className="w-[50%]">
          <div className="flex items-center justify-center h-full">
            <Image
              src="/images/tenis-esportivo-premium-air-max.png"
              alt="Tênis Esportivo Premium Air Max"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </section>
        <section className="w-[50%]">
          <div className="border-b border-solid border-gray-200 py-6">
            <div className="flex items-center gap-1">
              <span className="text-sm">4.8</span>
              <span className="text-sm">(127 avaliações)</span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold mt-2">
                Tênis Esportivo Premium Air Max
              </h1>
              <div className="flex items-center gap-3">
                <h1 className="text-green-600 text-2xl font-bold">R$999,99</h1>
                <span className="text-gray-600 line-through">R$1299,99</span>
                <span className="bg-red-500 rounded-2xl text-center text-white font-medium px-4 text-sm">
                  -23%
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-b border-solid border-gray-200 py-6">
            <h2 className="text-lg font-semibold mt-4">Descrição</h2>
            <p className="text-gray-700">
              O Tênis Esportivo Premium Air Max é ideal para quem busca conforto
              e estilo. Com tecnologia de amortecimento, ele proporciona uma
              experiência única durante a prática de esportes ou no dia a dia.
            </p>
          </div>
          <form action="">
            <div className="flex flex-col gap-3 border-b border-solid border-gray-200 py-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold mt-4">Tamanho</h2>
                <span className="text-sm text-gray-500">Selecionado: 38</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="text-sm text-gray-500 font-medium bg-white shadow rounded-md px-6 py-5 hover:cursor-pointer hover:bg-gray-100">
                  38
                </button>
                <button
                  type="button"
                  className="text-sm text-gray-500 font-medium bg-white shadow rounded-md px-6 py-5 hover:cursor-pointer hover:bg-gray-100">
                  39
                </button>
                <button
                  type="button"
                  className="text-sm text-gray-500 font-medium bg-white shadow rounded-md px-6 py-5 hover:cursor-pointer hover:bg-gray-100">
                  40
                </button>
              </div>
              <span className="text-red-400 text-sm">* Selecione uma cor</span>
            </div>
            <div className="flex flex-col gap-3 border-b border-solid border-gray-200 py-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold mt-4">Cor</h2>
                <span className="text-sm text-gray-500">
                  Selecionado: Laranja
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex items-center gap-2 text-[12px] text-gray-500 font-medium bg-white shadow rounded-md px-6 py-2 hover:cursor-pointer hover:bg-gray-100">
                  <div className="bg-black w-4 h-4 rounded-full"></div>
                  Preto
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 text-[12px] text-gray-500 font-medium bg-white shadow rounded-md px-6 py-2 hover:cursor-pointer hover:bg-gray-100">
                  <div className="bg-white border border-gray-300 w-4 h-4 rounded-full"></div>
                  Branco
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 text-[12px] text-gray-500 font-medium bg-white shadow rounded-md px-6 py-2 hover:cursor-pointer hover:bg-gray-100">
                  <div className="bg-orange-400 w-4 h-4 rounded-full"></div>
                  Laranja
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 text-[12px] text-gray-500 font-medium bg-white shadow rounded-md px-6 py-2 hover:cursor-pointer hover:bg-gray-100">
                  <div className="bg-purple-400 w-4 h-4 rounded-full"></div>
                  Roxo
                </button>
              </div>
              <span className="text-red-400 text-sm">* Selecione uma cor</span>
            </div>
            <div className="space-y-4 w-full ">
              <div className="flex items-center gap-3 mt-4">
                <button
                  disabled
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-3 disabled:bg-blue-300 bg-blue-600 text-sm text-white font-medium px-8 py-2 rounded-md border-none hover:cursor-pointer hover:bg-blue-700 transition-colors">
                  <ShoppingCart size={18} />
                  Adicionar ao carrinho
                </button>
                <button className="text-gray-700 hover:text-black hover:cursor-pointer hover:bg-gray-100 py-2 px-7 rounded-md transition-colors border border-gray-300">
                  <Heart size={18} />
                </button>
                <button className="text-gray-700 hover:text-black hover:cursor-pointer hover:bg-gray-100 py-2 px-7 rounded-md transition-colors border border-gray-300">
                  <Share2 size={18} />
                </button>
              </div>
              <button
                type="button"
                className="w-full bg-transparent text-gray-700 text-sm font-medium px-8 py-2 rounded transition-colors border border-gray-300 hover:cursor-pointer hover:bg-gray-100">
                Comprar agora
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
