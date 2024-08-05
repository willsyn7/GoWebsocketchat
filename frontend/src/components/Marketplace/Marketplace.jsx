/**
 * This file represents a marketplace page on our e-commerce website.
 * This page will render nested components such as listed items, navigation bar, and the shopping cart.
 * 
 * @returns - The components to be rendered
 * @exports Marketplace - Function to be used by other files
 */

// Importing necessary tools
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Product from './Product.jsx';

// Importing CSS file
import './Marketplace.css';

// Defines our Marketplace function to be exported
const Marketplace = () => {
    
    // Creates state array to store Product components
    const [products, setProducts] = useState([]);

    // Function that sends a "GET" request to the DB to fetch product data
    const getComponents = () => {

        // Sends a "GET" request for products stored in db
        axios.get('/api/products')
            .then(res => {

                // Function that changes the state of products array
                setProducts((currentProducts) => {

                    // Saves the current array in newProducts
                    const newProducts = currentProducts;
                    const arr = res.data;
                    // Pushes product components to an array passing in data as props
                    for (let i = 0; i < arr.length; i++) {
                        newProducts.push(
                        <Product
                            id={arr[i].id}
                            title={arr[i].title}
                            price={arr[i].price} 
                            category={arr[i].category}
                            description={arr[i].description}
                            image={arr[i].image}
                            rating={arr[i].rating}
                            key={crypto.randomUUID}
                        />
                        );
                    }
                    return newProducts;
                });
            })

            // Catches any errors during our get request and displays a message box with the error
            .catch(e => {
                alert(e);
            })
    };
    // Calls the getComponents function so we can render the products
    useEffect(() => {
        getComponents();
    });

    // Function to add a product to user's cart
    const addToCart = () => {

    }
    //         <div className='job-container'>
    //   {iteration.map((jobContainer, index) => ( // ---> note that iteration is the passed down state from the prev component
    //     <div key={index} className='jobcreator-cont'>
    //       <h2>Iteration no: {jobContainer.iteration}</h2>
    //       <button
    //         className='delete-iteration-button'
    //         onClick={() => deleteIteration(index)}
    //       >
    //         Delete
    //       </button>
    //       <JobCreator />
    //     </div>
    //   ))}
    // </div>

    // Returns a styled div containing the rendered products
    return (
        <div className="container">
            <div className="productDisplay">
                { products }
            </div>
        </div>
    );
};

// Exports the Marketplace function
export default Marketplace;