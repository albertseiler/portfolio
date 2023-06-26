import { forwardRef, } from 'react'
import picture from '../assets/images/me.jpg'


const More = forwardRef(function More(props, ref,) {

    return (
        <section className="more-container" ref={ref} >
            <h2>More About Me</h2>
            <div className='more-inside'>
                <img src={picture} alt="picture of me" />
                <p>I am a self taught front-end developer, who is passionate about building awesome websites and applications! I have currently learned and used HTML, CSS, Javascript and React. On personal level, I am self-driven, hard working, I am able to adapt very quick and overall I am very curious. Also, I am a really friendly person, who can fit in any team.
                    <br />
                    <br />
                    <div className='myskills'> My current skills:</div>
                    <br />
                    <br />
                    HTML, CSS, TAILWIND, Javascript, React, GIT
                </p>
            </div>
        </section>
    )
});
export default More