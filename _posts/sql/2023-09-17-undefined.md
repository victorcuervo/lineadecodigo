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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRJRQY32%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDYZ2h7RqhOusMBzrNBOg9RLbKOfl2rTbndWtGke8GWHwIgNFBOttICB0BAlCYqvkO1vF2ZX8F7hiJp6nbknNP0Gxkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJSixb3l34bhKQcQ7CrcA8Us7UfJq%2F6y%2F9jyAT4OOnhRAJ2zSTq%2Bn1WRMWoSk9iNmA462oa0IWUtDlRblzOGTraLbvquVGzVboga%2F2Xs2WwFNpfpzbLbGgVAQQ28L7EQa3QlyDnT4J0noNJ%2BWQWLlnVBTNO3VZaNiwndCrToFZIzKi9ThIwaWheTLlJJ2H3v7BlOE9C7wg7Hz5LeeJ%2BuIrSSFdFDLCqjRcMdg9L1mTMz5RnQMtd2BC5Kf49khKYn5ZNUK9i6eF9BKpDZgjCKEUeBa4ASrOd6RleHtZaDXVomFp%2FXTZ%2BQVbed3BXwhdcMNdZT581JbXZyu3pkjgfwih89%2FNUF4CoWrB%2FiIMWDdH6CRL7nDIJFtgFTy%2FdLrQVcVUaDwQRXyWA6pT8VSrkOeOasUFe4aEHsgnB2Hjx%2F%2BS7pzni5q0QKKzTmbk8bonRN2qE0TnWKQNzGIbQHkQVl6ISX0VU0NhnPAWkO86NFNO%2B4sTBRaGs6j%2FWvz5PU6VU8qXLbKR%2BSvw9Q9JNzJhmgMvGqmYEKIG49jLEfgxbLi0tmXM%2F%2FblbR757rB50jr7F5AtZaf8OPh42SOGZlDNnIsnXGrpUVAOpdVdq4El5aMtnnc5EPGwmnoExqRbQqs5sdQqbAYhZCC9xFGOgsMKWhvskGOqUB4TSupZRHNiOvIsW8IkvZKwhqt9pX7QYVadKRS4yasKT5F9ML%2F2k27ljEwvZCnv41Oy89yBU1U7WUG04VP%2BgcWYdYhFRgZtjPtP6ZtIX7ErXZQnhhAsEVRYVRiNdUtHwKnizqakep6ETqLeKz4qMpntD0on5GV%2F84CmuQu0WWzqOHk1mSVFtKYgS7hzWKSkVXAIaGm2TUXdLd4QBUPPR3jpozAq6I&X-Amz-Signature=a8f9fcc542cc9439efb2b34ec4735c31121bf32491ad5e71c0f38ec2daddc5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

