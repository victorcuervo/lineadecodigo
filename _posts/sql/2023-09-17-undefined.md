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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627E55DK2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICyjAEalOZ1hkwnLh5JqDkfF6xC90CmgjP5r9Kt7JDuRAiEAqnT7epBC%2BIxSZYBKfVDBY%2B5ETbw3NL%2B5f76MJL2zNTEq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMZuZO%2BmbotwFucg4CrcA94UJQo1VZ2XFNEqmkGPxqB8EYuN28m7n%2F8wRU7ett4X1hE%2B%2F%2F2mDoDTEtJOslo%2FHEmgyl8smFbIQQi9kgm%2FM%2B58O5OUypfPmO6O67m0hYQftaZxCfDVUMCJt36rkKTcJLDqcTzqaioayEjOJEgojpSzEjZuWAON8FLkiTjL%2BvnWdONa4WcFtbVy9%2F6E06J5ZC8bMqNXVs3Qj3Nbsz5iPpzTWdpFLt1LpZZCi8BrodZB8IN4r2oOCfT0hq6kEaWl3cNT7IDvsZdPrGiVjqSoNe6atJIeP%2Bdj6SIJi7C2wLXvu52%2F4vJYRgOvVLXjlmiFxxDSHFjRFH%2FzIO56L5lzHib%2BdSsr%2F15Tu02ykW43FE%2BOqRmoD6Pkxz60vzJXO4j0Y6YtozE41HhAktGNNh3in%2BJEW3ybeFTvBo31MGVtsNqg%2FZZlQMQuTilRUwjlkaTMaZRYUvad21q9TPlZD7MHb7aDNEswpnIgTgGipXRe2dnHbZuExiJS1sXozDXHLXktpUYqV9V2KhPtatxnn6CCRByIInKx%2BDz5Kn85ApYnakM1a7DYekvr35hPp9Doaru7jmHY3WBIEpqt9ZuT%2FIySes1fJ%2FsJbqwuraMgdB6h0HMdsrc%2F1wNmbRGQa6CAMNyIwckGOqUBBVRan5ULUqJQezyXIBIdxjnnY%2FsDTdow5pGDkSx%2FFJ4FyfSZZJWg0Z5JdfGuO0cz8gFdHgk7iRtViZS%2BcWI9sVAVjoNPtxzIU89ou8hyl8WJNUXOHlI5pQoRDhh92SvLSmR96CFc8aK4zcUOxKxYXIMuG%2FlWv5ErNk2AXyjJflDtb8DSr4SBtprnT1gpWlVBLzMKEoNFX9ylkel%2BSwMR4OQxN%2F7Y&X-Amz-Signature=1d2ba3f7d5382cdef972876750caf69cfa99db4da60f8bcae5c8847d7dff0cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

