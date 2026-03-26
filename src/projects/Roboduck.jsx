import Daniel from "../media/home/daniel.png";
import ProjectDescription from "../components/ProjectDescription";

export default function Roboduck() {
return (
<div>
    <ProjectDescription
    title="RoboDuck - WIP"
    text="A personal robot built from scratch — a self-driven project mainly to learn and explore robotics"
    imageSrc={Daniel}
    />
</div>
);
}
