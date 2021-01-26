import React from 'react'

const ContactPage = () => (
    <section className="contactHero">
        <h6>h6</h6>
        <div className="moveForm">
          <form action="#" method="GET">

            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" placeholder="Your full name" required />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="number" placeholder="Your phone number" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />

            <label htmlFor="comment">Comment:</label>
            <textarea id="comment" name="comment" rows="4" cols="50" placeholder="Please leave your comment here..." required></textarea>

            <input type="submit" className="submit" />
          </form>

        </div>
      </section>
);

export default ContactPage