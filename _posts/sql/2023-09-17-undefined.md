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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665UQEHGW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCix7BPXAmjHlk1r1cVXXV5KVIMnQrbhQmvOjx7O2a6SAIgOL6SWdRSjMLuVDJpa45FNDweQItMtE4kkDM3MInJo3kq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMd34UWHl1ENukRcjCrcA3BfjrrTZRJ%2Fz1qgn32qr1pz85kP04qpD5cfKjSsQmtMVhxwM1sQ9nbhTw2g0YbB3HsNaBieFkXP7j402T8xngpfTx5SStnDk%2BiIm4PBNMMdgeBD4a%2Fw66vDwJCBeEVFBwVTSakVfU%2BlO7mu3RyST4DpxZ4NpiR7Ltb20PC%2F9f%2FTRixpm0veUU%2Fc%2FCKnW%2BqYSCZWy7KFLwuOZXAw1uMLYjyFwhpcr3%2FA%2B%2BCUaYGe97%2FG%2Fk25tMEZjmSKGUF3rByNCQVm%2BW33HbGCaM2YL3%2Fsv52%2F9Cy8YiQz9YCM4g2AlWx0AVD%2FUR%2FgFxWTQQjaLfKhuXiEPPmlFVE3zcsZtjM1NS50E%2BCs6E1gZqJ003HRJ6gI5KqH1Sj1qQ1cpcHyOxA4RKstOjOkBteDy16NxGX1sp6WHOY6bDQZIA4pzFaNpNadCUWgbUL%2FZVMB7wINNVVFqY0%2BM%2BwPwn7YLs4rq8YzX7EOJvrs5GDETTCEBdjgvW46x7t3T4gPeFT1YaUIVA29okZaEfK54fnT9XGozL4d28aNE9EOvEN3steEo3UDSXmQBZVN%2B5RhO2mR5580BZQymmuIMvRCjuq1Rs98FI6VvXHJ2FrnW5HJ18mFU915OaXsR2M0ddr3jopCjQAOMMGWvskGOqUBWGHfcOh6TvnhachyH6r6ZHcy91nndDakyN6h0XAF7NO30b8fWGi6y4X5byPmr6ITpu2ITW9407LwJiaRcrh%2F6qbK29ITcv%2B5%2FBsbwFB6jp7NF4N3kGbKQppYWkRSlVDym2tUKWxNtix2yF6SXWG%2Blh%2BChM95Febkk8jJB9V5J6Bbxl%2BSEPkRPqTGeAg%2B6rLw7gSeS2kBxu3PEI5tzoNszGlm8gii&X-Amz-Signature=f03ec4a5af119767b9f2fecd94a35ccbe5093a3afdd1e0e3091a5711c7629e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

