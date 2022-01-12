import { useFirestore } from "../../hooks/useFirestore";
import Avatar from "../../components/avatar/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useHistory } from "react-router-dom";

export default function ProjectSumary({ project }) {
  const { deleteDocument, response } = useFirestore("projects");
  const { user } = useAuthContext();
  let history = useHistory();

  const handleClick = (e) => {
    deleteDocument(project.id);
    if (!response.error) {
      history.push("/");
    }
  };

  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p>By {project.createdBy.displayName}</p>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>Project is assigned to:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>
      {project.createdBy.id == user.uid && (
        <button className="btn" onClick={handleClick}>
          Mark as complete
        </button>
      )}
    </div>
  );
}
