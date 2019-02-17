'use strict';

var salmonStore = [];

var _random = function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

var Store = function(name, min_customers, max_customers, avg_cookies_per_customer, open_time, close_time){
  this.name = name;
  this.min_customers = min_customers; 
  this.max_customers = max_customers; 
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
    var number_customers = Math.floor(_random (this.min_customers, this.max_customers));
    var cookies = number_customers * Math.floor(this.avg_cookies_per_customer);
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
  var store_header_element = document.createElement('td');
  var store_header_element_2 = document.createElement('td');
  var store_table_element = document.createElement('td');
  var store_table_element_2 = document.createElement('td');

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
};


Store.prototype.create_table_footer = function() {
  var target = document.getElementById('store-header');
  var table_footer_row = document.createElement('tr');
  var store_footer_element = document.createElement('td');

    
  //Last row - Problem with totaling function
  //total, first column
  store_footer_element.textContent = 'Total';
  table_footer_row.appendChild(store_footer_element);
  
 
  //stores totals by HOUR for all stores
  var totalForEachHour = 0;
  for (var s = 0; s < (this.close_time - this.open_time); s++){
    var store_footer_element_2 = document.createElement('td');
    totalForEachHour = firstAndPike.avg_cookies_per_hour[s]+seaTacAirport.avg_cookies_per_hour[s]+seattleCenter.avg_cookies_per_hour[s]+capitolHill.avg_cookies_per_hour[s]+ alki.avg_cookies_per_hour[s];
    store_footer_element_2.textContent = totalForEachHour;
    table_footer_row.appendChild(store_footer_element_2);
  }
  //target.appendChild(table_footer_row); 
//};

  //total of the totals
  var sum_of_all = 0;
  var sum_of_array = 0;
  for (var t = 0; t < (this.close_time  - this.open_time); t++){
    //stores each hour in a different element - left to right
    sum_of_array = firstAndPike.avg_cookies_per_hour[t]+seaTacAirport.avg_cookies_per_hour[t]+seattleCenter.avg_cookies_per_hour[t]+capitolHill.avg_cookies_per_hour[t]+ alki.avg_cookies_per_hour[t];
    sum_of_all = sum_of_all + sum_of_array;
  }
  console.log('total' + sum_of_all);
  var store_footer_element_3 = document.createElement('td');
  store_footer_element_3.textContent = sum_of_all;
  table_footer_row.appendChild(store_footer_element_3);

  //attach to row
  target.appendChild(table_footer_row);
};


//CREATING A NEW STORE
//this function processes everything that is in <form> part of the html
//the way this tie is shown in html is with a special nominclature that identifies
//the target and the value of that target --- now that is a cool feature of JS!!!

var handle_form_input = function(form_event) {
  // clears the default(whatever that is)
  form_event.preventDefault();

  //Assigns variable names to all the content that came in with the form.
  var name = form_event.target.studentName.value;
  var min_customers = form_event.target.minCust.value;
  var max_customers = form_event.target.maxCust.value;
  var open_time = form_event.target.openTime.value;
  var close_time = form_event.target.closeTime.value;
  var avg_cookies_per_customer = form_event.target.cookiesPerCustomer.value;

  //creates an instance of the newStore object
  var newStore = new Store (name, min_customers, max_customers, avg_cookies_per_customer, open_time, close_time);
  newStore.calculateTime();
  newStore.number_cookies_per_hour();
  newStore.sum_cookies();
  newStore.create_table();
  salmonStore.push(newStore);

  //clear all table values and regenerate
  document.getElementById('store-header').innerHTML ='';

  //when an event it initiated regenerate the table and totals
  for (var y = 0; y < salmonStore.length; y++){
    var recreatingTable = new Store (salmonStore[y].name, salmonStore[y].min_customers, salmonStore[y].max_customers, salmonStore[y].avg_cookies_per_customer[y], salmonStore[y].open_time, salmonStore[y].close_time);
    recreatingTable.calculateTime();
    recreatingTable.number_cookies_per_hour();
    recreatingTable.sum_cookies();
    recreatingTable.create_table();
  }
  recreatingTable.create_table_footer();
};

var firstAndPike = new Store ("First and Pike", 23, 65, 6.3, 6, 20);
firstAndPike.calculateTime();
firstAndPike.number_cookies_per_hour();
firstAndPike.sum_cookies();
firstAndPike.create_table();
salmonStore.push(firstAndPike);

var seaTacAirport = new Store ("SeaTac Airport", 3, 24, 1.2, 6, 20);
seaTacAirport.calculateTime();
seaTacAirport.number_cookies_per_hour();
seaTacAirport.sum_cookies();
seaTacAirport.create_table();
salmonStore.push(seaTacAirport);

var seattleCenter = new Store ("Seattle Center", 11, 38, 3.7, 6, 20);
seattleCenter.calculateTime();
seattleCenter.number_cookies_per_hour();
seattleCenter.sum_cookies();
seattleCenter.create_table();
salmonStore.push(seattleCenter);

var capitolHill = new Store ("Capitol Hill", 20, 38, 2.3, 6, 20);
capitolHill.calculateTime();
capitolHill.number_cookies_per_hour();
capitolHill.sum_cookies();
capitolHill.create_table();
salmonStore.push(capitolHill);

var alki = new Store ("Alki", 6, 16, 4.6, 6, 20);
alki.calculateTime();
alki.number_cookies_per_hour();
alki.sum_cookies();
alki.create_table();
alki.create_table_footer();
salmonStore.push(alki);

//LISTENERS
//accesses a listener on the browser - this listener is only activated within the <form> part of the
// html, because this is where 'input' is tied to the 'submit'id. Once the event is triggered the function handle_form_input will
//begin.

//Attaches what we are doing to the element that includes 'new-store-form'
var store_form = document.getElementById('new-store-form');
store_form.addEventListener('submit', handle_form_input);

/* GENERAL NOTE:
//any_element.addEventListener('MDN has a pile of event types - check there', any function that you want it be perform)*/
