//implement a function calculateSalesTax that calculates the total sales and total tax, grouped by company.

//INPUT DATA
const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

//IMPLEMENT FUNCTION
const calculateSalesTax = function(salesData, taxRates) {
  const results = {};
  // Implement your code here
  for (const data of salesData) { //for...of to loop through array
    //console.log(data['name'])
    if (data['name'] === 'Telus') {
      //console.log('Telus')
      results['Telus'] = {};
      if (results['Telus']) {
        for (let i = 0; i < companySalesData.length; i++) {
          //STOPPED WORKING HERE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          console.log(companySalesData[i]['sales']) //NEXT SUM ALL SALES
        }
        results['Telus']['totalSales:'] = 0;
        results['Telus']['totalTaxes:'] = 0;
      }
    }

    if (data['name'] === 'Bombardier') {
      results['Bombardier'] = {};
      if (results['Bombardier']) {
        results['Bombardier']['totalSales:'] = 0;
        results['Bombardier']['totalTaxes:'] = 0;
      }
    }
  }
  return results
};
console.log(calculateSalesTax(companySalesData, salesTaxRates));
/*EXPECTED RESULTS
const results = calculateSalesTax(companySalesData, salesTaxRates)
//
{
  Telus: {
    totalSales: 1300,
    totalTaxes: 144,
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40,
  }
}
*/