---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URSRNSO5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDYtbrYxcEQd2utKhGB1DyiQEu7g4Gijk7mjLCKcpIf3AiEA5HSDtLeImJvIF%2BqRxdZdVADV3tEVz9n%2Fn%2BZNIZHR74Uq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDwOxCBEAwDMTgQeyCrcAwtpHVYhudr1uLxz3U9Y9gTrdpvlo4xO%2F0%2BoI1yqCYDW5VN%2BDIzduhcO8DkSYYJywBQLp%2F1SuD7c6ZIvZF2hf0gSdcmLkkSUWjlcJhKNob9lQBlRDM57iVb2O90%2FAo%2B%2FJSoq%2BARQKC%2FRxx71WiMA2zafsdCZBTJIAricbf4pjpFy4mbBv057JRmBpFGzPf6SlL02eH1KHNSZNHpKUbLbBrX7gqXZA3cxiDTOqRyqMgG0wqBhlxwQ8b0Tw2GHnrJ6HjikcnOhIFm6p8cq3d3qxUwJikMoHeOCIIosI21NKEJ7coXKlq1ovWgUfbt%2FvqZtW3FIgaPE0W%2BdSO4ZKit6CjukSK2QcKGbCS6Rj9qRT7tCMkSB%2BPESby%2BA%2FGnq5FSk%2BMylBOqJiwA3Z%2FSlD3KDuslyWWaUzoZTfyduTW0KOTP6t%2B3%2FGfxOwAUloThMZ%2BzldylfQ%2BCO%2BHKRpC1TLD91%2F2gRsvHGyP6s%2FpZ77XmpDyCSkp0cvbvTiRdsUIYM62eKIMH%2FEBU%2BR5BKE8FPbWdqIceLV%2BOvR%2BBPuzzvZVpZIHADYFYI%2Bq4mIAgPWht15VlFnXfMnaqkTks4OqWROT4b5zYThvketAKOAxZaMLUgRoB9SXWOXZzuYLzo8DbQMLfnxMkGOqUB9j%2FX80jAAeP%2Bk%2BhaqkeVzRObXdzDf2XGXyIOIaXqx0FlBGtdFYt4zh8qVIuj9UrzjJ9PxYYVKkpCvxgCybhnFAtczZJPwH5Z5v%2Bt8nH5Qqgec%2FWdzbAmv%2BXpwKTsKa6Ry%2F1%2F5fgpeOkDkSdha2MV3%2BmZA%2F7poq1Qju6Hue9DU%2FBdwNlQ1KRYaoAQ8zvZGeUYAfKY34LWVIrjOynaV5LviOG%2FYpTI&X-Amz-Signature=3efa2715415f726e03028210d7ccaa3f12d6951caadfe9fd6ee5e1a2c9b3c3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

