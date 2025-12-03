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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPJVINDF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCP8oBIQyaPNFVFH4tPpfcssS2yfajt5%2FIHi4BrPr7eVgIhALWAURQuhIFG7OLLr4klVthet2RAZpHZlYVJHEdViwsrKv8DCCIQABoMNjM3NDIzMTgzODA1IgxE%2FyYJOKdeHKoTTWgq3APLwVZM5CYkWGXJgL%2FRQvjjRakfWtJQoJNiZBPE39whWdAuGjOUNQtTBOH97IM%2FZR0y62v0%2FZaMhVvssQDxOGSoYZEEXfnf%2FP6hTnRQfswoPLtv4%2Ba%2BLe67qegoGL1%2F1cmC7mwu3TiP39kNQNMblfkSrM5d%2Bj9aBHBG9Qmv7JvEjOKoK8gJtQmNQsBOwVTAuXDyGJMuZUGmfVwGcp%2FYT4772etF8XVIJuwKrfIv3E7HYnMBQ8fJEodRw5uHzOr9J%2Fmx7MwXkGn818MLXe9Fcfm6fxNCMq815Xd9jvLPYTLBZ%2BCTWq7VKbB4i1CwazlfGTt0CKjNpcyy5%2FMvCNwZcmb1fKkI9Yqmcp244UJxVSNFVX%2FTsqB7QL5m10sxA23fUCAJZlkEDGthrBsqzAfTcErnX8MyRUQ6tdJkjKqGK90fVyRoevEYczmyjIUTOmA3UhmyTFTltmQd6ELCICmQyaTvUEzADun3mv%2BX59ER6JgRDuIIfBQVrPvImWl1u6roveS7hDWqCD%2FWngX%2F61k48s9w69oLYt6S67vosDngznklLjVv2oRDiM8gcUM5xO88M6uAeFZVf%2BUxr1BkUYW2L5DkGpFD2htmcnVj0GrhM8Nzonp5MUAgCz5vS7N1YTCvlr7JBjqkAaqXMocWVtcCqLSMA9dfz4RPTVzgiZVxLlrwRnR4SBazZ1nqvsyNcuA7ikjV8vSSJjFCgvphD72NaMLrRqM0tP2z%2FfFIOJNBz9%2B2Qob33f9Mk3RCfbXJpFG4ZupNrh1T9pF7Dw%2BVZkS0t%2FZIrW8K8G3qCoIFlYu2Dnxm%2BEVXfhU9IbFsVq1gyYkqNPyUVOw8V3yBckYg5z1pIruUJGZwhAA2zvgD&X-Amz-Signature=3984322d760b4e04661621bb4d6b700685e84594fce783bcd5f5a64fa76bfdc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

