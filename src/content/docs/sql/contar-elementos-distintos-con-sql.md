---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCMHIGWZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCvEN99oW6pu0dI8OlHnmmXyR9lv7JePVRup8pxk0GZuAIhAP8265m%2FqKh%2FoLPxJV19lEUR3dCKlWyJCZK6IoUiGNZaKv8DCEAQABoMNjM3NDIzMTgzODA1IgzfVFSRMd88iFko5BMq3AMfqztkBVG%2FXbYNyC%2Fhrc4sBxzqL3SN0TZpWcUMqa1t73TgFsEM6zebrDf7ouIlc02DpQ3%2BiVEzLDDekWrCJ9t98Y9sdT3s6axQAiQatmsDIepKaLcZFFPTa%2FCxpG%2BSA%2FnmaISMcZUTQEiXJuB3kpEnGt4kLZZaAxUradc8jFlSq%2FEIS%2FyEyXORUI%2BhIbh%2BHUBjtPzYIp4k4rNDqjiIXI%2F%2Ff9nmewpfDRhhzSXWNisi%2BVuki6eGf%2Bw7jyCiPcxbzLjd9R9SqJEYdPvyv3Pd%2FFBP0P0mkbhJpR74AT3839UC0jG69ZfDCeJXLZOrUfcyd6ANgjWfvsH7835ccHuFvRapbPeGGmEMn2%2FvU53uH9wx7QMFfdcJQnog79TWPkQPIyU61TdsdJnOt6k2DvuVGOVgZnSDQiRJpLNwaxYRgWw57uUeWGAqyc%2FnBMpmEmOTV0Hx1fw2QF7iM6j545fV1gahcKo%2BGxTMZu%2BwpLmDQSHpFn4GvLp0mRyn7X5RLu3daoQ6UTNxcNx1VLZ%2BgMQLV7uD1TjOQ0AfzglVNcexQiRUgx%2F7k%2FMJswTyqCmYHNdfhgsYsdlQEjqkVACF54sUhfaMrSW3Eip3V9sakvkvqRn9yI%2BApO963SVw6yU0gjCY6MTJBjqkATpaSO%2Bdk9aq06XwG76KZcdU4X%2BAZY0G2ztjFhR9wo%2F2qvFkRRHhi%2BnJchgfPlt144%2B76Kj%2F43qR8SzmYqNailthch8p%2BjdIYkWQjGqb8Fd1kG%2FDKJAnVEp9kAf%2B0K4CpMlKf6mRVkmphmfC0Uf6Z0AwePSO3eGrYhAkX%2B2QqppNmxqFrngg5Byhw5BhsqfaTEc5tkg82BpYMKGjSf3W9E%2FFhWbZ&X-Amz-Signature=5a6d7029a258aee34a110f4edfd1df65dfa34d2437bd58fadce93995a6b7d79a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

