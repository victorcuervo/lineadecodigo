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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV5GMLGR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGhXtUeRqwRkPLxGawp2cc%2BwOPJXdK8ZOZta8uye6m71AiBubA67DHPIycPNtBvPUPIchXvPmJX6iyu%2BWAqjizD4Jir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMuKjogZMKJ7kBq%2FzLKtwDJsOzM9wSI0U58BMYnHpKdOoBBn9drE5ZxUmm3Zx3voE7P7%2FntrjBphkXnw0ZL2404HuKwkYnLLeScKRZfW3jPsg%2Byypu%2FdS5%2BViLuYb93%2B7kTLwks%2F00nbi%2BSOpSRfKUSw3BgsABF%2FUhkMFG%2FzLIN6YsOoqHFufRiPhSy7URwUZb8lISKGjAivqa7HsiFdjDzjDANE8Qr3e1y8lT0LNIIJfMc0fERYZoOYrGaI0ZcUbC8G7FFxyQF9Dkrg%2BQpe2mPvaXtI6A4V87S45FZTpyuS%2FSqXP6jIgH71hoxZeqfWHgLwlTUOJJOjizkToApUHD0H%2BIehvpyDHF8KUCo4FJEEBmx2Jqtr4erzsmvx8XtuPVNEjH3Y2ueRFV%2Boh28s8qHrQJOKQEPn6rwrPCdF5aJXIA6OwV63HHxeL7l0G6Q1DICf1aPeJSsuBFLJbfcWk%2FfE1%2Bi3z4mGZ%2F64ccQFoDESiw45jbxoSMWxX%2FU5rfx%2B4VNOOY8FiRO2AxrAV847ed8KwnW%2BMgymATrNuhW9L0AGdpUxOmW6XgJHd4FXqPgumSJ%2FLpujK33Qk7P3HA%2BFpBaxq4HurMfw%2BwFfEZib6H85gJW0l%2F2MnVJWEzP%2B5rV9HwbXLs%2B4N3ZrFnGtcwz5LAyQY6pgHNKVheo1ZqHTMeNF1oNKV6jR4PV4yBEWbY2dsWcS5i3%2FF%2FBqVaQMkSO49bVNRWIkhl0900NXS7yP3oHq8UhMz21pToQAwzZ%2B4ENxHmv7MmL82iwRuwDN4gAbLU1auWGE57MtT7u3rVdmTKrazkCSju%2F0fvmfyTCGTkh35TQNvy4PhmQzyIZzjrKz9Y7BAbeJ%2BwGbN4PWCQ52VJmCNC%2FXyqW15Y8Ayi&X-Amz-Signature=8c351be73b4b03a1148b362ba9d177c6fdc5f4d81c7e39ac8e8cdc90d3895db2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

