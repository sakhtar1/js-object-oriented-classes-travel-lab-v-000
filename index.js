class Driver {
  constructor(name, startDate) {
  this.name = name
  this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf() {
    const date = new Date()
    date.setYear(endDate)
    return Math.abs(this.startDate.getFullYear() - date.getFullYear());
  }
}


  class Route {
    constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
    }
