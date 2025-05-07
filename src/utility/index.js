import { useState, useEffect } from "react";

export function useUserRole() {
  const [role, setRole] = useState("guest"); // Default to "guest"

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.localStorage !== "undefined"
    ) {
      const storedRole = window.localStorage.getItem("role") || "guest";
      setRole(storedRole);
    }
  }, []);

  return role;
}

export const predefinedLocations = [
  "Accra",
  "Kumasi",
  "Tamale",
  "Takoradi",
  "Cape Coast",
  "Tema",
  "Ho",
  "Sunyani",
  "Bolgatanga",
  "Wa",
];
