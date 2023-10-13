import React from "react";

export default function Authenticate({ token })  {

    async function handleClick() {
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });
        }
    }

    return (
        
    <>
    <h2>Authenticate</h2>;
    </>
    )
}