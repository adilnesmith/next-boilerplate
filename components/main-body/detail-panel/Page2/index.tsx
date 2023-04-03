import React, { FC } from 'react';
import { Page2Props } from 'lib/@types/common';
import { useAuth } from "lib/context/AuthContext";

const Page2: FC<Page2Props> = () => {
    const { user, login, logout } = useAuth();
    return (
        <>
            <div data-testid="page2">
                <main>
                    <div>
                        <h2>User: {user ? "login" : "logout"}</h2>
                        <div>
                            <button onClick={login}>Login</button>
                            <button onClick={logout}>Logout</button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
export default Page2;