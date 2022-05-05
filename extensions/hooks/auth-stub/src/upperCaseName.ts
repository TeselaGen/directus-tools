export function upperCaseName(item: any) {
  if (item && item.name && item.name.toUpperCase) {
    // item.name = item.name.toUpperCase();
    item.name = item.name.toLowerCase();
  }
}
