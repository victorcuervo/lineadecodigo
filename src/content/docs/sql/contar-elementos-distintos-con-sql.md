---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDWA52PR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BlUlOS58IUm0zD8P216wrM48hi4DHiWK8if%2B%2Btf6t2AiANFnYcpKOV6YqaQyIfg2t3GLbj98ZoLMoCt0FUT7lgEir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMLTsRcLFMyUYdvliKKtwDUACHCapzfA8LKeRWoA80%2BjD9Roror15Nv3U3cqtfPEtga%2B7%2B%2BzgRKnClbRh1r0XvcJqFYljjZ7ftIr1dCNKAgQi1DWEzY%2BT59rsqBSKZyYx9vFxbm02Vyp%2BHDFTCWgma9mgxyl%2FhR4%2FsiN4LKDyqYTY6KU6RrXi6MUyUJAoVnDSCOGSqu9yaC3gpuz4QT7c8BvTLyaOAhQaYGvHzX1odlDEK85cI7nUlca5t3SlQXnPPL3Jke%2BBI%2BVh3o458OXtj8chLfARg1dMFAlBvHGH7V0%2Bfw6KJWWz99xWtOtmh3HBHKV69%2BntlpEOIE6PuYhLFU0iFsjgi6HLbuFvDKvz%2FJljUeU3ad6IUI8StruPbfASW3st7vlQ6V8pstN6Ka4V15mXSRqrzUrsjtmP8HrNh1BMeSVD3Njgmo4lJz1LZahEXsBH%2B9if0Y1nG%2BGuBteBjTkOf7wO60hzcgUHWwh8qYzqo2pPV4O7pI%2FjTHhDmij0RNq4HSz%2FRSFaj3pe6CvO6J1dy%2FwtLpKgKWY%2FaL7CNGtN98ObMVOTsYpkfY0qXItqbw4LAkzr3C1Q1Fab30A19zSGHidAXOfEbK0EioKexSHCmLnAl3JM%2B%2BUOsofM49s0ts6EyOvI4AlQhbLowrtzGyQY6pgFD6HIG8DdOsLSG%2B8TGBzvtohF1frzwIUZ6Kur12%2BnbaXfvhy8IP1jZQURrA%2F1lqKwuhwXTgo0HNulQFsE4nUEQWGWTFqrJ%2Fx2Tiuho2a65KYYNKyhCmQrchHwK1g0V%2BVH%2BhhRQotzGUntDyF%2Fw3ZVceaGdwDiaTvuDYrEGDhHMqBIonzgdoRg5l1R%2F7PooGboO7KaCVHtE25kPmrSqrGUaEwQVu1Z5&X-Amz-Signature=02881e460cc9b779888fcbb28e66d943fd90024b7eacec97ff23058e453f5765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

