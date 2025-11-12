import type { PropsWithChildren } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { FallbackComponent } from "./FallbackComponent";

export const ErrorBoundary = ({ children }: PropsWithChildren) => {
  return (
    <ReactErrorBoundary
      fallback={<FallbackComponent />}
      onError={(error, info) => {
        console.error("Caught by boundary:", error, info);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};
