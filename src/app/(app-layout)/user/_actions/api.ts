"use server";

import axios from "axios";

export async function submitUserForm(values: {
  name: string;
  email: string;
  password: string;
  admin: number;
  assistant: number;
  canSeeReports: number;
}) {
  try {
    const response = await axios.post("http://10.0.0.102:3000/user", values);
    return response.data; // Retorna a resposta da API
  } catch (error: any) {
    console.error("Erro ao enviar formulário:", error.response?.data || error);
    throw new Error(error.response?.data?.message || "Erro ao enviar dados");
  }
}
