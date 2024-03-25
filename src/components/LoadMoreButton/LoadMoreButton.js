import React,{button, useState, useEffect} from "react";
import './styles/style.css';

export default function LoadMoreButton () {
    function addImages() {
        setCurrentCountImages(currCountImages + 10);
    }

    const [currCountImages, setCurrentCountImages] = useState(10);
    const [products, setProducts] = useState([]);
    const maxCount = 100;
    
    useEffect(() => {
            fetch('https://dummyjson.com/products?limit=100&')
            .then(res => res.json())
            .then((data) => {
                setProducts(data.products);
                console.log(data.products)
            })
            .catch(error => console.log(error));
    }, [])
    

    return (
        <div>
            <div className="loadMorewrapper">
                {products.map((row, index) => (
                    <div key={index} className={index >= currCountImages ? `displayNone` : ''}>
                        {
                        index <= currCountImages ?<div className="colContainer">
                                <div className="imageContainer"></div> 
                                <div>{row.title}</div>
                        </div>
                        : ''}
                    </div>
                    ))}
            </div>
            {currCountImages >= maxCount 
                ?  
                <div>
                    <button disabled onClick={addImages}>Load more Products</button> 
                    <div>You have Reached 100 Products</div>
                </div> 
                :       
                <button onClick={addImages}>Load more Products</button>
            }
        </div>
        
    )
}