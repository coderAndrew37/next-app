"use client";

interface GlobalErrorProps {
  error: Error;
}
const GlobalError = ({ error }: GlobalErrorProps) => {
  return <div> {error.message}</div>;
};

export default GlobalError;
