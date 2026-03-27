import Daniel from "../media/home/daniel.png";
import ProjectDescription from "../components/ProjectDescription";

export default function DCMotor() {
return (
<div>
    <ProjectDescription
    title="DC Motor"
    text="A hands-on build of a functioning DC motor, focused on core 
    prototyping and fabrication techniques"
    imageSrc={Daniel}
    />
</div>
);
}
