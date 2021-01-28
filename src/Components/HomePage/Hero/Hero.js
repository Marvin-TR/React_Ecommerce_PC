import React from 'react'
import heroImage from './heroHome.jpeg'

const heroStyles = {
    backgroundImage:`url(${heroImage})`
}
const Hero = () => (
    <section class="heroHome" style={heroStyles}>
        <div>
            <h1>Pear Computers</h1>
        </div>
    </section>
)

export default Hero