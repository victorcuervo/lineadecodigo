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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRC5VM67%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCUmGfvexwZNRYvtcdp%2Bcm6vTuoebuhMczlVxtUAIg5vQIhAIzfwfYX6v%2B2Af04yOPNsPMlgY0i7S7xRphiHGsHohg4Kv8DCCIQABoMNjM3NDIzMTgzODA1IgwxKleBl03Lb4B%2FI1Iq3APS0I7q9l9ls8O6oBRUjsBur5Qm9szFlE88Tbd1TEMIwSVHVpZkEBF0UvjAvP7whTVrJ%2FAp95bU1%2BvZyc1sal%2BiyBWySObesK5hMlXdiqPkiKlpO40YRNboli2njNNCoAfQX%2Bi3JZv%2B3wKG19xUfZQF%2BPJlBtBUwNSgPXj9T7vBuTXfa4lRd%2FrjlslzlnXlNnZEZHm6VerPFcuFLYqZqpDQJcAzISr6DISgapnnH5lZK7rnYZfAr32G%2F5AtjCaYIvNbtfzUEk56xSCeeZR9PKUkFRiK3vRR%2BKGam4N8YyMgeRKVvFChuwowvm%2FTy3T9BL3mtfiNpLgaoollKBJmpEbMu6x52PqruKEonny2V75bBIRqiJA%2FFrnZBd7o7cK9c2Vxzdvw0IN3cqXmAgU2V7GXR%2BXugJKbK8xpuPjIIcEyGwO4mw1G3TCsVNZZDz3jXnrRmC6exAmNYXfGDxG4W7yC5AFYiTicN80ahszJ4EgynlCamDI0187euhWYRnFzjftYnWeCh%2BJ59COy6akjfdTGHUugFMNVyVUVwhmmhs1619FlLndEGJp8Y6rE2PRCO8nIvrLxOojcm9UZjX%2BmaYDzmi6hkgtUoLChjT6JuAjvif%2FRz9TXdGwjIjooajCqlb7JBjqkAaoGDmoqQ1gVuyj6T3i72rD%2Bx06FGBl11M4kRUsjPnXpVmSUlo4jA4A3RSsT5Lp2Z3kRIGxxugWvkQtR7Y6wPBxWQrm14rs%2BNBLLy6Sq%2FUc%2BP05PL1nLvhtrtFYOx6EaQUb%2Fa76cQdws3l%2BTO42m4Svu2603yKiDGw3coyFDZLbE6W3uDgZk9yJNB81q9%2FEab5Tp%2F9zM2j3J2YcfvxtuheBKgZmi&X-Amz-Signature=2364af56577e144cfff6dd0d0d8cd9178bfae1d92a359861c72c01af76d4f632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

