import React from "react";
import RightSection from "../components/RightSection";
import Daniel from "../media/home/daniel.png";

export default function Prototyping() {
return (
<div>
    <RightSection
    title="ENGI 210: Prototyping & Fabrication"
    subtitle="A hands-on class covering 3D printing, fabrication methods, and other prototyping techniques"
    imageSrc={Daniel}
    />
</div>
);
}