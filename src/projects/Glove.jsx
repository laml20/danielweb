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
            text="Many individuals with limited fine motor control struggle with basic writing tasks, which impacts their ability to maintain independence, complete physical therapy exercises, and express themselves through personal journals. Existing handwriting assists on the market often feature outdated designs that are bulky, conspicuous, and fail to meet user needs for discretion and functionality. Our challenge was to create a device that would:

Enable independent writing without assistance from caregivers
Maintain user dignity through inconspicuous design
Support physical therapy and motor skill recovery
Provide reliable functionality across various writing scenarios

The broader impact of this work extends beyond our client to thousands of individuals who experience reduced hand mobility from conditions including arthritis, stroke recovery, Parkinson's disease, and traumatic injuries."
            imageSrc={Daniel}
        />

        <RightSection
            title="Design Process & Methodology"
            text="Requirements Analysis
Through extensive client interviews and literature review, we established comprehensive design criteria divided into constraints and objectives. Our requirements encompassed both quantifiable metrics (weight, dimensions, force tolerances) and user-defined scales for attributes like reproducibility and ease of use."
            imageSrc={Daniel}
        />
    </div>
);
}