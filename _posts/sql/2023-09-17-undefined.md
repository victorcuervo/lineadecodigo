---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2DKIIIY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDmyfVaiYN447cN%2BXE7PitT%2Bdi4NS2T%2FGvXi7uzU%2BfWWQIgemBxU5ENyK1lmGltmoe4W2MTfhnXJziXwKnO3npCxJMq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDASh%2B9qDaRKlySUcyCrcAy3gvrQ%2FS7r7oFrSPWADI5frqY64n%2BLUoUw7ua2dmzoTxpME8EDEaNGL5%2BKupznl9Vg0bfmNoXJUNk7XGslNloGnj03M1L4IZMhtJyVbqiNbYtWFzEHXo3deOFjgTrulZ6frli2IEi8riZ%2B4hW1kcpbCbD0Ap3h4rj%2B3H3M8g56HMKUxGyTS8m2iGP8XsMFboxZkSYG%2F6jQZyVXUJyBDZ%2F5sVzhFHd04Rlcv%2BIn8iCvP0HZrabmNF83Z%2FDdNpIzwcoIb%2Bquq1UXZrZpg1dUj%2F%2FBD7DhKXS8%2FEATwA3GLCSae7T909gDKNASSuWn%2BWuceaJUWqB1D0owoc8JrrbwvGzJAqr2evBSBb9%2Bxxxeit%2BpX1%2FVPZj8Ko8r%2BI5C6CLvc3FnF6LzRxdY%2BiLotFShc3KN4SExRYoaj%2FylYTM4A3OigLF0jOMB4r%2FMTWwfx94aqtSYuAQSkiq6RKeXHl%2BUIJ%2FVM1nrJP3Wr4ejHWYe1B%2FbUSZ63D5wTqloEc8GY43HOVLBRhMAP1%2BXhhFujx5SJAkzJPbbThVoLBW0JeB2Z6ERUececp8Q8oGp8KXTHR3Lt27wC1PKRY6pQMt8TmNJkN3L9QAu56N6rH3UnkvZ1QRTRvz3NKug8dS7gdfjvMOGuwMkGOqUBAcGGgaD0ptTYJX%2FjMR%2FTvW%2F%2BGLVd%2BCQGtRCQh2c%2BFOLbObCa%2B0nyOGhBAfHvQIqHwxvmErYsxXNA7OPL7TzPpTZtvg7RK06KXsn%2B0MekZFlXR4VJ00P1nCJ9P5Xk6t8%2FV87hnFqtSAJdu%2BkMwou%2B9s3OLmblrcyIJKG5P2y6RnXTrkPlUr76otspKuK%2BNpRSn%2BCJegu0PuSq%2F9UtZZkcJTlzgZ%2F8&X-Amz-Signature=53c69c9608dd6ee717f3daed6bdfca7b925707f9fb5a4debc2817170072584c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

