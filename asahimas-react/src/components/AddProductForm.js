import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AddProductForm({ onSubmit, isLoading }) {
    const [formData, setFormData] = useState({
        name: '',
        imgUrl: '',
        price: '',
        priceBuy: '',
        priceSell: '',
        stock: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formBasicImgUrl">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter image URL"
                    name="imgUrl"
                    value={formData.imgUrl}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPriceBuy">
                <Form.Label>Buy Price</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter buy price"
                    name="priceBuy"
                    value={formData.priceBuy}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPriceSell">
                <Form.Label>Sell Price</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter sell price"
                    name="priceSell"
                    value={formData.priceSell}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="formBasicStock">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter stock"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Submit'}
            </Button>
        </Form>
    );
}

export default AddProductForm;
