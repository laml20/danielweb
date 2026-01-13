import ScrollTabs from "../components/ScrollTabs";

export default function Creative() {

  const tabs = [
    { id: 'personalProjects', label: 'Personal Projects' },
    { id: 'photography', label: 'Photography' },
    { id: 'shortFilms', label: 'Short Films' }
  ];

  return (
    <div>
      <ScrollTabs tabs={tabs} />
    </div>
  );
}
