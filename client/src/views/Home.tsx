import React, { useEffect } from "react";

import { useAuth } from "../context/AuthProvider";
import Api from "../api/Api";

const Home = () => {
    const auth = useAuth();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const token = auth.user.token ? auth.user.token : null;

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        Api.get("/users", config)
            .then((response: unknown) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const data = response.data;
                console.log(data);
            })
            .catch((error: unknown) => {
                console.error("Error:", error);
            });
    }, []);

    return(
        <div>
            <h1>HomeScreen</h1>
        </div>
    );
};

export default Home;