import React from 'react';
import Carditem from './Carditem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out the amazing destinations</h1>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                   <Carditem src='images/img-9.jpg'
                   text="Feel divinty at KEDARNATH"
                   label="Spiritual"
                   path="/services"
                    />
                   <Carditem src='images/img-2.jpg'
                   text="Walk through the streets of Rishikesh and unleash the adventure rides "
                   label="Adventure"
                   path="/services"
                   /> 
                   
                </ul>
                <ul className='cards_items'>
                <Carditem src='images/img-3.jpeg'
                   text="Wouldn't miss Himalayan view from Chatola"
                   label="Mystery"
                   path="/services"/>
                   <Carditem src='images/img-4.jpg'
                   text="Explore the creative culture of UTTARAKHAND"
                   label="Art"
                   path="/services"/>
                    <Carditem src='images/img-8.jpg'
                   text="Watch the beauty within, through open doors"
                   label="Adrenaline"
                   path="/services"/>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards