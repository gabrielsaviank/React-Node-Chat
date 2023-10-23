import React from "react";

const Home = () => {

    const sessionCookie = document.cookie;

    console.log(sessionCookie);
    return(
        <div>
            <h1>HomeScreen</h1>
        </div>
    );
};

export default Home;