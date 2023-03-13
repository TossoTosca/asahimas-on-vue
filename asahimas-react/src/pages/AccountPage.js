// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

function AccountPage() {
    // const { user, logout, deleteUser } = useContext(AuthContext);
    // const navigate = useNavigate();


    const handleDeleteAccount = () => {
        // deleteUser();
        // navigate('/login');
    };

    return (
        <div className="container my-5" style={{ height: '80vh' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style={{ display: 'block', margin: 'auto' }}>
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
            <h1 style={{ textAlign: 'center' }}>Account Information</h1>
            <p style={{ textAlign: 'center' }}>Name: udin</p>
            <p style={{ textAlign: 'center' }}>Email: udin@mail.com</p>
            <p style={{ textAlign: 'center' }}>Role: Admin</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <button style={{
                    borderRadius: '5px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px'
                }}>Delete Account</button>

            </div>
        </div>

    );
}

export default AccountPage;
