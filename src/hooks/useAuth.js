import { navigate } from "gatsby-link";
import { useMoralis } from "./useMoralis";

export function useAuth() {
  const { moralis } = useMoralis();
  return {
    login: async () => {
      try {
        const user = await moralis?.Web3.authenticate();
        navigate("/");
      } catch (e) {
        console.error(e.message, e);
      }
    },

    logout: async () => {
      try {
        await moralis?.User.logOut();
        navigate("/login");
      } catch (e) {
        console.error(e.message, e);
      }
    },

    currentUser: () => {
      return moralis?.User.current();
    },
  };
}