import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";

// styles
import "./ProjectList.css";

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.length === 0 && <p>No projects yet!</p>}
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`}>
          <h4>{project.name}</h4>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <ul>
            {project.assignedUsersList.map((userlist) => (
              <li>
                <Avatar src={userlist.photoURL} />
              </li>
            ))}
          </ul>
        </Link>
      ))}
    </div>
  );
}
