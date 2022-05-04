import { defineHook } from "@directus/extensions-sdk";

export default defineHook(({ filter, action }) => {
  filter("items.create", (item, ...args) => {
    console.log("Creating an Item!");
    console.log(item);
    console.log(...args);
    item.name = item.name.toUpperCase();
  });

  action("items.create", (item) => {
    console.log("Item created!");
    console.log(item);
  });
});
