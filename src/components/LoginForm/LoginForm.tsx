import { Button, Checkbox, FloatingLabel, Label, theme } from "flowbite-react";
import styled from "styled-components";
import { useForm, SubmitHandler, Controller, set } from "react-hook-form";
import { TextInput } from "../ui/TextInput";
import { useEffect } from "react";
import { useLogin } from "../../hooks/useLogin";
import { ErrorAlert } from "../ui/ErrorAlert";
import { Spinner } from "../ui/Spinner";
import { Navigate } from "react-router-dom";

type UserDto = {
  email: string;
  password: string;
};

const FormContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = () => {
  const { error, isPending, isSuccess, mutate } = useLogin();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<UserDto>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const email = watch("email");
  const password = watch("password");

  useEffect(() => {
    if (email) {
      setValue("email", email);
    }
    if (password) {
      setValue("password", password);
    }
  }, []);

  const onSubmit: SubmitHandler<UserDto> = async (data) => {
    mutate(data);
  };

  if (error) {
    return (
      <FormContainer>
        <ErrorAlert error={error} />
      </FormContainer>
    );
  }

  if (isPending) {
    return (
      <FormContainer>
        <Spinner />
      </FormContainer>
    );
  }

  if (isSuccess) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <FormContainer>
      <form
        className="mx-5 flex w-full max-w-md flex-col gap-4 rounded-2xl p-5"
        style={{
          background: "#ffffff",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <TextInput name="email" control={control} type="email" required />
        </div>
        <div>
          <TextInput
            name="password"
            control={control}
            type="password"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Запомнить меня</Label>
        </div>
        <Button type="submit">Войти</Button>
      </form>
    </FormContainer>
  );
};
