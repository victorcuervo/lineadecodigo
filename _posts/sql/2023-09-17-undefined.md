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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH5JTHTL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGB7a3ZnxGjuopFxxYunqA89W66yQJYPqJWe8EFKottJAiEA%2BRvGk27KyAMo633YPdq9Y2rfFtjFN75983O1Dc51%2FLcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOS977wmSSUqM%2FLa4SrcA81VzxSRmk9kohgS%2Bu9jJu%2Bkd8YWCY5E%2FT6WbQ%2FdSqrYHD%2BsKhxUPKbrjJi0dOfaUVvVh3kH8RVFIWWHjQFvFFMrjrt6u4oo9JThaPn%2FPl3Di3MLhlauTBPe5oqSmrhlGDFM%2FpQHrNsxGI4sOGI25Z%2Fw%2FP1%2BMdKGx9kN%2FQUubEW47z1AoqvtLYEYIyHZs7ZGPNo68wkpKRQxWnAMeqC2pAOLlnwMO4AW8Ed8C%2Frfxsl7tC4WeYZptEgHTQQBCfyXyYxJaCdsb5oNTK3sP0i95R%2BC26J8vMhUB1VTokH9TR2DB2XEZJ5S9zcxrG%2Bosq8U%2Bt0Fk%2BTH3mkkNfH5a6wBdukWxZLK4qtH10rOKSUfFfMC6gwxPft8LMty6fQjn9RbtDlVJrGJPTUma1%2FlKeiTFq%2BKPAOGjssMQ506cKpk7nZZbxI5Y6TcYeHetNwKQ%2FKCZZ3io6BRRcVM1MOxl4ApHlCsAdJL29VYLBQ21PH%2FeUq7%2BRemlyxQ1p3Y4vH78h0dpQPu4nZJ%2BCQzl4lrkATNGgbRNr8R1rpzagpiA5illgl%2Bt1MJCUbiYj131oWPPScyn8dsbOpxzrTWBaJawhRZBr%2FCHlm598JdJOQxi7mENXTMnUW3GLfm0wOJz69RMIybv8kGOqUB0fYKdB46ZsV2BQJUXnhWjaclcs02q2HhJ7W0RLBJmS3U2vL22u0xHZrjF7Gz%2FwEeAW77iUi0zJuHOdCw4r0TpLcjOPM1hcHWM1fzISKDIHTc4j21nq4jNY271G4kL%2F4HSlISPkkjKIU1wlhEaPSl9rh57IUD1qjrnv1TkFS%2FPAgKuUWULjA7BuV%2FArfd3cYulNWTPQtoR7kqZl50PPQqelVSM%2BbF&X-Amz-Signature=cca1f50cf5fbbb69b7f9f299532b94b8b152644461191560f0edba1f726f6fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

