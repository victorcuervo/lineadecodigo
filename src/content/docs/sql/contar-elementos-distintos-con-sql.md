---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVWJ6FT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBcnZN77%2BDlF7p9QFc%2BrsPCgKm4LUPTFignGLzRe%2Fo1%2BAiEAzdy0%2B8DpHlEzzoHtjRwcQFIV8cxB99QfRA5YvVZqUHIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAi8FEzXv5uHJL79nircA0NYNikPQgY0fEcfev78dhgXryFALgff8BUZ8xystokx0HsWfFhioay2oFpiIzaATTWCRnDoBz2mhB5l20Ewx97%2FPj5WNO9cMT0FByxa6sTSeISUGnTZ2wRhO1EhH2wjeSg%2Fo9%2FkQXbXVLn0c%2B5FhxSb2%2Ba1jCWLcLV2ONfVUzHE5RGpcxSxaJ%2Bvjp0nN1ZQ7oCDu2IghuTUAboDMgVl8X%2F6Yeb9ScmzlPnTHhvK4epBn2wZQVQEA8kAsJac01GFCKV%2Bs4LYkr%2B41R2x38vgSIgHpGDupYJS53QefpjlR293B2pAZ7IUoGawKywbn%2Fj8O2GAMz6%2FpBdcNRVJSu3yTzJbdPCq1JHiATILD0hwYnSBnKrJAl%2F3yn95YTCrUQMVlVPeMKM%2FXCCbvKJ0ELMs4xTpaTpthMCEbHYndcMjqBUuSr8CUBuGVEVaigI4226FdstTOWnzqqHfuNhgcuLsTLqiRPD%2F4SMP5WhT7fM3CLd%2FQiPiWNmbc0yJyI7%2FJkzkupKCaCniLoZWuWL2UgT15GrnOGtRabzUxSAvS8CoEF2LeE31d3UdJu4Ws%2BLInCN5ahxBgMfa3lSeU4O262ILaClhP%2B15mUbCQFs23h69cGJMOaVXz6%2BiOchogYAOMNDcwskGOqUBy4CdpjnUQddfLyxJRot%2FXqJ301FSIxz87hO7SjT7JpEFCJbYUkslXVAI62y91edJVVhI7btRJHTQrjIxaZuYsB4tTQHeQcSkIPTgIyY2mUuc5oo4idR0Zas5mSgEWxe1WCzSFiU5LCySdRk9uyDGxmswpNLOhz6EDlhZZ2auf956By3Dqwhp8Z6GFlOKpIHjDwCKLOysRpkXAgGVWVkqkRWn6VQx&X-Amz-Signature=364ee4f6e905a2ec2ae3e02c0547cd6cdef0b3de12a72c215ca75eb8c9b6928d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

