import { useCallback } from "react";

export const useUser = () => {
  const login = useCallback(async (userName: string, password: string) => {
    try {
      const response = await fetch(`/api/login`, {
        method: "POST",
        body: JSON.stringify({ userName, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error);
      }
      return data.userData;
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { login };
};
