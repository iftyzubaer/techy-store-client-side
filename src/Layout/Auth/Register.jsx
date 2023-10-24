import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            toast("The password is less than 6 characters")
            return
        }
        else if (!/[A-Z]/.test(password)) {
            toast("The password don't have a capital letter")
            return
        }
        else if (!/[!@#$%^&*()_+{}/[\]:;<>,.?~\\-]/.test(password)) {
            toast("The password don't have a special character")
            return
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)

                const user = { email }
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.JSON())
                    .then(data => {
                        if(data.insertedId > 0) {
                            toast("Account Created Successfully!");
                            navigate('/')
                        }
                    })
                

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero px-4 py-20 md:px-24">
            <div className="hero-content flex-col gap-28 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Get started with Techy Store! To begin shopping for the latest tech products, please fill out the registration form below. Create a unique username, provide your email, and choose a secure password. If you&apos;ve shopped with us before, simply click the &apos;Sign In&apos; link to access your account. We value your privacy and security, and your information is protected. Thank you for choosing Techy Store for all your tech needs.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="displayName" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Has account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;