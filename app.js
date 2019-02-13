'use strict';
var _random = function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

function Store (name, min_customers, max_customers, avg_cookies_per_customer, open_time, close_time){
  this.name = name;
  this.min_customers = min_customers; //use for random customer generator
  this.max_customers = max_customers; //use for random customer generator
  this.avg_cookies_per_hour = avg_cookies_per_hour;
  this.time = time;
  this.total_cookies = total_cookies;
  this.avg_cookies_per_customer = avg_cookies_per_customer;
  this.open_time = open_time;
  this.close_time = close_time;
  
  this.number_cookies_per_hour = function() {  
    for (var i = 0; i < (this.close_time - this.open_time); i++){
      var number_customers = _random (this.min_customers, this.max_customers);
      var cookies = Math.floor(number_customers * this.avg_cookies_per_customer);
      this.avg_cookies_per_hour.push(cookies);
      //this.avg_cookies_per_hour[i] = number_customers * this.avg_cookies_per_customer;
    }
  };
  this.calculateTime = function() {
    var total_hours = this.close_time  - this.open_time;
    for (var j=0; j <total_hours; j++) {
      var current_hour = this.open_time + j;
      this.time.push(current_hour);
    }
  };

  this.calculateTime = function() {
    var total_hours = this.close_time  - this.open_time;
    for (var j=0; j <total_hours; j++) {
      var current_hour = this.open_time + j;
      this.time.push(current_hour);
    }
  };

  this.sum_cookies = function() {
    var sum_cookies = 0;
    for (var k = 0; k < this.avg_cookies_per_hour.length; k++) {
      sum_cookies = this.avg_cookies_per_hour[k] + sum_cookies;
    }
    return this.total_cookies = sum_cookies;
  };

  this.render = function (){
    var target = document.getElementById('store');
    var li_el = document.createElement('li');
    var h2_el = document.createElement('h2');
    
    h2_el.textContent = this.name;
    
    target.appendChild(h2_el);
    
    for (var m = 0 ; m < this.close_time - this.open_time; m++){
      var hr_li_el = document.createElement('li');
      hr_li_el.textContent = "" + this.time[m] + ':  ' + this.avg_cookies_per_hour[m]; //""turning into string
      target.appendChild(hr_li_el);
    }
    
    li_el.textContent = 'Total Cookies:' + this.sum_cookies();
    target.appendChild(li_el);
    
    console.log(target);
  };
  
  
var firstandPike = new Store ("First and Pike", 23, 65, 6.3, 6, 20);
firstandPike.calculateTime();
firstandPike.number_cookies_per_hour();
firstandPike.sum_cookies();
firstandPike.render();

var seaTacAirport = new Store ("SeaTac Airport", 3, 24, 1.2, 6, 20);
SeaTac.calculateTime();
SeaTac.number_cookies_per_hour();
SeaTac.sum_cookies();
SeaTac.render();

var seattleCenter = new Store ("Seattle Center", 11, 38, 3.7, 6, 20);
seattleCenter.calculateTime();
seattleCenter.number_cookies_per_hour();
seattleCenter.sum_cookies();
seattleCenter.render();

var capitolHill = new Store ("Capitol Hill", 20, 38, 2.3, 6, 20);
capitolHill.calculateTime();
capitolHill.number_cookies_per_hour();
capitolHill.sum_cookies();
capitolHill.render();

var alki = new Store ("Alki", 2, 16, 4.6, 6, 8);
alki.calculateTime();
alki.number_cookies_per_hour();
alki.sum_cookies();
alki.render();




/*var SeaTac = {
  name: 'SeaTac',
  min_customers: 3, //use for random customer generator
  max_customers: 24, //use for random customer generator
  avg_cookies_per_hour: [],
  time: [],
  total_cookies: 0,
  avg_cookies_per_customer: 1.2,
  open_time: 6,
  close_time: 20,
};
SeaTac.number_cookies_per_hour = function() {  
  for (var i = 0; i < (this.close_time - this.open_time); i++){
    var number_customers = _random (this.min_customers, this.max_customers);
    var cookies = Math.floor(number_customers * this.avg_cookies_per_customer);
    this.avg_cookies_per_hour.push(cookies);
    //this.avg_cookies_per_hour[i] = number_customers * this.avg_cookies_per_customer;
  }
};
SeaTac.calculateTime = function() {
  var total_hours = this.close_time  - this.open_time;
  for (var j=0; j <total_hours; j++) {
    var current_hour = this.open_time + j;
    this.time.push(current_hour);
  }
};

SeaTac.sum_cookies = function() {
  var sum_cookies = 0;
  for (var k = 0; k < this.avg_cookies_per_hour.length; k++) {
    sum_cookies = this.avg_cookies_per_hour[k] + sum_cookies;
  }
  return this.total_cookies = sum_cookies;
};

var juliann_render = function (){
  var target = document.getElementById('store');
  var li_el = document.createElement('li');
  var h2_el = document.createElement('h2');

  h2_el.textContent = SeaTac.name;

  target.appendChild(h2_el);

  for (var m = 0 ; m < SeaTac.close_time - SeaTac.open_time; m++){
    var hr_li_el = document.createElement('li');
    hr_li_el.textContent = "" + SeaTac.time[m] + ':  ' + SeaTac.avg_cookies_per_hour[m]; //""turning into string
    target.appendChild(hr_li_el);
  }

  li_el.textContent = 'Total Cookies:' + SeaTac.sum_cookies();
  target.appendChild(li_el);

  console.log(target);
};
SeaTac.calculateTime();
SeaTac.number_cookies_per_hour();
SeaTac.sum_cookies();
juliann_render();

var pikeStreet = {
  name: '1st and Pike',
  min_customers: 23, //use for random customer generator
  max_customers: 65, //use for random customer generator
  avg_cookies_per_hour: [],
  time: [],
  total_cookies: 0,
  avg_cookies_per_customer: 6.5,
  open_time: 6,
  close_time: 20,
};
pikeStreet.number_cookies_per_hour = function() {  
  for (var i = 0; i < (this.close_time - this.open_time); i++){
    var number_customers = _random (this.min_customers, this.max_customers);
    var cookies = Math.floor(number_customers * this.avg_cookies_per_customer);
    this.avg_cookies_per_hour.push(cookies);
    //this.avg_cookies_per_hour[i] = number_customers * this.avg_cookies_per_customer;
  }
};
pikeStreet.calculateTime = function() {
  var total_hours = this.close_time  - this.open_time;
  for (var j=0; j <total_hours; j++) {
    var current_hour = this.open_time + j;
    this.time.push(current_hour);
  }
};

pikeStreet.sum_cookies = function() {
  var sum_cookies = 0;
  for (var k = 0; k < this.avg_cookies_per_hour.length; k++) {
    sum_cookies = this.avg_cookies_per_hour[k] + sum_cookies;
  }
  return this.total_cookies = sum_cookies;
};
var second_render = function (){
  var target = document.getElementById('store');
  var li_el = document.createElement('li');
  var h2_el = document.createElement('h2');
  
  h2_el.textContent = pikeStreet.name;

  target.appendChild(h2_el);

  for (var m = 0 ; m < pikeStreet.close_time - pikeStreet.open_time; m++){
    var hr_li_el = document.createElement('li');
    hr_li_el.textContent = "" + pikeStreet.time[m] + ':  ' + pikeStreet.avg_cookies_per_hour[m]; //""turning into string
    target.appendChild(hr_li_el);
  }

  li_el.textContent = 'Total Cookies:' + pikeStreet.sum_cookies();
  target.appendChild(li_el);

  console.log(target);
};
pikeStreet.calculateTime();
pikeStreet.number_cookies_per_hour();
pikeStreet.sum_cookies();
second_render();*/