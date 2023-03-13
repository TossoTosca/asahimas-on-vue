import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from '../components/Greetings';


const HomePage = () => {
    return (
        <div className="container my-5" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: "100vh" }}>
            <div style={{ flex: 1 }}>
                <h1>Hello !</h1>
                <Greeting />
                <h5>Gabung dan temukan pilihan produk terbaik!</h5>
                <div>
                    <p>pergi belanja sekarang ? <Link to="/login">Login</Link> untuk melihat produk kami!</p>
                </div>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className='jumbotronImg'
                    src='https://img.freepik.com/premium-vector/3d-rendering-podium-pastel-color-background-clouds-weather-with-empty-space-kids-baby-product_545205-47.jpg'
                    style={{ width: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}></img>
            </div>

        </div>
    )
}

export default HomePage;