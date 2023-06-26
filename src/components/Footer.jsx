import { ImLinkedin } from 'react-icons/im'
import { AiFillGithub } from 'react-icons/ai'
import { ImArrowUp } from 'react-icons/im'


const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='back-to-top bounce'>
                <a href="#" onClick={scrollToTop}><ImArrowUp /></a>
            </div>
            <div className='footer'>
                <a href="https://www.linkedin.com/in/albert-seiler-94b75724b/" target='_blank' rel="noreferrer"><ImLinkedin /></a>
                <a href="https://github.com/albertseiler" target='_blank' rel="noreferrer"><AiFillGithub /></a>
            </div>

        </div>
    )
}
export default Footer