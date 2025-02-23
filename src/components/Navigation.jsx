import logo from '../assets/logo.svg'

const navList = ["Collection", "Men", "Women", "About", "Contact"]

function Navigation() {
  return (
        <div className='nav-bar'>
            <div className='logo-item'>
                <img src={logo} width={137} height={20}></img> 
            </div>
            <ul className='nav-items'>
                {navList.map((item,index) =>{
                    return (<li className='nav-item' key={index}>{item}</li>)
                } )}
            </ul>
        </div>
  )
}

export default Navigation