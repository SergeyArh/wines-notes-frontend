import { useMutation } from "@tanstack/react-query";
import type { UserDto } from "../api/createUser.types";
import { useMemo } from "react";
import { login } from "../api/login";

export const useLogin = () => {
  const { isPending, isSuccess, error, mutate } = useMutation({
    mutationFn: (requestData: UserDto) =>
      login({
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
