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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRV5UMC2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIA38NG3z9C8pJlOxCE9VNtBxRDMEFNnP9sAx8h%2Fi%2FHU%2FAiBqxuSFTQ942vpRcGMXQrQNLe1414PzwFakhGaq5yB9LCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMlL%2FOabZhjzX5W6HUKtwDNMrZsoHQ0fYTjF2m4cEfz9KBkioMs%2FhYRkHE1CS4EZBRfciSUmJlN%2BvhjdKpw4NMRJR7BG%2BTInVW8ukE9Z%2BPVg8VZt%2FLagrYUpGJX%2FBpLufFM9PfcgAk3ACSQwq%2FfREvI7N5qRgijQm%2Fmu%2FZJ03ZBLCSo9EQY4GMWG9S8asmPlHiNbBFYU2sXn4xf%2FtXqXH%2FwDdCI5ldGJ636Jzw%2Br6XOSP%2BEJyc1%2Fm5OuNW2H9JjP4dGCCCg8tpaBX0Ch%2BohPAHJxI9KX8Q4HwwWNlMxyrXug4Ivssrdin%2FHD9iKa2l6iQmLhWYmM2jsmFCUJi%2Bx6BPwm04Bi3KifvWNxfiITPZPSkI9BNoDifnsHrUcrUw0jJcOoAZq9wjG5MFqvl6BEm0UG1OMlAgb3zOBC4ZaSlxDwEytr%2BbV%2BHoWHoHeqIMtLKWtS8pKQrYefw1c%2BvMyjRUjscA5teXAjVmCbRGrlysOMh31fj%2FEQCdCggezUaqiFRXrqw21o7FVN8u3JfAOiwD9PbFBG3LM2bJWx56QMo%2BHHLkPp%2F84nDSSkZv2CBz%2FE9g7pM9A5aEWKq%2F%2F91HsY%2F6WFoX1auaXfKgGrlt4UEFq9bh%2B4p32gVTFqfS2EqUj7TbiWoayP%2B77zQMwRAwkdW%2FyQY6pgERK%2BeVnfMQk%2B%2BV5%2FejpD507ldWmQF6QIgrhhNOLtHzaUeqmz10p%2B4PHdqDO6ImvFy5YY%2BYUgL1XCx1DuVOFMOD9ZSBp5UUcCZPvf2URltnYsHWw8NYM0BL%2FFSORZlGBg18%2Ba6jruAZJSA8UkeLQ2wT5L9pzClaCfqNbC4TzSYqe91ek50VRYnyg8pAPahQhxT9QuiwatesyfMohTgxm6Q8ZWMDjOc6&X-Amz-Signature=2af6ff0fac20dffb05c1672e0974a7d3923f4fc9246b9fa6fa8158171c861d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

