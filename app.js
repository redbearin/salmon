'use strict';
var _random = function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

var Store = function(name, min_customers, max_customers, avg_cookies_per_customer, open_time, close_time){
  this.name = name;
  this.min_customers = min_customers; //use for random customer generator
  this.max_customers = max_customers; //use for random customer generator
  this.avg_cookies_per_hour = [];
  this.time = [];
  this.total_cookies = 0;
  this.avg_cookies_per_customer = avg_cookies_per_customer;
  this.open_time = open_time;
  this.close_time = close_time;
};

//This function calculates the average number of cookies per hour.
Store.prototype.number_cookies_per_hour = function() {  
  for (var i = 0; i < (this.close_time - this.open_time); i++){
    var number_customers = _random (this.min_customers, this.max_customers);
    var cookies = Math.floor(number_customers * this.avg_cookies_per_customer);
    this.avg_cookies_per_hour.push(cookies);
  }
};  

//This function calculates the total numbers of hours the store is open.
Store.prototype.calculateTime = function() {
  var total_hours = this.close_time - this.open_time;
  console.log('beginning');
  for (var j=0; j <total_hours; j++) {
    var current_hour = this.open_time + j;
    this.time.push(current_hour);
    console.log(this.time);
  }
  console.log(this.time);
};

//This function calculates the total number of cookies each day.
Store.prototype.sum_cookies = function() {
  //initialize the counters
  var sum_cookies = 0;
  //loops through the hourly avg cookie counts starting at 6 am adding the next hour to get the sum
  //for the entire day
  for (var k = 0; k < this.avg_cookies_per_hour.length; k++) {
    sum_cookies = this.avg_cookies_per_hour[k] + sum_cookies;
  }
  return this.total_cookies = sum_cookies;
};


//This function creates a table that presents the data on number of cookies by store by hour
Store.prototype.create_table = function() {
  var target = document.getElementById('store-header');
  var table_row = document.createElement('tr');
  var table_header = document.createElement('thead');
  var table_footer = document.createElement('tfoot');
  var store_header_element = document.createElement('td');
  var store_header_element_2 = document.createElement('td');
  var store_table_element = document.createElement('td');
  var store_table_element_2 = document.createElement('td');
  var store_footer_element = document.createElement('td');
  var store_footer_element_2 = document.createElement('td');


  //first row  - header and First and Pike
  if (this.name === "First and Pike") {
    store_header_element.textContent = '';
    table_header.appendChild(store_header_element);
    console.log(store_header_element);

    //adding each hour that store is open
    for (var p = 0; p < (this.close_time - this.open_time); p++){
      //stores each hour in a different element - left to right
      var table_header_element = document.createElement('td');
      table_header_element.textContent = this.time[p]; 
      table_header.appendChild(table_header_element);
      console.log(table_header_element);
    }

    //total heading
    store_header_element_2.textContent = "Total";
    table_header.appendChild(store_header_element_2);

    //attach to row
    target.appendChild(table_header);
    //target.setAttribute('border', '2');

    //store name, first column
    store_table_element.textContent = this.name;
    table_row.appendChild(store_table_element);

    //adding data on cookie amounts for each hour the store is open
    for (var q = 0; q < (this.close_time - this.open_time); q++){
      //stores the avg cookies per hour by hour - left to right
      var table_element = document.createElement('td');
      table_element.textContent = this.avg_cookies_per_hour[q]; 
      table_row.appendChild(table_element);
    }

    //total cookies for the store
    store_table_element_2.textContent = this.total_cookies;
    table_row.appendChild(store_table_element_2);

    //attach to the row
    target.appendChild(table_row);
  }

  else {
    //store name, first column
    store_table_element.textContent = this.name;
    table_row.appendChild(store_table_element);

    //adding data on cookie amounts for each hour the store is open
    for (var w = 0; w < (this.close_time - this.open_time); w++){
      //stores the avg cookies per hour by hour - left to right
      var table_element4 = document.createElement('td');
      table_element4.textContent = this.avg_cookies_per_hour[w]; 
      table_row.appendChild(table_element4);
    }

    //total cookies for the store
    store_table_element_2.textContent = this.total_cookies;
    table_row.appendChild(store_table_element_2);

    //attach to the row
    target.appendChild(table_row);  
  }
/*
  //Not in loop
  //Last row - Problem with totaling function
  //total, first column
  store_footer_element.textContent = 'Total';
  table_footer.appendChild(store_footer_element);
  
  //stores totals by hour for all stores
  for (var s = 0; s < (this.close_time - this.open_time); s++){
    table_footer_element.textContent = firstAndPike.avg_cookies_per_hour[s]+seaTacAirport.avg_cookies_per_hour[s]+seattleCenter.avg_cookies_per_hour[s]+capitolHill.avg_cookies_per_hour[s]+ alki.avg_cookies_per_hour[s];
    table_footer.appendChild(table_footer_element);
    console.log(table_footer_element.textContent);
  }

  //total of the totals
  for (var t = 0; t < (this.close_time  - this.open_time); t++){
    //stores each hour in a different element - left to right
    sum_of_array = firstAndPike.avg_cookies_per_hour[t]+seaTacAirport.avg_cookies_per_hour[t]+seattleCenter.avg_cookies_per_hour[t]+capitolHill.avg_cookies_per_hour[t]+ alki.avg_cookies_per_hour[t];
    sum_of_all = sum_of_all + sum_of_array;
    console.log(sum_of_all)

store_footer_element_2.textContent = sum_of_all;
table_footer.appendChild(store_footer_element_2);

//attach to row
target.appendChild(table_footer);
*/
  
};


