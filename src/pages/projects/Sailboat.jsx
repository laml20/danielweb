import Daniel from "../../media/home/daniel.png";
import ProjectDescription from "../../components/ProjectDescription";
import CenterSection from "../../components/CenterSection";

export default function Sailboat() {
return (
<div>
    <ProjectDescription
    title="Sailboat"
    text="An Autonomous Sailboat for Ocean Exploration"
    imageSrc={Daniel}
    />

      <CenterSection
            title = "Project Overview"
            text = "This project was assigned as my senior design project. It was a two semester long effort with the aid of a large team--9 of us total. Our team was composed of 4 mechs, 4 elecs, and 1 CS peer.
             In the end, we developed two autonomous sail boats for marine exploration."
        /> 
    
         <CenterSection
            title = "Problem Statement"
            text = "Our project was guided by our client, who was a former Marine. In his experience, he believes autonomous sailboats could serve well in either recon, search and rescue, or supply delivery settings. 
            Therefore, our goal was to create multiple, small, load-carrying, autonomous sailboats that would be able to traverse large bodies of water."
        /> 
    
         <CenterSection
            title = "Design Process"
            text = "The team was split into mechanical and electronics. Each team worked on their respective tasks i.e. CADing, manufacturing the sail boat and planning the electrical architecture as well as the internal logic. 
            The subteams would then meet together weekly to get up to speed and discuss any merge or system integration issues."
        /> 
    
         <CenterSection
            title = "Prototyping"
            text = "With the access of our university's makerspace, we were able to rapidly prototype through multiple iterations and keep our budget of $5000 under control. We emplyed the heavy use of 3D printing, waterjet cutting, 
            laser cutting, soldering, and much more."
        /> 
    
         <CenterSection
            title = "Testing"
            text = "We had multiple real-wrold tests as a team to determine the efficacy of our sailboats. Throughout each testing day, we were able to collect data to refine our system and improve upon it iteratively."
        /> 
    
         <CenterSection
            title = "Reflection"
            text = "In this project, I would have liked to have had more tests. Our project could have been even more refined and our communication could have been more streamlined. Moreover, 
            our project would have benefitted from more intermixing between the subteams. I believe we were too rigid in not crossing our intellectual domains."
        /> 

</div>
);
}
