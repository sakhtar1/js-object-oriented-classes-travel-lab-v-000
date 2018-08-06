class Driver {
  constructor(name, startDate) {
  this.name = name
  this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(lastDate) {
    const date = new Date()
    date.setYear(lastDate)
    return Math.abs(this.startDate.getFullYear() - date.getFullYear());
  }
}


  class Route {
    constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
    }

    blocksTravelled() {
    let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
  }
  const distA = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    const distB = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return distA + distB;
  }
   estimatedTime(peak) {
    if (peak){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}