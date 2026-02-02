import React from "react";
import RightSection from "../components/RightSection";
import Daniel from "../media/home/daniel.png";

export default function Glove() {
return (
<div>
    <RightSection
    title="Parkinsons Vibrational Glove"
    subtitle="A wearable glove based on Stanford research which delivers vibrations to calm tremors"
    imageSrc={Daniel}
    />
</div>
);
}