---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6I5BSX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSaW1jreqA9lh3YEwQHLu0X2lKF0PmHULk0OwvB60PIgIhAOiwCP%2FuschSAIApic6ou56Y1DhbuOhdp2glQ2K7g1ZbKv8DCEcQABoMNjM3NDIzMTgzODA1IgwEzyhgGicKYhxWjMIq3APWoFsQZa9SD4bQBIWC%2BjMEYUwKdEOWILZGCpG2zl5RmsjyIrH0UMrocdPZqqRz7K5eJlv6WOMfu3J%2BxFU9H%2FCr1ZwOFpWFZvsGyZGarubygOFWMz%2FVNu39IeElRVhMJIcXLua1MQ%2FdLippqSoVJjZpTSFCtA9KFS2F%2FGKi46Ljd4S0DMJQ%2F%2BhAyz4XUHHwM9uAF3EG4rOVeIar4kRXvBvD20fAby8raNvfIPNJaMWOgAWyulaigzJ4THf4yxBEiNXOPcWRK2x0YAeccz8nSNXjM%2FwQ%2BkEtXhEOcTgakuksD01GKRkaEF2WhJOTOd4COE%2Fqwx%2Fm09BqbMGVcs7Ed0yQl0zSsa5pzMexjs5N9Jr0tMdF2aIPVpagRxEy5bi38FIJFq7oUvMD49KUYVpi%2F%2FZGwUQ4NZFI4JTKNei0TyOAHrkFbyuGAgApNjrsey4rSJtGPye0DbX8kfztl7oVCo1WbCDUhnzwFyss8LuijOD38miuDhL0%2F0auYuhf1shvhoDPxf%2FeU0F9R7b%2FNM8yjO%2BtxVxgHLk9cEVk9nooQsTgAkzuDKNScvglUPuSgsYWdQEvhq7qVUG%2Fer4DPYOM9Y%2BM67JzRibmSAMfW5eRn%2BBOMYnMHGMisWrkkWewWzCTosbJBjqkAbHjn1f04n0lxJk9edeO6O9LwgIomY5dDGP909t%2BFnGrpFRXo5sv35cEyW9p4nDXC1owWqyWnHMGsUHiqaJJ3XEHPCcx%2BFRgjYc0k7KZCZwPrKqGINJj4w0JOhggfwkCIRjOzOisej8Ja%2BdvoZyYshuBAFSHvTV%2FiS0Lg%2BfXT9TbCJWWvpjk1O9vgTLRMXg3l0WlNT%2FTbLeDv1SHoTPJwbhCwjva&X-Amz-Signature=e79b7cf513603232456fed7e944fa5a195dd78ba65fe51f6da38bd8e620a1207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

