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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNX42JAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDA2JM9hDZATIt7JOGrnKAdNPjp%2F%2B1FKB4nQz8nTnt%2BGwIgXRYAa%2FFeXNG5PLgE7Bz8aSFvliTPDoy3Y8Wh%2FFO%2F%2B2Iq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDNizvGJ%2FUN7KpduFoSrcAwKfQ5I3DBjpRBOzvdKXUeDym%2F9LdbVa0MpImnbE6tnWA%2BB7TYg%2BJUhA%2FCO%2B4F3CmhMv4Gr8qVLDhDazAfPaakJpkP%2B4KlCHs%2BGtTe84g1T11lVHbU28ukYcuGmj69%2FZ1a%2Bk%2B72ChbVhXd%2Bl5eoPynJ7PMOpfns1kQTzWc0w%2Fjg4LLOkjsJ%2Fh0AKP7n1Pax%2Bv3CkFIdtiYROQivynzLJ%2F6oX06TC9%2BLvz4dtvJrBM8jQBXrBrvkBIFnh7cpMuGq%2Bjr%2Fzed1HJF2moEzymlBmjkEXm5NruUmwNeqVnY%2FuaJH4nZmBCWCezkShsr6E5XKbw8dBl7pPMJfabm%2BNmCI3HE3zZ5G0Y7vuoE%2FJcfWsxZvzgins4N3Q0qDh43HhFNjNGr8ajeRw2zVkpouh3UGrNmdNggZOPEoNSqn3%2BZhzzJreU4amXkuCVYuwedeCxanGTfvyiMvdAJBmJsv%2BKltf%2Br2NMp3rgYsOiGdWAf3BoDnefcP1ZbWwioTyFrthXPKCaX3El2YYlsn6vxX1Rr9FnaS4maYdtGia0Una1rrftgSVaTHQlG2BissYdI2qm%2FP1QO0%2Bo8J6cfdHWxoqkTzRmZbybTirQc7QB%2BgEAGIEnrejGhguykk52EgmT%2BbjMMi5v8kGOqUBIHcx400d0OnmoLbppptF9VorWD0ervZGryxf0HMo901hD%2BJ6Hkquw3LTuUdrPCVrwH%2Fxhc8DPiVSLusp0zEycUTKF7vrAWR%2BGKImXrFeQuji9NdBakNYAbFbmScK8rCYMCBtvncYkm83nBlme0h%2F%2B5TUZSM2WDNeT509UPOCj%2BQmpr69eFG%2FBQe5J%2BCuf8jLPMFr4MlCDMXDsWTibWgIUfnFPX%2FQ&X-Amz-Signature=924624cf95679dceee7c3c661ae7c0bdd24086beba5f317b7ef8a123a6f2e652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

