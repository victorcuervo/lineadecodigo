---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5AO7EF4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDEdtXaGxtk%2FvLAx%2FRoYpYyWyWOPDdCru2JaAhfoYVBdAiEAsLWib%2B6V9xSb3W5r%2BslJVFwzYekPznHwBFLQ3mWWHmQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPGNxsksqBYuva9h9ircAx2P%2B1xRto05JKptRcun7UQx%2FipgZTWj4KUblSd3Y34dht5oPFQ%2BhFGIRkiJ4ykRCULOIgAsh9EwLbWixJ9d9tdSWaqJcLGD2su0g%2FSfDXkOccXiW3Vpcgd3ugabo79egE9NTGdR0pnCvGjcSwaiIxh93zjuOvqG0wLQHIYNsxgKohyLBVNq5Id0Dza%2F8Akh9A5h55GU1GH9Tl3hDhCfk7%2FZ0JNg4VBRNtOc9emAPdMO4JnwOahss%2Fq84OEckJVcL7P2cc21AC63BfPHwTiBlwpagx9NAo%2FEB72ObUsUVXwEX%2FpKPOMdWo7GHcF6FQ8b5bA1unmtxB3y571Uf6gMFKLYVe5gFAQkIAtV4LKMU92uKmMewWsO5Gmcpr1jvx8mVadwCvgFe1jAsWfQuGE30o%2FQpDo7myGN4%2FVdWn4mSJ6cJXA55akZDBAjuuq0P5MBTiX5aGO6TZDOCm9dlTRwf%2F8IRC4I%2BY%2Fkvpc11JTRSN62hhg6HL4XOu1KV%2F8pFuz5vo0jb25XXv7sQPdhdMq%2BsWKvrK9MZJfjJtbUMHZ0VBYgDyo8bHe16L1HxrsYDeFiSnGTiJipNGKTkFBV3RMFS3UtRf4OuGfqFIrV3Jmtn%2FOjAgM%2Bj4P732v7Cl1%2BMIfVw8kGOqUBEmqnnFvsxwXbTAnOjhk0Mk6ZXNJ1d09jMEB6BPA6hh9OKXalWWcYAKgLD6XZ3sDm1w7TvQOZs1cLANRoh%2BnB04ov4jGSg5M15T%2FztME3P%2FF9j37aCupR%2FXRGYNGCR%2FKPJBYhlU%2Fv%2FbpT8ebEjWI9sx0a2Eog8luTPZ0p1NImB9Lm4YD8AQH3JeHHzyWe4gFNi6kUnglqGhNFvbbc4fU4tR74Cetj&X-Amz-Signature=aa6ffc9c2e1e3283e7665ed7b659eec29c1b837b44683e2599107e8fefe0245e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

