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

export default function REV() {
return (
<div>
    <ProjectDescription
    title="REV Aeroshell"
    text="Structural chassis for the Rice Electric Vehicle competition team, built for integrity and aerodynamic performance"
    imageSrc={Daniel}
    />

    <ProjectNav tabs={TABS} />

    <CenterSection id="overview" title="Project Overview" text="This project came through an extracurricular club--Rice Electric Vehicle. In preparation for the annual competition, I aided in designing and manufacturing a new aeroshell." />
    <CenterSection id="problem-statement" title="Problem Statement" text="Lorem ipsum random text" />
    <CenterSection id="design-process" title="Design Process" text="Lorem ipsum random text" />
    <CenterSection id="prototyping" title="Prototyping" text="Lorem ipsum random text" />
    <CenterSection id="testing" title="Testing" text="Lorem ipsum random text" />
    <CenterSection id="reflection" title="Reflection" text="Lorem ipsum random text" />

</div>
);
}
