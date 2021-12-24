import React, { useEffect, useState } from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import Row4 from './Row4'
import './Item.css'
import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Item() {

    const [Flat_Items, setFlat_Items] = useState([]);
    const [Glass_Cutter, setGlass_Cutter] = useState([]);
    const [Glass_Hardware, setGlass_Hardware] = useState([]);
    const [Wood_Hardware, setWood_Hardware] = useState([]);

    //  Flat Item database
    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collection(db, "Flat_Items"));
            console.log(data);
            setFlat_Items(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(data);
        };
        getData();
    }, [])

    // Glass Handle data base

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collection(db, "Glass_Cutter"));
            console.log(data);
            setGlass_Cutter(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            
        };
        getData();
    }, [])

    //Glass hardware data base

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collection(db, "Glass_Hardware"));
            
            setGlass_Hardware(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            
        };
        getData();
    }, [])

     //Wood hardware data base

     useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collection(db, "Wood_Hardware"));
            
            setWood_Hardware(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            
        };
        getData();
    }, [])


    return (
        <div className='item'>
            <Row1
                Flat_Items={Flat_Items}
            />

            <Row2
                Glass_Cutter={Glass_Cutter}   //ye name glass cuttter hai lekin data issme glass handle ka aa rha hai..by mistake name
            />

            <Row3
                Glass_Hardware={Glass_Hardware}
            />

             <Row4
                Wood_Hardware={Wood_Hardware}
            />

        </div>
    )
}
