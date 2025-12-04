---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7X6RRFV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEPTYfD6q2xcehPzRChvYdn5XA9q4DdCjhKRIltavzi7AiBNsxAMLaR2i3%2BSNho9PhkeT6PlJ%2B6QO6nMkV77bLnyIyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMBrK5xJPzM4gWRRF9KtwD7p79hwZhlibMP4r0G2nGL9xeWyvUPFbak0eqgZo5yLoWuKMyfy4Sjj%2F%2FS2D3KIDywV%2FxwZFuVtYANpmb%2FT8gYYrLg7GRXwhXzokf%2BtFKF90A7t3zcWkk%2B7QncdjOAdbTXx%2BYYCbbW2mGIRCb4dMlnVa4IQysUsqQKYrP%2FcGJYusVLyUtcoHXOnWhLnejRMoKjD3pNzUHF6hCMghGwCKJqjqhpvx4fA3fy2M5KSe%2F8TETE3Cxcr4hh60XPrJ%2BaSc7MRoL2pdNiOoUvub099HFlpUvqPUtS7rl1qfBQoXYwcVt9nYu38x%2BlP2MlUGraOrg6ugxtWSLmL2BScTlsfAmb6vri9uRWFSPnCcWH7%2BRLyT5x5xIqJEEcJxamnlPWj3TpxhUvlvT15PSbofU4nUSlcaWO3oWcIPi%2BaHoaN85YLVzvohl2WWD2lui2ypmx93VR%2BLIH9%2FwKSOtoSMt14EiAwtU74uqo2xuLhBYwlHmLX3DjnxDtJlbuLiORVZ0f6eNSTaWqF8HmWMenBJxXizdLpiA72lJvi3mIdEap1OOlgkMd3guuctjQ%2FsbqQvG9sLlh7pp19Wvs%2F%2B2kwORE%2B1A5rg1SdDNR8Ww0LvnQfMciaJVBuLEanH1fe5ZoLkwzujEyQY6pgGvuSVeH0FPrauD35vMWzn5CmH23uISlAT0vy%2BvlVtkM58fKr1YMD%2BMubvC29A9B8DL89H%2BMfKottvHo5QDCbr%2F9EJFDKnYkvzal2NxcnB%2BlZl9t8HiooNJeFwnDXtTyqCHwvCEs0PzCkgtriZ%2FzaYTsCc4P9fgtgHoUZy2%2FmfwK%2BlOV8Nt63tq51hBw2VZcRS29qwmAp9qpOdYcPMLSy1DHEVfaYy8&X-Amz-Signature=9cf9f0e76b6f4a3adde557e85fd4922ce972746cf42f4242c562d70c60b58fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

