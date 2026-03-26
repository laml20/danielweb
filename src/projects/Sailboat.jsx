import Daniel from "../media/home/daniel.png";
import ProjectDescription from "../components/ProjectDescription";

export default function Sailboat() {
return (
<div>
    <ProjectDescription
    title="Sailboat"
    text="An Autonomous Sailboat for Ocean Exploration"
    imageSrc={Daniel}
    />
</div>
);
}
