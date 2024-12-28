import { InputWithClear } from "@/components/ui/input";

interface props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSearch: (value: any[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

const Toolbar = ({ data, setSearch }: props) => {
  const onChange = (value: string) => {
    console.log(value);

    if (value === "") {
      setSearch(data);
    } else {
      const filter = data.filter(
        ({ title, languages }) =>
          title.toLowerCase().includes(value.toLowerCase()) ||
          languages.some((language: string) =>
            language.toLowerCase().includes(value.toLowerCase()),
          ),
      );
      console.log(filter);
      setSearch(filter);
    }
  };

  return (
    <InputWithClear
      id="search"
      placeholder="Search"
      onClear={() => onChange("")}
      onChange={(e) => onChange(e.target.value)}
      maxLength={100}
    />
  );
};

export default Toolbar;
