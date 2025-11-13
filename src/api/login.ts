import type { UserDto } from "./createUser.types";
import { WINES_API } from "./constants";

type ResponseLogin = {
  token: string;
};

export const login = async (requestData: UserDto): Promise<ResponseLogin> => {
  try {
    const response = await fetch(WINES_API.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    if (response.ok) {
      const json = await response.json();
      const { token } = json || {};
      sessionStorage.setItem("token", token);
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
