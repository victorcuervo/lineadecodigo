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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LHXOWVA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDZRtoGGImFJJF%2By%2B7xTdYbO00GWp88pa%2FCyFdkX4qgdQIhAL99j%2B7XcnEOARoiJ%2BQolnugb4urDeHEeJFYlvonxlBvKv8DCCoQABoMNjM3NDIzMTgzODA1IgxLyL8JNJRw9UHtJH0q3AMkZyRW1Ue2KNFby11iJ0ueSWMStFoZY8NnQew26G4NGoDXohWTCsKy8mXaXw7a8u%2B%2BDRD2n1qAG0MpIEJ2GUcj20e6FLFDmqDd6KtbTIwXTQUPS017yFVyE2fvLw4UHNeSzSWsJwgzPoiccCmW8cXEu38z%2BHggq4Rz7%2FSg9oye9R1YHkmh%2BzkcrI7phNE7%2BJ5%2B%2FXnS7Kz5pgRzZSvyeQN%2BNL%2BfWuaSz7%2BPJrsFALeJbXgCX4gKwJXpp8grE97WDC5SCd9tfUWoKEVO9yj%2BZwPHPkkS%2FFKoe6TWkXDgSIpomygpLXFDfs5zuHd4BBVJFXcuripb3lpnoMWHrgpbPyhpZRfGhUCS2dn33RNc3HaOdTqD5QmaND1c3aXT5Uum6sRq6XwmqmLZjqXGfQtP%2BLGq%2F4hOLS%2FdjEl5P01D%2Fc2MoKcwjFjPaC8Vej5ogyGqrsMNLHBHHzFU%2FHFGfawOinlEl072yfxUzWc79u74frGbnAOEixyOmZQmauogpCGOTlSJC%2FOlK78RAIeU%2BPAkvp%2FujxPGLurolG4W%2FR%2BkQjFn1cPR%2Btj4SRsk0MjcHEnmQVlnp04fkUJbEu74nZ5mlD%2BT%2Bxx6SAcVp%2BrwuAsMzz1yWb41Ekdo1wVRgjkk%2FjDj9b%2FJBjqkAWPIf90vA5lmrgLgYMNcTZOsLrNyKPUd%2BEjYGWB2QflxJ1M2A3nZnLXGJeMll566KCTmPu%2F5yNjFEbAkewM7vPrY3BSPRq5kL3e6TEMdMdOAXmwmx8dH0%2FdVnC0Gz6dYaf7icPWA8D9L%2FbJkS9Lt%2Foe4%2FFbHxUnzXTbPJgbYIpJVkH%2BhPQ9hH2%2FQFgVrh6IOcEV1814pxpe2dMVnwlk5dhbDK8z%2B&X-Amz-Signature=92a31f3a231150703a03341dddfe75f4bd02e4d06005dd55d16c78b80032905a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

