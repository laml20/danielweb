import Daniel from "../../media/home/daniel.png";
import ProjectDescription from "../../components/ProjectDescription";
import CenterSection from "../../components/CenterSection";

export default function Roboduck() {
return (
<div>
    <ProjectDescription
    title="RoboDuck - WIP"
    text="A personal robot built from scratch — a self-driven project mainly to learn and explore robotics"
    imageSrc={Daniel}
    />

    <CenterSection
                title = "Project Overview"
                text = "To get a better grasp of robotics, I decided to endeavor with a personal project of creating my own personal robot. Inspired by small robots like WALL-E, I decided 
                to create a small duck sized and duck resembling robot. The end goal is to create an autonomous moving, talking robot. Excited to learn as much as I can."
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
