import { useEffect, useState } from "react";

const SingleItem_14 = ({ item, removeItem, editItem, updateItemName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draftName, setDraftName] = useState(item?.name ?? "");

  useEffect(() => {
    if (!isEditing) {
      setDraftName(item?.name ?? "");
    }
  }, [item?.name, isEditing]);

  const cancelEdit = () => {
    setDraftName(item?.name ?? "");
    setIsEditing(false);
  };

  const saveEdit = () => {
    if (typeof updateItemName !== "function") {
      setIsEditing(false);
      return;
    }
    const ok = updateItemName(item.id, draftName);
    if (ok) setIsEditing(false);
  };

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />

      {isEditing ? (
        <input
          type="text"
          className="form-input"
          value={draftName}
          onChange={(e) => setDraftName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") saveEdit();
            if (e.key === "Escape") cancelEdit();
          }}
          autoFocus
        />
      ) : (
        <p
          style={{
            textTransform: "capitalize",
            textDecoration: item.completed && "line-through",
          }}
        >
          {item.name}
        </p>
      )}

      <div style={{ display: "flex", gap: "0.5rem" }}>
        {isEditing ? (
          <>
            <button className="btn remove-btn" type="button" onClick={saveEdit}>
              save
            </button>
            <button
              className="btn remove-btn"
              type="button"
              onClick={cancelEdit}
            >
              cancel
            </button>
          </>
        ) : (
          <button
            className="btn remove-btn"
            type="button"
            onClick={() => setIsEditing(true)}
          >
            edit
          </button>
        )}

        <button
          className="btn remove-btn"
          type="button"
          onClick={() => removeItem(item.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};
export default SingleItem_14;
