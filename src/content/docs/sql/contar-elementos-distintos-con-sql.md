---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUW4SUNK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHsSCYV69rvFySKIFcRwEXB%2FRGeQgtABlZMyk6grX3a0AiAr0BacgkulX%2Bb7%2Bk80BHBz7SMLM2swc9MLMc90BLGFoir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMtYnt4%2BuZcPXTM6wBKtwD9zoKInOEiH%2FsSUxxBjartT%2FBX9Oc2WzFdy6EfvN%2Fnbt9BZPQZqb%2B1UWIwk7fwQ9mhVQx%2Bkcyq4%2BYwwuqEBCA8ZjHljPnAQUiYegVzGS6PKOR2uwPNvPa4ouEtZudAnvnHd2GdzNJwB3C6kR%2FJBTubsOf5bzgogve7E1OjnrB7edIb%2F6nGt76qf%2BG1SX4gzgyGnnI9yttMVDNcJAddSMOx9N3NbWeiOBQ%2FxQ%2Bh0%2FO93rreLEsOxNEt3t0fnI%2BBL8BOegeL7Ah8Zn58LVvviEx2v8DtVD%2FqFsDc0a1cWX1kcJNV5CZg4i%2FuhYxQR6bIghHiyv1fqqzWcOOLMZ7AzqKTE8%2FpNZBHLgVUVoehaFRRMVAzdb5PjQJVbHom4vBpcJRw6w4OH8jPVrBV8u08CE8ZUOSABbPelwK0WOb%2FZbh4%2Bw74N%2FjX6fG2w1Djvb%2F4Y4AJY5vjLt6vnjyLbAwEEfkCqirWNJl0Jy8y8V4aH6g0pBS%2B0HtfW33UL0GjqnB0Kck8YMe6Y2ipDjcDxSLMrUi2HTJjv26%2Ft7AEK3o4Cojx2vIUumGzYcdSJL7Wr0MQQFsL3UhwWfn4uWGclQ82PtX5yUskc3QIO9ENyJI%2FqLuE3iek2OtrGvV2UY7%2BmkwlbTDyQY6pgH0K0qXIxnYofJ%2FaQA1jhsfBt6fvIjWaw8b5EBf4HjOk4MUMY4HmYlhTjpzx9qyJ4oxmzoZs4wkCFN2B%2BRg26GnyxRd%2F%2BAZMe8eeMKJ%2BoIZc3tYgOGKH%2F%2FSp048G6Wyr%2FpU9xr4Vbwn5ItUatyrWuwR6zSuuqSYczGIMSP44K5F5iun2fr34xUyL2RNBDX4%2BHufL9cksDdTIr%2FkMwAgjDtVeFSMQPYz&X-Amz-Signature=5ec67697e18c5a6f144f7cdc547e82692e81479a82ef5419e634760722999191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

