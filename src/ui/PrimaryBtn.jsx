export default function PrimaryBtn({Icon}) {
  
  return (
    <button 
      className="btn primary-btn"
    >
            {Icon!=null && <img src={Icon} className="icon-dark"></img>}
            <p>Add to cart</p>
    </button>
  )
}
