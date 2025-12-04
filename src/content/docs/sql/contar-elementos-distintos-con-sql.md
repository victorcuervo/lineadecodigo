---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPKEWC4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQChUENW749HjWjEfu0bJvyh0FmQRHxGkBB7RUfaeSZ5SwIhAN9reFpJbM4QKSwABhlteBKciN%2BlwFGmobruhl8MPaVVKv8DCEAQABoMNjM3NDIzMTgzODA1IgyHfd2x%2F6mBOIhB%2FFwq3ANUo03%2BWA%2F8txOXJbiwJfxfob0CvrJ72QnY6qgRR0%2F1NEBYCsnJTUuk80iC3FQVaW4WoTdoe3c8xoheZn3wc30oWxDto9Z8iMC6bJYklWnyMq7%2FtBfH59knnRco6sqohIuyAbfRZ3WvZxWM5NFB6kH08FlPdcWccfXiHY2w2a4U1xeJF5%2F%2FfsK3Sfspga9xHMEatvvuk5OEvKBD5bGbhVCrkxx7i8pedTO0JcU7Y2N1NXOLp94ZBZ9NUjKdaM7RIDO3uI6Z7QnY8s35Z9uDC3AGT1dNQeD21uzeMplyWxcvoPkNlL4Zw9R9%2FGkwE2XkHh7pt2dZnYX50ibd4Nh%2Bx74YwM75K7UgveEwP%2FgKGThEb9bahXk3KaUhd7kHPp56WAMtOlzQSq5Mz%2Ft06Hyydxw2kh6AZOPG4J9%2BG2ESzYiiGHHurjXWIccP%2B%2FhI7v2WhEyKA7Kb4L9aqhtW2LUcqvcRBAhxRH7z2QfRYcSYPZ%2BkR%2F6McAoUz3joYDqWRwBSTpm2EUnsom%2FO13TwCdNaDIcqPcQj8csw0aYpQMyFLdpHCeLJ1r3YhWbrFeAQwy7eul83qzTb41ga1FcfhKaR%2BeyitaRR1f8eaDL0vjko3nWvZYA7xvSjt8wdPjBF2DCU6MTJBjqkAeHI4dm5HTeTVCX9ldH2nHB%2B6ThC62z3ER9os23oP4XVlIXuuMpOQsxx9sE1eQoi8I1XJKlRbDPurT3YUDIcmnSQ77q%2BZeFr%2BJWe4cKMw5OQV4dSjSmbIReVGD4rykVAAMGhQe03Sso%2ByraI7WIQIkvP5lKOD7ga1GXdV8eKe4e1bbVwjoyHk%2Bp4H6gtMCev0h8wDRjAwCoh6KJN6dJm483lNn77&X-Amz-Signature=96a5f4f9566343aba736acf96b8eef196a4684da8d2c7b90b0528210a307026d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

