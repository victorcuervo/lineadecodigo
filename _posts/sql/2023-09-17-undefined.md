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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634CUYXJA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDrr1mRZtxzrm%2BqVv4gFgYGJWvNTpICX%2BpTBgopmjGPjAIgNHAwNSEv%2Fk%2Bc8swYp%2Fz7cG8RVQAJpgp8iWFfcIXoNYAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPHHpTZZuQ8Rs3hZjCrcA3625Ke9Wn6fBpunMZaZ0aHGp756yRaGWZ8Dtm7KnHz4rVX0jB687EkKOgi2dfgHgrxbZrZ4HFAA3SfzdGsHPTvJWUIBJc%2Fk9nwaag1dDllNPS%2FIrMd1HD3XHQMCCeb74rgcPo7t0vWsx56%2B2jSwymnGzzKiRT3L3UA%2FPKTjf%2BIgPrFmaKJu%2BegO0Dit%2Fhop9iud4SxAo95iFI0tNWIokr1xVZ%2FOJ%2FDG3Q65V6EZwK53CSlzVeNwINOIho%2BDPkyeuI4D6aX3X164l61q2RGnWJjRiq6nDhmQs6Aqx7%2F6Qa0A4iw8HIlPVwHrAZCYs2XP8GQfuDpbyRH8wtAnIA9Omq2KT%2BS89yZnvcYaNgAg8oQi5jS1G3glBnykyZpgPeOiU%2F3Ll2LmX%2BELN%2BoxWXgTU2V5WuiptqhRKft4K7FU4icrtoK0zeIVjpvb0HOj7sdoT2I9XlTvx57Zt7RwcUuwIkxgFUXxB0faO0JxT1jMrA5g1VPTf5tq6XdBRVx8EH7Mf0QVaH33YTSlt%2BrWf6gyRaGtMBFImXiuKUBnoZfI21ZXcY9m6QCxUAHRN6DGRmKwtvRiLIxjEYxc8jhwzO9syrcIK7TK14%2F%2FyWyuFRUE2jjAV%2B1N33TL7a%2FtWLsnMIi5v8kGOqUBRFYnk37bC%2B8MmLcIdp4BbSqn4WJWOZeeU1GpWfB%2BxofB%2FwgcXzFKJHKXRuVZOFcMKpwPqki3NJk8uXCeik8YuRkVtvYQtrM53KaOysxhyr%2B0ohs9PmVZ4364nQK72rZbEobN6mk%2FCqCfR76YEosLmPrDJk7kvB7AxEcu8eeffI5knJzF3bm%2F%2FtCGO6KnsHIxV8VRBrZyt%2BoSHWL76RW6f83PZoqv&X-Amz-Signature=f53fa91c53dbfea8dd82127b9e17c7f5c75bd15e288afc2d7f7228aa0d2c0dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

