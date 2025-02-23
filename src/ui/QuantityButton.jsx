import plusIcon from "../assets/icon-plus.svg"
import minusIcon from "../assets/icon-minus.svg"
import { increment,decrement } from "../Reducers/QuantitySlice"
import { useDispatch, useSelector } from "react-redux"
import { quantitySelector } from "../Selectors/QuantitySelector"

export default function QuantityButton() {

  const selector = useSelector(quantitySelector);
  const dispatch = useDispatch();

  const onIncrement = () => {
      dispatch(increment())
  }

  const onDecrement = () => {
      dispatch(decrement())
  }

  return (
        <div className="btn counter-items">
          <button className="light-btn" onClick={onDecrement}>
            <img src={minusIcon} alt="Minus Icon" className="counter" />
          </button>
          <p className="count-number">{selector}</p>
          <button className="light-btn" onClick={onIncrement} >
            <img src={plusIcon} alt="Minus Icon" className="counter" />
          </button>
        </div>
  )
}
