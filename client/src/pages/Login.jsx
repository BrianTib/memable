import { useState } from 'react';
import styles from './Login.module.css';

function SubmitButton({ children }) {
    return (
        <button type="submit" className="bg-[#55883A] px-8 py-3 rounded-lg text-white font-bold">
            {children}
        </button>
    );
}

function ToggleButton({ children, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="bg-white text-[#55883A] px-8 py-3 rounded-lg font-bold border-2 border-[#55883A]">
            {children}
        </button>
    );
}

export default function Login() {
    const [isLoginAction, setIsLoginAction] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const clearForm = () => {
        setFormData({ username: '', password: '' });
    };

    const handleSubmit = event => {
        event.preventDefault();
        //alphanumeric regex check
        if (/^[a-zA-Z0-9_]*$/.test(formData.username)) {
            alert('Username must be alphanumeric');
            return;
        }
        console.log({ formData, isLoginAction });
    };

    return (
        <div className="relative bg-gray-200 h-full flex items-center justify-center px-5">
            <form onSubmit={handleSubmit} className="relative z-10 w-full md:w-2/5">
                <div id={styles.pepeHiding}>
                    <img src="/images/pepe-smiling.webp" alt="Pepe the Frog" />
                </div>
                <div className="relative z-10 bg-white h-fit p-6 rounded-lg flex flex-col items-center shadow-2xl">
                    <h2 className="text-[#55883A] text-3xl md:text-4xl font-bold">Welcome</h2>

                    <span className="text-gray-500">Sign in or create an account</span>

                    <h3 className="text-[#55883A] text-2xl font-bold w-full my-4">
                        {isLoginAction ? 'Login' : 'Sign Up'}
                    </h3>
                    <label htmlFor="username" className="flex flex-col gap-3 w-full">
                        Username
                        <input
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#55883A] focus:ring-0 focus:text-[#55883A]"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            minLength={4}
                            onChange={event =>
                                setFormData(prev => ({ ...prev, username: event.target.value }))
                            }
                            required
                        />
                        <small className="text-[#55883A]">
                            Your username should only have alphanumeric characters and be at least 4
                            characters in length
                        </small>
                    </label>

                    <label htmlFor="password" className="flex flex-col gap-3 w-full mt-8">
                        Password
                        <input
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#55883A] focus:ring-0 focus:text-[#55883A]"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            autoComplete="on"
                            minLength={8}
                            onChange={event =>
                                setFormData(prev => ({ ...prev, password: event.target.value }))
                            }
                            required
                        />
                        <small className="text-[#55883A]">
                            Your password should be at least 8 characters in length
                        </small>
                    </label>

                    <div className="flex w-full justify-between py-3 md:mt-5">
                        {isLoginAction ? (
                            <>
                                <SubmitButton>Login</SubmitButton>

                                <ToggleButton
                                    type="button"
                                    onClick={() => {
                                        clearForm();
                                        setIsLoginAction(false);
                                    }}>
                                    Sign up
                                </ToggleButton>
                            </>
                        ) : (
                            <>
                                <ToggleButton
                                    type="button"
                                    onClick={() => {
                                        clearForm();
                                        setIsLoginAction(true);
                                    }}>
                                    Login
                                </ToggleButton>
                                <SubmitButton>Sign up</SubmitButton>
                            </>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}
