import SingleItem from "./SingleItem_14";

const Items = ({ items, removeItem, editItem, updateItemName }) => {
  return (
    <div className="items">
      {items?.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
            updateItemName={updateItemName}
          />
        );
      })}
    </div>
  );
};
export default Items;
