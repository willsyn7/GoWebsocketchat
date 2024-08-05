/** 
 * This function takes properties passed from a parent and generates
 * a div to display the data
*/
const Product = (props) => {
    const objID = props._id;

    return (
        <>
            <div className="product-box">
                <h3>{props.title}</h3>
                <img src={props.image}></img>
                Price: {props.price}
                <h3>Product ID: {props.id}</h3>
                Category: {props.category}
                Description: {props.description}
                Rating: {props.rating}
                <button onClick={null}>Add to Cart</button>
            </div>
        </>
    )
}

// Exports the Product constructor
export default Product;