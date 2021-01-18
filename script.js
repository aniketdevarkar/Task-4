//1.create a request variable
var request = new XMLHttpRequest();
//2.create a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3. send tht connection
request.send();
//4. register a event listener. once tht data is ready,load the data
request.onload = function (){
      let countrydata = JSON.parse(this.response);
     // console.log(countrydata);
     // Get all the countries from Asia continent / “region” using Filter function.
           let region = countrydata.filter(elment =>  elment.region === 'Asia'); 
          console.log(region);

     //Get all the countries with population of less than 2 lacs using Filter function.
      let population1 = countrydata.filter(elment => elment.population <200000 );
      console.log('total: '+population1.length);

      //Print the following details name, capital, flag using forEach function.
      countrydata.forEach(element => {
        console.log('name: '+element.name,'capital: '+element.capital,'flag: '+element.flag)
      });

      //Print the total population of countries using reduce function.
      let totalPopulation = countrydata.reduce((total,current) => (total+current.population),0);
      console.log('totalPopulation: '+totalPopulation);

      //Print the country which uses US Dollars as currency.
      let count = 0;
      
        countrydata.forEach(element =>
          {
            element.currencies.forEach(currency => {
              if(currency.code==='USD')
              { 
                console.log(element.name,currency.code);
                count++;
              }
            }
        )});
      
      console.log('total country with USD = '+count);
  

  }

