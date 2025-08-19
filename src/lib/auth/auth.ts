import { AxiosError } from "axios";
import { api } from "../api";
import { Auth } from "./types/auth";

type SignInRequestData = {
  email: string;
  password: string;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function signInRequest(data: SignInRequestData): Promise<Auth> {
  try {
    const response = await api.post("/auth/signin", data);

    const { token, user } = response.data;

    return {
      token,
      user: {
        name: user.name,
        email: user.email,
        avatar_url: user.avatar_url ?? "https://github.com/MarcosAlbrecht.png",
      },
    };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response?.status == 404) {
        // erro da API (ex: 401, 400, etc)
        //console.error("Erro na requisição:", error);
        throw new Error(error.response.data?.message || "Erro ao fazer login");
      } else if (error.request) {
        // sem resposta da API
        throw new Error("Sem resposta do servidor");
      } else {
        // outro tipo de erro
        throw new Error("Erro desconhecido ao fazer login");
      }
    } else {
      throw new Error("Erro desconhecido ao fazer login");
    }
  }
}

export async function recoverUserInformation() {
  //await delay();

  return {
    user: {
      name: "Marcos Albrecht",
      email: "marcosralbrecht@gmail.com",
      avatar_url: "https://github.com/MarcosAlbrecht.png",
    },
  };
}
