import React from "react";
import "../App.css";
import bannerImage from "./Assests/bannerImage.svg";

const Home = () => {
  return (
    <>
      {/* navbar */}
      <section className="m-3 p-3">
        <nav className="navbar  navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              VNumber
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-ellipsis-vertical navbar-toggler-icon"></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Vip Numbers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contact us
                  </a>
                </li>
              </ul>
              <button className="btn btn-outline-success" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </section>
      {/* banner section */}
      <section className="mt-4">
        <div className="container">
          <div className="row">
            <div
              className="col col-xl-6 col-lg-12 col-md-12 col-sm-12"
              data-aos="fade-right"
            >
              <div className="col1 mt-4 pt-4">
                <h1 className="banner-title">Vip number</h1>
                <hr />
                <p className="banner-para">Get your vip number at one click.</p>
                <p className="banner-subpara">
                  Get your vip number with with simple steps and you can
                  customize your number at one click.
                </p>
                <button className="btn btn-primary">Buy now</button>
              </div>
            </div>
            <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="mt-4 bannerImage">
                <img
                  src={bannerImage}
                  alt="bannerImage"
                  data-aos="fade-left"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* category */}
      <section className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="col3 mt-4 pt-4">
                <h1 className="discover-title">Vip Number</h1>
                <hr />
                <p className="discover-para" data-aos="fade-right">
                  Categories
                </p>
                <button className="btn btn-primary">discover Categories</button>
              </div>
            </div>
            <div className="col col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="col4 d-flex justify-content-center flex-row">
                      <div class="d-flex justify-content-around align-items-center flex-column">
                        <div class="detail-card p-4">
                          <div class="icon">
                            <i class="fa-solid fa-fingerprint fa-2x"></i>
                          </div>

                          <h1 class="launch-number mt-3">Unique Number</h1>
                        </div>
                        <div class="detail-card p-4 mt-3" data-aos="fade-up">
                          <div class="icon">
                            <i class="fa-solid fa-a fa-2x"></i>
                          </div>
                          <h1 class="launch-number mt-3">AB AB AB Numbers</h1>
                        </div>
                      </div>
                      <div class="d-flex justify-content-around flex-column mx-3">
                        <div class="detail-card mt-4 p-4">
                          <div class="icon">
                            <i class="fa-solid fa-b fa-2x"></i>
                          </div>

                          <h1 class="launch-number mt-3">AAA BBB Numbers</h1>
                        </div>
                        <div class="detail-card p-4 mt-4" data-aos="fade-up">
                          <div class="icon">
                            <i class="fa-solid fa-1 fa-2x"></i>
                          </div>

                          <h1 class="launch-number mt-3">123456 Numbers</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="col4 d-flex justify-content-center flex-row">
                      <div class="d-flex justify-content-around align-items-center flex-column">
                        <div class="detail-card p-4 mt-3">
                          <div class="icon">
                            <i class="fa-solid fa-fingerprint fa-2x"></i>
                          </div>

                          <h1 class="launch-number mt-3">Mirror Number</h1>
                        </div>
                        <div class="detail-card p-4 mt-3" data-aos="fade-up">
                          <div class="icon">
                            <i class="fa-solid fa-a fa-2x"></i>
                          </div>
                          <h1 class="launch-number mt-3">
                            Semi Mirror Numbers
                          </h1>
                        </div>
                      </div>
                      <div class="d-flex justify-content-around flex-column mx-3">
                        <div class="detail-card mt-4 p-3">
                          <div class="icon">
                            <i class="fa-solid fa-b fa-2x"></i>
                          </div>
                          <h1 class="launch-number mt-3">2 digit Number</h1>
                        </div>
                        <div class="detail-card p-4 mt-4" data-aos="fade-up">
                          <div class="icon">
                            <i class="fa-solid fa-1 fa-2x"></i>
                          </div>

                          <h1 class="launch-number mt-3">786 Numbers</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="col4 d-flex justify-content-center flex-row">
                      <div class="d-flex justify-content-around align-items-center flex-column">
                        <div class="detail-card p-4" data-aos="fade-up">
                          <div class="icon">
                            <i class="fa-solid fa-fingerprint fa-2x"></i>
                          </div>

                          <h1 class="launch-number mt-3">Triple Number</h1>
                        </div>
                        <div class="detail-card p-4 mt-3" data-aos="fade-up">
                          <div class="icon">
                            <i class="fa-solid fa-a fa-2x"></i>
                          </div>
                          <h1 class="launch-number mt-3">Tetra Numbers</h1>
                        </div>
                      </div>
                      <div class="d-flex justify-content-around flex-column mx-3">
                        <div class="detail-card mt-4 p-4">
                          <div class="icon">
                            <i class="fa-solid fa-b fa-2x"></i>
                          </div>

                          <h1 class="launch-number mt-3">Penta Numbers</h1>
                        </div>
                        <div class="detail-card p-4 mt-4" data-aos="fade-up">
                          <div class="icon">
                            <i class="fa-solid fa-1 fa-2x"></i>
                          </div>

                          <h1 class="launch-number mt-3">Hexa Numbers</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* launches*/}
      <section className="mt-4">
        <div className="container">
          <dicov className="row">
            <div className="col col-xl-8  order-xl-1 order-lg-2 order-md-2 order-sm-2 order-2">
              <div class="col4 d-flex justify-content-center flex-row">
                <div className="d-flex justify-content-around align-items-center flex-column">
                  <div class="detail-card p-4">
                    <h1 class="launch-number">805 805 0023</h1>
                    <h2 class="sumTotal">Sum total: 31 = 4</h2>
                    <div class="d-flex justify-content-around align-items-center flex-row mt-2">
                      <button class="btn btn-primary">Buy now</button>
                      <button class="btn btn-primary mx-3">
                        View detail's
                      </button>
                    </div>
                  </div>
                  <div class="detail-card p-4 mt-3" data-aos="fade-up">
                    <h1 class="launch-number">805 805 0023</h1>
                    <h2 class="sumTotal">Sum total: 31 = 4</h2>
                    <div class="d-flex justify-content-around align-items-center flex-row mt-2">
                      <button class="btn btn-primary">Buy now</button>
                      <button class="btn btn-primary mx-3">
                        View detail's
                      </button>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-around flex-column mx-3">
                  <div class="detail-card mt-4 p-4">
                    <h1 class="launch-number">805 805 0023</h1>
                    <h2 class="sumTotal">Sum total: 31 = 4</h2>
                    <div class="d-flex justify-content-around align-items-center flex-row mt-2">
                      <button class="btn btn-primary">Buy now</button>
                      <button class="btn btn-primary mx-3">
                        View detail's
                      </button>
                    </div>
                  </div>
                  <div class="detail-card mt-4 p-4" data-aos="fade-up">
                    <h1 class="launch-number">805 805 0023</h1>
                    <h2 class="sumTotal">Sum total: 31 = 4</h2>
                    <div class="d-flex justify-content-around align-items-center flex-row mt-2">
                      <button class="btn btn-primary">Buy now</button>
                      <button class="btn btn-primary mx-3">
                        View detail's
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-4  order-xl-2 order-lg-1 order-md-1 order-sm-1 order-1">
              <div className="col3 mt-4 pt-4">
                <h1 className="discover-title">Vip Number</h1>
                <hr />
                <p className="discover-para" data-aos="fade-left">
                  New launches
                </p>
                <button className="btn btn-primary">
                  discover New Numbers
                </button>
              </div>
            </div>
          </dicov>
        </div>
      </section>
      {/*step section */}
      <section className="mt-4 pt-4 steps">
        <div className="container">
          <div className="row">
            <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="col6">
                <h1 className="step-title">Qucik steps</h1>
                <hr />
                <p className="step-para">
                  Easy Steps to get your <h1>Vip Number</h1>
                </p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9kV-wiGKs3Y"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  data-aos="fade-up"
                ></iframe>
              </div>
            </div>
            <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="col5">
                <div className="stepFollow p-3">
                  <div className="d-flex justify-content-start align-items-center ">
                    <div className="icon mx-3">
                      <i class="fa-solid fa-eye fa-2x"></i>
                    </div>
                    <h1 className="follow-title pb-4">
                      Find your desired number
                    </h1>
                  </div>
                  <p className="follow-para mx-3 mt-3">
                    Select your favourable mobile number. The one you like and
                    which suits your personality.
                  </p>
                </div>
                <div className="stepFollow p-3 mt-3">
                  <div className="d-flex justify-content-start align-items-center ">
                    <div className="icon mx-3">
                      <i class="fa-solid fa-credit-card fa-2x"></i>
                    </div>
                    <h1 className="follow-title pb-4">MAKE THE PAYMENT</h1>
                  </div>
                  <p className="follow-para mx-3 mt-3">
                    Once your chosen mobile number is finalised, proceed to
                    checkout and make the payment.
                  </p>
                </div>
                <div className="stepFollow p-3 mt-3">
                  <div className="d-flex justify-content-start align-items-center ">
                    <div className="icon mx-3">
                      <i class="fa-solid fa-qrcode fa-2x"></i>
                    </div>
                    <h1 className="follow-title pb-4">
                      GET THE UNIQUE PORTING CODE
                    </h1>
                  </div>
                  <p className="follow-para mx-3 mt-3">
                    You will receive a Unique Porting Code (UPC) along with
                    invoice within 24 hour on your Registered Mobile Number.
                  </p>
                </div>
                <div className="stepFollow p-3 mt-3">
                  <div className="d-flex justify-content-start align-items-center ">
                    <div className="icon mx-3">
                      <i class="fa-solid fa-sim-card fa-2x"></i>
                    </div>
                    <h1 className="follow-title pb-4">GET YOUR SIM CARD</h1>
                  </div>
                  <p className="follow-para mx-3 mt-3">
                    Visit any Telecom Gallery or Mobile Shop and port the
                    number. You can get your number ported to any network, on
                    your Name.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* dream number section */}
      <section className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col col-xl-4 ">
              <div className="col3 mt-4 pt-4">
                <h1 className="discover-title">Vip Number</h1>
                <hr />
                <p className="discover-para" data-aos="fade-right">
                  Dream Number
                </p>
                <button className="btn btn-primary">
                  Get your dream number
                </button>
              </div>
            </div>
            <div className="col col-xl-8">
              <div class="col4 d-flex justify-content-center flex-row">
                <div className="d-flex justify-content-around align-items-center flex-column">
                  <div class="detail-card p-4">
                    <h1 class="launch-number">805 805 0023</h1>
                    <h2 class="sumTotal">Sum total: 31 = 4</h2>
                    <div class="d-flex justify-content-around align-items-center flex-row mt-2">
                      <button class="btn btn-primary">Buy now</button>
                      <button class="btn btn-primary mx-3">
                        View detail's
                      </button>
                    </div>
                  </div>
                  <div class="detail-card p-4 mt-3" data-aos="fade-up">
                    <h1 class="launch-number">805 805 0023</h1>
                    <h2 class="sumTotal">Sum total: 31 = 4</h2>
                    <div class="d-flex justify-content-around align-items-center flex-row mt-2">
                      <button class="btn btn-primary">Buy now</button>
                      <button class="btn btn-primary mx-3">
                        View detail's
                      </button>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-around flex-column mx-3">
                  <div class="detail-card mt-4 p-4">
                    <h1 class="launch-number">805 805 0023</h1>
                    <h2 class="sumTotal">Sum total: 31 = 4</h2>
                    <div class="d-flex justify-content-around align-items-center flex-row mt-2">
                      <button class="btn btn-primary">Buy now</button>
                      <button class="btn btn-primary mx-3">
                        View detail's
                      </button>
                    </div>
                  </div>
                  <div class="detail-card mt-4 p-4" data-aos="fade-up">
                    <h1 class="launch-number">805 805 0023</h1>
                    <h2 class="sumTotal">Sum total: 31 = 4</h2>
                    <div class="d-flex justify-content-around align-items-center flex-row mt-2">
                      <button class="btn btn-primary">Buy now</button>
                      <button class="btn btn-primary mx-3">
                        View detail's
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* review section */}
      <section class="review-section mt-4">
        <h1 class="review-title pt-3 d-flex justify-content-center align-items-center">
          Testimonial
        </h1>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="review">
                <h2 className="reviewer pt-3">Sachin kumar, Delhi</h2>
                <p className="review-para">
                  "I find this site very good value for money.Highly
                  recommended.You will get N Number of option and even the
                  prices are Good"
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="review">
                <h2 class="reviewer pt-3">Saurabh Chaudhary Baghpat, UP</h2>
                <p class="review-para">
                  "Very good service, I appreciate and recommend to trust this
                  organisation, I am from Baghpat, UP recently buy good mobile
                  number, worth for money.."
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="review">
                <h2 class="reviewer pt-3">
                  Sagar Kewlani Raipur, Chhattisgarh
                </h2>
                <p class="review-para">
                  "Amazing variety of numbers to choose from. Prices are also
                  very reasonable! Worth the money"
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="review">
                <h2 class="reviewer pt-3">Ankit Gupta ,Kanpur</h2>
                <p class="review-para">
                  "I find this site very good value for money.Highly
                  recommended.You will get N Number of option and even the
                  prices are Good"
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* customize section */}
      <section className="mt-4 customize">
        <div className="d-flex justify-content-center align-items-center flex-column pt-3">
          <h1 className="customize-title">customize your number</h1>
          <div className="container mt-3">
            <div className="row">
              <div className="col col-xl-3 col-12 col-sm-12 col-md-12">
                <div className="customize-card p-4">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <div className="card-icon">
                      <i class="fa-solid fa-cake-candles fa-3x"></i>
                    </div>
                    <h1 className="text-center">Birth Day</h1>
                    <p>Have your number talk of your birthday</p>
                  </div>
                </div>
              </div>
              <div className="col col-xl-3 col-12 col-sm-12 col-md-12">
                <div className="customize-card p-4">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <div className="card-icon">
                      <i class="fa-solid fa-7 fa-3x"></i>
                    </div>
                    <h1 className="text-center">lucky number</h1>
                    <p>Have a lucky number? make it your phone number</p>
                  </div>
                </div>
              </div>
              <div className="col col-xl-3 col-12 col-sm-12 col-md-12">
                <div className="customize-card p-4">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <div className="card-icon">
                      <i class="fa-brands fa-galactic-republic fa-3x"></i>
                    </div>
                    <h1 className="text-center">Numerology Numbers</h1>
                    <p>Have your number talk of your birthday</p>
                  </div>
                </div>
              </div>
              <div className="col col-xl-3 col-12 col-sm-12 col-md-12">
                <div className="customize-card p-4">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <div className="card-icon">
                      <i class="fa-solid fa-lock fa-2x"></i>
                    </div>
                    <h1 className="text-center">Area Pin code Number</h1>
                    <p>
                      Flat Number , building number, all can be in your phone
                      number
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*footer section */}
      <footer className="mt-4 pt-4 footer ">
        <div className="container">
          <div className="row">
            <div className="col col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="d-flex justify-content-start flex-column mt-2">
                <h1 className="heading">Contact us</h1>
                <p className="para">
                  Shop No 23, Old idea point, Main market, Police station Road,
                  Anupgarh Distt. Sri ganganagar Rajasthan 335701
                </p>
                <p className="para mb-3">Email: cs@vipnumberstore.in</p>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="d-flex justify-content-start flex-column mt-2">
                <h1 className="heading">Support</h1>
                <a href="#" className="footer-link">
                  Contact us
                </a>
                <a href="#" className="footer-link mt-3">
                  FAQ'S
                </a>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="d-flex justify-content-start flex-column mt-2">
                <h1 className="heading">We Accept</h1>
                <a href="#" className="footer-link">
                  Term & conditions
                </a>
                <a href="#" className="footer-link mt-3">
                  Privacy Policy
                </a>
                <a href="#" className="footer-link mt-3">
                  Refund policy
                </a>
              </div>
            </div>
            <div className="col col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="d-flex justify-content-start flex-column mt-2">
                <h1 className="heading">Social Media</h1>
                <div className="d-flex justify-content-start flex-row">
                  <div className="social-icon">
                    <i class="fa-brands fa-facebook-square"></i>
                  </div>
                  <div className="social-icon mx-3">
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                  <div className="social-icon">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Home;
