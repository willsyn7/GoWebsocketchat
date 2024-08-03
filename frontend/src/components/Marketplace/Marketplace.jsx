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

// Importing the css file for styling purposes
import './Marketplace.css';

// Defines our Marketplace function to be exported
const Marketplace = () => {
    
    // Creates state array to store Product components
    const [products, setProducts] = useState([]);

    // This function makes a get request to the db in order to render products
    const getComponents = () => {

        // Sends a "GET" request for products stored in db
        axios.get('/api/products')
            .then(res => {

                // Function that changes the state of products array
                setProducts((currentProducts) => {

                    // Saves the current array in newProducts
                    const newProducts = [...currentProducts];

                    // Pushes product components to an array passing in data as props
                    for (let product in res) {
                        newProducts.push(
                        <Product
                            id={product.id}
                            title={product.title}
                            price={product.price} 
                            category={product.category}
                            description={product.description}
                            image={product.image}
                            rating={product.rating}
                        />
                        );
                    }
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

    return (
        <>
            <div className="container">
                { products }
            </div>
        </>
    );
};

// Exports the Marketplace function
export default Marketplace;