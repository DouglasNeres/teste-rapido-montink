import axios from "axios";

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export async function getCep(cep: string) {
  const cepLimpo = cep.replace("-", "");

  if (!/^\d{8}$/.test(cepLimpo)) {
    throw new Error("Formato de CEP inválido.");
  }

  try {
    const response = await api.get(`${cepLimpo}/json/`);

    if (response.data.erro) {
      throw new Error("CEP não encontrado.");
    }
    console.log("Dados do CEP:", response.data);
    
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar CEP:", error);
    throw error;
  }
}