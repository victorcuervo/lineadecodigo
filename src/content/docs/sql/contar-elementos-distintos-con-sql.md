---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TZYO3EH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBODwQG7f0dSv7bS7YQwReiAs2%2BW5ntrT8MbJspkTJz%2FAiEA6uTaVmo8R6YDf2LQJXdC%2F8ujAsh3Rt0zQQJ7a%2BJQnTQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKLp33L6eLjax6wdTSrcA7D8eogOif24je5%2BLlSDPEH3yksTHITDfyrywMQUgMCg8vP8axp3177UiP9ooE%2B6PHEQH3T%2FXbHj6LItdv4T6jPNDctDE%2BVNMYPFJhNiVt5Kl3ynalqLb3Lc1c0bQyAfi1wOCqWDezaWFOtlc2uKJGbwEu07AKyRcpBbHVC%2FZwQ%2FURTFi5FAOCj%2F%2FovsnAbLKb%2FQLwy3AsPncV5OmTnlKIZiw%2B8AS3ZRB0zVlAgLs7xYxG3w%2BTGXi8Z0Zxclbscv0FvktpCADLPC6VLgVItCOEE081SBhXF%2FVxlloZLmkY5CdWw3Rvww68zOlWayfStVbUrWVj8FeCeazkkftQnbOCau5FOaypTyAHrTRb%2B%2BYQOebSN%2BQDbdpX9VhdSls%2FSPwPnV8sZvFaznpNxCIwpChbQyLF9GzRvUzqyaXNjIllF4o3n2NL%2BEw0xHsJ2m2ieKxISMZ2pWFYAOmqywiAFNkw1FEM77tDsczbE3GeLuYoH1nmxrfrAjUSrjpnb7AbWqBE%2FA%2BZwjN2wP3vXo8jkZqgGIRmI5BVsM4PW9k03UO1aPJbhz2pXmXyq46ioqcJmRyInukLAnOV3VTvabh3VISANooXyPM5yyEcIrhJd3fUlbDhL%2BVWDLsS8ZASKvMP6Uw8kGOqUBKz7VvZfg5wi4%2FuPEc0%2FrqNl0H2OX8eRTao1izMmHTW5DOCSlbSf7tXl5qSHBkK9vg11UbHiVQvG%2BsjWn3oeU3ifwT%2FEnhnXxBRMqDOJeLOYvAsa2J8QgpHobmBjK2g6sW0zyXM6OpXZGNaH53x4DmdZAT1FEsBnRhGf7Nqfz%2B8WBEINBcqgGl0y5Sr%2F2IUP59Q0Wt4DxWyzLjAazznaOvS3qVAyQ&X-Amz-Signature=ee1fa27345955fb36aa4b83036bd447d0756bdb3c67b26ca5e2a5cbb5181ab0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

