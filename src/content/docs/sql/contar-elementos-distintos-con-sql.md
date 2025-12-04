---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X42YACB2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCuebV7aUMG9%2FipA0gi8b%2BbRgN13utbqEPHlvg3agbtSgIgCoTRqOOIWHlpGnbxRCYLK2Nuew%2BRbxfuroT112jsUp8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNrsDTl9DI5pperTHircAyzGUpRIcasvZODeSX9ZD0K1EKNRgj028yTacbcYxGGFFN7zcYq%2BatJtDLI9eWx8fYFoeT9RO30OeySkt3senZR%2FBlUZu01T9XtjEex%2BZkq%2BVzOyMGb7NhRQo8kQiEAHC8wQdQAJ0MyxhMTD1cRT6yW8fFyx%2BcjgJCeLlI1o1WjJtpgzTK5ZHEBhIRptIf7sr57zbLx5ZgkpbFoBmCO564lkubjl2GMmbF5Sx4Uscy%2Bug85MgptPDrl1g0Jn1ulimpKbA%2Fm8KnKLI%2F1UDPGrgYvjmnzkdBRGDlYjeZV3cbqc31ErLGtwjNtuorGo2T8B1aJFWqC4cZMUnFst32r1BfOZUpW4yGvaqsz36y8ylVgz76cmp16CUWnGj3MwdrCg%2Bi4bIEqZjwhc%2BZvi5UVt6bDTtzVLlKJj58Ije0%2FTYtl91nqblj39xf%2BMVZub77F2zsvd%2F%2B3UH7XE8WAPeVTVXDWZLkzltwXWXmfZU%2BJZvidqY4YM5zmNwsV5c%2BVX1gG759DpW1fIfWWjOB9VKPy3aUQrn%2BAUn3SvIZRTi1Fy4btKhS7CHRgcz%2BNZP1FiqAgZYK1ei8eKUM6%2F9blI4cTiDh1cZSFvTezgAHyttPJhnL7dr9iWpkEjA8EJKov9MLq%2FxskGOqUB%2FIlJcJ2STbovrrgZXLZdlmY0st6AaJZ5%2BCjLp5vQG4u4OveiWrdzV1NzND3jySGXh3ZxNEwk7JRrBPADhQ5gu9BBH4Uw4Hhs%2B0T4UeoQLkgXmxoqTh6RbW0AS3uSY55k%2BvO4AWm6DyiAqiYj2kV9pqifwmee0dHP1NgPGuzrnD4z9UI0JauwVxx%2BEv8EoewNIgREg9bVld3%2ByaH8RxNWt%2FVdceh8&X-Amz-Signature=176b77e94f526544fbc0686a7e43feb0bdc920e67ca92c782cd68b372b43ca4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

