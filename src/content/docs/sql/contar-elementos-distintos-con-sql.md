---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOYRWGGA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIErTyVDwZ6ImH3EUGPWG2uHDLY9NjxmwqIHNNqg2YiuoAiBB28hbJBN56lAsJrnh2mMN25jDrO8Wxs57dQDtbBopTSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMSjosZZ0z%2BfPUEHfUKtwD9PGP7w2eXR7QcdQdFGQKGOTtvXo%2BDGROkbcqV8Bb20IqHifzXvcLl1VFskDVxJ5xVpO%2Frj4v1JczBwd%2F3Al0VLrDppJte9CqfIRYaz4E2McLmyRxYWkR47iq1Fw5f%2F5wvjYdmcutrZd%2B7hVygMK96OZ32pyAzo2niB8bSQokC2mgYySfMRKh4rwH7rb9csfqVskbn2OdsUdhtocAnL9t1E0Nz4YCxNLPEpnsYXcCiVdZNQ4bvYTC%2BTSqL4MK8o91WqfLnPJ312Ch7gOUYEo5H6A%2F5odWwRCmOwNS6dc8%2BPQCwkV65K9ec3YmWa5AZAqO88LOMT2KpE7lCv2HPaeqEHfLNpTuliNDlTlQmFeZQrRLoKDCsfb1Rq7Bqb6WQjHU0gcUL7wlJEcXpW%2BZ8793ypn1namYVSkds6%2FV3eR4%2FPS2O88OIBvmXjtJVIJoQ5Z6hzsB%2FwrvUE4YhTvy8YzphViC6z%2B5%2BS8Jzzv4GoaAU6s7Ch3QPeeQ6MPnWzNKTVS8fAeUNopEx4DI1hUU8BrnczP%2Bfb8CP5wNCoT%2FDEZQWaApq5ETWC%2FngND4aiRB7atSCKR00V9WY4dgwMI4nJzC8YVLjZztWUroZ85uogLmw4TdDtSe7nIQeOqKqcQwqZDEyQY6pgETxy4%2B4bY9Py5a0B40lJq1o4fhtUtDVvEKlCc0vR0EDn2W5A2rGSWjsqQ1yVd57fpN5ewKgW2gCozDLvBchShwU%2BdS6dH0%2Fop7oKMUS%2FQNCmCbmJDQMooLv%2B%2Fzaq5n5aOfXmnVYPbPZR8Sob4MpPO5V0p%2BXIN7IegD7WGEA%2BzO73Gr9kHHH8I%2BEGW4VJPFph%2Fo%2F3bv97MojaM5cr8Jna7bQv1FoYDG&X-Amz-Signature=63c3848182453caa35812e41ec8a41737d52b2119e928fac2f35d3301adccc2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

