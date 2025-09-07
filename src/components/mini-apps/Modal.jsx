import {X} from "lucide-react";

export default function Modal({ open, onClose , children }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-card transition-colors pointer-events-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-card rounded-lg shadow-xl p-6 transform transition-all duration-200 scale-100 opacity-100 max-w-lg w-full"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-2 right-4 p-1"
        >
          <X className="w-5 h-5 cursor-pointer" />
        </button>
        {children}
      </div>
    </div>
  )
}