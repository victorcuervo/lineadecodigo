---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWOW5TY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIAG2lgwnSukkH%2Ffb8MV%2BTvsWz9S6Z7wEYjZ5CyXhQQFhAiEA18YaxuNiFsA8LEmmoearvv7TiIKZLoIvTM2vdTbFwLkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDA9KC7MzhUWnQp9ysSrcA4hnHeD7XXSz1HuiGpbwxxMw2DVaDKSH3MeTdYd7a6iuXlTTB9paU6vEGA4YehndJw%2Ba7zatEumcS7SwAIKtAoI%2BLhMLwjQ96vyg1GSp9ze9YirbEItjYO6ciPLYZZhfjGqqEqOBUGgBKg5vvgeU3WsRsEP7PZsQQ%2F7bbu54B6TC7usLiYBdEVZWRoT6LAAe03OzWkMviauqe6J9mPqHk1OwJ0qg%2B%2Fae4tmb0wgjRPfjmZe7U%2FwVeqMUPW2Hy4tgY5kA0b7AHnvny7VPCWNDvQArI1p7yVARb7Shw946oEtXRwPdDMJlMTYrXIAdXPXNXFCZM4Tg4qe%2Bpky%2FOhjUOIc%2BoLvDHkHD%2FgHWO6fUQaOc28jO4P1cofupoYMINq2%2FKp6oaVMJ5q3hhptxUblyCM4hOOc61yUEw0rEK167NlGACgV60y37oSCE0vHD%2Fkmy3RNF4u5suOwllVZwBO9KTxewIb8RfW0JkgTiUOm2X%2F6xhF6FHhBkqeWkcrLoWSpccvbrbF3p3sx1ku%2F8UN%2Ff4qkNSF5OqDhR0Ir7Ju6uvlnV5KmvTQ7lQXX4yULl51AzXD5RYn5LrB7qquzuzwUJJVjmfR14dKudwxyR7vciIRdgsNijL5t8IT9QPVeMMKDKxMkGOqUBqHAUlc80keILMSalLQM%2BhM1hLHERm9WEvowUj6yJ9WekvjC1LwCdnmIhXG174EZzdpb1FB8DgIWdEbDP15w3GwdOTuSFSKsasXswSheMjHzyH%2FsT%2ByJqf1yXry2712%2Bj6r%2Fr73uP%2BuCBO7VGlEILDifPNRcLoq%2FTxhxfnbjHDYUp1e9XyQwQ1N6b2rnxM4qd3Cr%2F%2FnOeliqGEI1fqq6DZnRLK4BJ&X-Amz-Signature=131ab5ce468f9e33c5db3e7b0aa5a0be92121d1a6344383ecaba1fd5118446ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

