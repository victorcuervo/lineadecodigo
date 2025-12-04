---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCD4FVW4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFFFUxP7%2BNyYBjWwDuo0FwPc32%2FTLmvTMKc3006Sj8VcAiEAw%2Bv1z6X%2BDsM6s%2F8eZcuOi4XJQ30A2s5w6nc%2BJaG8ztwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMi8LPTO5BegJZhV7CrcA98UqNC3Ap9u8gjs%2Fs7CDlm92F0SZxMW50CsuCcddyrPN%2FJkV62yPtKk3jcWrr0A%2FkDnQ1ath%2BO5GKhfurrfAlN2BVQ5RQqHPy04qyQsUgPqSFUjBv6lKPoA8dYqbbg6IXx4Q%2BpAaCrJbNQCggQb2gLGZWUqBB9VCRZEoPmRI9NmJzoZApGj6wDINBOzc1pezrWEZ%2B8kTvbQXAiZvni6kYOzwzKZrwnsUBjmdLHktJRukyxJLTvZIWsA8a6chtxGt0WpT3h22X9mQ2WpJqg4A1gPWZvD4akS75N61gkKXmtiD0XWPojJs56jiLPRlyIx0CRLpuuIQFMQ2uPwJCt0n%2Ffrh35Gl7%2BV3GJdPQM7j9GgU6YklMydIL0kUnSWH9vfqDJtLA3tnO5%2FsL9s3aHPK6xeLKlOwQQ7yq05mX0rbJT%2Bt3%2Fw%2B6HbqTZHuN0W%2B1d2c5f6vTUQLMOv56e6w1UMEgkiAuxG%2BmXdT%2B5RxBDIxNroX5j0b0LXW86CxMi7%2Fbq8lUa21uKxN6ZSjmxcg%2FqIWvi6673g3SALIuTGXA1shFpC3Dgj%2FV5vInr%2B7NH7U66Y6uHxuv4N2QewnHNubRulEA%2B3%2B4R%2FQB3FrCr8Hujzk%2BHq%2Bv3obrBhIGxAKYBrMP%2Bzw8kGOqUBacpKHG5UItE%2BioG3iUP0wSS0gwDfdAmqk37xw2W3Y%2FkevbCiXTm3O0DbhRoVVJBuUPIoeXzMoJ7ugSjYxrWGJr9MovZujkxI87TLhh5kI5BjOA69FNGcewBpGeLpRFgFUer9XQQAzC0kWocDLDc66Rxcvlu1%2BsSv1cXqFm28S%2FRTvbvHCqHxogr1jONUpqlAG8BuaoPGSGRakclc85dZzEVNuVW7&X-Amz-Signature=248d343fbd56b4499e0ceb40ec71f1e5933b9f3e729173bc3f049530ca66b0c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

