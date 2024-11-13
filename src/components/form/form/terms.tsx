import Checkbox from "@/components/checkbox";

type props = {
  options: string[];
  toggle: boolean;
  onClick: () => void;
};

const Terms = ({ options, toggle, onClick }: props) => {
  return (
    <>
      <p className="mb-1 mt-3 font-semibold">
        Terms and Conditions
        <span className="text-red-500">*</span>
      </p>
      <ul className="mb-4 list-disc pl-5 text-sm">
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>

      <Checkbox id="terms" checked={toggle} onClick={onClick}>
        By selecting this I agree to all of the above terms
      </Checkbox>
    </>
  );
};

export default Terms;
