import React from "react";
import RightSection from "../components/RightSection";
import Daniel from "/danielweb/media/home/daniel.png";

export default function Sailboat() {
return (
<div>
    <RightSection
    title="Sailboat"
    subtitle="An Autonomous Sailboat for Ocean Exploration"
    imageSrc={Daniel}
    />
</div>
);
}