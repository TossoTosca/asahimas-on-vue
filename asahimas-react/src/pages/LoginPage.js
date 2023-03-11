import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const apiUrl = 'http://localhost:3004'

export default function LoginPage() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const response = await axios.post(`${apiUrl}/login`, {
                email: formData.email,
                password: formData.password,
            });

            // Simpan accessToken di sesi
            if (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'ok',
                })
                localStorage.setItem('accessToken', response.data.accessToken);


                setTimeout(() => {
                    window.location.href = '/dashboard';
                }, 2000);
            }

        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: error.message
            })
        }
    };






    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-4">Login</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email"
                                        aria-describedby="emailHelp" name="email" value={formData.email} onChange={handleInputChange} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with
                                        anyone
                                        else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleInputChange} />
                                </div>
                                <div className="d-grid gap-2 mb-3">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                                <div>
                                    <p>Tidak punya akun? <Link to="/register">Register!</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}