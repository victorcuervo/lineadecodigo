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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7PCIGQV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDhy3q3mk1Vp43CmZz0%2FiJj3TYz20zw%2F%2Fh3cjR0qRSSKgIhAM%2B%2F5IDZkWADg1w6yw92BMwqAIRwnPFH6HUeIryzV%2FNOKv8DCCoQABoMNjM3NDIzMTgzODA1IgxDKWhVQpKEaB52JbUq3ANng3ScQkCC7jpbq5Qh%2B7acdPS5sTBu%2Bqzz6d9EERBQLVib71xDqf2ky96tQdakHdjUDU8oZmtF0%2B1x8re8FKPrEvtq%2F7E2J%2Fe0CQGkM9eD8sdEsYxcRTDcU72qnkYlcAFIk3wMYDiMbWYLS8NRMVzzx7LqMDFrOyqp7qN3ri7zY09xsvTGOPzHC21YuO2xqmSTDh6EYZQsTr3Cl1ICe4KFQH%2FKeG7D2HfvgfUFqSAT8q0u%2FJ%2BviqktNTNIB2GWrfF1qLByphbkcNVCm40yY0hfN1MQLi8AC4G20EsC2Voe6plNbAb4tir%2Bp%2FesxJJLEz486I7GTTKMwXyyXb%2F0RTRvM0Oe852nZ0QvJtoiVU8vyhuOT52cVwpJNgX%2BKlbrJGYiXEwRUtdsFn2pA28deeKHJa1dvGlqNs%2FfY7KH09HbDfzN7E2JtpCqYZn6KSWNmvoe%2FZSMlSjYOrM9%2B%2FjfJ6%2BIIYUptsLMpgpsHpbdqLdFtbP%2BRJEZE4K4IBGnxveRiUFVkLcVqXbM%2FX%2FCj7zrHGW8yeqg%2FMpGHM0T03z%2BdIwcddstTghda58tp%2FVwln96QnDJ9wCir06HWEMi7Vudm7AI0izX7HLLuMZcXcaxWApINqw%2BFy47o7hTWt5SlzDI9b%2FJBjqkAUhUFp653U8UtpyYP%2BmrIF2MNi%2FQr6pxb%2BhL8QlkfBgS2CeTAo7assgVIisEZma7m1xQmER7AkknZFSa9pMRjKrTAb6T9FWwKSGYHSUyneK4apZEPIBDiJ%2FIICMrH1IURsljXpA9oHQ7os8EsMQEB%2BH%2Bu9ASLgIc4O2gdFThCaQ059ktfsDnecEfsPEvt4eDiNIy8IepYUf5si1u%2BYONeglYDb5o&X-Amz-Signature=cf65fc389d4ffcdc4202420f6dd741d8e6431aa372a8b39494eb4cfa68ab7620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

