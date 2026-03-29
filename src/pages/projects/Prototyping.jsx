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

export default function Prototyping() {
return (
<div>
    <ProjectDescription
    title="ENGI 210: Prototyping & Fabrication"
    text="A hands-on class covering 3D printing, fabrication methods, and other prototyping techniques"
    imageSrc={Daniel}
    />

    <ProjectNav tabs={TABS} />

    <CenterSection id="overview" title="Project Overview" text="These are a collection of small projects done in ENGI 210 class where I learned to use a variety of tools at our makerspace. Lots of practical skills were gained and a new found confidence to create with my own hands." />
    <CenterSection id="problem-statement" title="Problem Statement" text="Lorem ipsum random text" />
    <CenterSection id="design-process" title="Design Process" text="Lorem ipsum random text" />
    <CenterSection id="prototyping" title="Prototyping" text="Lorem ipsum random text" />
    <CenterSection id="testing" title="Testing" text="Lorem ipsum random text" />
    <CenterSection id="reflection" title="Reflection" text="Lorem ipsum random text" />

</div>
);
}