var firstAndPike = new Store ("First and Pike", 23, 65, 6.3, 6, 20);
firstAndPike.calculateTime();
firstAndPike.number_cookies_per_hour();
firstAndPike.sum_cookies();
firstAndPike.create_table();

var seaTacAirport = new Store ("SeaTac Airport", 3, 24, 1.2, 6, 20);
seaTacAirport.calculateTime();
seaTacAirport.number_cookies_per_hour();
seaTacAirport.sum_cookies();
seaTacAirport.create_table();

var seattleCenter = new Store ("Seattle Center", 11, 38, 3.7, 6, 20);
seattleCenter.calculateTime();
seattleCenter.number_cookies_per_hour();
seattleCenter.sum_cookies();
seattleCenter.create_table();

var capitolHill = new Store ("Capitol Hill", 20, 38, 2.3, 6, 20);
capitolHill.calculateTime();
capitolHill.number_cookies_per_hour();
capitolHill.sum_cookies();
capitolHill.create_table();

var alki = new Store ("Alki", 6, 16, 4.6, 6, 20);
alki.calculateTime();
alki.number_cookies_per_hour();
alki.sum_cookies();
alki.create_table();

//This function allows changes to form from the screen
//when event is triggered chrome creates an object
//gives the event to the function as its first argument

/*var handle_mouse_over = function (){
  console.log(e.target);
};
  //document.addEventListener('mouseover', handle_mose_over)

var hover_h2 = document.getElementById('hover-h2');
hover_h2.addEventListener('mouseover', handle_mouse_over);

var input = document.getElementbyId('input-to-change');

input.addEventListener('change', function(form_event)){
  console.log(corn_event.target.value);
};


var input = document.getElementById('button-clicker');
var handle_button_press = function(event) {
    alert('i can\'t believe you\'ve done this');
  }

button.addEventListener('click'), handle_button_press);
form.addEventListener('submit', function(formSubmit){
  formSubmit.preventDefault();
  console.log(formSubmit);
  console.log(formSubmit.target.studentName.value);
  var student_name =formSubmit.target.studentname.value;
  var color = formsubmit.target.value;
  var hobby = formSubmit.target.hobby;
}
};
*/
