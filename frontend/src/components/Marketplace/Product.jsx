import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';


const Product = (props) => {

    return (
        <div>
            <p>
                ID : {props.id}
                Price: {props.price}
                Title: {props.title}
                Category: {props.category}
                Description: {props.description}
                Image: {props.image}
                Rating: {props.rating}
            </p>    
        </div>
    )
}

export default Product;