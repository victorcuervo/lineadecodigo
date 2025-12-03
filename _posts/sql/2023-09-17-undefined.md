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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXHAA7UC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHr31IHbP6cgBMuv9gka8My%2F8lMpSuQVRU3W0LAAAP8nAiEA5qHLEPtImpMNRuCUmkdx3RF%2Bk0JZImgMcTIODg%2BpeoUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOI4wKJrOEGA9NDvDyrcA3MzWcJzfenil0r3Cs6QlopL9WfM7%2FWA7DXx5Mwjan5OjD6Cup%2FhTW4l%2FBj6O%2B9Hi30PzifMvKv%2FmX2%2BC6LT0xMMIqhwybqX9SvgNrH6vxRLuHn%2FL1TwOZ6lpUKkFp%2FYnHcUei%2FFfamIeYAY02ZfqKqXS9ApFg9OXgyw1ElkitMIs3FTeQMFc%2FkEiGKzAogt%2BpzYp6BhRof6pKu1%2FQL6lxD9qlBpRaGixDuv7dxGDrAhkj7LuzOoyzekFjBsVOTsN5Y5hCeoPCmBMJgwNQKDakprPAu0%2BrhG6rPRxKKgTSGaAJ7IVlociJguX6wj47aYGIqN9idVzj3hKZUfouzA40QIccDUA%2FkIsYzQWyTwYZSrUj3xkjnL3BO042Znkf09X2fq7tEXsM%2BS0jWJzO%2FEkZ5lCOs%2BNRPSiEHvexNzPe0RjWT2eXni9%2BkGaMeSxvtpTJi4l3dIZWHDVQrfo%2FPuQnBcIdIjgg5%2FZNTWZW0BesRBOgaFyN7usM7f5%2Bs3ynZkvfb9U6%2Fl9DQJ6%2FJLC2Ymj0zgXpf04aYEEkzY9BQZydbudMVpRL%2BuNIod9bqWHc%2BApFg%2F4Z7mH92pX2YwmOXOxRP0WgzNgPZfRrXURFJIEzFQvv%2BOYworUmfMXptMMM%2FawckGOqUBQ3iWNzU%2FNAEDTveMqX07RcYDDNrO%2BRdsxN0%2B61vDRWE3k3qL9B9Kwlw9T8Ksv5IqEoCJ6w4EOHBG6B37Bn6DeJl7ZgDQ9BWX4d%2FFf5htyo9YTNbybtV4SSmSiY7nz6kVxzPaESJ%2BrtHe6by1jkHUBSPlpzTJgDy8v2h6WdN0eVmHVQo1Y30%2B0umSLzhcx%2Fl5wkYp7bTuGnewW6D8hily2ZWEA3GR&X-Amz-Signature=d976d6330fd68410ff1def6287c2853e37d33aa7064dbf0df6ac775b8d17a0e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

