import React from 'react'
import Hero from './Hero/Hero'
import Slider from './Slider/Slider'

const HomePage = () => {

    return(
    <main>
      <Hero />

      <section className="homeExploreSection">
        <h6>h6</h6>
        <img src='./Images/homeComputer.png' alt="NZXT computer" className="homeExploreImage"/>

        <p className="homeExploreP">We have a variaty of custom build computers for those who are looking to get into gaming. These computers are guaranteed provide you the needs to start gaming all different types of games, from triple a games to indie games.</p>
        <a href="/products" className="anchorButtonExplore"><button className="homeExploreButton">Explore!</button></a>
      </section>
      <Slider />
      <section className="homeContactSection">
          <h6>h6</h6>
          <p className="homeContactP">Do you have any questions?</p>
          <a href="/contact" className="homeContactAnchor homeContactButton">Contact Us!!</a>
          <img src='./Images/heroContact.jpg' alt="contact us" className="homeContactImage"/>
      </section>
      
    </main>
    )
};

export default HomePage