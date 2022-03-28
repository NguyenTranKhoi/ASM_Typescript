import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signin } from '../api/user'
import { authenticated } from '../utils/localStorage'

type TypeInputs = {
    email: string,
    password: string
}

const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<TypeInputs> = async data => {
        const { data: user } = await signin(data);
        console.log(user);
        authenticated(user, () => {
            navigate("/");
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder='Email' {...register('email')} />
                <input type="password" placeholder='Password' {...register('password')} />
                <button>Đăng nhập</button>
            </form>
        </div>
    )
}

export default Signin