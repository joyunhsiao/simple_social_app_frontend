interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  onChange: (value: string) => void;
  selectedValue: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  onChange,
  selectedValue,
}) => {
  return (
    <div className="
      flex
      flex-col
      space-y-1
    ">
      {options.map((option) => (
        <label
          key={option.value}
          className="
            flex
            items-center
            cursor-pointer
        ">
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="
              hidden
          "/>
          <span className={`
            w-5
            h-5
            inline-block
            bg-custom-white
            border-2
            border-custom-black
            rounded-full
            mr-3
            transition-all
            duration-300
            ease-in-out
            relative
          `}>
            <span className={`
              absolute
              w-3
              h-3
              bg-custom-blue
              rounded-full
              transition-transform
              scale-0
              duration-300
              ease-in-out
              ${selectedValue === option.value ? "scale-100" : "scale-0"}
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
            `}></span>
          </span>
          <span className="text-custom-black">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}