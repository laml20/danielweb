import Daniel from "../media/home/daniel.png";
import ProjectDescription from "../components/ProjectDescription";

export default function Foot() {
return (
<div>
    <ProjectDescription
    title="Research: Team Foot"
    text="A haptic device for transfemoral amputees which provides feedback to improve balance"
    imageSrc={Daniel}
    />
</div>
);
}
