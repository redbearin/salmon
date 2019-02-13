//HELP -- I was able to download the image form github, but am having trouble referencing it.
//How can I see it locally?
//Where do I define the properties for each of the items in the constructor function. 

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
  
    //This function calculates the average number of cookies per hour.
    this.number_cookies_per_hour = function() {  
    for (var i = 0; i < (this.close_time - this.open_time); i++){
      var number_customers = _random (this.min_customers, this.max_customers);
      var cookies = Math.floor(number_customers * this.avg_cookies_per_customer);
      this.avg_cookies_per_hour.push(cookies);
      //this.avg_cookies_per_hour[i] = number_customers * this.avg_cookies_per_customer;
    }
  };

  //This function calculates the total numbers of hours the store is open.
  this.calculateTime = function() {
    var total_hours = this.close_time  - this.open_time;
    for (var j=0; j <total_hours; j++) {
      var current_hour = this.open_time + j;
      this.time.push(current_hour);
    }
  };
  //This function calculates the total number of cookies each day.
  this.sum_cookies = function() {
    //initialize the counter
    var sum_cookies = 0;
    //loops through the hourly avg cookie counts starting at 6 am adding the next hour to get the sum
    //for the entire day
    for (var k = 0; k < this.avg_cookies_per_hour.length; k++) {
      sum_cookies = this.avg_cookies_per_hour[k] + sum_cookies;
    }
    return this.total_cookies = sum_cookies;
  };

  //HELP --- Do I have this function in the wrong place?
  //This function creates a table that presents the data on number of cookies by store by hour.
  this.create_table() {
    //creates the body element
    var body = document.getElementsByTag("body");
    //creates table elements
    var table = document.createElement("table");
    var table_head = document.createElement("thead");
    var table_body = document.createElement('tbody');
    var table_footer = document.createElement('tfoot');

    //creating rows and columns for the table
    //The outside loop is creating the rows, inside loop adds elements to the row
    //HELP -- I need to change n to the number of stores. I am not sure how to do this.
    //I think I need to use my this.close_time  - this.open_time to set how many elements across
    for (var n = 0; n < 5; n++){
      //create the table row element
      var table_row = document.createElement('tr');

      //adding the store name information to the first element
      //create the store name element and the element to store text in that element
      var store_name_table_element = document.createElement('td');
      var store_name_table_element_content = ;//HELP -- I'm not sure what to do here
      //attaching the store text to the store name text element and store name text element to the row element
      store_name_table_element.appendChild(store_name_table_element_content);
      table_row.appendChild(store_name_table_element);

      //adding table elements for each hour the store is open
      for (var p = 0; p < (this.close_time  - this.open_time); p++){
        //creates an element to store cookie count info. and an element to store text in that element
        var table_element = document.createElement('td');
        var table_element_content = ;//HELP -- I'm not sure what to do here (needs to cycle through )
        //attaching the cookie count text to the cookie count element and cookie count element to row element
        table_element.appendChild(table_element_content);
        table_row.appendChild(table_element);
      }
       //attaching the row element to the body of the table
      table_body.appendChild(table_row);
    }
    //attaching the row elements to the table element
    table_body.appendChild(table_row);
    //attaching the table element to the body element
    body.appendChild(table);
  };
  
//HELP -- is this the proper way to call a constructor function?

var firstandPike = new Store ("First and Pike", 23, 65, 6.3, 6, 20);
firstandPike.calculateTime();
firstandPike.number_cookies_per_hour();
firstandPike.sum_cookies();
firstandPike.create_table();

var seaTacAirport = new Store ("SeaTac Airport", 3, 24, 1.2, 6, 20);
SeaTac.calculateTime();
SeaTac.number_cookies_per_hour();
SeaTac.sum_cookies();
SeaTac.create_table();

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

var alki = new Store ("Alki", 2, 16, 4.6, 6, 8);
alki.calculateTime();
alki.number_cookies_per_hour();
alki.sum_cookies();
alki.create_table();
