export function Field({ label, name, type = "text", options = [], ...props }) {
  return (
    <div>
      <label className="block text-gray-600 font-medium mb-2">
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      {type === "select" ? (
        <select
          name={name}
          className="w-full border border-gray-300 rounded-lg p-2 outline-0"
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          className="w-full border border-gray-600 rounded-lg p-2 outline-0"
          rows={4}
          {...props}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          className="w-full border border-gray-600 rounded-lg p-2 outline-0"
          {...props}
        />
      )}
    </div>
  );
}
