var Planets;
(function (Planets) {
    Planets[Planets["MERCURY"] = 1] = "MERCURY";
    Planets[Planets["VENUS"] = 2] = "VENUS";
    Planets[Planets["EARTH"] = 3] = "EARTH";
    Planets[Planets["MARS"] = 4] = "MARS";
    Planets[Planets["JUPITER"] = 5] = "JUPITER";
    Planets[Planets["SATURN"] = 6] = "SATURN";
    Planets[Planets["URANUS"] = 7] = "URANUS";
    Planets[Planets["NEPTUNE"] = 8] = "NEPTUNE";
})(Planets || (Planets = {}));
console.log(Planets.MERCURY);
