---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOICOV7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBaBEPS92lSwWHy%2BRbnv5ls%2FSjdShqcKDBX61ZQ%2BgE9jAiB1BYtIEFZMc9jRL1CYDDlqRK%2FXqpBeIkqSFIbD1zWsuSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM85%2BllLEMbNRQdB1YKtwDKZsf5jQOqA0iDAKy3YWUAMiDpkO7FshCiqeNOr9b0GXG%2F439OLrmE%2F0cDKcQ%2FzyOxRP7e2zIwx4lVbw8MjRjHIZqq%2BvhHqSYN5D3zsde%2BepeeeihW9N5mqmPRyTUgLj6hipxl0vBCG%2F0z3cOaUPv7RFR2LRksuprFj7evk3%2FE55BZu4NkCMi8tFVDip98CozdPrjkKXh%2FnHstRoWYfDpSi4dJRKOKdOvhu76MVZRvHkMfim0JEEryP0OTCU0AOkLWJAYIq%2FMCKgTLSilQbqYZxNehmuZzzmRFUgPuYBm29eCsI27jlTG%2FYHVzISV10DR2vmzM51%2B4DKbSiFvpbsc3pdZ%2B4kk%2BkkZ%2FMfO8qSITHsYHgbroxuhXIh4C3YJ25Dx1zCF9zsjIQQNc6a6zqjZ5bgm1pcyFM1LPbeaY6rleEeShXCX6Lel6Rq30rWGcztedDmApSd3%2B1yWoATO3rlDZ%2B4d%2Frg%2F7HdNtKMb7GIt%2B4qysMP0VrRkqhuTQe5XQGXmHhg1umc9BNNdUIHaK9pNLSgW7VpJdRVaFOtasz3iBvztk7Ej2pU4jJ2KGaFMbmayWHEXsWNJFHueNyWwd2liE9DBG2ZZPQYIPqHKPpl%2BnZhGMZKFtF6eAuJr74Uw8YXFyQY6pgGD78sgXXzEbQG44hD1P1tR75Ypylt5KWKB3ul8jnjsjTYoPW3%2BZ1koSs95ntyMThYst2MFyKzVTXspo%2BW3zARPzMKkebKbiCo9jYowtYQIufoVuxGjjQqR99Pfo%2BdoRkIggEFttB5p5Cvnb5rMA6QC8j7ql8uFJbMnryZUdfPWjBqBhBvkVo5HHBHoeKb%2F2CeOFmAIJ0Jtkujsx09ACMs0MU2nOpSY&X-Amz-Signature=244a7b672aa65260440fb9567b4c15d8f94248d291a3852b38f2a949dc870b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

