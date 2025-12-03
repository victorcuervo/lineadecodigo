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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCRMYBT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCLHEHr%2BQMJHNtHSCYgKPIS1UHu4yrefprrf5n1zBosQAIhALobkH%2FVKuABpdpfPrniQmAh3FFO%2FBaAwVrCvgzbq0ZQKv8DCCsQABoMNjM3NDIzMTgzODA1IgxZS%2BOn3OnY3yHEEHgq3AN%2FjA%2FQep4fF1JpeHckk0ueYYGau7eudmG5%2F%2BZ2%2BfNakZmVRzeNFDVXAPlsaLMF6dlskjGxhnEzpkdKsaYQISetheGb02%2B0QPFQFro%2BOxhRysKywPPfqP5fTNvXpnqVfIp7iSnWK7spwHluGN2zmTqd1wB%2BecHzqZAJgqQg1WinCZXGxk%2Bya95BGhJ9XSvYX3bZ80yiiSxhuZz%2Bea2HcNZ7z%2BBy1QI6W5BIw%2BhoOKEvYM%2FKIfW%2B3yW4NVaHplNKyUOtWJr0Vm82CwVVEKc3wBCoZZMbkxutHGUAr%2B%2FjE0KUhnE2uTrmOTRoCA7hlcBbiQ19VW9K29n46jxhgIr9XfJoBad2Ay%2B%2BM0hhcOCLnaZqgEfV%2BVak89x3eOVXZG9vc%2BosseAjQFwAfSh4jPhikYzjSlAWwl%2B4%2B6LbzW8Vom9zM00UWaXpFkPvQo%2BrTkS6XDlY5iCPhqDQpaoREe5aqHLs3P9a5t%2B8qs86oGWsuUXfFxk6apldHay4izNYVNe1%2FHfqRryFFJgg98UhtOchHqWZWoUXjRVFEMA0YBEHueHIwyo4EIEkqmUpAk5yajElKhl3wioHbmI%2FUxGJIz1rsWPllU1tWKCRvcvPOWUWbd76E1IlBxtlvx5Do6QoATDbksDJBjqkAaNi47UtqK0kSUz1%2FwDd2wGk3Cgz%2FKIwDYjJekhPI9V4B%2BZphFbmNMKg0pw3pQBOjwkHaNlEsQdCPg%2F1rlsDkXYIM9PaCFHOgWqp7LjWsdZUV9tR4Z%2B0Ruw%2BCF6KqQx%2F%2BSx8NfFzDk0UJYT97JGBJ3oG3MLNdg4vhLDvShbPJ7mqV6GUUUBu1sEZ7FCrMxoRgBOSvenTZIuUYO8zzWXpbcm5P97x&X-Amz-Signature=18e5c70fead5301a03b4cf8a6c44ecfac52125403af700de5421a8351f3c9f18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

