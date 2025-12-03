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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGOLYGP4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGcS005hh5JNXjeCk8Yf4jI1V%2Fbz%2BOr5InmP3T3irKYhAiBGtpubtL3ulc9p0gtnzxb3C25l2%2Fgcs%2FNxUoP3yGfkISr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMOd%2F%2FOtUPQELyNRWSKtwD1pXAW5pz9tmtkmPm6KBjlbZcTk3zvj3OCe3afjWu6GBChAF6Pg21nT5X1N3wIDtzLwbHOjtB8tFhacNvhvoBmOBUG9RxprS252ciEJHyYZ41ytnUBJzlELlxMsNPjbFaNaLddRgE%2FfboPQ%2Be54QkjEQbw4oOR4%2B6doUn7wkwIhhT0CCW7aUy0C8djc6vUz3ckDBpluvGMjitdV%2FBydW0sYtc6Mx%2FBgzX2akXZ4YpFXXmCHU49rJvUJqS45srux5ubPA4KG246Rm6W3SkSbLHEcBJ0eRvrpSlJ8Ul%2BDvN7TDh5%2BSOdZZFoyltHlX%2Fz1WTO%2B%2F%2FCjJhDoh77trnvH7zjXgKo0A%2FOrZw8ogyz5j1vUNaCw6D15LqJVQRdxSuy%2FvBu8Vc%2BfcbMsV5uZDnniY%2FOQYYYHYcRL21jQjLwaEGS1WEP4yAsdZzLCurhxGA475qC7x2mVfhcqR%2FJdc0hVwyX1cyeKJflASyY38TxodkY8a%2BIqDsHsxv45Lfb%2BtRVMd6I2AOu93Ul6OMCSnyT3pNAMgpJ9qqbf4HQG40KvyhiuQZos9FXviVwep6LHdG8M0wnzBkDkRyifUJxUQPGf7g5LGDFIZ9x0ezh6pjYn4mt6zoM2HOo3TPf9SIYN8w%2B5m%2FyQY6pgH6FkIoaXrR0%2FHrls5eZvzWp9hlr31PORWzFCa5Lxs4fNintXp2%2BrzUIyISBdvm1mhsvlZUCJ4ot8iv1tASNQBpriVx6%2BxrhP0cv46aADylF9tEGt7uw8Co1aNqp%2FyebN1sxS1f30Jwk2%2BHdk9yk6FHck7VjpmaqD%2BCTXUJbNa4lSFRP%2F%2FVViWepv%2FXEMQ17hWJdSifpyZcFKf1lG0DyKd6HQwTQFM4&X-Amz-Signature=7e30baab503537c80d5041da93c5fb83790d3dfff81fe8548d841e90d65926b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

