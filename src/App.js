import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import "./App.css";
import Image1 from "./assets/Image1.jpg";
import Image2 from "./assets/Image2.jpg";
import Image3 from "./assets/Image3.jpg";
import Grid from './Components/Grid/Grid.js'
import OverlayImage from "./Components/OverlayImage/OverlayImage";
import Testimonial from './Components/Testimonial/Testimony'
import Logo from './assets/logo.jpeg'

function App() {
  const images = [
    Image1,
    Image2,
    Image3,
    // Add more image URLs as needed
  ];
  const testimonialData = [
    {
      name: 'Rohit Singh',
      position: 'CEO, Company XYZ',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      avatar: 'https://media.licdn.com/dms/image/C4D03AQGLmI6A6Th2oQ/profile-displayphoto-shrink_800_800/0/1651142727020?e=2147483647&v=beta&t=WhhNRRaeyvJXiDlNecv7J3KJRKClzCWmX7lbW_qgsds',
    },
    {
      name: 'Shivam Gupta',
      position: 'COO, Company ABC',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      avatar: 'https://media.licdn.com/dms/image/D4D03AQEISRY-tWP7xw/profile-displayphoto-shrink_800_800/0/1665259546664?e=2147483647&v=beta&t=T2iHCRQUEDZCYu0AeazuMGy0nYBS7V-pxxUz8Wveeqc',
    },
    {
      name: 'Deepak',
      position: 'COO, Company ABC',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      avatar: 'https://media.licdn.com/dms/image/D4D03AQHqI2aETI0gvw/profile-displayphoto-shrink_800_800/0/1684571724093?e=2147483647&v=beta&t=TALBLB60iIkELKOAbup46qDZejx14wmGlIAeAXTUpMM',
    },
    {
      name: 'Namita',
      position: 'COO, Company ABC',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      avatar: 'https://asamnews.com/wp-content/uploads/2019/02/thispersondoesnotexist.com_.jpg',
    },
    // Add more testimonial data as needed
  ];
  
  return (
    <div className="App">
      <Header />
      <Slider images={images} />
      <div
        style={{
          background: "#f9f9f9",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "50px 10px" ,
          width:'40%',
          margin:'auto'
        }}
      >
       <OverlayImage src="https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&w=260" text={"We are providing all types of Accounting , Financial and Tax   services like, GST, TDS, Income Tax, Corporate Tax, Advance Tax     etc."}/>


        <div className="text" style={{ width: "50%" }}>
         <div style={{color:'#ecf0f1',fontWeight:'600px', padding:'30px', width:'80%', margin:'10px', borderRadius:'10px', backgroundColor:'#7f8c8d'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
          volutpat tellus, non facilisis ante. In hac habitasse platea dictumst.
          Nulla facilisi. Maecenas euismod diam et risus malesuada hendrerit.
          Nunc et diam non libero lacinia ultrices id vel libero. Sed vel
          vehicula neque, eu vestibulum urna. Sed sit amet elit vel justo
          volutpat sodales ac nec quam.</div>
          <div><button style={{border:'none', padding:'12px 20px', background:'#2c3e50', color:'white', fontSize:'18px',borderRadius:'10px'}}>Read More</button>
          </div>
        </div>
      </div>

    <div className="services" style={{background:'#bdc3c7', padding:'50px 0'}}>
    <h2 style={{color:'black', fontSize:'54px'}}>Our Services</h2>
      <Grid dimension={3}/>
    </div>
     <div className="testimony" style={{padding:'50px 0'}}>
     <h2>Testimonials</h2>
      <div className="testimonial-container">
        {testimonialData.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} />
        ))}
      </div>
     </div>

      {/* FOOTER */}
      <footer>
        <div class="footer-container">
            <div class="footer-logo">
                <img src={Logo} alt="Company Logo"/>
                <p>Your Company Name</p>
            </div>
            <div class="footer-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-contact">
                <p>Contact Information:</p>
                <p>Email: info@example.com</p>
                <p>Phone: +1-123-456-7890</p>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
