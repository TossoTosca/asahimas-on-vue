import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { apiUrl } from '../components/ApiUrl';

function AccountPage() {
    const [userData, setUserData] = useState({});
    const accessToken = localStorage.getItem('accessToken');

    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    });


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/users?myAccount=${accessToken}`);
                setUserData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [accessToken]);

    console.log(userData)

    const handleDeleteAccount = async () => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });

            if (result.isConfirmed) {
                await axios.delete(`${apiUrl}/users?myAccount=${accessToken}`);
                await Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
                localStorage.removeItem('accessToken');
                window.location.href = '/login';

            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to delete account.',
                icon: 'error',
                button: 'OK'
            });
        }
    };


    return (
        <div className="container my-5" style={{ height: '80vh' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style={{ display: 'block', margin: 'auto' }}>
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
            <h1 style={{ textAlign: 'center' }}>Account Information</h1>
            <p style={{ textAlign: 'center' }}>Name: {userData.name}</p>
            <p style={{ textAlign: 'center' }}>Email: {userData.email}</p>
            <p style={{ textAlign: 'center' }}>Role: {userData.role}</p>
            <p style={{ textAlign: 'center' }}>Transaction made : {formatter.format(userData.money)}</p>

            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <Button variant="danger" onClick={handleDeleteAccount}>Delete Account</Button>


            </div>
        </div>

    );
}

export default AccountPage;
