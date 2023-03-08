import  React,{ useContext, useState,ReactNode } from "react";
import { authContextProps } from 'lib/@types/common';


const AuthContext = React.createContext<authContextProps>({
    user: false,
    login: () => {},
    logout: () => {},
});

export function useAuth() {
    return useContext(AuthContext);
}
type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<boolean>(false);

    const login = () => {
        setUser(true);
    };

    const logout = () => {
        setUser(false);
    };

    const value = {
        user,
        login,
        logout,
    };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
export default AuthProvider;