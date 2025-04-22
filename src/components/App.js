import { useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import OutputRate from "./OutputRate";
export default function App() {
  const [pay, setPayed] = useState("");
  const [firstRate, setFirstRate] = useState(10);
  const [secondRate, setSecondRate] = useState(15);
  function handlePayment(e) {
    setPayed(e.target.value);
  }
  function handleFirstRate(e) {
    setFirstRate(parseInt(e.target.value));
  }
  function handleSecondRate(e) {
    setSecondRate(parseInt(e.target.value));
  }
  function resetAll() {
    setPayed("");
    setFirstRate(10);
    setSecondRate(15);
  }
  const averageRate = (firstRate + secondRate) / 2;
  return (
    <div className="calculator-container">
      <h1 className="app-title">Tip Calculator</h1>

      <FirstForm onHandlePayment={handlePayment} pay={pay} />

      <div className="rating-container">
        <SecondForm>
          <div className="rating-box">
            <p className="rating-label">How Did You Like The Service?</p>
            <select
              className="rating-select"
              value={firstRate}
              onChange={handleFirstRate}
            >
              <option value={10}>It was good (10%)</option>
              <option value={20}>It was perfect (20%)</option>
            </select>
          </div>
        </SecondForm>

        <SecondForm>
          <div className="rating-box">
            <p className="rating-label">
              How Did Your Friend Like The Service?
            </p>
            <select
              className="rating-select"
              value={secondRate}
              onChange={handleSecondRate}
            >
              <option value={5}>It was okay (5%)</option>
              <option value={15}>It was great (15%)</option>
            </select>
          </div>
        </SecondForm>
      </div>

      <OutputRate averageRate={averageRate} paid={pay} onReset={resetAll} />
    </div>
  );
}
