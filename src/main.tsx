import { StrictMode, lazy } from "react";
// import { Suspense } from "react"; // Commented out - unused
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import RootLayout from "./routes/RootLayout";
import SinglePage from "./pages/SinglePage";
import "./index.css";

// Conditionally load devtools only in development
// Uncomment below to enable React Query Devtools in development
// const ReactQueryDevtools = import.meta.env.DEV
//   ? lazy(() =>
//       import("@tanstack/react-query-devtools").then((res) => ({
//         default: res.ReactQueryDevtools,
//       }))
//     )
//   : () => null;

// const Devtools = import.meta.env.DEV ? ReactQueryDevtools : () => null;

// Keep imports for commented code above (suppress unused import warnings)
void lazy;
// void Suspense; // Commented out - unused

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <SinglePage />
      </RootLayout>
      {/* {import.meta.env.DEV && (
        <Suspense fallback={null}>
          <Devtools initialIsOpen={false} />
        </Suspense>
      )} */}
    </QueryClientProvider>
  </StrictMode>
);
