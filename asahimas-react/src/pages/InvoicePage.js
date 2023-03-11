import React from 'react';

function InvoicePage() {
    return (
        <div className="container my-4">
            <div className="card">
                {/* Header section */}
                <div className="row header px-3">
                    <div className="col-sm-6 ">
                        <h1>Buy Invoice</h1>
                    </div>
                    <div className="col-sm-6 text-right">
                        <h4>Date: March 10, 2023</h4>
                        <h4>Invoice #: 123456</h4>
                    </div>
                </div>

                <hr />

                {/* From and To section */}
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h4>From:</h4>
                        <p>Your Company Name</p>
                        <p>Your Company Address</p>
                        <p>Your City, State ZIP</p>
                        <p>Your Country</p>
                    </div>
                    <div className="col-sm-6 text-right">
                        <h4>To:</h4>
                        <p>Customer Name</p>
                        <p>Customer Address</p>
                        <p>Customer City, State ZIP</p>
                        <p>Customer Country</p>
                    </div>
                </div>

                <br />

                {/* Product table section */}
                <div className="row">
                    <div className="col-sm-12">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Product 1</td>
                                    <td>Description of product 1.</td>
                                    <td>2</td>
                                    <td>$50.00</td>
                                    <td>$100.00</td>
                                </tr>
                                <tr>
                                    <td>Product 2</td>
                                    <td>Description of product 2.</td>
                                    <td>1</td>
                                    <td>$75.00</td>
                                    <td>$75.00</td>
                                </tr>
                                <tr>
                                    <td>Product 3</td>
                                    <td>Description of product 3.</td>
                                    <td>3</td>
                                    <td>$25.00</td>
                                    <td>$75.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Notes and total section */}
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h4>Notes:</h4>
                        <p>Additional notes about the invoice.</p>
                    </div>
                    <div className="col-sm-6 text-right">
                        <p><strong>Subtotal:</strong> $250.00</p>
                        <p><strong>Tax:</strong> $12.50</p>
                        <p><strong>Total:</strong> $262.50</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InvoicePage;
