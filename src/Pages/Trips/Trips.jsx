
import './Trips.css';
import React from 'react';
import Package from './Package';
import packages from '../../Data/Packages';

function Trips() {
    return (
        <>
        <section className='trip-heading'>
            <h1 className='heads'>Trips</h1>
            <h1 className='subheads' >Luxurious Getaways and Thrilling Adventures: Choose Your Perfect Trip Package!</h1>
        </section>
        <section className="packages-details">
            {packages.map((pkg, index) => (
                <Package
                    key={index}
                    title={pkg.title}
                    images={pkg.images}
                    description={pkg.description}
                    pricing={pkg.pricing}
                />
            ))}
        </section>
        </>
    );
}

export default Trips;
