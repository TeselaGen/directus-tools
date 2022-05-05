import { defineHook } from "@directus/extensions-sdk";
import { upperCaseName } from "./upperCaseName";

export default defineHook(({ filter, action }) => {
  if (!process.env.DISABLE_AUTH_STUB_EXT) {
    filter("items.create", (item) => {
      console.log("Creating an Item in Directus 9!");
      console.log(item);
      // console.log(...args);
      // if (item && item.name) {
      //   item.name = item.name.toUpperCase();
      // }
      upperCaseName(item);
    });

    action("items.create", (item) => {
      console.log("Item created!");
      console.log(item);
    });

    action("items.read", (item) => {
      console.log("Collection read " + item?.collection);
    });
  }
});
