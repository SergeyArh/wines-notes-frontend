import { useMutation } from "@tanstack/react-query";
import type { UserDto } from "../api/createUser.types";
import { createUser } from "../api/createUser";
import { useMemo } from "react";

export const useCreateUser = () => {
  const { isPending, isSuccess, error, mutate } = useMutation({
    mutationFn: (requestData: UserDto) =>
      createUser({
        ...requestData,
      }),
    gcTime: Infinity,

    onError: (error) => {
      console.log("Ошибка при запросе", error.message);
    },
  });

  return useMemo(
    () => ({
      isPending,
      isSuccess,
      mutate,
      error,
    }),
    [isPending, isSuccess, error, mutate],
  );
};
