import Daniel from "../../media/home/daniel.png";
import ProjectDescription from "../../components/ProjectDescription";
import CenterSection from "../../components/CenterSection";

export default function REV() {
return (
<div>
    <ProjectDescription
    title="REV Aeroshell"
    text="Structural chassis for the Rice Electric Vehicle competition team, built for integrity and aerodynamic performance"
    imageSrc={Daniel}
    />


    <CenterSection
                title = "Project Overview"
                text = "This project came through an extracurricular club--Rice Electric Vehicle. In preparation for the annual competition, I aided in designing and manufacturing a new aeroshell."
            /> 
        
             <CenterSection
                title = "Problem Statement"
                text = "Lorem ipsum random text"
            /> 
        
             <CenterSection
                title = "Design Process"
                text = "Lorem ipsum random text"
            /> 
        
             <CenterSection
                title = "Prototyping"
                text = "Lorem ipsum random text"
            /> 
        
             <CenterSection
                title = "Testing"
                text = "Lorem ipsum random text"
            /> 
        
             <CenterSection
                title = "Reflection"
                text = "Lorem ipsum random text"
            /> 

</div>
);
}
