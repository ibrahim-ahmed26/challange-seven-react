export default function FirstForm({ onHandlePayment, pay }) {
  return (
    <div className="bill-box">
      <p className="bill-label">How Much Was The Bill?</p>
      <div className="input-container">
        <span className="currency-symbol">$</span>
        <input
          type="text"
          inputMode="decimal"
          onChange={onHandlePayment}
          value={pay}
          placeholder="Enter bill amount"
          className="bill-input"
        />
      </div>
    </div>
  );
}
