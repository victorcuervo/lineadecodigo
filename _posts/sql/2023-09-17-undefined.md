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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQGZT5Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFxPwNjzNx31Ab6dneUBYuHhAMLn6bYofu0nr%2BWHgquRAiEA5QDEoPM3Q7iknps1WDeZIo0vlL3h4Ojv%2BQepAArF8xUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDBguH%2B8dUDzpqiEb6yrcA5lRRsJZWLQ4JeJ7TWEGTu8dKLdzs7gicpMRVB%2BpwkRmu5hdo9fXIf6aykjVA3t96EsoahsV2MPkGij5%2Fn4j2CgSJjH%2FCT249XHBTiHP6EftbDcO1ZkiLMwIVwfMMfA5DOYjk%2ByaBUOmq7EXhjYsB%2F1Pvk%2FtBbE%2BdHaIT56bf8FDJwb8j1LabSY3yNNyV%2FCmeQJpsdW01SDCiJolB5aT7tp30Lr%2B5hqne28L0LnrRcQHQMmhO2hjI8FxCHwCXI4unY664mv%2FUdeY1KtLMNyiZSrginCojEm9A4rCiBQ06N0xwIrFtAwncKustBPjye1JNsqaL2hsK8grASB%2F1X7MeHQ6CE7IieurhXPkJJwhzCMWoNs3I2EVX1drwR9e1871I8MQobDetYZaQfTtxCy4pxgm0ShHONgDJzbaT2Gr4SxHL%2Ftoor3rE7%2FtfoDTi710OSHaJxdankCaKfs1HiEt20CLL4pA1soTb4vXbUSR%2BFJHLyYwxFdPOKBtD%2FFWegzfsHy%2Bm1mbIFweRhS1Dm2ShXpLCf0YgM2lua3urcBMCbn9ajwjj0hg4cLG%2BeugTdSmvAMmLeIHisnfDl12LGNh5SQuP6q7mvfzLBvf2e0ErvSaHFpmV3IhmzDqmxPFMJ2IwckGOqUBKshV2waYJPxZ2SvOF1g0BWd6xKQZwLH%2FUMJp5d5lVp7Unm7d%2BJofxQuOpdhWDDemYZ3Mcdt9jAosffyazRlzkxj6gsI%2Fs0Ne%2FOvlfjEGe7acHrXj7AjfkOz9o4O3K2Wp%2FYnVOw6uZvMSgisbIYEs58LlsbQobjPFnUUoeyqXeYhwHf3JnirIXBctPf3vYTOXvdklWWU9UKGz3Kk06EFE9jptq2qG&X-Amz-Signature=54b707c056e49e2b9c6cc80b07bfb13ccdec815efc4e286f447d05978cce33da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

