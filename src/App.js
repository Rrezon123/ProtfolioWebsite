import React from 'react';

function App() {
  return (
    <div className="App">
        
          
        <div id="preloader">
          <div id="ctn-preloader" className="ctn-preloader">
            <div className="animation-preloader">
              <div className="spinner" />
              <div className="txt-loading">
                <span data-text-preloader="R" className="letters-loading">
                  R
                </span>
                <span data-text-preloader="r" className="letters-loading">
                  r
                </span>
                <span data-text-preloader="e" className="letters-loading">
                  e
                </span>
                <span data-text-preloader="z" className="letters-loading">
                  z
                </span>
                <span data-text-preloader="o" className="letters-loading">
                  o
                </span>
                <span data-text-preloader="n" className="letters-loading">
                  n
                </span>
              </div>
              <p className="text-center">Loading</p>
            </div>
            <div className="loader">
              <div className="row">
                <div className="col-3 loader-section section-left">
                  <div className="bg" />
                </div>
                <div className="col-3 loader-section section-left">
                  <div className="bg" />
                </div>
                <div className="col-3 loader-section section-right">
                  <div className="bg" />
                </div>
                <div className="col-3 loader-section section-right">
                  <div className="bg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body_wrapper">
          <header className="header_area">
            <nav className="navbar navbar-expand-lg menu_one menu_four hosting_menu">
              <div className="container">
                <a className="navbar-brand sticky_logo" href="#home"><img src="/img/logoGreek.png" srcSet="/img/logoGreek.png" alt="logoGreek" id="logo" /></a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="menu_toggle">
                    <span className="hamburger">
                      <span />
                      <span />
                      <span />
                    </span>
                    <span className="hamburger-cross">
                      <span />
                      <span />
                    </span>
                  </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav menu w_menu ml-auto">
                    <li className="nav-item dropdown submenu mega_menu mega_menu_two active">
                      <a className="nav-link dropdown-toggle" href="#home" role="button" aria-haspopup="true" aria-expanded="false">
                        Home
                      </a>
                    </li>
                    <li className="dropdown submenu nav-item"><a title="Pages" className="dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false" href="#work">Work</a>
                    </li>
                    <li className="nav-item dropdown submenu mega_menu">
                      <a className="nav-link dropdown-toggle" href="#projects" role="button" aria-haspopup="true" aria-expanded="false">
                        Projects
                      </a>
                    </li>     
                    <li className="nav-item dropdown submenu mega_menu">
                      <a className="nav-link dropdown-toggle" href="#blog" role="button" aria-haspopup="true" aria-expanded="false">
                        Blog
                      </a>
                    </li> 
                    <li className="nav-item dropdown submenu mega_menu">
                      <a className="nav-link dropdown-toggle" href="#contact" role="button" aria-haspopup="true" aria-expanded="false">
                        Contact
                      </a>
                    </li>                          
                  </ul>
                  <a className="btn_get btn_hover hidden-sm hidden-xs" href="#home">About Me</a>
                </div>
              </div>
            </nav>
          </header>
          <section className="hosting_banner_area" id="home">           
            <div className="word">CODE SPACE </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-7 d-flex align-items-center">
                  <div className="hosting_content">
                    <h2 className="wow fadeInUp" data-wow-delay="0.3s">Rrezon Pllana</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.5s">“Cogito,ergo sum“</p>
                    <a href className="hosting_btn btn_hover wow fadeInUp" data-wow-delay="0.7s">Get in touch</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="skills">
            <ul className="lines">
              <li className="line l--0">
                <span className="line__label title">
                  Skill level:&nbsp;&nbsp;
                </span>
              </li>
              <li className="line l--25">
                <span className="line__label">
                  The basics
                </span>
              </li>
              <li className="line l--50">
                <span className="line__label">
                  Advanced
                </span>
              </li>
              <li className="line l--75">
                <span className="line__label">
                  Seasoned
                </span>
              </li>
              <li className="line l--100">
                <span className="line__label">
                  Expert
                </span>
              </li>
            </ul>
            <div className="charts">
              <div className="chart chart--dev">
                <span className="chart__title">&nbsp;Development</span>
                <ul className="chart--horiz">
                  <li className="chart__bar" style={{width: '68%'}}>
                    <span className="chart__label">
                      HTML5
                    </span>
                  </li>
                  <li className="chart__bar" style={{width: '68%'}}>
                    <span className="chart__label">
                      CSS3 &amp; SCSS &amp; CSS in JS
                    </span>
                  </li>
                  <li className="chart__bar" style={{width: '70%'}}>
                    <span className="chart__label">
                      JavaScript
                    </span>
                  </li>
                  <li className="chart__bar" style={{width: '40%'}}>
                    <span className="chart__label">
                      ReactJS
                    </span>
                  </li>
                  <li className="chart__bar" style={{width: '70%'}}>
                    <span className="chart__label">
                      Python
                    </span>
                  </li>
                  <li className="chart__bar" style={{width: '60%'}}>
                    <span className="chart__label">
                      C++
                    </span>
                  </li>
                  <li className="chart__bar" style={{width: '88%'}}>
                    <span className="chart__label">
                      Java
                    </span>
                  </li>
                  <li className="chart__bar" style={{width: '50%'}}>
                    <span className="chart__label">
                      NodeJS
                    </span>
                  </li>
                  <li className="chart__bar" style={{width: '20%'}}>
                    <span className="chart__label">
                      .NET
                    </span>
                  </li>
                  <li className="chart__bar" style={{width: '60%'}}>
                    <span className="chart__label">
                      SQL
                    </span>
                  </li>
                  <li className="chart__bar" style={{width: '60%'}}>
                    <span className="chart__label">
                      Sitecore
                    </span>
                  </li>
                </ul>
              </div>
              <div className="chart chart--prod">
                <span className="chart__title">&nbsp;Productivity</span>
                <ul className="chart--horiz">
                  <li className="chart__bar" style={{width: '75%'}}>
                    <span className="chart__label">
                      Git + Github, Bitbucket &amp; Sourcetree
                    </span>
                  </li>
                  <li className="chart__bar" style={{width: '90%'}}>
                    <span className="chart__label">
                      Microsoft Office
                    </span>
                  </li>
                </ul>
              </div>
              <div className="chart chart--design">
                <span className="chart__title">&nbsp;Design</span>
                <ul className="chart--horiz">
                  <li className="chart__bar" style={{width: '40%'}}>
                    <span className="chart__label">
                      Sketch
                    </span>
                  </li>
                  <li className="chart__bar" style={{width: '70%'}}>
                    <span className="chart__label">
                      Photoshop
                    </span>
                  </li>
                  <li className="chart__bar" style={{width: '35%'}}>
                    <span className="chart__label">
                      Illustrator
                    </span>
                  </li>
                  <li className="chart__bar" style={{width: '80%'}}>
                    <span className="chart__label">
                      User Experience
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <section className="experts_team_area sec_pad">
            <div className="container" id="projects">
              <div className="sec_title text-center mb_70">
                <h2 className="f_p f_size_30 l_height30 f_700 t_color3 mb_20 wow fadeInUp" data-wow-delay="0.2s">My Projects</h2>
                <p className="f_400 f_size_16 wow fadeInUp" data-wow-delay="0.4s">Top <strong>Projects</strong></p>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <a href="https://github.com/Rrezon123/A.I.-FlappyBird-">
                    <div className="ex_team_item wow fadeInUp" data-wow-delay="0.2s">
                      <img src="/img/fappy.jpg" alt="" className="fit-image" />
                      <div className="team_content">
                        <h3 className="f_p f_size_16 f_600 t_color3">Flappy Bird</h3>
                        <h5>Machine Learning Project</h5>
                      </div>
                      <div className="hover_content">  
                        <div className="n_hover_content">  
                          <div className="br" />
                          <h3 className="f_p f_size_16 f_600 w_color">Flappy Bird</h3>
                          <h5>Machine Learning Project</h5>
                        </div>
                      </div>
                    </div>
                  </a></div><a href="https://github.com/Rrezon123/A.I.-FlappyBird-">
                </a>
                <div className="col-lg-3 col-sm-6">
                  <a href="https://github.com/Rrezon123/Voice-Assistant">
                    <div className="ex_team_item wow fadeInUp" data-wow-delay="0.4s">
                      <img src="/img/voice-recognition.jpg" alt="" className="fit-image" />
                      <div className="team_content">
                        <h3 className="f_p f_size_16 f_600 t_color3">Voice-Asisstant</h3>
                        <h5>Python Project</h5>
                      </div>
                      <div className="hover_content">
                        <div className="n_hover_content">
                          <div className="br" />
                          <h3 className="f_p f_size_16 f_600 w_color">Voice-Asisstant</h3>
                          <h5>Python Project</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="https://github.com/Rrezon123/FaceRecognition">
                  </a><div className="ex_team_item wow fadeInUp" data-wow-delay="0.6s"><a href="#">
                      <img src="/img/face.jpg" alt="" className="fit-image" />
                      <div className="team_content">
                        <h3 className="f_p f_size_16 f_600 t_color3">Face-Recognition</h3>
                        <h5>Python scikit-learn</h5>
                      </div>
                    </a><div className="hover_content"><a href="#">
                      </a><div className="n_hover_content"><a href="#">
                        </a><ul className="list-unstyled"><a href="#">
                          </a><li><a href="#" /><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
                        </ul>
                        <div className="br" />
                        <h3 className="f_p f_size_16 f_600 w_color">Face-Recognition</h3>
                        <h5>Python scikit-learn</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="https://github.com/Rrezon123/LaneRecognition">
                    <div className="ex_team_item wow fadeInUp" data-wow-delay="0.8s">
                      <img src="/img/lanerecog.png" alt="" className="fit-image" />
                      <div className="team_content">
                        <h3 className="f_p f_size_16 f_600 t_color3">Lane Recognition</h3>
                        <h5>Python scikit-learn</h5>
                      </div>
                      <div className="hover_content">
                        <div className="n_hover_content">
                          <div className="br" />
                          <h3 className="f_p f_size_16 f_600 w_color">Lane Recognition</h3>
                          <h5>Python scikit-learn</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <span />
                <div className="col-lg-3 col-sm-6" style={{marginLeft: '150px'}}>
                  <a href="https://github.com/Rrezon123/DinoGame">
                    <div className="ex_team_item wow fadeInUp" data-wow-delay="0.8s">
                      <img src="/img/dino.jpg" alt="" className="fit-image" />
                      <div className="team_content">
                        <h3 className="f_p f_size_16 f_600 t_color3">DinoGame</h3>
                        <h5>Pygame</h5>
                      </div>
                      <div className="hover_content">
                        <div className="n_hover_content">
                          <div className="br" />
                          <h3 className="f_p f_size_16 f_600 w_color">DinoGame</h3>
                          <h5>Pygame</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="https://github.com/Rrezon123/A-star-Pathfinding">
                    <div className="ex_team_item wow fadeInUp" data-wow-delay="0.8s">
                      <img src="/img/a-star-example.png " alt="" className="fit-image" />
                      <div className="team_content">
                        <h3 className="f_p f_size_16 f_600 t_color3">A* Pathfinding</h3>
                        <h5>Python</h5>
                      </div>
                      <div className="hover_content">
                        <div className="n_hover_content">
                          <div className="br" />
                          <h3 className="f_p f_size_16 f_600 w_color">A* Pathfinding</h3> 
                          <h5>Python</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </div> 
                <div className="col-lg-3 col-sm-6">
                  <a href="https://github.com/Rrezon123/CarlaSimulation" />
                  <div className="ex_team_item wow fadeInUp" data-wow-delay="0.8s">
                    <img src="/img/carla.jpeg" alt="" className="fit-image" />
                    <div className="team_content">
                      <h3 className="f_p f_size_16 f_600 t_color3">Clara Siulator Algorithm</h3>
                      <h5>Python</h5>
                    </div>
                    <div className="hover_content">
                      <div className="n_hover_content">
                        <div className="br" />
                        <h3 className="f_p f_size_16 f_600 w_color">Clara Siulator Algorithm</h3> 
                        <h5>Python</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></section>
          <section className="h_action_area">
            <div className="container" id="work">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="h_action_img">
                    <img className="fit-image" src="/img/kaggle1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="h_action_content">
                    <h2>Working on projects at Kaggle as Data Scientist </h2>
                    <p>Spiffing pukka show off show off pick your nose and blow off easy peasy buggered hotpot Harry, pardon me blatant.!</p>
                    <a href className="hosting_btn btn_hover">Product Docs</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="h_blog_area sec_pad">
            <div className="container" id="blog">
              <div className="hosting_title text-center">
                <h2>Our Latest News</h2>
                <p>The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey<br /> Why gormless, pear shaped.!</p>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="h_blog_item">
                    <img className="fit-image" src="/img/Kubernetes.png" alt="" />
                    <div className="h_blog_content">
                      <a href="#" className="post_time"><i className="icon_clock_alt" />March 20, 2019</a>
                      <a href="#"><h3>How To Deploy a PHP Application with Kubernetes on Ubuntu</h3></a>
                      <div className="post-info-bottom">
                        <a href="#" className="learn_btn_two">Read More <i className="arrow_right" /></a>
                        <a className="post-info-comments" href="#">
                          <i className="icon_comment_alt" aria-hidden="true" />
                          <span>3 Comments</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="h_blog_item">
                    <img className="fit-image" src="/img/doker.png" alt="" />
                    <div className="h_blog_content">
                      <a href="#" className="post_time"><i className="icon_clock_alt" />April 22, 2019</a>
                      <a href="#"><h3>How To Build a Node.js Application with Docker</h3></a>
                      <div className="post-info-bottom">
                        <a href="#" className="learn_btn_two">Read More <i className="arrow_right" /></a>
                        <a className="post-info-comments" href="#">
                          <i className="icon_comment_alt" aria-hidden="true" />
                          <span>02 Comments</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="h_action_promo_area">
            <div className="overlay_bg" style={{background: 'url("/img/transistors.jpg")'}} />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="h_promo_content">
                    <h2>If you want to help, become a Patreon.</h2>
                    <p>Giveaway bonus at the end of every month. </p>
                  </div>
                </div>
                <div className="col-md-4 text-right">
                  <a href="https://www.patreon.com/" className="hosting_btn btn_hover">Donate</a>
                </div>
              </div>
            </div>
          </section>
          <section id="contact">
            <h1 className="section-header">CONTACT</h1>
            <div className="contact-wrapper">
              {/*-------------- 
          
                CONTACT PAGE LEFT 
              
                ---------------*/} 
              <form className="form-horizontal" role="form" method="post" action="contact.php">
                <div className="form-group">
                  <div className="col-sm-12">
                    <input type="text" className="form-control" id="name" placeholder="NAME" name="name" defaultValue />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-12">
                    <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" defaultValue />
                  </div>
                </div>
                <textarea className="form-control" rows={10} placeholder="MESSAGE" name="message" defaultValue={""} />
                <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                  <div className="button">
                    <i className="fa fa-paper-plane" /><span className="send-text">SEND</span>
                  </div>
                </button>
              </form>
              {/*-------------- 
          
                CONTACT PAGE RIGHT 
              
                ---------------*/} 
              <div className="direct-contact-container">
                <ul className="contact-list">
                  <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Seattle | WA</span></i></li>
                  <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
                  <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">emailme@gmail.com</a></span></i></li>
                </ul>
                <hr />
                <div className="copyright">© ALL OF THE RIGHTS RESERVED</div>
              </div>
            </div>
          </section>
          <footer className="footer_area h_footer_dark">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="f_widget dark_widget company_widget">
                    <p>© 2020 Rrezon Pllana. All rights reserved.</p>
                    <div className="f_social_icon">
                      <a href="https://www.facebook.com/profile.php?id=100014038440600" className="ti-facebook" />
                      <a href="https://twitter.com/RrezonP" className="ti-twitter-alt" />
                      <a href="#" className="ti-vimeo-alt" />
                      <a href="#" className="ti-pinterest" />
                    </div>
                  </div>
                </div>   
              </div>
            </div>
            <svg viewBox="0 0 120 28">
              <defs> 
                <mask id="xxx">
                  <circle cx={7} cy={12} r={40} fill="#fff" />
                </mask>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation={2} result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="
                          1 0 0 0 0  
                          0 1 0 0 0  
                          0 0 1 0 0  
                          0 0 0 13 -9" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
                <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
              </defs> 
              <use id="wave3" className="wave" xlinkHref="#wave" x={0} y={-2} /> 
              <use id="wave2" className="wave" xlinkHref="#wave" x={0} y={0} />
              <g className="topball">
                <a className="balls" href="#home" role="button">
                  <circle className="ball" cx={110} cy={8} r={4} stroke="none" strokeWidth={0} fill="purple" />
                  <g className="arrow">
                    <polyline className points="108,8 110,6 112,8" fill="none" strokeWidth={1} />
                    <polyline className points="110,6 110,10.5" fill="none" strokeWidth={1} />
                  </g>
                </a>
              </g>
              <g className="gooeff">
                <circle className="drop drop1" cx={20} cy={2} r="1.8" />
                <circle className="drop drop2" cx={25} cy="2.5" r="1.5" />
                <circle className="drop drop3" cx={16} cy="2.8" r="1.2" />
                <use id="wave1" className="wave" xlinkHref="#wave" x={0} y={1} />
                {/* g mask="url(#xxx)">
                   <path   id="wave1"  class="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
                   </g>
                 </g */}
              </g></svg>
          </footer>
        </div>
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      
    </div>
  );
}

export default App;
