import { Checkbox as Check } from "./ui/checkbox";
import { Label } from "./ui/label";

type checkbox = {
  id: string;
  checked: boolean;
  children?: string;
  onClick?: () => void;
};

const Checkbox = ({ id, checked, onClick, children }: checkbox) => {
  return (
    <div className="flex items-center gap-2" onClick={onClick}>
      <Check id={id} checked={checked} />
      {children && <Label htmlFor={id}>{children}</Label>}
    </div>
  );
};

export default Checkbox;
