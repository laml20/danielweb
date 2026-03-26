import Daniel from "../media/home/daniel.png";
import ProjectDescription from "../components/ProjectDescription";

export default function Prototyping() {
return (
<div>
    <ProjectDescription
    title="ENGI 210: Prototyping & Fabrication"
    text="A hands-on class covering 3D printing, fabrication methods, and other prototyping techniques"
    imageSrc={Daniel}
    />
</div>
);
}
