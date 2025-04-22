export default function OutputRate({ paid, averageRate, onReset }) {
  if (!paid) return null; // Handle empty state explicitly

  const tipAmount = ((parseFloat(paid) * averageRate) / 100).toFixed(2);
  const totalAmount = (parseFloat(paid) + parseFloat(tipAmount)).toFixed(2);

  return (
    <div className="result-box">
      <h3 className="result-title">Bill Summary</h3>

      <div className="result-grid">
        <div className="result-item">
          <span className="result-label">Bill Amount:</span>
          <span className="result-value">${paid}</span>
        </div>

        {/* More result items */}

        <div className="result-item highlight">
          <span className="result-label">Tip Amount:</span>
          <span className="result-value">${tipAmount}</span>
        </div>

        <div className="result-item total">
          <span className="result-label">Total to Pay:</span>
          <span className="result-value">${totalAmount}</span>
        </div>
      </div>

      <button className="reset-button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
