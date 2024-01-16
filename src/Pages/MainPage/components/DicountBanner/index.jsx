import { useState } from 'react';
import s from './DiscountBanner.module.css';

function DiscountBanner() {
  const [phone, setPhone] = useState('');
  const numbersOnly = /^[0-9]*$/;
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!phone.match(numbersOnly)) {
      alert('Phone number should contain numbers only.');
      return;
    }
    if (phone.length !== 11) {
      alert('Phone number should be 11 digits long.');
      return;
    }
    const apiUrl = 'http://localhost:3333/sale/send';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });
      if (response.ok) {
        console.log('Coupon request sent successfully.');
        setPhone('');
      } else {
        console.error('Error sending the coupon request.');
        alert("Something went wrong. Please try latter")
      }
    } catch (error) {
      console.error('Request error:', error);
    }
  };

  return (
    <div className={s.discountBanner}>
      <img className={s.dwarfImg} src="./assets/dwarf.png" alt="dwarf" />
      <div className={s.discountBannerInfo}>
        <h2 className={s.discountBannerH2}>5% off</h2>
        <h3 className={s.discountBannerH3}>on the first order</h3>
        <form className={s.discountBannerForm} onSubmit={handleFormSubmit}>
          <input
            className={s.discountBannerInput}
            type="text"
            placeholder="+49"
            value={phone}
            onChange={(e) => {
              const inputText = e.target.value;
              if (inputText.match(numbersOnly) && inputText.length <= 11) {
                setPhone(inputText);
              }
            }}
          />
          <input
            className={s.discountBannerBtn}
            type="submit"
            value={'Get a discount'}
          />
        </form>
      </div>
    </div>
  );
}

export default DiscountBanner;
