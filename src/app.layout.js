import React from "react"
import auth from "./auth";
//app layout for protected route
export const AppLayout = (props) => {
    return (
        <div>
            <h1>App Layout </h1>
            <button onClick={() => {
                auth.logout(() => {
                    props.history.push("/");
                })
            }}>LOGOUT</button>
        </div>
    )
}
