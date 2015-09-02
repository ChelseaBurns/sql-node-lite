var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./Northwind.sl3');

db.serialize((function(){
	db.run('', function (){
	console.log('===============');
	console.log('Categories');
	console.log('===============');
});

getCategories(getProducts);

db.each('SELECT * FROM Categories', function (err, row) {
	console.log(row.Description.toString());
});

db.run('', function (){
	console.log('===============');
	console.log('Products');
	console.log('===============');
});

db.each('SELECT * FROM Products' +
'INNER JOIN Catergories' +
'ON Products.CategoryID = Categories.CategoryID' +
'LIMIT 10', function (err, row) {
	console.log(row.ProductName + ' is a ' + row.CategoryName);
});


db.each('SELECT * FROM Products ' +
	'INNER JOIN Categories ' +
	'ON Products.CategoryID = Categories.CategoryID ' +
	'LIMIT 10', function (err, row) {

	})



db.each('SELECT Employees.LastName AS EmployeeLastName, Supervisors.LastName AS SupervisorLastName' +
	'FROM Employees' +
	'LEFT OUTTER JOIN Employees AS Supervisors ' +
	'On Employees.ReportsTo = Supervisors.EmployeeID', function (err, row) {
		if (row.SupervisorLastName)
	});

db.run('', function (){
	console.log('===============');
	console.log('New CategorieFavorites Table');
	console.log('===============');


db.close();
