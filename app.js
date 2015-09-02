var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./Northwind.sl3');

db.serialize(function(){

	db.run('', function (){
	console.log('===============');
	console.log('Categories');
	console.log('===============');
})


db.each('SELECT * FROM Categories', function (err, row) {
	console.log(row.Description.toString());
});

db.run('', function (){
	console.log('===============');
	console.log('Products');
	console.log('===============');
})


db.each('SELECT * FROM Products' +
'INNER JOIN Catergories' +
'ON Products.CategoryID = Categories.CategoryID' +
'LIMIT 10', function (err, row) {
	console.log(row.ProductName + ' is a ' + row.CategoryName);
});



db.run('', function (){
	console.log('===============');
	console.log('Employees Supvervisor');
	console.log('===============');
})



db.each('SELECT Employees.LastName, Super.LastName AS Supervisor FROM Employees ' +
  'LEFT OUTER JOIN Employees AS Super ' +
  'ON Employees.ReportsTo = Super.EmployeeID ', function (err, row) {
    //bang (!) means not true
    if (!row.Supervisor) {
      console.log(row.LastName + ' has no supervisor');
    }
    console.log(row.LastName + '\'s ' + 'supervisor is ' + row.Supervisor);
  })

//Homework
//1 Create a table
//2 Insert data
//3 Query for Favorite Category Descriptions
//4 Update ERD > Category FavID: from 4 to 5
//5 Redo Query from #3
//6 Delete Category Favorites > FavID: 3
//7 Insert another row
//8 Rerun #3

db.run('', function (){
	console.log('===============');
	console.log('New CategorieFavorites Table');
	console.log('===============');


db.close();

})
