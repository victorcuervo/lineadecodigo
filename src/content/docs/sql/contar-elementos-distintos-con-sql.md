---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W2Z7M4K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIH8gy0y4SNBZVnkYz3mSygtSG4k0vVbqRkwPgMwp%2FO%2B8AiEAhNmG8mnJ7rLHbsVoumbfep2pVHg2WJ5l7VMZmtmBbB0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFyDdCSh%2BxOGrdaQAircA0e%2B7TmWJq4Enwm%2BuNPJ%2FBAKSraH3M6s4bD5GNr8j0ALCoCgoRQ5jiFlDc9qKyvJS09SM%2Bulru6bvyPAG7f7u3NFKNpdW2cwNwqvz5pjhjib16NTH56QqYU6TigXu%2FmozY6u09mSG1A86TLSC6dZjxab3l796oA%2F6rSBWOaJT14x21OtMgJS1kN55G%2BbKHsT%2BqVWfMEY1BLEl5qUuumCHpqjrr2aYyj3WgwYQvTNEOh8j6HB1yidHAtEOdBzoWS4JwKeE3akqsXD32Rgv0JziiS%2FjxX4Flv0BdJUX3arNoyzm3RvcLCbPGQYkrZcxRorj8%2Fjpmkp4XronPrbL3x8SX2NkXBKJXGqIu93qWUxQQZvPNmW4r52Dli%2BImn8ONFp19gRet%2BqBbwuGRoO72WVh3D8FVg4mYlbYSL0IoD%2BeQe8R4Qu0fWJ2Ps3CqGUg3GjdfZzzpHL%2BYacEeOqNy58mbg1N%2BLeceTBOwjhViud%2Bcou%2F0ZHmfk7YMwMgTJ3jyzI1QDrDv8m99qIJ2fWOAAC9w1yVGlZ36VIphWi%2BO4cg8G2V1ntWqHKW%2B4fdSCNQbWKsh921joe%2B95rzBYyp4yQG3Dxl7FsLVYZVQUCXizZXPdz6N%2BHUJmpwbP%2FU%2B3KMPjcwskGOqUBitj6VPvszzh%2F%2Fh2TFAYiGZ1mWG%2B0dVdOQiNAMFR%2B9%2F5KbDPfD9bR10D1tTAKuI1xgvHEWJkXsMEUnj2XYgv2AUBhzJHXgI%2FuqYly8Lg0cbijoTw%2FgMl84eos82qOcN5cpseuzuBdBrNLaFcuvFIeSyWFRzlPNXb9hLC4y%2Bw1KCoa8oPEYa8QbofwSFgmzJActEqGziSDBxWCT28BsUra%2FdSonruP&X-Amz-Signature=fb3e329ad9b15a56c2d0695a13506b2ab9cf730d9e7351aa724f2f4b12e5ad3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

