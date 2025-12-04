---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRO7CYZZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCmdpGcXsSgydJTglwdZqmLqEKcY9mKCOc9k%2BG%2Fuj2zwAIgdBm4HDc1MQyth1bIrnA1a82FXVnO5yTGFNTVGQruS2gq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDUNzq7MiorN6%2BhskircA4Z1clSs8ncbaqwudQRd%2Bs52iXG%2Fp6zTrq3awpwV2KOTN%2Fr4W%2FNahhhzu4fnL%2BnwfYFp7bi838GgJRnKMvp4vqz4fhGBHcqdXS%2FYJLPD%2BoPebPKpdjF77OmRitY1HT7X%2Foi%2FpWqkSIhve2RdqifPM3ZCqEzTjbDgfOwmV3ADixCA2WEeGkAT0wGoC81N1nOdOylIe7WHKRGQz%2FYJKcebR%2BiNSTGTrOyitObn7kct1ITsyE7Z%2BXUsYsuUXsSBuE9XpYPpAK%2BihIz%2BtnjBdlk%2F5XgZzg2YwJ0XL982x6V6Ne9J0Id7IEykAYpQW55fC33cvcON54WYErddVLmWuWjlbZIDfcJo8yBV6ru6vYYffMUMNopwAjG6YU7XARDlDCUdreSKCeY7qr1D%2FLSaad%2BUZXCkNUBy%2Fx3VP%2FChZRWA5QVCA0SUlgXcSA93UuEW4i5%2B6j2Mc2FVZ5opC0mqf%2F9lNTEZXNxQR3c4TWkAvnZb234OjS6vsW2DO8x5coBPBFuItvCi7jGf%2BaxTUPpWSf2ZcJ2OuduGL3idEqdr3LkMzl1ZvcZtksq%2B9dcAlvj1pcwTfoAnobsDS806LBodKO4tvZEIBqMX7BJ33pRSFKBK7z7bJS2E8hoWkLqFOeTvMLC%2BxskGOqUBiV37AShar%2F0nQVVnV9vqkBOZmjDpftkjk6EXtPPa%2FlB3hD6Ud6L1kBWbNi0pclAM0fziru848IzpjB7SWk%2BurUPmlfvmTeFI8bx8rgnbpx1uefAkBD5qoKzgwBKlddE1nIEweXgWt8tznmufniLkwg6dL6kiwLdjJq42gGjt%2F%2FO0A5U9%2FJmFTmb29swxrTN7Eyfn2kze19YoJ7CysJu8OBBlXB5b&X-Amz-Signature=58451a94823e4c87857df2926705055696f810b8d23ac54334bc2f63bfe920ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

