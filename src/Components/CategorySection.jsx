import React from 'react';
import CategoryCurosel from '../Design/CategoryCurosel';

const CategorySection = () => {
    return (
        <div className='my-20 '>
            <div className="text-center grid  justify-center">
                <p className="border-b-4 border-slate-500 mb-4 italic text-orange-400 text-xl">---From 11:00am to 10:00pm---</p>
                <h2 className="text-4xl uppercase text-black border-b-4 border-slate-500">Order Online</h2>
            </div>
            <div>
                <CategoryCurosel></CategoryCurosel>
            </div>
        </div>
    );
};

export default CategorySection;