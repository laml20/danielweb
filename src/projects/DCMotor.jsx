import React from "react";
import RightSection from "../components/RightSection";
import Daniel from "../media/home/daniel.png";

export default function DCMotor() {
return (
<div>
    <RightSection
    title="DC Motor"
    subtitle="A hands-on build of a functioning DC motor, focused on core prototyping and fabrication techniques"
    imageSrc={Daniel}
    />
</div>
);
}