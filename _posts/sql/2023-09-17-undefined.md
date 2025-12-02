---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFNOJCBI%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGcpMpHnaYuiR6f2A9xKYT13yl%2B55EtwUEYPkELyllxMAiA388ZHppbE55Filta8SKq499wz%2FeGfAKWrcNZjO%2F1stSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2FgUiND4GcMTFnf0NKtwDeG7FLTLtyxteFhvXjRbeYugkRBJhkoUBHSOi3K7YhCbRV7rzffSiaBXKVpvE6suph7duWAwOn%2BNhAKj5Bnmht%2By2IbO61XdYQv%2FHccYmJI2Yk%2BXF7b2fMa9Q6BGsPm0fEgvOAh4ZrfSpmWkH0iuYZWJ%2F%2FHA4zoHSR8541vgt0pWCvfNbqWEhwXX4wvEb7orzVt5xeSlrMJfAijxt3BdX0gBY%2BerhapMevqxnIfy4IyBHR6tspgllRKaApJ%2FHvgj6Xgsv%2F5PdCOeKwZoSRrXOJfPR3MyCEuRXTB3O6SnmpNlzH4HewpmD4EoGCJ2VbYqMbWL8alHqdCUsetI7hosmOta%2FQ9xO1vkSgiCsb5QD%2BgrpkMQZHNKx579tPz7ZTnCjoqPOA3lAZfCQLFdOw9lQAHQSX6rptcceZfanB96bn9lAczDchv2r%2BNZbyZY2GlPK%2FWN5gegpePQoQbXDD0VhmB3nKUXQ5lLvQuidYvuwNS%2FqQqFFocreX6XShN6Y%2FCix%2FQsBeXLs5hOw8gm9uEYywcNwk8v7J%2FpjsERUwMNusefM%2FvY5Tm0d7JKlYcJFF5wBoueGNAOdb0M0ugBXT9slkm%2FzMnQsE34sKk8QPA2xM%2F169DFNiF0rBIHic3Uw%2FuS9yQY6pgHbcZwkY%2BdARdriWT5TvJ%2BfCToI2JN4bJycsVH%2BhxtiQ7BC6P6LianBlV2K%2FnDaIlzce8nJpgVL6rqc%2Bkp6ExJPKgNQwtaWV3w4cE%2B8GOEV2dERIlG0eif4E6WXRXCx23I0hDWnfRUOM99TV%2F%2BXkFdIamPb63h4FILFn9OTyrB6wvXSA1IOPQm09hlYst%2F90U4CFEjEUcEhjrc5dESE7%2BYZgZGlyEOM&X-Amz-Signature=a7bdf3d76436088f349aaa94126b6e44dd3f8cba755283baa731c14ab7c5bf84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Dada nuestra tabla de libros, podemos realizar una consulta [SQL](https://www.manualweb.net/sql/), para contar elementos de la siguiente forma:


```sql
SELECT count(*) FROM libros
```


Esta consulta [SQL](http://www.manualweb.net/sql/) nos devolverá todas las entradas que tenga la tabla libros. Es decir, todos los libros de todos los autores. De esta forma, ante una tabla que tengamos los siguientes elementos dentro de ella.


| ISBN               | Titulo                  | Autor             |
| ------------------ | ----------------------- | ----------------- |
|  978-1-4493-0814-8 | What Is HTML5?          | Brett McLaughlin  |
| 970-26-0518-0      | Cómo Programar en Java  | Paul Deitel       |
| 978-84-415-2348-7  | Java SE 6               | F. Javier Moldes  |
| 978-1-4493-1439-2  | What's New in Java 7?   | Madhusudhan Konda |
| 978-1-4493-1608-2  | Just Spring             | Madhusudhan Konda |
| 978-1-4493-2838-2  | Just Spring Data Access | Madhusudhan Konda |

undefined
Obtendremos que hay 6 libros al utilizar la sentencia `count`.


Contar elementos distintos en [SQL](https://www.manualweb.net/sql/) sería para cubrir consultas del estilo... _"Contar todas las editoriales distintas de las que tenemos libros"_ o _"Contar todos los autores distintos de los que tenemos libros"_.


### Count y distinct para elementos distintos.


Para ello deberemos de aplicar la función `count` de [SQL](http://www.manualweb.net/sql/) sobre los campos editorial o autor, pero con una salvedad y es que utilizaremos el modificador `distinct`. Mediante esta sentencia `distinct` estaremos contando aquellos elementos que sean distintos.


La sentencia [SQL](http://www.manualweb.net/sql/) tendrá la siguiente sintaxis:


```sql
SELECT count(distinct campo) FROM tabla
```


Así, para sacar los autores distintos, ejecutaremos la siguiente sentencia [SQL](http://www.manualweb.net/sql/):


```sql
SELECT count(distinct autor) FROM libros
```


Siendo el resultado igual a 4 ya que solo hay libros de 4 autores diferentes.


De esta manera ya sabemos cómo podemos contar elementos distintos con [SQL](https://www.manualweb.net/sql/) mediante la sentencia `count` y el modificador `distinct`.

