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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWVN46YB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIB9kPz3ub5dCpcvwCyWM%2BQfzYCKhRpcTz7jYzGjea%2BMoAiEA9lFFOoq7xuPnnQyOxmPRoBdl0vitg%2B5a4JguNOxJ6f4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMTXTIh9xn8eskwbDircA3wGCuL3iGGH0ACJ50h%2FMOUs1DbibWOCLw4w5AfHoV8kUbDaWnAFAWc6Ov1cFPGg%2B3LWSKFnuE6WjH%2FqsC66i53uuT%2FrVX5E1V%2F0CxsHiMCTh2EgIcRGUArjuqs%2BptsPtA4EOh66qrSz23O4u6N1RZAih9udXWp8LLczCSu7OjCt%2F8FP5TFducvcU%2BTtIY4erd7DeLVsaLnMfh7BcNpw%2Fmt90HPeq4IUmMXN6EYK3tJlV1EhjcJIAAXjnqqJHP0s8%2BuUz3cgSBgGPhtWR6mnGNykbAFZFrSuNwjiNa7RWMHVgFDkAx7j16GNZlF7Xn8I5KfflWf5zTIdMKCwFPApQKT2GNxLOw9qBM%2B3WPL3D50julLD2QuQrwn1uRCqq8p4aRRyMjD7FNf8EcVt7FE%2BQKY0k9qFj2vXWg6d4oCI4RvhGYZTvUIWGh54YdjAbgDxmFwr3RlZqc%2FAg8zEvJhQfboLEObbPH4rYDJ63AfBgoMdbC4etZTwU8cGMtLgbAg1ZHItAzbYVUvK%2B4CyEvDghZkTrgDyvw9GUg3wLxk0RMO1YJWv6JtKZegg0jeeXLqRd7aIHA%2BVn4hZeb%2Fo6PDqBaRvXhDAzrbrPIZukfiRV6FDZoR%2Fy5A73Bpkm7OCMJOIwckGOqUBV2U%2BW40y1bRKBAAFLHbZlePBrG4F16AtTAsRhyUktfQL2hzqRtWN15hnASOGQd8%2B819xA2S9pZLuiTQE%2FYQQ0gEWeep01Avvs5qMYeXp%2Bg%2Fw%2Bxg%2BYxkGst5VVd1MoDIWn5JkplDjCFIWGAi0gOGr%2FGJGfOQcZDD8%2BKOANQY6sR%2B7J4g%2FXuKZtgLUsBX%2BIZjI0vTpUglf1fE250bJh%2BjHVH4c9aco&X-Amz-Signature=dbdf8f86bf89b7e6b92918a1ca471d8fc9171bc84a83812582e09a31a04795a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

