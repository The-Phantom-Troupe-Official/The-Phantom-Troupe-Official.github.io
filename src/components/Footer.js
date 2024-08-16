import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logoFooter from '../Images/footerLogo.png'
import PaymentMethods from '../Images/payment.png'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8" id='footer'>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 pb-6 border-b border-gray-300">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logoFooter} alt="YAK COMPUTERS" className="h-8 mr-2" />
            <span className="text-xl font-extrabold">YAK COMPUTERS</span>
          </div>
          <div className="flex flex-col md:flex-row items-center text-sm text-gray-600">
            <ContactInfo icon={faMapMarkerAlt} text="Dansoman Roundabout Dansoman." />
            <ContactInfo icon={faEnvelope} text="yakcomputers@gmail.com" />
            <ContactInfo icon={faPhone} text={<>+233 55 132 3003<br />+233 26 888 8993</>} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection title="My Account" items={['My Account', 'Contact us', 'Specials']} />
          <FooterSection title="Help & Guide" items={['Help Center', 'How to Buy', 'Shipping & Delivery', 'Product Policy', 'How to Return']} />
          <FooterSection title="Categories" items={['System Units', 'Monitors', 'Computer Accessories', 'All-in-One Computers', 'Laptops']} />
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4 mb-6">
              <SocialLink href="https://web.facebook.com/yakcomputers" icon={faFacebookF} hoverColor="hover:text-blue-600" />
              <SocialLink href="https://www.instagram.com/yakcomputers" icon={faInstagram} hoverColor="hover:text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold mb-4">We accept</h3>
            <div className="flex space-x-2">
              <img src={PaymentMethods} alt="Payments Accepted" className="h-8" />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
          © 2024 YakComputers. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center mr-6 mb-2 md:mb-0">
    <FontAwesomeIcon icon={icon} className="mr-2" />
    <span>{text}</span>
  </div>
);

const FooterSection = ({ title, items }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="text-sm space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">{item}</a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLink = ({ href, icon, hoverColor }) => (
  <a href={href} className={`text-gray-400 ${hoverColor} transition duration-300`} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={icon} />
  </a>
);

export default Footer;