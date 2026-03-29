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

export default function Foot() {
return (
<div>
    <ProjectDescription
    title="Research: Team Foot"
    text="A haptic device for transfemoral amputees which provides feedback to improve balance"
    imageSrc={Daniel}
    />

    <ProjectNav tabs={TABS} />

    <CenterSection id="overview" title="Project Overview" text="During my time at MAHI, I worked on one project; however, this project taught me a lot on how to conduct research, and develop usable devices." />
    <CenterSection id="problem-statement" title="Problem Statement" text="Lorem ipsum random text" />
    <CenterSection id="design-process" title="Design Process" text="Lorem ipsum random text" />
    <CenterSection id="prototyping" title="Prototyping" text="Over the 2.5 years I worked, we went through multiple iterations." />
    <CenterSection id="testing" title="Testing" text="I helped design a fatigue tester to fatigue test our soles." />
    <CenterSection id="reflection" title="Reflection" text="In hind sight, I would have liked to create a design paper to publish to an academic journal." />

</div>
);
}
