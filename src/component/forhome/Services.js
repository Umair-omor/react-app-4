import React from 'react';
import './services.css';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Services = () => {
  return (
    <div className='container'>
      <div className="services-section">
        <div className="ser ser-1">
            <TbTruckDelivery className="icon" />
            <h3>Super Fast and Free Delivery</h3>
        </div>
        <div className="ser ser-2">
            <div className="douvle-coulmn">
                <div className="coulmn">
                    <MdSecurity className="icon2" />
                    <h3>Non-contact Shipping</h3>
                </div>
                <div className="coulmn">
                    <GiReceiveMoney className="icon2" />
                    <h3>Money-back Guaranteed</h3>
                </div>
            </div>
        </div>
        <div className="ser ser-3">
            <RiSecurePaymentLine className="icon" />
            <h3>Super Secure Payment System</h3>
        </div>
      </div>
    </div>
  )
}

export default Services
