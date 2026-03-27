import Daniel from "../media/home/daniel.png";
import ProjectDescription from "../components/ProjectDescription";
import CenterSection from "../components/CenterSection";

export default function Prototyping() {
return (
<div>
    <ProjectDescription
    title="ENGI 210: Prototyping & Fabrication"
    text="A hands-on class covering 3D printing, fabrication methods, and other prototyping techniques"
    imageSrc={Daniel}
    />

    <CenterSection
                title = "Project Overview"
                text = "These are a collection of small projects done in ENGI 210 class where I learned to use a variety of tools at our makerspace. Lots of practical skills were gained and 
                a new found confidence to create with my own hands."
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
