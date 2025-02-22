import { useCallback, useContext } from "react";

import { AuthContext, AuthState } from "@/context/auth-context";

export const useUser = () => {
  const auth = useContext(AuthContext);

  const login = useCallback(
    async (
      userName: string,
      password: string
    ): Promise<AuthState | undefined> => {
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

        auth?.state?.login?.(data.userData);
        return data.userData;
      } catch (err) {
        console.log(err);
      }
    },

    [auth?.state]
  );

  return { login };
};
