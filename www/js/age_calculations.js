var ageCalculator = {
  addLeapDays: function(bYear, currYear){
    leapDays = 0;
    for (;bYear<=currYear;bYear++){
      if(bYear%4==0){
        leapDays++;
      }
    }
    return leapDays;
  },

  getAgeDays: function(dateString){
    var today = new Date();
    var birthDate = new Date(dateString);
    var currYear = today.getFullYear(), bYear = birthDate.getFullYear();
    var currMonth = today.getMonth(), bMonth = birthDate.getMonth();
    var currDay = today.getDate() , bDay = birthDate.getDate();
    var totalDays = (currYear - bYear)*365 + this.addLeapDays(bYear, currYear);
    monthDiff = (currMonth-bMonth)*30;
    dayDiff = currDay-bDay;
    totalDays+=monthDiff + dayDiff;
    //if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    //{      //    age--;
    //}
    return totalDays;
  },

  getAgePlanets: function(days){
    planetAges = {
      Mercury: Math.round((days/88) * 100) / 100,
      Venus: Math.round((days/225) * 100) / 100,
      Earth: Math.round((days/365.25) * 100) / 100,
      Mars: Math.round((days/687) * 100) / 100,
      Jupiter: Math.round((days/(11.8 * 365.25)) * 100) / 100,
      Saturn: Math.round((days/(29.4 * 365.25)) * 100) / 100,
      Uranus: Math.round((days/(84 * 365.25)) * 100) / 100 ,
      Neptune: Math.round((days/(164 * 365.25)) * 100) / 100,
      Pluto: Math.round((days/(248 * 365.25)) * 100) / 100
    };
    return planetAges;
  }

}
