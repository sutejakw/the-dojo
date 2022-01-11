import ProjectList from "../../components/projectlist/ProjectList";
import { useCollection } from "../../hooks/useCollection";

// styles
import "./Dashboard.css";

export default function Dashboard() {
  const { documents, error } = useCollection("projects");

  if (!documents) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <div className="error">{error}</div>}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
}
