export function Header({title}) {
  return (
    <header className="sticky top-0 bg-gray-100 shadow-md z-10 text-center py-6">
      <h1 className="text-4xl font-bold text-blue-600">
        {title || "Rentonomy"}
      </h1>
      <p className="text-gray-900 mt-2">Find your perfect home with ease</p>
    </header>
  );
}
