import React, { useState, useEffect } from 'react';
import RealTimeDate from '../components/RealTimeDate';
import axios from 'axios';
import IdrFormater from '../components/IdrFormater';

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
        const endpoint = `http://localhost:3004/myProduct?hereForYou=${accessToken}`;

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
                        <h4>Invoice #: 123456</h4>
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
                        <h4>Notes:</h4>
                        <p>INVOICE DUMMY</p>
                    </div>
                    <div className="col-sm-3 text-right">
                        <p><strong>Subtotal:</strong>    </p>
                        <p><strong>Tax:</strong>    </p>
                        <p><strong>Total:</strong>  </p>
                    </div>
                    <div className="col-sm-3 text-right">
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
