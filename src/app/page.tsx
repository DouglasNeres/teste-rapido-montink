"use client";

import ImageGallery, { ColorKey } from "@/app/components/ImageGallery";
import { getCep } from "@/app/services/api";
import {
  Car,
  CircleAlert,
  Heart,
  MapPinCheckInside,
  Share2,
  ShoppingCart,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

function formatarCep(valor: string) {
  return valor
    .replace(/\D/g, "") // Remove tudo que não é dígito
    .replace(/^(\d{5})(\d)/, "$1-$2") // Aplica a máscara
    .substring(0, 9); // Limita a 9 caracteres com o hífen
}

export default function Home() {
  const allProductImages: Record<ColorKey, string[]> = {
    "": [],
    Laranja: [
      "/images/orange1.png",
      "/images/orange2.png",
      "/images/orange3.png",
      "/images/orange4.png",
    ],
    Preto: [
      "/images/black1.png",
      "/images/black2.png",
      "/images/black3.png",
      "/images/black4.png",
    ],
    Branco: [
      "/images/white1.png",
      "/images/white2.png",
      "/images/white3.png",
      "/images/white4.png",
    ],
    Roxo: [
      "/images/purple1.png",
      "/images/purple2.png",
      "/images/purple3.png",
      "/images/purple4.png",
    ],
  };

  const availableSizes = ["38", "39", "40", "41", "42"];
  const availableColors = [
    {
      value: "Preto",
      class: "bg-black border border-gray-400",
      label: "Preto" as ColorKey,
    },
    {
      value: "Branco",
      class: "bg-white border border-gray-400",
      label: "Branco" as ColorKey,
    },
    {
      value: "Laranja",
      class: "bg-orange-400 border border-orange-600",
      label: "Laranja" as ColorKey,
    },
    {
      value: "Roxo",
      class: "bg-purple-400 border border-purple-600",
      label: "Roxo" as ColorKey,
    },
  ];
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState<ColorKey>(
    availableColors.find((c) => c.value === "Branco")?.value as ColorKey
  );
  const [productImages, setProductImages] = useState(
    allProductImages[selectedColor]
  );
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState<any>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    setProductImages(allProductImages[selectedColor] || []);
  }, [selectedColor]);

  const handleBuscarCep = async () => {
    try {
      setErro(null);
      const dados = await getCep(cep);
      setEndereco(dados);
    } catch (err: any) {
      setEndereco(null);
      setErro(err.message);
    }
  };

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col md:flex-row p-4 md:p-8 gap-4">
        <section className="w-full md:w-1/2">
          <ImageGallery images={productImages} />
        </section>
        <section className="w-full md:w-1/2 mt-4 md:mt-0">
          <div className="border-b border-solid border-gray-200 py-6">
            <div className="flex items-center gap-1">
              <Star size={16} /> <Star size={16} /> <Star size={16} /> <Star size={16} /> <Star size={16} />
              <span className="text-sm">4.8</span>
              <span className="text-sm">(127 avaliações)</span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl md:text-2xl font-bold mt-2">
                Tênis Esportivo Premium Air Max
              </h1>
              <div className="flex items-center gap-3">
                <h1 className="text-green-600 text-xl md:text-2xl font-bold">
                  R$999,99
                </h1>
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
                <span className="text-sm text-gray-500">
                  Selecionado: {selectedSize || "Nenhum"}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 justify-start">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`text-sm text-gray-500 border border-gray-400 font-medium bg-white shadow rounded-md px-6 py-5 hover:cursor-pointer hover:bg-gray-100 transition-all
                     ${
                       selectedSize === size
                         ? "border-blue-500 ring-2 ring-blue-500"
                         : "border-gray-400"
                     }`}>
                    {size}
                  </button>
                ))}
              </div>
              {selectedSize === "" && (
                <span className="text-red-400 text-sm">
                  * Selecione um tamanho
                </span>
              )}
            </div>
            <div className="flex flex-col gap-3 border-b border-solid border-gray-200 py-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold mt-4">Cor</h2>
                <span className="text-sm text-gray-500">
                  Selecionado: {selectedColor || "Nenhuma"}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 justify-start">
                {availableColors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    onClick={() => setSelectedColor(color.value as ColorKey)}
                    className={`flex items-center relative gap-2 text-[12px] border text-gray-500 font-medium bg-white shadow rounded-md px-6 py-2 hover:cursor-pointer hover:bg-gray-100 transition-all
                ${
                  selectedColor === color.value
                    ? "border-blue-500 ring-2 ring-blue-500"
                    : "border-gray-400"
                }`}>
                    <div
                      className={`w-4 h-4 ${color.class} rounded-full`}></div>
                    {color.label}

                    {selectedColor === color.value ? (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center"></div>
                    ) : (
                      ""
                    )}
                  </button>
                ))}
              </div>

              {selectedColor === "" && (
                <span className="text-red-400 text-sm">
                  * Selecione uma cor
                </span>
              )}
            </div>
            <div className="flex flex-col gap-3 border-b border-solid border-gray-200 py-6">
              <div className="flex items-center gap-2 justify-start mt-4">
                <Car />
                <h2 className="text-lg font-semibold">Calcular Frete</h2>
              </div>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <input
                  className="border outline-0 w-full text-sm border-gray-200 rounded py-1.5 px-2"
                  type="text"
                  placeholder="00000-000"
                  maxLength={9}
                  value={cep}
                  pattern="\d{5}-\d{3}"
                  onChange={(e) => {
                    setCep(formatarCep(e.target.value));
                  }}
                />
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleBuscarCep();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleBuscarCep();
                    }
                  }}
                  className="flex items-center justify-center gap-2 transition text-white font-medium bg-gray-500 shadow rounded-md px-6 py-2 w-full hover:cursor-pointer hover:bg-gray-400">
                  Calcular
                </button>
              </div>
              {erro && (
                <div className="flex items-center gap-2">
                  <CircleAlert size={16} color="#ff6467" />
                  <span className="text-red-400 text-sm">
                    CEP não encontrado
                  </span>
                </div>
              )}
              {endereco && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-900">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPinCheckInside className="w-5 h-5 mr-2 text-green-600" />
                    <strong className="font-semibold">
                      Endereço encontrado:
                    </strong>
                  </div>
                  <p>Rua: {endereco.logradouro}</p>
                  <p>Bairro: {endereco.bairro}</p>
                  <p>
                    Cidade: {endereco.localidade} - {endereco.uf}
                  </p>
                  <p className="mt-1">CEP: {endereco.cep}</p>
                </div>
              )}
              {endereco && (
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-4">
                    Opções de entrega:
                  </h2>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-center">
                        <div className="p-2 bg-orange-100 rounded-md mr-3">
                          📦
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">PAC</p>
                          <p className="text-sm text-gray-500">
                            5-7 dias úteis
                          </p>
                        </div>
                      </div>
                      <p className="font-semibold text-green-600">R$ 15,90</p>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-center">
                        <div className="p-2 bg-yellow-100 rounded-md mr-3">
                          ⚡
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">SEDEX</p>
                          <p className="text-sm text-gray-500">
                            1-2 dias úteis
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <p className="font-semibold text-green-600">R$ 25,90</p>
                        <span className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                          Mais rápido
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-center">
                        <div className="p-2 bg-red-100 rounded-md mr-3">🚀</div>
                        <div>
                          <p className="font-medium text-gray-800">Expresso</p>
                          <p className="text-sm text-gray-500">24 horas</p>
                        </div>
                      </div>
                      <p className="font-semibold text-green-600">R$ 35,90</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-4 w-full ">
              <div className="flex items-center  gap-3 mt-4">
                <button
                  disabled
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-3 w-full sm:w-auto disabled:bg-blue-300 bg-blue-600 text-sm text-white font-medium px-8 py-2 rounded-md border-none hover:cursor-pointer hover:bg-blue-700 transition-colors">
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
                disabled
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
