export function checkObjectProperties(obj: Object) {
  return Object.values(obj).every((value) => value !== "");
}
