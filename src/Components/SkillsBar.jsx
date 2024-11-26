function SkillsBar() {
    return (   <>
    <div className="container-sb mb-5 container mt-5" id="skills">
        <h1 className="me-5">Familiar Languages and <div className="mt-3">Technologies</div></h1>
        <div className="white-container">
<div className="title">HTML</div>
            <div className="skill-bar">
                <div className="skill-per">
                    <span className="tolltip">100%</span>
                </div>
            </div>

                <div className="title1">CSS</div>
                <div className="skill-bar1">
                    <div className="skill-per1">
                        <div className="tooltip1">85%</div>
                    </div>
                </div>

                <div className="title2">JavaScript</div>
                <div className="skill-bar2">
                    <div className="skill-per2">
                        <span className="tooltip2">60%</span>
                    </div>
                </div>

                <div className="title2">Bootstrap</div>
                <div className="skill-bar2">
                    <div className="skill-per2 Bootstrap">
                        <span className="tooltip3">90%</span>
                    </div>
                </div>

                <div className="title2">React</div>
                <div className="skill-bar2">
                    <div className="skill-per2">
                        <span className="tooltip2">60%</span>
                    </div>
                </div>
</div>

</div>

    </> );
}

export default SkillsBar;