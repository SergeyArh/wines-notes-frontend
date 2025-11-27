import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import { createNote } from "../api/createNote";
import type { NoteDto } from "../api/createNote.types";

export const useCreateNote = () => {
  const { data, isPending, isSuccess, error, mutate } = useMutation({
    mutationFn: (requestData: NoteDto) =>
      createNote({
        ...requestData,
      }),
    gcTime: Infinity,

    onError: (error) => {
      console.log("Ошибка при запросе", error.message);
    },
  });

  return useMemo(
    () => ({
      data,
      isPending,
      isSuccess,
      mutate,
      error,
    }),
    [data, isPending, isSuccess, error, mutate],
  );
};
