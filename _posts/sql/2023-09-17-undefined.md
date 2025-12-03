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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4LDRRD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDI6w5kPhmi4WIns0bbYDsi8zrZMOn%2FrXTpC7gjfbsJHgIgJGldwzExi2dj6amM%2BPg6pfl1RLrRuMGC8YV%2Bl3DfZO4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPB402MWkVbtDnPPhyrcA8x9U6Yi2YmMkcj8RLlwcuLQ6h45atHHeR5BKokKEnT5PCm1LMs5ckffnFBRSzBFkvfZE6wth0HzJphg7Af1MsQ3bSNeejq5NDYDmhTVdNoGgHMm1XzcEs%2Fu8M0JJOZn4stnuCWqEgpeq4kIKN6J0tndLH9E3OAmCvTSs4zXYzRDK%2FzINkFF53kBOzQ18gNUEP1K2JMY53poJa%2F4Ql3pvFOYjvSNpGLFhLjrpJGVKKIJUNjWStWi2DLSHO4S4KH7wXAUiBLGrEuPUNq7A6yXwf9KBO2pFb%2FozP4IGWBnlblxkYrYTcjmM0o59Fyj7hpV1tI6kzk4PFB3pSsFqbMaPjtb%2BzS2uY5pleJ0VpueAhw6NaOix0tWxewR6uk4gJMgayP5wwqXVQXJrwDn%2FvuZ%2FmI771rdq19wPs6DgA1bMODH7G3XfBz6K6YAnSWaI4CCF3HI6vqCFdki6sZWy%2FAWw7nBCV95oebfomiWP0dRDCqRNXyW%2FPTcKgTGRYdC27rQsj4MW5odAb4KPk5szd%2BxXa1aHAZGQkmhaKTnru7P14hxI2kpju1Q2ygEbQjq4SxUtW34dbBikBMA%2B4dS4N%2B%2FebLZT15%2FjyhDGjsYKzfV0mBj6ggqhFDrUzqMacJgMKiVvskGOqUBsCpSBCUHa%2Fpnx%2FW1yp8032kauJSr9JfFZzUEWItbGK%2BpO3J2FSVWEGTjkH6IWwF%2BuawVza%2FSZcK9jlgN8qC2%2BM0vcsJQap9sYAZbBtyvFZTMNtJ8o7FaaO9x96KS7JWubjM0gSMNJatlo8Usxcy2UJNhwXPydHU5j7hH07H5WL%2BGwHCGsMh11Jd0qYAWDHOHOGpudx%2BTUzMwkhnmm4gZvOYEwMyw&X-Amz-Signature=d3d28418312fe76de8993d8a923bd00e47e863eef940627d548eb551c2dd9db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

