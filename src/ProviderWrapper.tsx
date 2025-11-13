import type { PropsWithChildren } from "react";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";
import { createTheme, ThemeProvider } from "flowbite-react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./common/reactQuery/queryClient";

const customTheme = createTheme({
  button: {
    color: {
      primary: "bg-red-500 hover:bg-red-600",
      secondary: "bg-blue-500 hover:bg-blue-600",
    },
    size: {
      lg: "px-6 py-3 text-lg",
    },
  },
});

export const ProviderWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={customTheme}>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};
