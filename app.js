'use strict';

//GLOBAL VARIABLES
var salmonStore = [];

var _random = function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

//FUNCTIONS
//Constructor Function that builds a Store.
var Store = function (name, min_customers, max_customers, avg_cookies_per_customer, open_time, close_time) {
  this.name = name;
  this.min_customers = min_customers;
  this.max_customers = max_customers;
  this.avg_cookies_per_hour = [];
  this.time = [];
  this.avg_cookies_per_customer = avg_cookies_per_customer;
  this.open_time = open_time;
  this.close_time = close_time;
};

//Method of Store Contructor Function -- calculates the average number of cookies per hour
Store.prototype.number_cookies_per_hour = function () {
  for (var i = 0; i < 14; i++) {
    var number_customers = Math.floor(_random(this.min_customers, this.max_customers));
    var cookies = (number_customers * Math.floor(this.avg_cookies_per_customer));
    this.avg_cookies_per_hour.push(cookies);
  }
};

//Method of Store Contructor Function -- calculates the total numbers of hours the store is open
Store.prototype.calculateTime = function () {
  var total_hours = this.close_time - this.open_time;
  for (var j = 0; j < total_hours; j++) {
    var current_hour = this.open_time + j;
    this.time.push(current_hour);
  }
};


//Stand Alone Function -- creates a table that presents cookies by store by hour data.
var create_table = function() {
  document.getElementById('store-table').innerHTML = '';
  var target = document.getElementById("store-table");
  var table_row = document.createElement("tr");

  //top row
  //blank square
  var store_table_element = document.createElement("td");
  store_table_element.textContent = '';
  table_row.appendChild(store_table_element);

  //adding each hour that store is open
  for (var p = 0; p < 14; p++) {
    //stores each hour in a different element - left to right
    var store_table_element_2 = document.createElement("td");
    store_table_element_2.textContent = salmonStore[0].time[p];
    table_row.appendChild(store_table_element_2);
  }

  //total heading
  var store_table_element_3 = document.createElement("td");
  store_table_element_3.textContent = 'Total';
  table_row.appendChild(store_table_element_3);

  //attach to row
  target.appendChild(table_row);

  //add locations
  for (var h=0; h < salmonStore.length; h++) {
    var table_row_2 = document.createElement('tr');
    //store name, first column
    var store_table_element_4 = document.createElement("td");
    store_table_element_4.textContent = salmonStore[h].name;
    table_row_2.appendChild(store_table_element_4);

    //average cookies by store
    var runningTotal= 0;
    var currentAmount;
    for (var q = 0; q < 14; q++) {
      currentAmount === 0;

      //stores the avg cookies per hour by hour - left to right
      var store_table_element_5 = document.createElement('td');
      store_table_element_5.textContent = salmonStore[h].avg_cookies_per_hour[q];
      table_row_2.appendChild(store_table_element_5);

      //keeps a running total of the sum
      currentAmount = salmonStore[h].avg_cookies_per_hour[q];
      runningTotal = runningTotal + currentAmount;
      console.log('running total' + runningTotal);
    }

    //sending total cookies for the store to the page
    var store_table_element_6 = document.createElement('td');
    store_table_element_6.textContent = runningTotal;
    table_row_2.appendChild(store_table_element_6);

    //attach to the row
    target.appendChild(table_row_2);
  }
};

//Stand Alone Function -- creates the table footer that shows the totals
var create_table_footer = function () {
  var target = document.getElementById('store-table');
  var table_footer_row = document.createElement('tr');
  var store_footer_element = document.createElement('td');


  //total, first column
  store_footer_element.textContent = 'Total';
  table_footer_row.appendChild(store_footer_element);


  //stores totals by hour for all stores
  for (var s = 0; s < 14; s++) {
    var totalForEachHour = 0;
    var grandTotal = 0;
    var store_footer_element_2 = document.createElement('td');
    for (var g = 0; g < salmonStore.length; g++) {
      totalForEachHour = salmonStore[g].avg_cookies_per_hour[s];
      grandTotal = totalForEachHour + grandTotal;
    }

    store_footer_element_2.textContent = grandTotal;
    table_footer_row.appendChild(store_footer_element_2);
  }

  //total of the totals
  var store_footer_element_3 = document.createElement('td');
  var sum_of_array = 0;
  var total_of_array= 0;
  for (var t = 0; t < 14; t++) {
    //stores each hour in a different element - left to right
    for (var f = 0; f < salmonStore.length; f++) {
      sum_of_array = salmonStore[f].avg_cookies_per_hour[t];
      total_of_array = sum_of_array + total_of_array;
    }
  }
  store_footer_element_3.textContent = total_of_array;
  table_footer_row.appendChild(store_footer_element_3);

  //attach to row
  target.appendChild(table_footer_row);
};

//Stand Alone Function - creates an instance of a store
var createStore = function(name, min_customers, max_customers, avg_cookies_per_customer, open_time, close_time){
  var newStore = new Store(name, min_customers, max_customers, avg_cookies_per_customer, open_time, close_time);
  newStore.calculateTime();
  newStore.number_cookies_per_hour();
  //newStore.sum_cookies();
  salmonStore.push(newStore);
};

//Stand Alone Function -- add a new store and recrete the table
//this function  accepts input from a from the viewer sees on the sales page and processes
//the information collected to create a new store
var handle_form_input = function (form_event) {
  
  // clears the default(whatever that is)
  form_event.preventDefault();

  //Assigns variable names to all the content that came in with the form.
  var name = form_event.target.storeName.value;
  var min_customers = form_event.target.minCust.value;
  var max_customers = form_event.target.maxCust.value;
  var open_time = form_event.target.openTime.value;
  var close_time = form_event.target.closeTime.value;
  var avg_cookies_per_customer = form_event.target.cookiesPerCustomer.value;

  //creates an instance of the newStore object
  var newStore = new Store(name, min_customers, max_customers, avg_cookies_per_customer, open_time, close_time);
  newStore.calculateTime();
  newStore.number_cookies_per_hour();
  //newStore.sum_cookies();
  salmonStore.push(newStore);

  //rebuild table
  create_table();
  create_table_footer();
};


//MAIN BODY OF CODE
createStore('First and Pike', 23, 65, 6.3, 6, 20);
createStore('SeaTac Airport', 3, 24, 1.2, 6, 20);
createStore('Seattle Center', 11, 38, 3.7, 6, 20);
createStore('Capitol Hill', 20, 38, 2.3, 6, 20);
createStore('Alki', 6, 16, 4.6, 6, 20);

create_table();
create_table_footer();

//LISTENER
//accesses a listener on the browser - this listener is only activated within the <form> part of the html, because this is where 'input' is tied to the 'submit'id. Once the event is triggered the function handle_form_input will begin.

//Attaches what we are doing to the element that includes the id "new-store-form".
var store_form = document.getElementById('new-store-form');
//The listener
store_form.addEventListener('submit', handle_form_input);
