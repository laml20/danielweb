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

export default function DCMotor() {
return (
<div>
    <ProjectDescription
    title="DC Motor"
    text="A hands-on build of a functioning DC motor, focused on core
    prototyping and fabrication techniques"
    imageSrc={Daniel}
    />

    <ProjectNav tabs={TABS} />

    <CenterSection id="overview" title="Project Overview" text="Lorem ipsum random text" />
    <CenterSection id="problem-statement" title="Problem Statement" text="Lorem ipsum random text" />
    <CenterSection id="design-process" title="Design Process" text="Lorem ipsum random text" />
    <CenterSection id="prototyping" title="Prototyping" text="Lorem ipsum random text" />
    <CenterSection id="testing" title="Testing" text="Lorem ipsum random text" />
    <CenterSection id="reflection" title="Reflection" text="Lorem ipsum random text" />

</div>
);
}
