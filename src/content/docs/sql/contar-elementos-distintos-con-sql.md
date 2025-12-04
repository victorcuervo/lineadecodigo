---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BMVQLKS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCo0N%2FxAJfZrjI37IwTVJu%2FSw74xn%2BLmrJ%2BlgHQUTa9DgIgFplKcD%2B1bXRv%2BUaF9Cflh%2BZbLzHRs4Skbn5wnrWN40cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDC4gfGkrCnmsSAIuOCrcA9S6ZKjsLOI8WGX9U3yB6NxLVbRv6TJVmUul4dNEdJEXxTUcGOdmwSEfM4vb8aqmlNshNqZWMryXHub3QOHi%2BibA7eGS8JYQlg0TQ2ymVwojMdGI68D8ECIwAfG%2FXQc6z3aQ1HJNjdfzIWP7I3CPl5jG7rSy8CWgaG4VcdPKgmev0%2FBWHS0nxFXWNWUmOmfIrw1b2tShZck7d1PnbInCG0a7GdqR1JJYk4ulmoScdeceDfJYwispwsL4XnHtiK9Z4jEG22mSBCqIFhjodkHlll03%2FVRTCO0wFjaQZuhVAoUrjcPmesJlb%2FPjkch4oMMhKHcoTEA5%2FkyHfzhfS3GiCimBFe0FIMxtIeP5jOvzsqDqgZ%2BMpSIdD1kZccgMfhAKJGpcZ3NU8sOSJyhu2Qp7%2BR2zLWnbWixAA%2F%2BDzEqfsid9OgGv4A%2FX5OkGmQmBDtCPf4BG7heVC6knhZYfVqjj7P2donDNZhylFnjx1%2BrcjbZmSD6p4W0%2BzabF475aABAlI3%2F3PU7WGThA34IazMGldP0jhbkHSG4tfysE1ADf8LLUPtUB3gf30YaOfE0UQdcdVW%2F1m5wmmCnYWJYA00b5IyI9BfYstm5HKlbZJZ3Hsb%2F9km9MecHU4iEx%2BrylMLq%2BxskGOqUBkO8jpghKRBnpANz54LjExPUcsu167c8vVYP6lWgYIpsiAiOKuBfMrYtLXB%2BQ5Hth92iTblwJjqwwUdnKF%2Fon3uNO0rgHqwwuaj1DOvdgubytIn3KTEOFzJjZEqVlhBo0Jn5oAGBIiBHtJGusg74%2BHCa3q%2FGYoxsyGXCjJYi98mRwawjCTTj%2FXklxJRs1kQ5XfhpKyawlgsmsL8c5PmqEzN8S%2FxgW&X-Amz-Signature=a3f48d2262654a21e555cbd894581a632df087daba8796c9b9942713614b8a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

