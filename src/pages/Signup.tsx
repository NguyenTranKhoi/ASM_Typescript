import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signup } from '../api/user'
import FooterHome from '../components/FooterHome'
import HeaderHome from '../components/HeaderHome'

type TypeInputs = {
    name: string,
    email: string,
    password: string
}

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<TypeInputs> = data => {
        signup(data);
        navigate("/signin");
    }
    return (
        <div>
            <HeaderHome />
            <section className="text-center text-lg-start pt-[100px]">
                {/* Jumbotron */}
                <div className="container py-4">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img src="https://vn-test-11.slatic.net/p/7b8e1256e645b43a6115b19691b5fae6.jpg" className="w-100 rounded-4 shadow-4  rounded-[20px]" />
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card cascading-right border-gray-400">
                                <div className="card-body p-5 shadow-5 text-center">
                                    <h2 className="fw-bold mb-3 text-2xl">Signup up now</h2>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        {/* use input */}
                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example3" className="form-control" placeholder="User" {...register('name')} />
                                        </div>
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example3" className="form-control" placeholder="Email address" {...register('email')} />
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4" className="form-control" placeholder="Password" {...register('password')} />
                                        </div>
                                        {/* Checkbox */}
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input className="form-check-input me-2" type="checkbox" id="form2Example33" defaultChecked />
                                            <label className="form-check-label" htmlFor="form2Example33">
                                                Subscribe to our newsletter
                                            </label>
                                        </div>
                                        {/* Submit button */}
                                        <button type="submit" className="btn btn-primary bg-sky-600 mb-4 w-[100%]">
                                            Sign up
                                        </button>
                                        {/* Register buttons */}
                                        <div className="text-center">
                                            <p>or sign up with:</p>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-facebook-f" />
                                            </button>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google" />
                                            </button>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-twitter" />
                                            </button>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-github" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Tên' {...register('name')} />
                <input type="email" placeholder='Email' {...register('email')} />
                <input type="password" placeholder='Password' {...register('password')} />
                <button>Đăng ký</button>
            </form> */}
            <FooterHome />
        </div>
    )
}

export default Signup