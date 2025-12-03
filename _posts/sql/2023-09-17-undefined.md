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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBSV5WZ7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDT7aLmVQfmDnOIOOcJQLaQ6JjCZh7ZbkhERw2%2Be8iO0QIhAOZ0C7Tj09zEHCFFaf%2FIv90FYNCtm7%2FH7JLo0XW2q68%2FKv8DCCoQABoMNjM3NDIzMTgzODA1Igy6Ep%2BMgQCeesUOK%2FIq3AM2TUgzTz0DxxjGY%2BXFU3mVO22ncWdK5CEmaGgSqRozBhsN40rgHrf5yHaYc8eHV%2B%2ByLhovE1af9ZlJJWOWPC5KXWNrH3844jR1leKPVrIpUOYwpjS%2Bz5p5UsuYMsAttQqxEXyl66yYiCnf9x0ffFBNlYB03lUw%2FjrPyk87s%2B3wQ%2FypqJ9ytRQY2l%2B3hwX6f5NhtuYtGmje6aY3j31ui9cCm6vKrXdueAq9A2Dnnf60jBpVs0vtcF1zkCPxqVrO5Ci5WTw%2BY%2Fbi2mha3VmXbGhy3Rfz18gBtk3wdg6skLUzB%2BpkZ2G%2Bply99ji9j%2B7RgfHPuBPbtne1ZCzRhwSU3LzaVVZK7wnCcFrR32SK4eR%2FMZ3ryFY2dUSN7mqATaNcSAf37jP2aPeL6UQeFGwbYlHsBLT1ZXam8eMzgm6uadgKIKyvfrM2%2B40NLrYl7T%2BctufkAlQVd05dSG%2BSy%2FK60u2co8IlSkybGx0rGPQq9e2yomPYWMHtSVwrpm8e5XNlgwP08nLQuZW7XjsJiiLAkjsqDluWJVC8i2TCHhiz2qfSNabqW9FhqDrnYK2C1UFE%2FXwZ4Xlp0%2B7bIEEh2f%2FvB91Dfff2dmJQ6lvQGi7WdCOxntiIEORDpn5xr90NVDDK9b%2FJBjqkAd%2F8jPITXcwzHiIWZNEu99TM2qz5nw7bBjSBU4EmB9hs0Z1zauOo9lOxqrDT9tMapcvBm2EaKgYSt9jUiJj3j1IExxKbIkjnEcGAG7X%2FykgpHHdfHkvpzXraDP%2Fkxft67XePfoVaJQ%2BsBfjnphaPib0pEbuvbTQ%2FUb8mMAiqAbiN5mnH6%2BYFy%2B5iVjLpVGQLRfKOF5uCA7TQsLjd1Z7hXECcYBu8&X-Amz-Signature=deb582966dd083e04c6f446ec25633ec8fe77dbd4202e4daca12f05e5f17aabc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

