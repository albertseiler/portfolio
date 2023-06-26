const Hero = ({ resultRef }) => {

    const handleClick = (e) => {
        resultRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="hero-section bounce-in-left">
            <h1>Hi, my name is <br /><span className="my-name">Albert-Alexandru Seiler</span>  <br /> Front End Developer</h1>
            <div className="btn-container">
                <button type="button" className="hero-btn hithere" onClick={handleClick}>know more</button>
            </div>

        </div>
    )
}
export default Hero