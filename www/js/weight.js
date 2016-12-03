/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        //this.initializeControlls();
        var btnCalcAge = document.getElementById('btnCalculateWeight');
        btnCalcAge.addEventListener ("click", this.calcWeight, false);
        //this.calcAge();
        //document.addEventListener('btnCalculate', this.calcAge.bind(this), false);
    },

    /*initializeControlls: function(){
      var btnCalcAge = document.getElementById('btnCalculate');
      btnCalcAge.addEventListener ("click", this.calcAge, false);

    },*/

    validateInputs: function(){
    },
    /*getAge: function(dateString)
    {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
        {
            age--;
        }
        alert(age);
        return age;
    },

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
      alert(dateString);
      var today = new Date();
      alert("cp1");
      var birthDate = new Date(dateString);
      var currYear = today.getFullYear(), bYear = birthDate.getFullYear();
      alert("cp1");
      var currMonth = today.getMonth(), bMonth = birthDate.getMonth();
      var currDay = today.getDate() , bDay = birthDate.getDate();
      var totalDays = (currYear - bYear)*365 + this.addLeapDays(bYear, currYear);
      alert("cp1");
      monthDiff = (currMonth-bMonth)*30;
      dayDiff = currDay-bDay;
      totalDays+=monthDiff + dayDiff;
      alert('td = '+ totalDays);
      //if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
      //{      //    age--;
      //}
      return totalDays;
    },

    getAgePlanets: function(days){
      planetAges = {
        Mercury: days/88,
        Venus: days/225,
        Earth: days/365.25,
        Mars: days/687,
        Jupiter: days/(11.8 * 365.25),
        Saturn: days/(29.4 * 365.25),
        Uranus: days/(84 * 365.25),
        Neptune: days/(164 * 365.25) ,
        Pluto: days/(248 * 365.25)
      };
      return planetAges;
    },*/

    calcWeight: function(){

      formEarthWeight = document.getElementById("fCalcWeight");
      formWeight = document.getElementById("fWeight");
      var weight = formEarthWeight.elements['inputWeight'].value;

      //alert(formAge.elements['ageEarth']);
      //this.getAge(year+ '-'+month+'-'+day);
      //alert(year+'-'+month+'-'+day);
      weights = weightCalculator.getWeightPlanets(weight);
      formWeight.elements['weightMercury'].value = weights.Mercury;
      formWeight.elements['weightVenus'].value = weights.Venus;
      formWeight.elements['weightEarth'].value = weights.Earth;
      formWeight.elements['weightMars'].value = weights.Mars;
      formWeight.elements['weightJupiter'].value = weights.Jupiter;
      formWeight.elements['weightSaturn'].value = weights.Saturn;
      formWeight.elements['weightUranus'].value = weights.Uranus;
      formWeight.elements['weightNeptune'].value = weights.Neptune;
      formWeight.elements['weightPluto'].value = weights.Pluto;

    },


    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
