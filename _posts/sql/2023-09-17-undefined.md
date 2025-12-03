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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTTCRWCK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD3WMniDGSq2lW9N0h5hTltd%2FVh0WQQSThgZoUY0plq2QIgZ%2F48OPAFvANM9qbqAHYMmqyFcFuNPOKd1mblYrI4TQkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNCCsj22NCHJJs6OZCrcAyCLdrCs9J8u%2FGyy%2FsIxBM1hCKhcy%2F7tL9Lhb1aNb3AWe4%2FBsi1Lln%2FuIchHNGjWLjY8MwPAKUCxnjFZsolYui%2BAisOuVqV0OuFyvqdZ8iGuKxwRB1bBIR4Z1fHTSAkM8kpn2dsGQDlBJ7EW0xFxtC7VQRJ9iTqKfn0exMDYX%2FLG4hxWto6PLRkoekYQT5kzzt10M2Sv2Cm69QHVW9PEvTfX13pBKdFLprIFnQ5cwyvjFqj5vywHud1rzvX75YmlMWa2%2BYybKid881J9OJ11iE0tJESEJiMD8qcqXNW2emcGXs1D1EuFR0KeXXn06ZEwxYCvU%2B5BwsDa%2FZUSD3rVwFSJQbZv6Ax2kYO4LXdxem9xxgOGXI50mQkhkvY44infYjB%2B6JWfbGbuSKi7JdoR1O4mAl8%2BANFnj31CrCLmCPnEeyV7%2FXVlpO1nXIP%2Fv3viWE4tDSRjPFL%2B4QeZVj%2F6oOYQ9%2F6jWVxPZsAG9QD9w3Js1VwUh9zJUt4nYOTV6SlUzcnQIFnyM3Oinxdksurj1lvuPXIlN3%2BvpodcGlQZUnx0Zl1Y49hXR4aPqwMbz1rVcBccqnki0AW66VVdZMfvXqpREORnI68A8lyaJehbtKppoFghOiyP2zTcv%2B0UMIjqwMkGOqUBIYDHAGjKWx1PIZInXRUpH2rgFNRhGrHljEpd7S74U05m5D7eqmbDQc0%2F1O7p3LbPhknnLCL%2F1OjH8gUevcCDaRRtM0MQGWc7XxebBRSm4HLj2L%2FT1oI2mGt7qZTc%2FT1QUd3fK4VoGZJF34na8kxsriuminU3LOv2zh7dRlMeS7LLKWwjAdPsW43eiq8w3RjtnH8Cs2QLMHQH4CPky9nLHcA9eh8X&X-Amz-Signature=d493cb5f39f27156348a66e3083a9e602a33b1011af827a6a726d56b836fde62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

