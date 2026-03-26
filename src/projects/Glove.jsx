import Daniel from "../media/home/daniel.png";
import ProjectDescription from "../components/ProjectDescription";

export default function Glove() {
return (
<div>
    <ProjectDescription
    title="Parkinsons Vibrational Glove"
    text="A wearable glove based on Stanford research which delivers vibrations to calm tremors"
    imageSrc={Daniel}
    />
</div>
);
}
