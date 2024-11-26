import React, { useEffect, useRef } from "react";

function Projects() {
    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);
    const imageRef3 = useRef(null);
    const imageRef4 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
                        entry.target.style.transform = "translateY(0)";
                        entry.target.style.opacity = "1";
                    } else {
                        entry.target.style.transform = "translateY(20px)";
                        entry.target.style.opacity = "0";
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (imageRef1.current) observer.observe(imageRef1.current);
        if (imageRef2.current) observer.observe(imageRef2.current);
        if (imageRef3.current) observer.observe(imageRef3.current);
        if (imageRef4.current) observer.observe(imageRef4.current);

        return () => {
            if (imageRef1.current) observer.unobserve(imageRef1.current);
            if (imageRef2.current) observer.unobserve(imageRef2.current);
            if (imageRef3.current) observer.unobserve(imageRef3.current);
            if (imageRef4.current) observer.unobserve(imageRef4.current);
        };
    }, []);

    return (
        <div className="container  pt-5 px-5 " id="projects">
            <h1 className="mt-5 container d-flex align-items-center justify-content-center">My Project Highlights</h1>


<div className="row my-5 py-5">
                <div className="col">
                    <div
                        className="image me-5"
                        ref={imageRef3}
                    >
                        <img
                            src="/images/zerodhaClone.png"
                            alt="Contact Us Project Image"
                        />
                    </div>
                </div>
                <div className="col project">
                    <div className="proj-para">
                        <h1 className="mb-4">Zerodha Clone</h1>
                        <p>
                        Zerodha Clone is a stock trading and investment platform simulation built using <b>React</b>  and <b>Bootstrap.</b> It replicates essential features of the Zerodha platform, including a user-friendly interface for stock market analysis, portfolio tracking, and executing trades. The project leverages React for a dynamic and responsive user experience, while Bootstrap ensures a sleek, mobile-first design. This clone serves as an educational tool for understanding trading platform structures and web development practices.
                        </p>
                        <b>Deployed on Github.</b>
                    </div>
                </div>
            </div>


            
<div className="row my-5 py-5">
                <div className="col">
                    <div
                        className="image me-5"
                        ref={imageRef4}
                      
                    >
                        <img
                            src="/images/airbnb.png"
                         
                            alt="Contact Us Project Image"
                        />
                    </div>
                </div>
                <div className="col project">
                    <div className="proj-para">
                        <h1 className="mb-4">Airbnb clone</h1>
                        <p>
                        Airbnb Clone is a dynamic web application that mimics the core functionality of Airbnb, developed using <b>HTML,</b> <b>CSS,</b><b>Bootstrap,</b> <b>EJS,</b> and <b>models</b>for data management. The project includes features such as property listings, user authentication, and booking functionality. EJS templates are used for seamless dynamic rendering. It serves as an excellent demonstration of creating scalable, interactive web applications and showcases the integration of server-side rendering and front-end styling. <br />
                        <b>Deployed on Github.</b>
                        </p>
                    </div>
                </div>
            </div>

            <div className="row my-5 py-5">
                <div className="col">
                    <div
                        className="image me-5"
                        ref={imageRef1}
                       
                    >
                        <img
                            src="/images/contactUs.png"
                        
                            alt="Contact Us Project Image"
                        />
                    </div>
                </div>
                <div className="col project">
                    <div className="proj-para">
                        <h1 className="mb-4">Enquiry Submission Form</h1>
                        <p>
                            The "Enquiry Submission Form & Message Form" allows users to easily input their name, email,
                            and message to make inquiries or provide feedback. It is a straightforward, user-friendly
                            form designed to facilitate communication between users and businesses or service providers,
                            ensuring efficient responses to user queries.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row my-5 py-5">
                <div className="col">
                    <div
                        className="image me-5"
                        ref={imageRef2}
                  
                    >
                        <img
                            src="/images/SpotifyClone.png"
                            
                            alt="Spotify Clone Project Image"
                        />
                    </div>
                </div>
                <div className="col project">
                    <div className="proj-para">
                        <h1 className="mb-4 h-sp">Spotify Clone</h1>
                        <p>
                            A Spotify Clone is a web-based music streaming application that replicates core features of
                            the original Spotify platform. It allows users to browse music libraries, play tracks,
                            create and manage playlists, and explore artist profiles.
                        </p>
                    </div>
                </div>
            </div>

           
        </div>
    );
}

export default Projects;

