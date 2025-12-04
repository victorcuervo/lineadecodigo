---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667WU7EH4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCF0dcrI1Rt98vTXqo%2BOWC7U4rxx%2BVM4nCg9X5OodamlwIgPWU5cEwg%2FHgC6OqVPqm9%2Ff8L9WEq55kyrVpzWm2OSwoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGDoccXEfTuU94vKpCrcA6XmBBI8iG4p9lxuI39j5s415d7SZFck%2BvrdzSYGjK9IiTKZ20%2FgUWZAmSdpYxGR0A3IiQUCdHZ52LbJsMvTXYsZCGuA5Hjh0yLpuAEDt2EgLZw0fbHtK2M0YrN4b2OYbLPRk6nHMKTCcePOcA%2F7HWcfrHyOFnEj4nPYJJTgTwSzHvsfIQRJGN%2BXXDxsywVQuAqVt3Bj2duJ07Bavj73yykvJhH64P5OGAsEvDuMNo%2B0HBxV9wX6JfmmoXq3iRn0eSojN4T9Q%2B00xwhV3Ty%2Fb%2FODK4yFLBakJuNRJBIo29yLYrwHS%2FnqSEX67OpgZsAgz%2BZiJI0tWR%2BQ6BzNHtlilSYBWpIxcRkdMjMY6Ha75Kc3pc6%2BI38yTtmavEUpAK%2BByIPxcYVSnuK2XvM3tuypBOx5Y4BDLewb537hACEEFOTZkbI9foC93%2BxRd%2BIPavqLQQmUoCRqUrWbN6OBiSFX0GFxpFocsU96weXkp8DhwN1NUU29zQ0flW728PrAKwXkBrRM6w3ES8MeTiQ7YWbZqET%2B0brsGrKWJQjZy%2F1iAA98On50urJIVF%2Fbv%2BcWGzOFkbqYDUFF2XgIH8qoP%2Bxx%2BdFmktjy9Z8wpkaa%2F2U%2BzIRO31bTRnaVbs2Uik8xMKaVw8kGOqUBKCfgpaGzmRoitQmLzeOAcIMBtwGTgwViLO3WFQ6qEWYKjCbL4Fj4UsFSxnVUSzXyDx6TfUbg4h7iFe6RRkdm2c88VqrPMaRWKVxi41nyYBgvY5wUx4lkuHYADcDcCb0kIzf%2FFrfoK%2FtcE0YE16bG1eBeXLjOIr8GuC%2FKppyMdgYDrxQJFaplaA76y4i0PnqfWgzXDnjTrrbhwD1ug6dml90ckvmT&X-Amz-Signature=3b4280e6a9d9621dbae2307f4884eb55740b3080a61b4a7faee0046762f95caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

