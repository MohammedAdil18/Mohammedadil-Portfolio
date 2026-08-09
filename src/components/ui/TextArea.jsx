function TextArea({
  rows = 5,
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <textarea
      rows={rows}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full
        resize-none
        rounded-xl
        border
        border-[#DCCAB7]
        bg-white
        px-5
        py-4
        text-[#5C4635]
        placeholder-[#9B8775]
        outline-none
        transition-all
        duration-300
        focus:border-[#8B6B4A]
        focus:ring-2
        focus:ring-[#8B6B4A]/20
      "
    />
  );
}

export default TextArea;