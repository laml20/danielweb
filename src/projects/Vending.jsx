import React from "react";
import RightSection from "../components/RightSection";
import Daniel from "../media/home/daniel.png";

export default function Vending() {
return (
<div>
    <RightSection
    title="Automated Capsule Vending Machine"
    subtitle="A functioning vending machine built for class, a project focused on learning the basics of electronics"
    imageSrc={Daniel}
    />
</div>
);
}