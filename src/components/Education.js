import React from 'react'
import "../App.css"

const Education = () => {
    return (
        <div>
            {/* <!-- Education--> */}
            <section className="resume-section" id="education" name="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">M.G.M's College of Engineering, Nanded</h3>
                            <div className="subheading mb-3">Bachelor of Engineering</div>
                            <div>Electronics and Telecommunication</div>
                            <p>CGPA: 5.58</p>
                        </div>
                        <div className="flex-shrink-0"><span className="timeline">August 2015  - Dec 2018</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Gramin Polytechnic, Dharmapuri, Parbhani</h3>
                            <div className="subheading mb-3">Diploma in engineering</div>
                            <div>Electronics and communication</div>
                            <p>Percentage: 62%</p>
                        </div>
                        <div className="flex-shrink-0"><span className="timeline">August 2010 - Jan 2015</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Madhavrao Patil High School, Nanded</h3>
                            <p>Percentage: 74%</p>
                        </div>
                        <div className="flex-shrink-0"><span className="timeline">Mar 2010</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </div>
    )
}

export default Education
