import Daniel from "../media/home/daniel.png";
import ProjectDescription from "../components/ProjectDescription";
import CenterSection from "../components/CenterSection";

export default function Workbooth() {
return (
<div>
    <ProjectDescription
    title="Personal Work Booth"
    text="A personal work station built from scratch — a self-driven project mainly to learn and explore woodworking"
    imageSrc={Daniel}
    />

    <CenterSection
                title = "Project Overview"
                text = "Due to the limited space in my home, I decided to create my own space. A dedicated work booth to allow me to work with decreased distractions on personal projects and 
                learn at my own pace."
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
