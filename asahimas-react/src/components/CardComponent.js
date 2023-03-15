import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { apiUrl } from './ApiUrl';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'

function IdrFormater({ amount }) {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    });
    return formatter.format(amount);
}

const CardComponent = ({ endpoint, product }) => {

    const handleBuyNowClick = (product) => {
        Swal.fire({
            title: product.name,
            imageUrl: product.imgUrl,
            text: `${window.location.pathname === '/product' ? 'Beli' : 'Jual'} seharga ${window.location.pathname === '/product' ? IdrFormater({ amount: product.price }) : IdrFormater({ amount: product.priceSell })}`
            ,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `Mau ${window.location.pathname === '/product' ? 'Beli' : 'Jual'} berapa banyak ?`,
                    icon: 'question',
                    input: 'range',
                    inputLabel: `${window.location.pathname === '/product' ? 'masukkan ini ke produk mu ?' : 'taruh di market place?'}`,
                    inputAttributes: {
                        min: 1,
                        max: product.stock,
                        step: 1
                    },
                    inputValue: 1
                }).then((result) => {
                    if (result.isConfirmed) {
                        const quantity = result.value;

                        Swal.fire(
                            'OK!',
                            `${window.location.pathname === '/product' ? 'produk ini milikmu sekarang!' : `produk ini ada di market place sekarang`}`,
                            'success'
                        );

                        // ambil accessToken dari localStorage
                        const accessToken = localStorage.getItem('accessToken');

                        // cek halaman saat ini, dan hit endpoint yang sesuai dengan axios
                        if (window.location.pathname === '/history') {
                            const myProductId = product.id;
                            const productName = product.name;
                            axios.get(`${apiUrl}/sellProduct?accessToken=${accessToken}&myProductId=${myProductId}&quantity=${quantity}&productName=${productName}`)
                                .then((response) => {
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 1000);
                                })
                                .catch(error => console.error(error));
                        } else if (window.location.pathname === '/product') {
                            axios.get(`${apiUrl}/buyProduct?accessToken=${accessToken}&productId=${product.id}&quantity=${quantity}`)
                                .then((response) => {
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 1000);
                                })
                                .catch(error => console.error(error));
                        }
                    }
                })
            }
        })
    }


    return (
        <Card className='p-0 overflow-hidden h-100 shadow'>
            <div className='overflow-hidden rounded p-0 bg-light'>
                <Card.Img className='variant-top' src={product.imgUrl} alt={product.name} style={{ maxHeight: "167px", maxWidth: "210px", minWidth: "167px", minHeight: "210px" }} />
            </div>
            <Card.Body className='text-center'>
                <Card.Title className='display-8' style={{ height: '60px' }}>{product.name}</Card.Title>
                <hr />
                <div className='h-1' >

                    <Card.Title>{IdrFormater({ amount: product.price })}</Card.Title>
                    <Card.Title>Stock: {product.stock !== 0 ? product.stock : 'Sold Out'}</Card.Title>

                </div>
                <hr />
                <Button
                    className='w-100 rounded-0'
                    variant={window.location.pathname === '/history' ? 'danger' : 'success'}
                    onClick={() => handleBuyNowClick(product)}>
                    {window.location.pathname === '/history' ? 'Return Product' : 'Buy now'}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
