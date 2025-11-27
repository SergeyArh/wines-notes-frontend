import { WINES_API } from "./constants";
import type { NoteDto } from "./createNote.types";

export const createNote = async (requestData: NoteDto) => {
  try {
    const token = sessionStorage.getItem("token");
    if (!token) {
      throw new Error("Необходима авторизация");
    }
    const response = await fetch(WINES_API.NOTE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorizathion: `Berear ${token}`,
      },
      body: JSON.stringify(requestData),
    });
    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
