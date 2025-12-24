// ============================================================================
// FAST ROADMAP - SEARCH INPUT COMPONENT (MOLECULE)
// Search input with icon and clear functionality
// ============================================================================

"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search courses...",
  className,
  autoFocus = false,
}: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleClear = () => {
    onChange("");
    inputRef.current?.focus();
  };

  return (
    <div
      className={cn(
        "relative flex items-center",
        "glass border rounded-xl transition-all duration-300",
        isFocused
          ? "border-cyan-400/50 ring-2 ring-cyan-400/20 shadow-lg shadow-cyan-500/10"
          : "border-purple-500/30 hover:border-purple-400/40",
        className
      )}
    >
      <Search
        className={cn(
          "absolute left-3 w-4 h-4 transition-colors",
          isFocused ? "text-cyan-400" : "text-purple-400/60"
        )}
      />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={cn(
          "w-full bg-transparent py-2 pl-10 pr-10 text-sm text-zinc-200",
          "placeholder:text-purple-400/40 focus:outline-none"
        )}
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-3 p-0.5 rounded-lg hover:bg-red-500/20 transition-all duration-300"
        >
          <X className="w-4 h-4 text-zinc-500 hover:text-red-400" />
        </button>
      )}
    </div>
  );
}
