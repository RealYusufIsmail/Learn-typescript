/**
 *
 * In java, it would be:
 * public String getFullName(String firstName, String lastName) {
 *    return firstName + " " + lastName;
 * }
 *
 * @param firstName first name of the person
 * @param lastName  last name of the person
 * @returns full name of the person
 */
var getFullName = function (firstName, lastName) {
    return firstName + " " + lastName;
};
console.log(getFullName("John", "Doe"));
