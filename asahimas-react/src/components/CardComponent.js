import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Card() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:3004/products")
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error));
    }, []);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        Swal.fire({
            title: product.name,
            icon: 'info',
            imageUrl: product.imgUrl,
            imageWidth: 400,
            imageHeight: 200,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Next Proceed?'
        }).then((result) => {
            if (result.isConfirmed) {
                const inputOptions = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            'Jual': `Jual Seharga : Rp.${product.priceSell}`,
                            'Beli': `Beli Seharga : Rp.${product.priceSell}`
                        })
                    }, 1000)
                })

                Swal.fire({
                    title: 'Pilih Opsi!',
                    input: 'radio',
                    inputOptions: inputOptions,
                    inputValidator: (value) => {
                        if (!value) {
                            return 'You need to choose something!'
                        } else {
                            console.log(value)
                        }
                    }
                })
            }
        })
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-sm-4">
                        <div className="card">
                            <img
                                src={product.imgUrl}
                                className="card-img-top"
                                alt={product.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">stock : {product.stock}</p>
                                <p className="card-text">Harga: ${product.price}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleCardClick(product)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && (
                <CardModal product={selectedProduct} onClose={handleCloseModal} />
            )}
        </div>
    );
}

function CardModal({ product, onClose }) {
    return (
        <div className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{product.name}</h5>
                        <button
                            type="button"
                            className="close"
                            onClick={onClose}
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img
                            src={product.imgUrl}
                            className="img-fluid"
                            alt={product.name}
                        />
                        <p>Harga Beli : ${product.priceSell}</p>
                        <p>Harga Jual : ${product.priceBuy}</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
