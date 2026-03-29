import ProjectDescription from "../../components/ProjectDescription";
import VendingMachine from "../../media/projects/VendingMachine.png"
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

export default function Vending() {
return (
<div>
    <ProjectDescription
        title="Automated Capsule Vending Machine"
        text="A functioning vending machine built for MECH 488. A project focused on learning the basics of mechatronic system design."
        imageSrc={VendingMachine}
    />

    <ProjectNav tabs={TABS} />

    <CenterSection id="overview" title="Project Overview" text="This project was done as the final project for MECH 488: Design of Mechatronic Systems. It was completed in collaboration with three other members where the project was broken down into the following elements: Sensors, Actuators, Logic, and Mechanical." />
    <CenterSection id="problem-statement" title="Problem Statement" text="Since the final project was going to be displayed at a showcase, my team and I decided to do an interactive project that left the users with something for them to keep. We landed on creating a vending machine that would be activated by the swipe of a card and would output a capsule containing 3D printed figurines. The capsules had rarity associated to them with rarirty determined by capsule color." />
    <CenterSection id="design-process" title="Design Process" text="The early sketches of the vending machine were extremely simple. A box is all we had. Over time, we added features that livened its aesthetic and ultimately came to resembling a jukebox. A colorful, wooden box with a clear wall to see its contents--the capsules." />
    <CenterSection id="prototyping" title="Prototyping" text="The prototyping phase was done in sections and delegated to each of the members. Someone worked on designing the CAD model, one on manufacturing, and the other on electricals. This allowed us to work faster during the time crunch at the end." />
    <CenterSection id="testing" title="Testing" text="The device was tested multiple times to ensure proper actuation. The card reader reads card swipe > the capsule falls through > a light show displays > user retrieves capsule > rinse & repeat" />
    <CenterSection id="reflection" title="Reflection" text="Overall, if we had more time and had convened earlier as a team, I would have liked either pursue a different project, something more challenging like a remote controlled Rock'Em Sock'Em or perhaps have developed the vending machine even more by adding sound effects and color detection that would inform the light show." />

</div>
);
}

