import Daniel from "../media/home/daniel.png";
import ProjectDescription from "../components/ProjectDescription";

export default function Workbooth() {
return (
<div>
    <ProjectDescription
    title="Personal Work Booth"
    text="A personal work station built from scratch — a self-driven project mainly to learn and explore woodworking"
    imageSrc={Daniel}
    />
</div>
);
}
