import React from 'react';

function PaymentMethod({ paymentMethod, setPaymentMethod }) {
    return (
      <div>
        <h3 className="font-bold mb-2">Payment Method</h3>
        <div className="space-y-2">
          
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" value="bank" checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')}
                   className="form-radio h-4 w-4 text-blue-600" />
            <span className="ml-2">Pay Now</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" value="cash" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')}
                   className="form-radio h-4 w-4 text-blue-600" />
            <span className="ml-2">Cash on delivery</span>
          </label>
        </div>
      </div>
    )}
export default PaymentMethod;