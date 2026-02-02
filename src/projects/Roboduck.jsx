import React from "react";
import RightSection from "../components/RightSection";
import Daniel from "../media/home/daniel.png";

export default function Roboduck() {
return (
<div>
    <RightSection
    title="RoboDuck - WIP"
    subtitle="A personal robot built from scratch — a self-driven project mainly to learn and explore robotics"
    imageSrc={Daniel}
    />
</div>
);
}