import { defineHook } from "@directus/extensions-sdk";

export default defineHook(({ filter, action }) => {
  filter("items.create", (item) => {
    console.log("Creating an Item!");
    console.log(item);
    item.name = item.name.toUpperCase();
  });

  action("items.create", (item) => {
    console.log("Item created!");
    console.log(item);
  });
});
