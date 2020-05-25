module.exports = class Track {
  #name; #country; #round; #drivers;
  constructor() {
    this.#name;
    this.#country;
    this.#round;
    this.#drivers;
  }

  setName(name) {
    this.#name = name;
    return this;
  }
  setCountry(country) {
    this.#country = country;
    return this;
  }
  setRound(round) {
    this.#round = round;
    return this;
  }
  setDrivers(driverArr) {
    this.#drivers = driverArr;
    return this;
  }

  getName() {
    return this.#name;
  }
  getCountry() {
    return this.#country;
  }
  getRound() {
    return this.#round;
  }
  getDrivers() {
    return this.#drivers;
  }
}

