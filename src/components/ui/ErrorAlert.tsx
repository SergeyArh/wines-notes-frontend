import { Alert } from "flowbite-react";

export const ErrorAlert = ({ error }: { error: Error }) => {
  return (
    <Alert color="failure">
      <div className="flex flex-col gap-2">
        <span className="font-medium">Ошибка регистрации!</span>
        <div className="text-sm">
          <p>Не удалось завершить регистрацию:</p>
          <p className="mt-1 rounded bg-red-50 px-2 py-1 font-mono text-red-800">
            {error?.message || "Неизвестная ошибка"}
          </p>
        </div>
        <p className="mt-2 text-xs text-gray-600">
          Пожалуйста, проверьте введенные данные и попробуйте снова
        </p>
      </div>
    </Alert>
  );
};
