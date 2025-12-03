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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622QDC3IB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDPvB8e%2FHRhyLssn6uQNXRnsF%2B7QXnZHmwlVyQdA2TVFgIgKA6CB1ylZz%2B8kVHpDbcPV%2BgBzhr4qHblO5kYZvZ5sbYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH57nKwpCo5gkM89uircA2%2FjbRd1kdFB81j49ArWagK%2F%2BgJOqFjOINoQDROoUOBu963TbvEwDOp276kBfsPQhFDt6ET%2BytclKkupLR787530u3wharS%2BsqNFxXTMWhJ541UMxORQ4xJ6Ml8CZjMToF6gmn2U%2BJN5xx9G3MiI9TWxUnjJZ1B21v8fz04YgU5Z9v31K9qvFxR6scnJ0ZMuqEOi7xkGBXFQjNv284gvalbJKI%2FDL2hUD%2FznQj8BZOAZfGxQPDPgmYm2TQPi1wXRY5%2FhUhDmJIa3sacMskWUq5z%2F%2BpnXF6IQzlOEF%2F0%2F80osGfwlX6ae6Y3rjDXkx0JqXuL%2BYeG55kPtFMLbcgCW4ip7JyO8%2B%2F873Uc48d99p6hkocuuM9K7iYzcdzr66L6x0v1yXjtcHy0ZAj1vdnZ95yREs%2Fki9BsK4OcP23fH9e6kJQlfdc4hWth9Ht6ZCbZQom38ERiGqE2X8qprYQ7WURQr4Kuxo0ceIFSiu%2F1j1fjXwswF%2FWV%2BSETCROae942T46DC%2B11EzwYYzsjG6ZzcbvGsuBNCqgtXQD6JqEkQM5i32cA5FHkDua8gy65ruz4Mn2LGcWUMbc8FdoQUMGHSZ07QCx4yy7B9GrcxkCfAAqyZYYSIL6aIBMu943axMI%2BcvskGOqUBD9Klqu5mZU4hLSwQeUNZKD6JZH57Plwz2Le68vT5rHBa%2Fwd65W2IgSq%2FYmb%2B%2BslrTqkl%2Bq5e8AQOqzBDAclnY7a%2FJEw5bh2jPKHvXh5hyFPuX9kze90me%2FF%2Fr1SVWpXhM1%2BYKh1BEbcF7uBHjhJEPNFvzTlkZ1IpPIUYruisBdikkamXVXAMhlpp32YErjtJy6jaFojKHmGPr9O8SwEmQ31AjfO8&X-Amz-Signature=da55e2c20c68d53f12a09b9789208ad2e085b4977c46747220204db59994e160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

