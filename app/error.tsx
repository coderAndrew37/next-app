"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-red-600">Error</h1>
        <p className="text-lg text-gray-600">{error.message}</p>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        onClick={() => reset()}
      >
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
