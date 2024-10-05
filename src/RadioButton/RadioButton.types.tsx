export interface RadioButtonProps {
  disabled?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  value: string;
}
