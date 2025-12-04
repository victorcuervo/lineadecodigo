---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5YVHFM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD6zallfPS3CMHCu0DHQYBPgsW0RIm5UzDwF7sZ6he05wIhAIyCuk6lyfAH%2Bq5awUGt3Shey6r0i2pI4Yhd7ZY89W7JKv8DCD4QABoMNjM3NDIzMTgzODA1IgyzkmpRu5nb73zETYIq3ANuLBksdoozVXMX6bYQqXcq58vewrt4IQ6Sgo7VbCgUpYhTON1vY88wLi1jyeDGjismg4%2FMmr%2B%2FhMHntkIDtXHeZQ2bUZjmvFaqfWl1CRgC8WTJ6W1hYdOv6dMVLWe8q5TAJVuq5wjFNIS0WAOkD9Rxv46rvmrWpCBcaM8P17Iwtdz3dIVru%2BeFMr6uDVkM0j%2FFjPWyLIXl9k2NpX4xgvdSPRbaUTMTD%2FHkroJEKkmnemBmVyKf47pRwpTFElMe%2FXgnXw4HRVKjWbyeysasaZKFK2N2wDvaKkqeiiLZ3mzfkosj5Va%2BX%2BoCZd8hwRwkDub4vAeVA6jfm%2Fi8fkdhlZIcOqZgloKl%2Fn9BbJjXZvyawucx2jHQ%2BjoSICfMqh7H%2FnBGDgpJCkW9Ot0KPkyD6Eohjw%2BM8A%2FSupBrSk8CuCKtAt2e4RNNHhzImkcyw%2BeiRliND1cV6ToVEW2MBzbxAVLUxha%2Fs5RpmNRqz0jxG3Lgq2YhhSwLppUpRrs%2FhrrYIjGAjFX6%2FWnlo8Gnf9RJoonVIiYhrQxY2YLUAT683DFiaAWbcxfPbUtj9Z4obZhxbqwzhwiN0CjOkzqPq91pUnavrpkM6VaUmbEVD7pqoCAhlcGoTJywdCeXo0SZCjCBr8TJBjqkASPwppqQrHdtlvbMby2W7LyNmX3yznEotvo%2Fdhk75BLYsBneuAFTHyyRJ2QVzkLIXHcja%2B6PPznFoz8oQeqMC6%2BK%2B5J%2BrP%2FD%2Byh%2FllOjzgqhr1phXwMnQfgRdlUiOI0V4r24hHD%2Buxtkllpa79NrgSfB%2Bm10AyD4mW4jLnP4%2FBdI5BKwXGRG08ePSYyWwa7oBOwo%2B7AwiFJf2vzO9oZ0ydz1EKRg&X-Amz-Signature=ffcdfb2010d7df09fc1753d44d6570f1ac5119e68779e4fccf325cbdaafcf3e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

