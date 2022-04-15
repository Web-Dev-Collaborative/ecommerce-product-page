export default function Button({ children, handleClick }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary p-4 font-bold text-white"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
