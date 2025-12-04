---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SXTYQZA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDs%2F6Ouc8bf3lvCxUYZEkdvR0QJX0Uxdxqk%2BXJzEx7%2F9gIhAMaXmZ455Gb%2BsJFPpkFSaVqDnUNyYUmnPyg7cYpS23qyKv8DCDkQABoMNjM3NDIzMTgzODA1IgzEGs46HXiCDFsTfeUq3AOoz0g4qBeHsuJF3VV4qpDtXd%2F%2B8BQ3%2F79MRd%2FVHLg047oS0AthcKnddzEnPdUSZMWGgi7M%2B7YcH9SfuYuw87H8VrlN3eqGmiiRIEPz6SeoPe19gSOXntu4zT2HV2ZeUicBsfN742Z8O29LuJWSRERrldsN0jNsQDFqIVm6zor0iblI3u1sIMPuF%2BpOfpwhVa88kam1tjJo8feZoZR%2FczVcd%2FwScOcNCu4muCjaP6Byr2ChYbRlN3OtSomuahyJnlLcsrP6mIZeU7v6jNYlA9IPzSnmf6DA6SpmR9g2NZf0eY%2BNT6U7%2FEMIN4U%2FYsUliOu1yTwK2F%2FLRbMo6nWjqbdF%2B4GYwcA1mBoo6gV2Sr8CntWo3YBgWIWfvog8Jww%2FlRLFMCuvl8NpDETyNGyZ3rgzNwaaYPW3ilVSLGNh19YYdu9bqnCskAn0FlNTDFrWUQye5D8pUNV7xlnIl47xC0GwHqGBkien6K2nzAB8fBMHpSaqMRq%2FbEybNFJ0Tlv8hpJvdCg1CyG%2BXuaFcX7DAevl1Q4%2F7rUY7drImQ1ZdYaGij3PoYf5c7s7HppzTecjyZ79h2fboBQGulGlhs%2BE%2FMO64%2FD1Y2MenecPK3bpubMPM9NwlKlViV7vX%2FI1rDCalcPJBjqkAQZ3quftlIAerr4VOhK8WT0RWdgPRCZj1SNXcD%2BHNGNKbjD3BEjJe8J3zsUjY%2FNcXjk7DOwk%2FlpPbgLbNMe21K6lHaY0JqUBjihKLVfT4tIK9qXAjTmzq%2BqyYRim8MjUisUfzMK1qxHr%2FCa46AGBGivOi2PDnR63rMnt709fIvC5rb0VjMrJYuRDoje48ysJsWaZAMjHBpu9XZ69bZaWekRvaQ1d&X-Amz-Signature=66a490f1a84ff841c4e927b8212783946014999d29cc80e061cd26a398f1a1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

