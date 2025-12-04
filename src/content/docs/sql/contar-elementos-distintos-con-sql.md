---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXKEQUO7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDV3imRWCUO3jxtXG5b%2BG27hvSUCvg05o8xCPqUZeLhxwIhANDCxAJ%2FhNKJgPC%2FVmptPPm9JcHBCQP6LQH3P2S1uVRcKv8DCEcQABoMNjM3NDIzMTgzODA1IgwekC0rl7wXB9y%2FpFsq3AMpLyVYcZDxK023Wv6qva%2FxEpWJbZztQlOg77Zjy7U%2BbYSMb9pq%2FoSQRLKvHzCZRm0bDlxBWUrmWl8LmO0bcwhWQAkEznF%2F%2BAHv0pXKr4c%2B5xSn7eQ%2B6cwa8RRfPNomIDXPj16Rqt58%2BoejY8eyUNVtyBcnBcn5%2BINzXr33E3FVIoh83hrBamoaUiqDVoxiivzFsy27JeOxatqPQgNwNCL6Qt9AmVZ6%2BNoijRF%2FApiyxDmW8kFgygjKjmtXSXL7VlpAyKgMHDAX2qI0%2B9BiRuZ%2Bn8hF0bkJk0Kt%2B2sqwXRO09%2BSkvF8%2FRK96DuJ31tXEHLmXfDyB%2FSiJAe9w9aW7CIs0r8u4cnXPMCkRdizpGoXLEFns%2FWoqfvIwv77jPE156sMqwElyIjz1OgS713vbsEyFQR4dcQtscKBXeX%2FmDr0CroCZ9iR2q4caTnV9LL4OBR0HEeH9Fk1AqnEyavr4wvVHPCBYmu2s0Szykjmc3WSr%2BGsDb%2Faz9MYtUPWFkzM7YLlQPpS7vApWFtOoaIiRa1vl8WkieHNcbDFtCslnKjRT07YIAPdFYPdLWJllguqvdPu23ekHWhFxX%2Fvpp6WnrapeftmlqzDoDqgcA0M%2Fy08ma%2BpjNmnFm9vxxxKYzCQosbJBjqkAZKhTIPR9RMpV%2FpNUjxwbRtSNu3%2FwpJSOmkrklCQbtZhuUqva3NfImrfMhpiG1YT%2B0IJgnyhngAF%2Fg0NIZhKr3ML9wlnCA6i7Vvx1shm3FiCo5Baktk8yCzbRnH8wB4eRI020yNtY0tdXpQEss451cVX2m7BOTB5RPym9sB0ZawfiHzYAbPHeIJ%2B7NSWXeqynWDezNYK1%2FuBSXIB%2FoP4szF1%2B2Vw&X-Amz-Signature=46b044cf460a213d9d5638c32a05119dd79171f96a24d0b0cc9072a6efe18d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

