import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
    return (
        <div
            style={{
                minHeight: "100vh",
                width: "100%",
                backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(/bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                color: "#ffffff",
            }}
        >
            <Navbar />

            {/* Page content */}
            <main style={{ paddingTop: "120px" }}>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;