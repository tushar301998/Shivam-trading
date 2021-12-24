import React from 'react'
import './Row1.css'
import './MyCard';
import MyCard from './MyCard';

export default function Row1(props) {

    const Items = props.Glass_Hardware;
   
    return (
        <div>
            <h3 className='data'>Glass Hardware</h3>
           
            <div className='img_row' >
                {Items.map((data) => (
                    <MyCard
                        // data="Glass Cutter"
                        img_url={data.img}
                        title={data.title}
                        size={data.size} />
                ))}
            </div>
            
        </div>
    )
}
