var weightCalculator = {

  getWeightPlanets: function(weightOnEarth){
    planetWeights = {
      Mercury: Math.round((weightOnEarth*0.38) * 100) / 100,
      Venus: Math.round((weightOnEarth*0.91 ) * 100) / 100,
      Earth: Math.round((weightOnEarth*1) * 100) / 100,
      Mars: Math.round((weightOnEarth*0.38) * 100) / 100,
      Jupiter: Math.round((weightOnEarth*2.14) * 100) / 100,
      Saturn: Math.round((weightOnEarth*0.91) * 100) / 100,
      Uranus: Math.round((weightOnEarth*0.86) * 100) / 100 ,
      Neptune: Math.round((weightOnEarth* 1.1) * 100) / 100,
      Pluto: Math.round((weightOnEarth * 0.08 ) * 100) / 100
    };
    return planetWeights;
  }

}
