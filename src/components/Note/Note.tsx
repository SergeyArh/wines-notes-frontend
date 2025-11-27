import {
  Button,
  Checkbox,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Textarea,
  TextInput,
} from "flowbite-react";
import styled from "styled-components";
import { locale } from "./Note.const";
import { TextArea } from "../ui/TextArea";
import { Rating } from "../ui/Rating";
import { useCreateNote } from "../../hooks/useCreateNote";
import { useForm } from "react-hook-form";
import type { NoteDto } from "../../api/createNote.types";
import { FormContainer } from "../LoginForm/LoginForm";
import { ErrorAlert } from "../ui/ErrorAlert";
import { Spinner } from "../ui/Spinner";
import { LabelTextInput } from "../ui/LabelTextInput";

interface NoteProps {
  closeNote: VoidFunction;
  isOpenNewNote: boolean;
}

export const Note = ({ closeNote, isOpenNewNote }: NoteProps) => {
  const { data, isPending, isSuccess, mutate, error } = useCreateNote();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<NoteDto>({
    defaultValues: {
      header: "",
      date: "",
      rating: 0,
      gradeVision: "",
      gradeSmell: "",
      gradeTasty: "",
      notes: "",
    },
  });

  const onSubmit = (data: NoteDto) => {
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

  return (
    <Modal show={isOpenNewNote} onClose={closeNote}>
      <ModalHeader>Добавить заметку</ModalHeader>
      <ModalBody>
        <form className="flex h-full w-full flex-col gap-4">
          <LabelTextInput
            name="header"
            placeholder={locale.header.placeholder}
            label={locale.header.title}
            control={control}
          />
          <LabelTextInput
            name="date"
            placeholder={locale.date.placeholder}
            label={locale.date.title}
            control={control}
          />
          <Rating
            range={0}
            control={control}
            name="rating"
            label={locale.rate.title}
          />
          <TextArea
            title={locale.gradeVision.title}
            placeholder={locale.gradeVision.placeholder}
            name="gradeVision"
            control={control}
          />
          <TextArea
            title={locale.gradeSmell.title}
            placeholder={locale.gradeSmell.placeholder}
            name="gradeSmell"
            control={control}
          />
          <TextArea
            title={locale.gradeTasty.title}
            placeholder={locale.gradeTasty.placeholder}
            name="gradeTasty"
            control={control}
          />
          <LabelTextInput
            name="notes"
            control={control}
            label={locale.notes.title}
            placeholder={locale.notes.placeholder}
          />
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Отправить
          </Button>
        </form>
      </ModalBody>
    </Modal>
  );
};
