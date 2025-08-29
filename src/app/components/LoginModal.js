"use client";

import { useState } from "react";
import "../styles/LoginModal.css"; // Import custom CSS

export default function Login() {
const [isLoginMode, setIsLoginMode] = useState(true);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLoginMode) {
        console.log("Login attempt:", { email, password });
    } else {
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        console.log("Registration attempt:", { 
            firstName, 
            lastName, 
            email, 
            password 
        });
    }
};

const switchMode = () => {
    setIsLoginMode(!isLoginMode);
    // Reset form fields when switching modes
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFirstName("");
    setLastName("");
};

return (
    <div className="login-container">
        <div className="login-card">
            <h3 className="text-center mb-4">{isLoginMode ? "Login" : "Create Account"}</h3>
            
            <div className="mode-toggle">
                <button 
                    className={`mode-btn ${isLoginMode ? 'active' : ''}`}
                    onClick={() => setIsLoginMode(true)}
                >
                    Login
                </button>
                <button 
                    className={`mode-btn ${!isLoginMode ? 'active' : ''}`}
                    onClick={() => setIsLoginMode(false)}
                >
                    Register
                </button>
            </div>
            
            <form onSubmit={handleSubmit}>
                {!isLoginMode && (
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-6">
                                <label className="form-label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required={!isLoginMode}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required={!isLoginMode}
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {!isLoginMode && (
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required={!isLoginMode}
                        />
                    </div>
                )}

                <button type="submit" className="btn btn-primary w-100">
                    {isLoginMode ? "Login" : "Create Account"}
                </button>

                <p className="text-center">
                    {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
                    <a onClick={switchMode}>
                        {isLoginMode ? "Sign Up" : "Login"}
                    </a>
                </p>
            </form>
        </div>
    </div>
);
}
