import React from "react";
import RightSection from "../components/RightSection";
import Daniel from "../media/home/daniel.png";

export default function Workbooth() {
return (
<div>
    <RightSection
    title="Personal Work Booth"
    subtitle="A personal work station built from scratch — a self-driven project mainly to learn and explore woodworking"
    imageSrc={Daniel}
    />
</div>
);
}