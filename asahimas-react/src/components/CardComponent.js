import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

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
            text: `${window.location.pathname === '/product' ? 'Beli' : 'Jual'} seharga ${IdrFormater({ amount: product.price })}`
            ,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Mau Beli berapa banyak ?',
                    icon: 'question',
                    input: 'range',
                    inputLabel: 'ini akan di tambahkan ke banyak nya stok di produk !',
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
                            'produk ini milikmu sekarang!',
                            'success'
                        );

                        // ambil accessToken dari localStorage
                        const accessToken = localStorage.getItem('accessToken');

                        // cek halaman saat ini, dan hit endpoint yang sesuai dengan axios
                        if (window.location.pathname === '/history') {
                            const historyId = product.id;
                            const productName = product.name;
                            axios.get(`http://localhost:3004/sellProduct?accessToken=${accessToken}&historyId=${historyId}&quantity=${quantity}&productName=${productName}`)
                                .then((response) => {
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 200);
                                })
                                .catch(error => console.error(error));
                        } else if (window.location.pathname === '/product') {
                            axios.get(`http://localhost:3004/buyProduct?accessToken=${accessToken}&productId=${product.id}&quantity=${quantity}`)
                                .then((response) => {
                                    setTimeout(() => {
                                        window.location.reload();
                                    }, 200);
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
                <Card.Img className='variant-top' src={product.imgUrl} alt={product.name} />
            </div>
            <Card.Body className='text-center'>
                <Card.Title className='display-8' style={{ height: '60px' }}>{product.name}</Card.Title>
                <hr />
                <div className='h-1' >

                    <Card.Title>{IdrFormater({ amount: product.price })}</Card.Title>
                    <Card.Title>Stock: {product.stock}</Card.Title>
                </div>
                <hr />
                <Button
                    className='w-100 rounded-0'
                    variant={window.location.pathname === '/history' ? 'danger' : 'success'}
                    onClick={() => handleBuyNowClick(product)}>
                    {window.location.pathname === '/history' ? 'Sell now' : 'Buy now'}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
