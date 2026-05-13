import '../index.css';
function Header(props){
    return(
        <div>
                <h1 className='font-medium text-3xl'>Hello {props.username}</h1>
                <p>i help you manage your activity:)</p>
        </div>
    )
}
export default Header;