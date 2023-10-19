"use client";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
      console.log("Error", error)
  return (
    <div>
      <h1 className="text-center">{error.message}</h1>
      <button className="border-2 px-10 py-2" onClick={reset}>
        Try again
      </button>
    </div>
  );
};

export default GlobalError;
