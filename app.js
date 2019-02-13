'use strict';
var _random = function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

var SeaTac = {
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

SeaTac.number_cookies_per_hour();

/*
  total_cookies: function() {
      var sum_cookies = 0;
      for (var i = 0; i < this.avgCookiesByHour.length; i++) {
        sum_cookies = this.sumCookies + this.avgCookiesByHour[i]; 
      }
      return this.sumCookies;
    }
  
  };   
// generate the a
SeaTac.: function() {
  this.sumCookies = 0;
  for (var i = 0; i < this.avgCookiesByHour.length; i++) {
    this.sumCookies = this.sumCookies + this.avgCookiesByHour[i]; 
  }
  return this.sumCookies;
},

// generate the average number of cookies per hour with a random number generator
var _randomNumber = function getRandomArbitrary (min_cookies, max_cookies) {
  return Math.random() * (max_cookies - min_cookies) + min_cookies;
  }



SeaTac.calculate = function() {

*/

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

  
  //target.appendChild(li_el);
  //target.appendChild(hr_li_el);

  console.log(target);
};
SeaTac.calculateTime();
SeaTac.number_cookies_per_hour();
SeaTac.sum_cookies();
juliann_render();



  //var hour_li_el = document.createElement('li');

  //for (var i =0, i < , i++){
  //  var li_el = document.createElement('li');
  //  hour_li_el.textContent = this.cookies
 // }


/*
function render_salmon_cookies(){

  //creating elements
  var li_el = document.createElement('li');
  var article_el = document.createElement('article');
  var h2_el = document.createElement('h2');
  var p_el = document.createElement('p');
  var span_el = document.createElement('span');

  var table_el = document.createElement('table');
  var th_el = document.createElement('th');
  var tr_el = document.createElement('tr');
  var td_el = document.createElement('td');
 

  console.log(h2_el);

  //giving them context
  h2_el.textContent = 'SeaTac Airport';
  p_el.textContent = 'scooby is brown';
  span_el.textContent = '11/10';

  //combining everything back together
  article_el.appendChild(h2_el);
  article_el.appendChild(p_el);
  article_el.appendChild(span_el);

  li_el.appendChild(article_el);

  console.log(li_el);
  var target_element = document.getElementById('salmon-cookie-details');
  target_Element.appendChild(li_el);
}

render_salmon_cookies();
*/