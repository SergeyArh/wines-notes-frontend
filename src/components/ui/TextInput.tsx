import { FloatingLabel, TextInput as FlowbiteTextInput } from "flowbite-react";
import { Controller } from "react-hook-form";
import { INPUT_LABELS } from "../../common/constants";

interface TextInputProps {
  name: string;
  control: any;
  type: "email" | "password";
  required?: boolean;
}

export const TextInput = ({
  name,
  control,
  type,
  required = false,
}: TextInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FloatingLabel
          {...field}
          variant="outlined"
          label={INPUT_LABELS[type]}
          required={required}
          type={type}
        />
      )}
    />
  );
};
