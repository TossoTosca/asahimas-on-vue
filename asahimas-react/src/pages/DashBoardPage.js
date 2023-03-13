import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from '../components/Greetings';

const DashBoardPage = () => {
    return (
        <div className="container my-5 d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h1>Hello !</h1>
                <Greeting />
                <h5>anda berhasil login</h5>
                <div className="my-4">
                    <p>pergi belanja sekarang ? <Link to="/product">Product</Link></p>
                </div>
            </div>
            <div className="p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '50%' }}>
                <img className='jumbotronImg'
                    src='https://img.freepik.com/premium-vector/3d-rendering-podium-pastel-color-background-clouds-weather-with-empty-space-kids-baby-product_545205-47.jpg'
                    style={{ width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}></img>
            </div>
        </div>
    );
};

export default DashBoardPage;
