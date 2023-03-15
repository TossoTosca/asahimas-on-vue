import { useState } from 'react';
import { Container } from 'react-bootstrap';
import AddProductForm from '../components/AddProductForm';
import Swal from 'sweetalert2';
import axios from 'axios';
import { apiUrl } from '../components/ApiUrl';

function AddProductPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (formData) => {
        try {
            setIsLoading(true);
            // lakukan permintaan API ke backend dengan formData
            const accessToken = localStorage.getItem('accessToken')
            const url = `${apiUrl}/products?accessToken=${accessToken}`

            const response = await axios.post(url, formData);

            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Product added successfully!',
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to add product. Please try again.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container style={{ height: '93vh', width: '190vh' }}>
            <h1>Add Product</h1>
            <AddProductForm onSubmit={handleSubmit} isLoading={isLoading} />
        </Container>
    );
}

export default AddProductPage;
