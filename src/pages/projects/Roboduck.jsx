import Daniel from "../../media/home/daniel.png";
import ProjectDescription from "../../components/ProjectDescription";
import CenterSection from "../../components/CenterSection";
import ProjectNav from "../../components/ProjectNav";

const TABS = [
  { id: 'overview', label: 'Project Overview' },
  { id: 'problem-statement', label: 'Problem Statement' },
  { id: 'design-process', label: 'Design Process' },
  { id: 'prototyping', label: 'Prototyping' },
  { id: 'testing', label: 'Testing' },
  { id: 'reflection', label: 'Reflection' },
];

export default function Roboduck() {
return (
<div>
    <ProjectDescription
    title="RoboDuck - WIP"
    text="A personal robot built from scratch — a self-driven project mainly to learn and explore robotics"
    imageSrc={Daniel}
    />

    <ProjectNav tabs={TABS} />

    <CenterSection id="overview" title="Project Overview" text="To get a better grasp of robotics, I decided to endeavor with a personal project of creating my own personal robot. Inspired by small robots like WALL-E, I decided to create a small duck sized and duck resembling robot. The end goal is to create an autonomous moving, talking robot. Excited to learn as much as I can." />
    <CenterSection id="problem-statement" title="Problem Statement" text="Lorem ipsum random text" />
    <CenterSection id="design-process" title="Design Process" text="Lorem ipsum random text" />
    <CenterSection id="prototyping" title="Prototyping" text="Lorem ipsum random text" />
    <CenterSection id="testing" title="Testing" text="Lorem ipsum random text" />
    <CenterSection id="reflection" title="Reflection" text="Lorem ipsum random text" />

</div>
);
}
