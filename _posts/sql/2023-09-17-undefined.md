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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJFUA5B%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCleO940Mz9aHQux9%2FicvofOCqjBZep0pItWK%2B4ZV2ojQIhAM1RyZCTrw%2Fe3QkdMmMw2O1jAC%2FBDVd4yvV1cG%2Fmil%2FWKv8DCCIQABoMNjM3NDIzMTgzODA1IgyH%2FFYSLXl%2B8ILXfZ8q3AN7cAq4xYUef6%2BtDMvI5pcgMbulX8lrR5UV5Z1Zm2e0eiUj9krEn%2FhoKM0eiFRZ17HG1b2nRdch%2F7O1uM8rtKgy%2Fg5TWbix%2FF%2Br7EeDpb%2BCMN0LHxnin87%2FsFAe1fQgs17Pry%2F0dRHCySXNpwouNxhl%2FjY7dCSvDhPXTXgK3rTvMxsC719aCy32pp5Rx38TamExwbwXZ4jXX0PET%2FXkc0vjBWCqhif1tSNITZmXOtlmI2%2F2fo3OkiHOwCdJ%2Bj%2F%2Fg009eSFzdpzDljMLWL4dTdb6k%2B4K3%2FnO0uSjejj5hqGyQCOOSRo5ljl%2F133FQRCxUIl2A7S7INe1dsrwizKKm%2FLd%2FI48v1mCZM%2BhrSWQxfZQ8HB1nMy1odVb1IgaI9C7x2Vh%2Fdks9u6tcjoZd7njPmSF51DcJJ%2BvvrEkLQZRy9C%2BvMAp0WBZbTp%2FP19GNpQLxkT3oABWMhPI7JqRY7iOi3n4Azy%2BL4WhfR4eONv5XBhjMYK5qroP9YQ46Emh5zyj0dhqByCJMr4Kbo%2F%2BoSliqHULmEEPMuo89ejRDNEfjzQEwIBnTNkyy8APES4QA7GwvzrPgktyRaKvMtjudxJUnfJMooc6%2Bd69SdgzZ32%2FaoAxx0yN7a%2F%2B6OGHCCGhUzDclL7JBjqkAZDX%2BbOohXfXaxaqAiXPBGDJdHi%2FwZJu6oJMWDyjAPjlC%2BDzrD%2FzvKDeLkZWiUSlJ9AoFo8EA0qVD2phGDtIMcloMEiI9KESpkpl4TDFXl9PTX5jLK4kLPwPRYKKc%2F%2BtX3B14OlCCllD%2BAJiZqTZFFRK9sq2kdyuzvBQxtHC5ZSsqamFcPaU5LHbsBqPuliN0ZlbEkXVfVkwffHvL%2BTP4qPdRC0e&X-Amz-Signature=23a039f86437441feb69a934703b4efeb456954c2e13dbeca658fce517fca896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

