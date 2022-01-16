const filters = ["all", "mine", "development", "design", "marketing", "sales"];

export default function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };
  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        {filters.map((filter) => (
          <button
            key={filter}
            className={currentFilter == filter ? "active" : ""}
            onClick={() => handleClick(filter)}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  );
}
