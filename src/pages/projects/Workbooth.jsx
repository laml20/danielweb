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

export default function Workbooth() {
return (
<div>
    <ProjectDescription
    title="Personal Work Booth"
    text="A personal work station built from scratch — a self-driven project mainly to learn and explore woodworking"
    imageSrc={Daniel}
    />

    <ProjectNav tabs={TABS} />

    <CenterSection id="overview" title="Project Overview" text="Due to the limited space in my home, I decided to create my own space. A dedicated work booth to allow me to work with decreased distractions on personal projects and learn at my own pace. NOTE: It doubles as a makerspace." />
    <CenterSection id="problem-statement" title="Problem Statement" text="Lorem ipsum random text" />
    <CenterSection id="design-process" title="Design Process" text="Lorem ipsum random text" />
    <CenterSection id="prototyping" title="Prototyping" text="Lorem ipsum random text" />
    <CenterSection id="testing" title="Testing" text="Lorem ipsum random text" />
    <CenterSection id="reflection" title="Reflection" text="Lorem ipsum random text" />

</div>
);
}
