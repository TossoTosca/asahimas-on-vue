import React from 'react';
import { Link } from 'react-router-dom';
import CardComponent from '../components/CardComponent';


export default function ProductPage() {
    return (
        <div className='container'>
            <div className='row'>
                <h1>List Product</h1>
            </div>
            <div className='row'>
                <CardComponent />
            </div>
        </div>
    )
}