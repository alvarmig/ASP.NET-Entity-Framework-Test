# ASP.NET-Entity-Framework-Test
Simple test with ASP.NET, scafolding was used to create an Entity model and connection to a SQL Server database. 
POC-DEMO.sql has the definition of the schema that was used, the schema was dumped Azure.

MVC model was used, a small form was created to insert new users to the databse, its also posible to edit and delete them. 
Javascript validation was implemented on the register form and some DOM manipulation was added to test the integration with C#. 
A viewbag was implemented to display error messages to the users.

<hr>

The navigation bar was modified to include links to the different views of the customers and products.
<p align="center">
  <img src="/img/img-1.JPG" width="1000">
</p>

The following page will display all the users inserted in the database.
<p align="center">
  <img src="/img/img-2.JPG" width="1000">
</p>

The form will verify if the email exist already on the database and will check if the password has been verified. Both verifications are 
done in the backend.
<p align="center">
  <img src="/img/img-3.JPG" width="600">
</p>

Some of the code that was implemented on the GET and POST methods for the validation of the register form.
<p align="center">
  <img src="/img/img-4.JPG" width="1000">
</p>


Entity Relational Diagram that represents the schema that was used.
<p align="center">
  <img src="/img/img-5.JPG" width="1000">
</p>
