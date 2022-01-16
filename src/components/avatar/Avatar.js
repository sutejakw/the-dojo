// styles
import "./Avatar.css";

export default function Avatar({ src, displayName }) {
  return (
    <div className="avatar">
      <img src={src} alt="user avatar" title={displayName} />
    </div>
  );
}
