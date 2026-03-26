import HandwriteAssist from "../media/projects/HandwriteAssist.png";
import Daniel from "../media/home/daniel.png";
import ProjectDescription from "../components/ProjectDescription";
import LeftWrap from "../components/LeftWrap";
import RightWrap from "../components/RightWrap";
import CenterSection from "../components/CenterSection";
import ProjectNav from "../components/ProjectNav";

const TABS = [
  { id: 'overview', label: 'Project Overview' },
  { id: 'problem-statement', label: 'Problem Statement' },
  { id: 'design-process', label: 'Design Process' },
  { id: 'prototyping', label: 'Prototyping' },
  { id: 'testing', label: 'Testing' },
  { id: 'reflection', label: 'Reflection' },
];

export default function HandAssist() {
return (
    <div>
        <ProjectDescription
            title="Handwriting Assist for Individuals with Limited Manual Dexterity"
            text="This project addresses a critical need for individuals experiencing limited hand mobility due to aging, injury, or neurological conditions. Our team developed an inconspicuous assistive device that enables users to independently hold and write with standard writing utensils, providing autonomy in personal expression and daily writing tasks."
            imageSrc={HandwriteAssist}
        />

        <ProjectNav tabs={TABS} />

        <div id="overview" style={{ scrollMarginTop: '4rem' }}>
            <p style={{textAlign: "center"}}><b>--- The Project Overview ---</b></p>

            <LeftWrap
                title="Role"
                text={<p>Designer, Builder, Tester, Group Facilitator</p>}
                imageSrc={Daniel}
            />

            <LeftWrap
                title="Team Name & Members"
                text={<p>Helping Hand & Daniel Plascencia, Kushal Gupta, Marco Stine</p>}
                imageSrc={Daniel}
            />

            <LeftWrap
                title="Timeframe & Context"
                text={
                    <p>First Semester of Freshman Year for ENGI 120. This was the first class of the Engineering Design Minor. The goal was to get an exposure to the engineering design process established by the curriculum through a semester long project. Trial by fire so-to-speak.</p>
                }
                imageSrc={Daniel}
            />

            <LeftWrap
                title="Tools & Skills"
                text={
                    <p>Prototyping, Project Management, User Testing, Measurement & Analysis, Technical Writing, Collaboration, & Sewing</p>
                }
                imageSrc={Daniel}
            />
        </div>

        <div id="problem-statement" style={{ scrollMarginTop: '4rem' }}>
            <p style={{textAlign: "center"}}><b>--- The Project Details ---</b></p>

            <RightWrap
                title="Clarify Team Assignment"
                text={
                    <>
                        <p><strong>Client:</strong> Gloria Sipakati (Clinical Specialist)</p>
                        <p><strong>Problem Statement:</strong> Users with limited finger dexterity (due to stroke, cerebral palsy, injury, etc..) often cannot hold pens reliably. This project aims to create an inconspicuous device that enables the user to independently hold and write with a writing utensil. Our challenge was to create a device that would:</p>
                        <ul>
                            <li><strong>Enable independent writing</strong> without assistance from caregivers</li>
                            <li><strong>Maintain user dignity</strong> through inconspicuous design</li>
                            <li><strong>Provide reliable functionality</strong> across various writing scenarios</li>
                        </ul>
                        <p><strong>Project Importance:</strong> This problem is important because it affects a wide range of people, not just generally older folk. Furthermore, individuals that undergo recovery after life-altering events lose autonomy as they need help and rely on others for assistance. Our device aims to give afflicted individuals a renewed sense of autonomy with their writing. It returns to them the ability to write letters, bank notes, personal journal entries, and more.</p>
                    </>
                }
                imageSrc={Daniel}
            />

            <RightWrap
                title="Understand Problem Space"
                text={
                    <>
                        <p><strong>Background Research:</strong></p>
                        <p>Currently in the market there is one full-hand discontinued device dubbed the Wanchik Device. This previous design is both insufficient and outdated. All other devices are either additions to the writing utensil itself to increase the grip surface area or are finger only devices.</p>
                    </>
                }
                imageSrc={Daniel}
            />
        </div>

        <div id="design-process" style={{ scrollMarginTop: '4rem' }}>
            <RightWrap
                title="Define Design Criteria"
                text={<>
                    <p>T1: Getting the objectives was a process of trial and error. There was lots of going back-and-forth with the client as well as the user to arrive at principal aspects needed for the handwriting assist to be deemed successful.</p>

                    <strong>Design Criteria:</strong>

                    <p>T2: The PCC made us pit one objective with the other systematically to ultimately see which objective was the most important.</p>

                    <p>T3: For this user-defined scale, our team aims for a target value of 4, in order to make it simple to manufacture.</p>

                    <p>T4: This user-defined scale aims for a target value of 4.</p>

                    <p>These design criteria can be seen in Table 1. They were coupled with quantifiable target values so that we could test them at a later date to see if the final design met the objects and constraints we chose. These target values were decided after doing background research on similar devices and with the consideration of comments from our client and user needs.</p>

                    <p>Although we had two design criteria that could not be given target values due to their subjectivity--<em>Reproducibility</em> and <em>Ease of Pulling On/Off.</em> These were given user-defined scales to collect and score qualitative data.</p>

                    <p>After dividing the design criteria into constraints and objectives, we created a pairwise comparison chart as seen in Table 2. The results can be seen under the "Rank" column in Table 2 as well.</p>
                </>}
                imageSrc={Daniel}
            />

            <RightWrap
                title="Brainstorm Ideas"
                text={<>
                    <p>I1: The ideas were categorized into accessories, wrist support, few finger designs, mechanical hand, tightening device, and glove-like design.</p>

                    <p>I2: Top: Complete Ideas, Bottom: Partial Ideas.</p>

                    <p>I3: Complete ideas categorized. Clockwise: Mechanical hand, arm to hand support, few finger designs.</p>

                    <p>I4: Partial ideas categorized. Clockwise: tightening device, washability, finger use, mechanical design, glove design, and ergonomic design.</p>

                    <p>I5: Additional ideas. From round 2 of brainstorming.</p>
                </>}
                imageSrc={Daniel}
            />

            <RightWrap
                title="Evaluate Ideas"
                text={<>
                    <p><strong>Selection Process:</strong> The selection process that took place prior to arriving at a design solution was rigorous and done in a timely manner. We began with a group brainstorm of possible ideas
                        while keeping in mind the knowledge of previous iterations and our client's desires. After brainstorming, we were left with 12 complete ideas and 24 partial ideas, which were combined, mix-and-matched through
                        a morph chart to create even more ideas. This resulted in a greater pool of 48 complete ideas, which we sorted into 4 categories and screened based on our design criteria. This screening was done until 5 ideas
                        were left. Finally, we scored the final 5 ideas through a scoring matrix and arrived at the final design solution--the future prototype.
                    </p>

                    <p><strong>Decision Reasoning:</strong> The design solution we arrived at is a 3 finger glove with metallic rods underneath a dry-fit material glove and magnetic attachments as well as a loop on a finger.
                        The 3 finger design is meant to make it easier for the user to insert their hand into the glove as well as to save weight and material of an inessential extra. Furthermore, the metallic rods are meant
                        to be malleable so the fingers could be changed to the user's preferred writing stance. Moreover, the loop on the top of the index finger is meant to aid in removing the device with teeth. Finally, the magnets
                        on the glove are where a writing utensil with a magnetic attachment will attach for increased stability in writing.
                    </p>
                </>}
                imageSrc={Daniel}
            />
        </div>

        <div id="prototyping" style={{ scrollMarginTop: '4rem' }}>
            <LeftWrap
                title="Prototyping"
                text={<>
                    <p>P1: This prototype was made with simple materials. A billiards glove, mask metal nose strips, and velcro. The stitching was subpar, but the overall product served more as representational, although it did have
                        some functionality. The metal nose strips served as a proof of concept for metal rods that would support and maintain a writing stance.
                    </p>

                    <p>P2: This sequel to the first was made with improved stitching, the metal nose strips were doubled in width as well as the velcro. Furthermore, the magnets that were originally planned were finally integrated.
                        This is a great improvement that resulted in a functional mid-fidelity prototype.
                    </p>

                    <p>P3: The final iteration had the best stitching thus far, the metal nose strips were stitched with a protective layer, the velcro was lengthened even more, and the writing utensil holder was switched from a magnet
                        to a compressive radial spring.
                    </p>
                </>}
                imageSrc={Daniel}
            />
        </div>

        <div id="testing" style={{ scrollMarginTop: '4rem' }}>
            <RightWrap
                title="Testing"
                text={<>
                    <p>There are 7 design criteria with target values, which we had to test for. These tests range from standard tests that can be measured with an existing tool to manufactured tests that will be measured with estimate values.</p>

                    <p>Most of the tests were conducted by the design team; however, there were a few tests that required users to perform the tests themselves as it was necessary to obtain useful feedback on the comfortability and utility of our device.</p>

                    <p>Moreover, since durability is the hardest to gauge, there were a series of tests. Three tests were conducted: a tension test, pressure test, and bending test. The tension test sought to see how much force the glove would be
                        able to hold before ripping. This was meant to simulate the users using their teeth to pull the device off their hands.
                    </p>

                    <p>Furthermore, the pressure test was done by applying weight to the glove and seeing if it received any substantial damage. This was done to simulate the glove being dropped and stepped on.</p>

                    <p>Finally, the bending test was done by bending the rods back-and-forth from writing stance to neutral open hand in order to measure how well the metal will perform after repeated use.</p>

                    <p>The rest of the tests were simple and their results can be viewed in the testing matrix seen above.</p>
                </>}
                imageSrc={Daniel}
            />

            <CenterSection
                title="Final Product"
                text={<p></p>}
                imageSrc={Daniel}
            />
        </div>

        <div id="reflection" style={{ scrollMarginTop: '4rem' }}>
            <p style={{textAlign: "center"}}><b>--- The Project Commentary ---</b></p>

            <LeftWrap
                title="Reflection (What I learned)"
                text={<>
                    <p><strong>Working on Teams:</strong> I learned that I am a facilitator. I am well versed in bringing out ideas from my teammates. This has had a positive impact on not only my group's dynamic, but also the final project.</p>

                    <p><strong>Engineering Design:</strong> I learned the major steps of the engineering design process, now I can carry a mental diagram to any future project I work on. This has given me confidence in knowing that I can
                    tackle any problem requiring a design solution.</p>

                    <p><strong>Tools and Skills:</strong> I learned how to be persistent, use grit, and new technical abilities I did not have--namely sewing, writing technical memos, and creating gantt charts.</p>

                    <p><strong>If I had more time:</strong> I would have liked to improve ergonomics for different hand sizes and perform an extensive user study to gain valuable feedback. Overall, I think due to the time pressure we were tunnel visioned
                    to choose one particular design. This exacerbated our internal biases instead of truly, in an objective manner, allow us to find the best solution.</p>
                </>}
                imageSrc={Daniel}
            />
        </div>

    </div>
);
}
