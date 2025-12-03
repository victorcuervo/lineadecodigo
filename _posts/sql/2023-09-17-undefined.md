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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NPNB4QM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCV86ElqEVIXdW36Tw3PAqYmayyn4GHhj4S9Z9SmMWwZgIhAMNVUDKRW67DADsqMHi%2F0lFPCOePnqR0aw9HiQ2vTX3NKv8DCCEQABoMNjM3NDIzMTgzODA1IgxNZ7bUZjvl8iL9Uewq3ANErM5X0%2BHcDoqrYORTk43oFhBpyeRzHZY4sQIo0wt7tNMJsQxcKax9K4hrsOM6XsXW8CWi52iQ%2FHNsmgF1lM4Byyp0INKnZayY5h1qV7hTrl12mGLsyvD%2B0BzlVjpgMe4tbcnAFmTwO2hVMELbDT7ie%2BYHswHXsWnfZVmGXjh1t%2FxgmIdvxN6iVFhKp246w%2FX6rwNLLOsHyvXggHyWPqaSmyfEtLGyEIgFUdrGDJdTmiytmsB2vQQkLCjJQlDtG9Z3dDMeTADa7d8ECK%2BgQkB4jJPkCGiTstm8IfVbro64HB%2BMBpqvqA%2FLdmZwxiqWbfQOZYW3bir%2FuEOeRyesoiBjGziRlgilffzJLdPl%2F0JS%2FksKirqSZyjdJ2NVEO4TFmkUxUSlI23xlXDy1Y6B79W7RjbFYeSepaAbMCJA02wAicb8%2FLFS%2FipQkMeZpEeJVGytUD%2B3J6tSQqWGmXsOCXJJmth6zvptPQ1pnmugIyJytoOq4OzqZkQ8ER0rNXdlyhG61NVO3YhshKhdj7tLS5pZDBs4np8%2BlGFzTwWfw5%2BDioAStatqshEruTur99W%2BgkXSkjzZgPLDCxm8ZhzVSTdcXCfx%2FzMt%2F%2Bsxs8gDlsoqC7ipCjJKQj4zdiyfCjCo%2F73JBjqkAbaOhwfLZiqHI1sX4Ju5pFLXO4hSw%2B4afik3xxnq16yBd1FNv1KNNo7V%2BnQIRhngGyBo6Lsozis2aVy5qiaT5H4bCBB3KhWbplSm3l3jPtYfJDIDUfEVvfvprslvVkB8tg8ljvgGZfl6uQKnT49CaU5uVPsfzsqbbH%2Ba6wzU783%2BGyK%2Bnx8n9vvb4ZRpgvKyTRhhs5XyiTgOGEdxMCtcp%2BjEdd8v&X-Amz-Signature=846db6a432bfaf12be10a41ad1da95e7634903e79491dea35b95178ac5ec8739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

