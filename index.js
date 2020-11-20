// Code your solution here
// ### Write a Function To Case-insensitively Match `string`s

// Write `findMatching`- This function takes an array of `drivers` and a `string`
// as arguments, and returns the matching list of drivers. The function should be
// case insensitive.

function findMatching(drivers, string) {
  let matches = drivers.filter(
    (driver) => driver.toLowerCase() === string.toLowerCase()
  );
  return matches;
}

// ### Write a Function To Partially Match Substrings

// Write `fuzzyMatch` - This function takes an array of `drivers` and a `string`
// as arguments for querying the array, and returns all drivers whose names begin
// with the provided letters.

function fuzzyMatch(drivers, string) {
  let matches = drivers.filter(
    (driver) =>
      driver.slice(0, string.length).toLowerCase() === string.toLowerCase()
  );
  return matches;
}

// ### Write a Function To Match `object` Values To a Provided `string`

// Write `matchName` - This function takes an array of `drivers` and a `string` as
// arguments. In this function, each element of the `drivers` array is a
// JavaScript object that has a property of `name`. The function should return
// each element whose `name` property matches the provided `string` argument.
function matchName(drivers, string) {
  let matches = drivers.filter(
    (driver) => driver.name.toLowerCase() === string.toLowerCase()
  );
  return matches;
}
