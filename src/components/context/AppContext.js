import { createContext, useState } from "react";

const AppState = createContext();

function AppContext({ children }) {

    const umodel = JSON.parse(localStorage.getItem("user") || "{}");
    const [user, setUser] = useState(umodel)

    const data = {
        user: {
            get: user,
            set: u => {
                localStorage.setItem("user", JSON.stringify(u))
                setUser(u);
            }
        }
    }


    return (
        <AppState.Provider value={data}>
            {children}
        </AppState.Provider>
    )
}

export { AppContext as default, AppState }