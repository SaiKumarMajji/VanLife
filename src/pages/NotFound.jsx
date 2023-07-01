import React from "react";
import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="not-found">
            <h1 className="not-found-container">
                Sorry, the page you were looking for was not found.
            </h1>
            <Link to="/" className="link-button">Return to Home</Link>
        </div>
    )
}