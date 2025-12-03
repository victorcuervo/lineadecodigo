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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQRMTKXC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBNXTry09hEx1ovKz2%2BYxoU7cAInfmQIKMoJQI3a%2BPOAAiEA7SxGrUXHPFBjM6DcC9sBP7USf89NAgVoJjHleQoC2fYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAv0gRN0oRz7xjzIACrcA6HJ%2Bo20rssRUzOiOQ8coZIkmWYZ35tVL5w9qtgn8VePGU%2FmTVhq15Rqnhfm4LPbajdPy46fQxsTp3tByArL28RljNgV3jh6qdlp%2FX1Hbw4r2ulGKi%2FFMXwOQJHScJbxEPaChBZcKUqriipQXKfmxttpoF8xS%2BdHmOnrN4lbijjwftx%2B8ufCMg985w0B3a2R8fxBPPruWMBNSzc1jopQCndLHvaXmVMESumhAfZR1ECa8n%2FFi7fz4UB5hdwS9AczmtaQnK8KWPiEiBoBFp6%2BQwZO7VN47fmEkEQleQAEOWfVlJdihJVAKTQGBYhlxhZ6EJMh2F6i3gKRlaBc7VKzhB9I5M4B8qiPOby7CHC2fe0cuaf5Ji1B8W1jp6%2B7Zp2EttWvPYsKr0SaGvpWuLL0pvOdW3R3KYmhaHBx3di3nsis1fY%2BHq2zeJvYkZLa0p3HDUEWU6%2FS1I4NITEkGehUgECtrhl%2FK%2B75RKob9H1pHcZRT5BPe%2FIvEljpyT1CxN0FZs5tyusZr66vgeOdbKBTWX%2BRsUf5lz2NRv2GfGgnpHVDPjRQqLEvVM%2BlMDo%2FurRkhI3va06zcBNKR01LTptYp8yiiONLKMKgFOaWFdEjwLCF1JHGixTjsDYK%2B3KTMJCTwMkGOqUB5qggqIQOgObvLYnGqSPcMdtdHBO7qVapfkmlpKEoCBsYIP16H%2B9CXpndPKIiXDCvm81IIRqok6lCnPjBJAL2X7NmF3QSsgqyBoq3Vu8vyBf%2Bxi7widOiY56VrfLNCj7Sh5%2Baa%2Fs0dxHSnmalyorbQkxeGfPl7JlsYQaeY%2Fs%2Fr1iT40%2BfHnOmk%2BJHx9mTC%2By0GD0I85BqDerxAvNgLNW2RqvSZ5r9&X-Amz-Signature=a165b1999f0aba16da20a2785c3749f40a3f08df29fb9c852a8fbb097fe1f6dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

