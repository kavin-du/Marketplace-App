import jwtDecode from "jwt-decode";
import { useContext } from "react"
import AuthContext from "./context"
import authStorage from "./storage";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken: string) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  }

  const logOut = () => {
    setUser(null);
    authStorage.removeToken(); // no need to await bcz not necessary
  }

  return { user, logIn, logOut };
}


export default useAuth;