import { Label, Textarea } from "flowbite-react";
import { Controller } from "react-hook-form";

interface TextAreaProps {
  title: string;
  placeholder: string;
  control: any;
  name: string;
}

export const TextArea = ({
  title,
  placeholder,
  control,
  name,
}: TextAreaProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor={name}>{title}</Label>
          </div>
          <Textarea
            id={name}
            placeholder={placeholder}
            required
            rows={4}
            {...field}
          />
        </div>
      )}
    />
  );
};
