import { useState } from "react";
import ProjectList from "../../components/projectlist/ProjectList";
import { useCollection } from "../../hooks/useCollection";
import ProjectFilter from "../project/ProjectFilter";
import { useAuthContext } from "../../hooks/useAuthContext";

// styles
import "./Dashboard.css";

export default function Dashboard() {
  const { documents, error } = useCollection("projects");
  const [currentFilter, setCurrentFilter] = useState("all");
  const { user } = useAuthContext();

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  if (!documents) {
    return <div>loading...</div>;
  }

  const projects = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case "all":
            return true;
          case "mine":
            let assignToMe = false;
            document.assignedUsersList.forEach((u) => {
              if (user.uid === u.id) {
                assignToMe = true;
              }
            });
            return assignToMe;
          case "development":
          case "design":
          case "sales":
          case "marketing":
            console.log(document.category, currentFilter);
            return document.category === currentFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <div className="error">{error}</div>}
      {documents && (
        <ProjectFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {documents && <ProjectList projects={projects} />}
    </div>
  );
}
