import React from 'react'
import { Link } from "react-router-dom";

import standinglamp from '../Assets/Images/standinglamp.png'
import woodenchair from '../Assets/Images/woodenchair.png'
import pendantlamp from '../Assets/Images/pendantlamp.png'

import '../Stylesheets/productonsale.css'

function Popularproduct() {
    const products = [
        {
            image: standinglamp,
            Name: 'Standing Lamp',
            Price: '45,000',
            Discount: 'null'
        },
        {
            image: woodenchair,
            Name: 'Wooden Chair',
            Price: '45,000',
            Discount: '10'
        },
        {
            image: pendantlamp,
            Name: 'Pendant Lamp',
            Price: '45,000',
            Discount: 'null'
        },
        {
            image: standinglamp,
            Name: 'Standing Lamp',
            Price: '45,000',
            Discount: 'null'
        },
        {
            image: standinglamp,
            Name: 'Standing Lamp',
            Price: '45,000',
            Discount: 'null'
        },
        {
            image: standinglamp,
            Name: 'Standing Lamp',
            Price: '45,000',
            Discount: 'null'
        },
        {
            image: pendantlamp,
            Name: 'Pendant Lamp',
            Price: '45,000',
            Discount: 'null'
        },
        {
            image: woodenchair,
            Name: 'Wooden Chair',
            Price: '45,000',
            Discount: '10'
        }
    ]

  return (
    <div className='pop-container'>
        <div className='pop-title'>
            <h6>
                Popular Products
            </h6>
            <Link>
                View All
            </Link>
        </div>
        <div className='pos-product'>
            {
                products.map((product, index) => {
                    return (
                        <div key={index} className='pos-single-product'>
                            <img src={product.image} alt="standing lamp" loading="lazy"/>
                            <p className={`product-discount ${product.Discount === 'null' ? 'd-none' : ''}`}>{product.Discount}% OFF</p>
                            <p>{product.Name}</p>
                            <p className='product-price'>N{product.Price}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Popularproduct