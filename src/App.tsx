import { DarkThemeToggle } from "flowbite-react";
import { Alert } from "flowbite-react";

export function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24 dark:bg-gray-900">
      <div className="absolute top-4 right-4">
        <DarkThemeToggle />
      </div>
      <Alert color="warning" rounded>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </Alert>
    </main>
  );
}
