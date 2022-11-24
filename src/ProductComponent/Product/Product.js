import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
    const productsData = useLoaderData()
    console.log(productsData);
    return (
        <div>
            <div>
                <div >

                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'>
                        {
                            productsData?.map(product => <>
                                <div>
                                    <div className="card my-5 lg:card-side shadow-xl bg-rose-200">
                                        <figure><img src={product?.picture} alt="Album" /></figure>
                                        <div className="card-body ">
                                            <h2 className="card-title">{product?.name}</h2>
                                            <div className='grid grid-cols-2 lg:grid-cols-1'>
                                            <p className=''><span className='text-'>Orginal Price : </span><span className='text-green-400'>{product?.OrginalePrice}</span></p>
                                            <p> Sales Prices : {product?.reSalesPrice}</p>
                                            </div>
                                            <p>Used Times : {product?.age}</p>
                                          
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Book Now</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </>)
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Product;