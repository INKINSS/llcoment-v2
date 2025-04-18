import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface Props {
  label: string;
  htmlfor?: string;
  id?: string;
  type: string;
  placeholder?: string;
}

export function InputWithLabel({ label, type, id, htmlfor, placeholder }: Props) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={htmlfor}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} />
    </div>
  );
}
