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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WCOERXK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCop8cdkHjR7MwHuF2cnVmbMVcnBSEBWYVphq1Ux0%2FSuQIhAP%2BIaQzGIpKn8ZdwMJFR8t8FqmtCo%2FXNxzJ8P4AQp7fqKv8DCCIQABoMNjM3NDIzMTgzODA1IgyGtdfbbFsqNYp25TYq3AM6a7%2FW2KmEXz6g8qxQIGvhq3341giKbfLEunCHEm%2BQFHLEo%2F39QctYi8VUUKm4U0xALSavQtTM9bxYSsqPzSvr7KaI4%2F44KS4tsAR3HElNyhKwuiK4xhWsGUQ1fooOyKZs0CVZxEbTN07EGJY7hg9xZP7JODPxkueGFj6xckPBgZsQAHD3If2nLd%2BJbLbxXqqgpjd9yhvxOsrjKKfaM1roZPgrnruIc4YXEuh5F6%2Bk%2B1RbNfQ%2FrAeEyy4K5QKIyXebeIxnNGmS%2Fn5ZrR92i1%2FFGUvEda03WrpAVQOFAavFjKnIkhwdTIrifoYpVOK%2Bhhvsuzcn7QAvk%2FXmhLHZcEHruE7JZMoUjEnac%2FdQcLGuFSvOt2WIQEgWzNKUVZHxU%2B5S5RXGHmk2Ks0kHPX0OWpBeeYZcohJamFe4fH1o2PgXrd%2FxOcRvA8fZAZQjNCnsnO0WyAWyPuh6idrpILNseH3V61vG5PHny6OK5CHsulb9pGJRDsu1CVwJsk4oalA%2Bkyiz2gHQUCZkwxTjiiWdCsvwbEin3nuyQK9cgsdr66IBrjKpviW8PeiFUpzcT9fKrck%2Bjj7ZHY748tXLzMAsn95Ya8JRVxIpzkTf31EqfTAzqjPTLzEUQSdcAdd3zD8lb7JBjqkAUaQgnqh7diBnudnRF6pTVdRdzOtYYhTPkuujWezBJ%2FbBaUmPL9hnlvsV5EuCkZqBH6cNhRm13ARmmTtPXImaBktJ0E8Te8C3tj8DIR0mmSsbsRr9rHPwUW7%2BTeS0nz6p3jIxveQHlRDmb7I0LsJA93WtaWfNpPdPlpasOEUWDQZKaHCsWWZIPC2aUCb9i46LwUpFZSyPnYDdPPEO%2BmW0qqnHKNp&X-Amz-Signature=128454b7e201f99c1826e41e8c86d0be012b479af62d0c2cdbf407600e8965db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

