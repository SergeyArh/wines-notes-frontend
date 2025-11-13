import type { UserDto } from "./createUser.types";
import { BACKEND_URL, WINES_API } from "./constants";

export const createUser = async (
  requestData: UserDto,
): Promise<Record<string, unknown>> => {
  try {
    const response = await fetch(WINES_API.CREATE_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    if (response.ok) {
      return {};
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
