export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface DropdownProps {
  disabled?: boolean;
  options: Option[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
