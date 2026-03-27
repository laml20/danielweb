import Daniel from "../../media/home/daniel.png";
import ProjectDescription from "../../components/ProjectDescription";
import CenterSection from "../../components/CenterSection";

export default function DCMotor() {
return (
<div>
    <ProjectDescription
    title="DC Motor"
    text="A hands-on build of a functioning DC motor, focused on core 
    prototyping and fabrication techniques"
    imageSrc={Daniel}
    />

    <CenterSection
                title = "Project Overview"
                text = "Lorem ipsum random text"
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
