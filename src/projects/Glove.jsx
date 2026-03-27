import Daniel from "../media/home/daniel.png";
import ProjectDescription from "../components/ProjectDescription";
import CenterSection from "../components/CenterSection";

export default function Glove() {
return (
<div>
    <ProjectDescription
    title="Parkinsons Vibrational Glove"
    text="A wearable glove based on Stanford research which delivers vibrations to calm tremors"
    imageSrc={Daniel}
    />

      <CenterSection
            title = "Project Overview"
            text = "This project was done for ENGI 220: Intro to Engineering Design II. It entailed creating a wearable vibrotactile glove meant to be used as a 
            rehabilitative device for individuals with Parkinson's Disease."
        /> 
    
         <CenterSection
            title = "Problem Statement"
            text = "Our goal was to recreate the benefits of Dr. Peter Tass's vibrotactile glove using his research at Stanford in an open source form factor."
        /> 
    
         <CenterSection
            title = "Design Process"
            text = "We wanted to create something cheap with easily found materials so that anyone with a build manual and some tools can create one in the comfort of 
            their own home."
        /> 
    
         <CenterSection
            title = "Prototyping"
            text = "The project was decomposed into multiple parts: tactor holders, electronics, electronic housing, housing substrate, and programming. We employed the use of 
            3D printers and easily found materials."
        /> 
    
         <CenterSection
            title = "Testing"
            text = "We had access to a user who had been living with Parkinson's Disease for years. She gave us plenty of useful feedback to improve the comfort of our device and 
            whether it weas doing its job--reducing symptoms."
        /> 
    
         <CenterSection
            title = "Reflection"
            text = "If allowed more time, I would have loved to use a brain wave sensing device and use it to create a feedback loop algorithm that would change the vibration patterns 
            based on user brain activity. This would make the treatment more personalized and potentially yield more effective results. On a side note, I am glad and happy that my teammates 
            continued the project after me and have developed it into a startup company!"
        /> 

</div>
);
}
