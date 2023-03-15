import React, { useState, useEffect } from 'react';
import RealTimeDate from '../components/RealTimeDate';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';
import { apiUrl } from '../components/ApiUrl';

function InvoicePage() {
    function IdrFormater({ amount }) {
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        });
        return formatter.format(amount);
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const endpoint = `${apiUrl}/myProduct?hereForYou=${accessToken}`;

        async function fetchData() {
            try {
                const response = await axios.get(endpoint);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);





    function proceedTransaction() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, proceed!'
        }).then((result) => {
            if (result.isConfirmed) {
                const accessToken = localStorage.getItem('accessToken');
                axios.get(`${apiUrl}/payment?accessToken=${accessToken}`)
                    .then((response) => {
                        // Do something with the invoice data
                        let getMoney = Number(response.data.money)
                        const formatter = new Intl.NumberFormat('id-ID', {
                            style: 'currency',
                            currency: 'IDR',
                            minimumFractionDigits: 0
                        });
                        const displayMoney = formatter.format(getMoney)
                        Swal.fire({
                            icon: 'success',
                            title: 'Transaction completed.',
                            text: `${displayMoney} added to your account !`// why this output is Nan?
                        });
                        //refresh window !
                    })
                    .catch((error) => {
                        // Handle error
                        Swal.fire(
                            'error',
                            'Failed to complete transaction.',
                            'error'
                        );
                    });
            }
        });
    }



    const getUser = data.map((el, i) => {
        return el.User.name
    })[0];

    let totalPrice = 0;
    let totalTax = 0.05;

    data.forEach(item => {
        totalPrice += item.price * item.stock;
    });

    let subtotal = totalPrice.toFixed(2);
    let tax = (totalPrice * totalTax).toFixed(2);
    let total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);


    return (
        <div className="container my-4" style={{ minHeight: '87vh', maxHeight: 'auto' }}>
            <div className="card">
                {/* Header section */}
                <div className="row header px-3">
                    <div className="col-sm-6 ">
                        <h1>Buy Invoice</h1>
                    </div>
                    <div className="col-sm-6 text-right">
                        <RealTimeDate />
                        <h4>Invoice #: {Date.now() + data.length}</h4>
                    </div>
                </div>

                <hr />

                {/* From and To section */}
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h4>From:</h4>
                        <p>This Web Sites</p>
                        <p>Sudirman HK</p>
                        <p>Jakarta, 12837</p>
                        <p>INDONESIA</p>
                    </div>
                    <div className="col-sm-6 text-right">
                        <h4>To:</h4>
                        <p>Mr.{getUser}</p>
                        <p>Jl.Cempaka no.12.</p>
                        <p>Customer Jakarta, 2129</p>
                        <p>INDONESIA</p>
                    </div>
                </div>

                <br />

                {/* Product table section */}
                <div className="row">
                    <div className="col-sm-12">
                        <table className="table table-striped" >
                            <thead style={{ textAlign: 'center' }}>
                                <tr>
                                    <th>Product</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            {data.map((item, index) => (
                                <tr key={index} style={{ textAlign: 'center' }}>
                                    <td>{item.name}</td>
                                    <td>Product Pada User</td>
                                    <td>{item.stock}</td>
                                    <td>{IdrFormater({ amount: item.priceSell })}</td>
                                    <td>{IdrFormater({ amount: item.stock * item.price })}</td>
                                    <hr />
                                </tr>
                            ))}
                        </table>
                        <hr />
                    </div>
                </div>

                {/* Notes and total section */}
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h4>Click This to proceed buy!:</h4>
                        <div className='p-2'>
                            <Button className='btn-success rounded' style={{ height: '50px', width: '240px', position: 'fixed', textAlign: 'center' }} onClick={proceedTransaction}>
                                <strong> Proceed Transaction! </strong>
                            </Button>
                        </div>
                    </div>
                    <div className="col-sm-3 text-right">
                        <p><strong>Subtotal:</strong>    </p>
                        <p><strong>Tax:</strong>    </p>
                        <p><strong>Total:</strong>  </p>
                    </div>
                    <div className="col-sm-2 text-right">
                        <p><strong>    {IdrFormater({ amount: subtotal })}</strong></p>
                        <p><strong>    {IdrFormater({ amount: tax })}</strong></p>
                        <p><strong>  {IdrFormater({ amount: total })}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InvoicePage;
