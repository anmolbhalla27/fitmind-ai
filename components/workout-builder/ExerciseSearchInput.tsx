"use client";

import Input from "@/components/ui/input";

interface ExerciseSearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ExerciseSearchInput({
  value,
  onChange,
}: ExerciseSearchInputProps) {
  return (
    <Input
      placeholder="Search exercises..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}