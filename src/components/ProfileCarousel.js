import React from 'react';
// import { Contact } from './Contact';
import '../styles.css';

export const ProfileCarousel = () => {
    
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" data-interval="10000">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="img-fluid z-depth-20 rounded-circle profile" src="https://profile-dms-pictures.s3.amazonaws.com/Profile_Picture.JPG" alt="First slide"/>
                </div>
                {/* <div className="carousel-item">
                  <img className="img-fluid z-depth-2 rounded-circle profile" src="https://profile-dms-pictures.s3.amazonaws.com/slotcanyon_UT_sq.png" alt="Second slide"/>
                </div> */}
                {/* <div className="carousel-item">
                  <img className="img-fluid z-depth-2 rounded-circle profile" src="https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/35552183_905706676656_4769851135450152960_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=C2KS-ogdd_4AX-sAZcT&_nc_ht=scontent.fsan1-1.fna&oh=d5ba354d38fefdb6ce2190d8ad15e3fb&oe=5F8B6390" alt="Third slide"/>
                </div> */}
              </div>
              <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
    )
}