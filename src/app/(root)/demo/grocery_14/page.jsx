"use client";

import { useState, useEffect } from "react";
import Form from "./_components/Form_14";
import Items from "./_components/Items_14";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import Wrapper from "./_wrapper/Grocery_14";

const setLocalStorage = (items) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("groceryItems", JSON.stringify(items));
};

const getLocalStorage = () => {
  if (typeof window === "undefined") return [];
  const storedItems = window.localStorage.getItem("groceryItems");
  if (!storedItems) return [];
  try {
    return JSON.parse(storedItems);
  } catch {
    return [];
  }
};

const GroceryPage_14 = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = getLocalStorage();
    try {
      if (Array.isArray(storedItems)) {
        setItems(storedItems);
      } else {
        setItems([]);
      }
    } catch {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    console.log("items changed:", items);
    setLocalStorage(items);
  }, [items]);

  const addItem = (itemName) => {
    const newItem = { name: itemName, id: nanoid(), completed: false };

    setItems([...items, newItem]);
    setLocalStorage([...items, newItem]);
    toast.success("item added successfully");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);

    toast.success("item removed");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    toast.success("Item edited");
  };

  const updateItemName = (itemId, nextName) => {
    const trimmedName = (nextName ?? "").trim();
    if (!trimmedName) {
      toast.error("Please enter an item name");
      return false;
    }

    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, name: trimmedName };
      }
      return item;
    });

    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item updated");
    return true;
  };

  return (
    <Wrapper>
      <section className="section-center">
        <ToastContainer position="top-center" autoClose={3000} />
        <Form addItem={addItem} />
        <Items
          items={items}
          removeItem={removeItem}
          editItem={editItem}
          updateItemName={updateItemName}
        />
      </section>
    </Wrapper>
  );
};
export default GroceryPage_14;
