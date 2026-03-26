import Daniel from "../media/home/daniel.png";
import ProjectDescription from "../components/ProjectDescription";

export default function Vending() {
return (
<div>
    <ProjectDescription
    title="Automated Capsule Vending Machine"
    text="A functioning vending machine built for class, a project focused on learning the basics of electronics"
    imageSrc={Daniel}
    />
</div>
);
}
