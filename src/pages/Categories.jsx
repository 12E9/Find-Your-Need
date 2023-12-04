import React from 'react';
import './Categories.css'
import Data from '../data/Data';
const Categories = () => {
    
    return (
        <div className='categories'>
        {Data.categoryItems.map((categoryItem)=>(
            <div className='cards'>
                <div>
                    <img className="Category-image" src={categoryItem.image} alt={categoryItem.name}/>
                </div>
                <div>
                    <h5 className="Category-name">
                        {categoryItem.name}
                    </h5>
                </div>
                <div>
                       {/* <button className='Category-add-button' onClick={()=>handleAddService(categoryItem)}>Book Now</button>  */}
                       <button className='Category-add-button'>Book Now</button> 
                    </div>
                
                
            </div>
        ))}
    </div>
    );
};

export default Categories;
