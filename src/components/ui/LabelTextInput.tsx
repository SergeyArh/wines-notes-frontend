import { Label, TextInput } from "flowbite-react";
import { Controller, type Control } from "react-hook-form";
import type { NoteDto } from "../../api/createNote.types";

interface LabelTextInputProps {
  label: string;
  name: string;
  placeholder: string;
  control: any;
}

export const LabelTextInput = ({
  label,
  name,
  placeholder,
  control,
}: LabelTextInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div>
          <div className="mb-2 block">
            <Label htmlFor={name}>{label}</Label>
          </div>
          <TextInput id={name} required placeholder={placeholder} {...field} />
        </div>
      )}
    />
  );
};
