
const Header = () => {
    return (
        <div className='header-top'>
            <h1>Colloabora</h1>
            <div className='list-div'>
                <ul className='my-list'>
                <a href="#"><li className="Home">Home</li></a>
                <a href="/signup"><li className="SignUp">Sign Up</li></a>
                <a href="/login"><li className="Login">Login</li></a>
                <a href="/contact"><li className="ContactUs">Contact Us</li></a>
                </ul>
            </div>
        </div>
  )
}

export default Header