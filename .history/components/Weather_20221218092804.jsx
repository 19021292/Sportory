import Image from 'next/image';
import React from 'react';

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className='1' style={{maxWidth:'300px',maxHeight:'500px',boxShadow:'0 4px 8px',marginTop:'100px'}}>      
        <div className='bg-black/50 relative p-8 rounded-md'>
            <p className='text-2xl text-center pb-6' style={{float:'left'}}> {data.name}</p>
            <div className='flex justify-between text-center' style={{overflow: 'hidden'}}>
                <div>
                    <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                    <p className='text-xl'>Feels Like</p>
                </div>
                <div>
                    <p className='font-bold text-2xl'>{data.main.humidity}%</p>
                    <p className='text-xl'>Humidity</p>
                </div>
                <div>
                    <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
                    <p className='text-xl'>Winds</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Weather;