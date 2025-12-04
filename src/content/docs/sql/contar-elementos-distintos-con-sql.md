---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2OMEH3U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCumKDTxnvmMu6Iu6YWJ3FYt9EwtjNDYJ0sLjTjJgYKqgIgGqFzmP32Iy5hdHUd9vPTibpEojF75AduOuSNZhuZqIsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJC7mrF0Tvvls1oXXCrcA8cbfACpKpx5x%2Bfe4Wu7oflCi4kz0JQdx9FFVfcrTkguUaUDJ5bRDjMI0tAUKsy8em9bOltYm1%2B2HyzGS73sDO%2B4AWa8PPqzHCFWOBJj%2BwgOhaI4Ozx5fGtunZ0MZyJapPUHEOvB4faLo%2FsL%2Fxa2QzIiEvdmuBaEKHmqRho2BCVz2fUvvlK4oPyD2yBZwQafMYFk6aMPgkbq8dm%2Fb7pwVmwVtkel5Tagy31WVSnn6BOWTYNlOuRz79cP%2FIPqQa5AS%2BV8dAkGV12C0%2BP0yFqTrqfXQGwi2bgPoX1B3zN%2F7bU3mKVvzduTiaNZtcIwLwZ8ue9j7FoX6lv%2BJ6B%2BG%2BLuhkEWApCjLMoSFR66m97W%2BtuRBsraPCBvoTnEpoEXGpW5qTbklAF0Stv4%2BY9DH9B9TQovU%2FsuTSrPbz8AT4x9sPgGIpmmsM67FzmYy%2FxSK0VUafcBVWQw06FyDI%2Fety4kqAcgF2SkLog7Z2WYX358avyZ6wkF%2FbtuW%2Fn%2F2jnfhOPQRlHyI%2BfIjxOvUXHRV6cI8DBBJE1KwPf4DXiMkIkc%2BAUY%2Fpy9le64ucGbm5i53Y9Nozx%2Bd7Xr%2FrA45aLlNlw9X%2BZCebCPoWqo4RPq41uX8ebX6azZ2LcnWb9rue4hMNqQxMkGOqUBrZAFAcShv%2FuFlNEf91EnWTretrpHqWj8JYicIfmEH1PeSgJOwEI8ukXWph4pMsDit0Kk8%2Bm4SGQuhBkmTgxULt9Uge6Mxmt5zJmzSJljNVWkLpuc1u%2FSfSWPksAhgyRNkV0UEL4E6%2FqN2hZWLKLJG7Mt4vzc0A8e56Sz%2BeR6Aw8ZdfKyW9JzsOvIR%2FxnDk7KNPxHjhTU%2FA%2FB829Y9ALEm%2FLG5Tre&X-Amz-Signature=cde172e2162f960e97e6b185733d845282c64180bd99f8e1054f0ea4c4b5aa0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

