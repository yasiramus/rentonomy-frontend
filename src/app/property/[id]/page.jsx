import { notFound } from "next/navigation";

export default function PropertyDetails({ params }) {
  const { id } = params;

  const property = mockProperties.find((prop) => prop.id === parseInt(id));

  if (!property) {
    notFound(); 
  }

  return (
    <div className="p-8">
      <img
        className="w-full h-64 object-cover rounded"
        src={'property.image'}
        alt={'property.title'}
      />
      <h1 className="text-2xl font-bold mt-4">{'property.title'}</h1>
      <p className="text-gray-600">{'property.location'}</p>
      <p className="text-blue-500 font-semibold text-lg">${'property.price'}</p>
    </div>
  );
}