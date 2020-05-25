module.exports = class Driver {
  #fname; #lname; #team; #position; #result; 
  constructor() {
    this.#fname;
    this.#lname;
    this.#team;
    this.#position;
    this.#result;
  }

  setFName(fname) {
    this.#fname = fname;
    return this;
  }
  setLName(lname) {
    this.#lname = lname;
    return this;
  }
  setTeam(team) {
    this.#team = team;
    return this;
  }
  setPosition(position) {
    this.#position = position;
    return this;
  }
  setResult(result) {
    this.#result = result;
    return this;
  }

  getFName() {
    return this.#fname;
  }
  getLName() {
    return this.#lname;
  }
  getName() {
    return `${this.#fname} ${this.#lname}`
  }
  getTeam() {
    return this.#team;
  }
  getPosition() {
    return this.#position;
  }
  getResult() {
    return this.#result;
  }
}





