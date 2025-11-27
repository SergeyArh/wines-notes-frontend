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
    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
