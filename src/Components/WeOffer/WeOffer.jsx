import React from 'react';
import { RiSecurePaymentLine } from 'react-icons/ri';

const WeOffer = () => {
    return (
        <div className='w-full mt-28 mx-auto'>
            <div className='text-center'>
                <h1 className='text-indigo-900 md:text-4xl font-bold text-2xl'>We Offer</h1>
            </div>

            {/*  */}
            <div className='max-w-7xl mx-auto flex items-center gap-10 justify-between'>
                <div className='w-[400px]'>
                    <img src="https://paybybd.com/assets/img/features-3.png" alt="" />
                </div>

                {/* text */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    <div className='w-[300px] space-y-4 items-center text-center'>
                        <RiSecurePaymentLine size={50} className='text-red-400 mx-auto'></RiSecurePaymentLine>
                        <p>Payment</p>
                        <p className='text-center'>Acceptance of payments for both high- and low-risk enterprises on the website</p>
                    </div>
                    <div className='w-[300px] space-y-4 items-center text-center'>
                        <RiSecurePaymentLine size={50} className='text-red-400 mx-auto'></RiSecurePaymentLine>
                        <p>Mass PayOuts</p>
                        <p className='text-center'>Large payouts with a 96% success rate</p>
                    </div>
                    <div className='w-[300px] space-y-4 items-center text-center'>
                        <RiSecurePaymentLine size={50} className='text-red-400 mx-auto'></RiSecurePaymentLine>
                        <p>H2H integration</p>
                        <p className='text-center'>A tested redirect with a high conversion rate or H2H integration</p>
                    </div>

                    {/* arek gulo  */}
                    <div className='w-[300px] bg-gray-50 border p-3  space-y-4 items-center text-center'>
                        
                        <p className='text-red-400 md:text-3xl'>  >86%</p>
                        <p className='text-center'>High Conversion Rate</p>
                    </div>
                    <div className='w-[300px] bg-gray-50 p-3 border space-y-4 items-center text-center'>
                   
                        <p>API</p>
                        <p className='text-center'>Quick integration</p>
                    </div>
                    <div className='w-[300px] border p-3 bg-gray-50 space-y-4 items-center text-center'>
                        
                        <p>Antifraud</p>
                        <p className='text-start'>Protection against parsing and flooding</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default WeOffer;