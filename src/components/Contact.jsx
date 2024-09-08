import "./css/Contact.css";

function Contact() {

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Have questions or need support? Reach out to us!</p>
      <form action="https://formsubmit.co/41930605c3d9a45c598270cd40d75c57" method="POST" id="contact-form">
        {/* HoneyPot */}
        <input type="text" name="_honey" style={{display: 'none'}} />

        {/* Disable captcha */}
        <input type="hidden" name="_captcha" value="false" />
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
