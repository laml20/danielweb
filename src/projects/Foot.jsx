import React from "react";
import RightSection from "../components/RightSection";
import Daniel from "../media/home/daniel.png";

export default function Foot() {
return (
<div>
    <RightSection
    title="Research: Team Foot"
    subtitle="A haptic device for transfemoral amputees which provides feedback to improve balance"
    imageSrc={Daniel}
    />
</div>
);
}