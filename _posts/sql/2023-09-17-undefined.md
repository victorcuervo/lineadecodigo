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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THB5JKYN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCtbpgPghOo4H%2FLcs%2BbSABh6AEmDy5%2Bft9oEbuIECwDPQIhAORanpTuw6nFn0vMi6e9hyw8lyjpHQHOBelN2y1wDh2gKv8DCCoQABoMNjM3NDIzMTgzODA1IgxDUawXVQNxI5Oj7JQq3AP5xipGYiWHMnalr2wdDP8DIWpng2LtC73nBeCzF86kRubFgodPcqKBPJ24Rziw0upeG9pvpWK742c0pXU0BSjKZg9E29HUU%2FZPCAPA0lXCk%2B2s%2BY9OXCwaestnSFycouCYaN9Z5TntxP%2B%2Fq2ntaoPsK%2FsllOcpO6kG8L1LDxIcWUZFZP2ntH3yRwm6J8%2BUP%2F0OgOusHkQUEDvrcMhr6BoQDEcETgS3Jxpizz%2FnsiMcx3MnV6tFpSrfJmEzsdlHtqUKVxum9D%2F%2FATnKFFEna8B5R6EmsezaQT%2FTNG8uNvdjlrm6HaTOybP1XM9B8baj9rkRsvVLOV5s%2BQH5Gqwnw9ROJJ19iFS6XpV6JWv5GauYD6bkj1xPcb36aProrndkWxG9h4768vlHRZiS9qrQdBb2Taprr%2FfgWTboHM4LWPzYVVEfsYYaDL3L9BBKfb4uuCc8%2Fot4l1eCVnFJ5ucHVCbqoFX1iGfVhE6MjeSduqqZfn8ZsQozoaL0O8OiIZzdQIBUeS5fyIH%2F06fDOFZ%2BNvTOEGRiiabEhFeb7LnYbscu%2FvCdLWutFBS63XyCMWW%2B5mK3%2BFeNoygsEZTMC%2FmKhhT2DFhW6H2stlfpvUtIQik1NvNNFLTUh2tFVSv7IjCb9r%2FJBjqkAW8Fxe4cAM3jZX7PFjX6%2FOH%2BkL9IRsgL8rtYR6srtAY3UBlBbqJSDDrHIsBDgQsjMC6tbQHW4R6ygpQuY%2FHFA3RaexW8w6SS2tm218s0qyBOr%2F0UWSkS3%2FjmNnhzUOjapNj%2BZiBKEYzI1AQJCJ8XN8Np5%2BDB8hGD9FGAqlj1ywpxRq3FkLVJ3r5UezQ58yoeTdLSVkGwWAMEOWD5KXe6sd%2Btl3O0&X-Amz-Signature=a47230d8b8fbbde07ee60c159e787b4fd2131085ff068e91136a36f5c795b051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

