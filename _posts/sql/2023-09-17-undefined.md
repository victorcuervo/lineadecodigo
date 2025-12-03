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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BZ3QXM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCXLs9R3kM2IMHQONukl%2FIr1%2B9qt9p8osCFEG2eIYPC5AIhAP%2FF3Jw14crrNAHcF3GGm5%2BDg6gCmCU2xEsiG%2BeCPV84Kv8DCCoQABoMNjM3NDIzMTgzODA1IgzSX6wkNz5zPKEXkYkq3AMh8lfXuFMcwLV%2FOcKzyPSttJ71OoHj0vC7s%2FqjsMZdG8sma5SPM6HrjH%2B9khzxokoPM4fROxGpKOn%2FZGv%2FWY%2FUtq9QoX3uC3kXzonh3JemiVLrsuTB6t1y4RlCUjDjJrEVPFzXfjAuaZ0N6diEqhN2KqrTQLXmHzJLuxMY3n0hBQUgkZENKMekJ1m1ZuDLgCC6VoNRnIRdnAfcy1P3RU0Tj7OXE4XFJUuy402V6gQdZOZrBaX8bqjzTgcJ%2BsqjYPmijc293SCcntiK537limFJqxY16BPVKT4G0F37B5e%2B6QEIttwRX0YknKwl2RcJ74eweKoDftgXWMi0%2BO6gVi%2BSTvr0p0ePxRhbhRYXSpIn97SRKzgtybgtfRn9V34ZE2IyeEJCAcfRdVEdfjPtWqCNQ4IBe3rx8w3CfX4AjGEoTrRhyW%2Fol31ysz5jRkxFmHJKwPYgwyJWGuVVbNWUKb9A%2FHM9pCmGuuap6m3BP8LBqZxUx1%2BmbtmUG3hlhMJZOFk84nK12V3qa2sj5Rvc1FTvTfHNrK7cDGMjRHJCWHnaqaD0t86BTncIhtB4zffNfDacW2jBR3v0C9LMgb3ua5dr6co6pktTEVmPuueaZzd%2BJmEOaxe9kIbf0hIkMTCR9b%2FJBjqkAct%2FM1EpKBOtbj9XGRzVNTLgEbclFgjsLoYApKFdQiGe%2BMEGnCBxDUopPFihJBaHlyBg2kZO%2B4JxX%2BNUS0zhmqheW20GinpOaVxXBAr6vdNc9pktYjB0gqznE1Zo6HhcbqmcMK802w60Nw8gbBVVvQaKz%2BjJzX%2Buk32Rl9HNjCb4p54X%2FK8yNz2Xw2PGVj9%2FCoyTrxBc5dcb0VpGFks2YrMNj8q6&X-Amz-Signature=fe1ff34ff2cdec8e48aeb1386297c7fcd3a5cab9198bcb373c5d421e0e415489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

