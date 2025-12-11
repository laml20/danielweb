import React from "react";
import Daniel from "../media/home/daniel.png";
import RightSection from "../components/RightSection";
import Header from "../components/Header";
import LeftSection from "../components/LeftSection";

export default function Glove() {
return (
    <div>
        <RightSection
            title="Handwriting Assist Device for Individuals with Limited Finger Dexterity"
            text="This project addresses a critical need for individuals experiencing limited hand mobility due to aging, injury, or neurological conditions. Our team developed an inconspicuous assistive device that enables users to independently hold and write with standard writing utensils, providing autonomy in personal expression and daily writing tasks."
            imageSrc={Daniel}
        />

        <LeftSection
            title="Problem Definition & Impact"
            text={
                <>
                    <p>Many individuals with limited fine motor control struggle with basic writing tasks, which impacts their ability to maintain independence, complete physical therapy exercises, and express themselves through personal journals. Our challenge was to create a device that would:</p>
                    
                    <ul>
                        <li><strong>Enable independent writing</strong> without assistance from caregivers</li>
                        <li><strong>Maintain user dignity</strong> through inconspicuous design</li>
                        <li><strong>Support physical therapy</strong> and motor skill recovery</li>
                        <li><strong>Provide reliable functionality</strong> across various writing scenarios</li>
                    </ul>
                    
                    <p>The broader impact of this work extends beyond our client to thousands of individuals who experience reduced hand mobility from conditions including <strong>arthritis</strong>, <strong>stroke recovery</strong>, <strong>Parkinson's disease</strong>, and <strong>traumatic injuries</strong>.</p>
                </>
            }
            imageSrc={Daniel}
        />

        <RightSection
            title="Design Process & Methodology"
            text={<>
                <strong>Requirements Analysis</strong>
                
                <p>Through extensive client interviews and literature review, we established comprehensive design criteria divided into constraints and objectives. Our requirements encompassed both quantifiable metrics (weight, dimensions, force tolerances) and user-defined scales for attributes like reproducibility and ease of use.</p>

                <p>We employed a pairwise comparison chart methodology to rank objectives by importance, ensuring our design priorities aligned with actual user needs rather than assumed requirements. This systematic approach revealed that comfort, stability, and ease of donning/doffing ranked as the highest-priority objectives.                </p>
        
                <strong>Ideation & Concept Generation                </strong>
                
                <p>Our ideation process utilized the slip-note brainstorming method, generating 36 initial concepts across six categories: accessories, wrist supports, few-finger designs, mechanical hands, glove-like designs, and tightening devices. We then systematically categorized ideas as complete or partial concepts, allowing for strategic mix-and-match combinations through morphological analysis.                </p>
                
                <p>This structured creativity approach yielded 48 viable complete design concepts, which we methodically screened against our design criteria. The screening process reduced our concept pool to five finalist designs, which underwent rigorous evaluation through a weighted scoring matrix.                </p>
            </>}
            imageSrc={Daniel}
        />
    </div>
);
}