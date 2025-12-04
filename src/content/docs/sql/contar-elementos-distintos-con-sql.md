---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMJXAHY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEyUI%2BnxMNZ%2Fwjbi2awlgykCUW0BLEY8Ghg79E5yNk8EAiAQFGxftq0migWFuUlD80UwY2ZfZZI%2FJrGi2LV%2BRe1A%2Bir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM7OjgiOM%2By4AV5cg2KtwDfHERbDAILC%2BiX9hOISfww4ddkH%2BYceuzpq4Ln7lKROZ8vxzu4MvUVG%2FulOaJ4t%2B4PgJZoTXtqar9ismb6QuuIKCVeTOSINHWGxYoC655QWmpjeUVYM%2FXksgbG%2B457qh9dQtjWviv%2FSx79D%2FGbJvXq2WGdbDJ8KdMD9mVMxeU6TLSxOrlWKm6Bj9gmJV1UnSJxG%2BAHzTWQE%2FKt73s8FlC%2B%2BlfRe%2F59VPpcsmFyQIxOehh0dBb5UpZ6f0kpYLVoO1SXeNXx4RpYDEjRvY9Re0W%2BE3jiHCBQyDI%2BvecCNrcEhOBDiXosr%2FYaBeXwGYNl%2BdoywBjYaI2mGx7nywUMvv%2FakMDFjvTB5z9tpQK1sEO%2Bwu7%2BpOe2PtT4lF%2BoUqURTSpdbUQha1pb7CGXJW292oFLqoQS4d%2FmIgOmshpG61jVzkHPUZLaLmRLkBAA1JdXxXuy1n3c%2BbkvtHOjwePjLzqVwIerYytlwPGAECKZSmgLneGNj3V6UhYGWLUrTbhGDtsyLD58%2FF4aja9jkkbtQjU4f0r7ZoX%2FC9SzcekGle6YGM3%2BtK5cO%2BKJqZ3cYehRRVHImTTFZFEf19HedSf%2BgpLxRElamI7veUhV%2B5CYQFhIY9hjrdzam1c9uneaLgw7pTDyQY6pgEG0gff1oLgpfbVhmI6bRGJwy2gjxXSQftWnWhiGAF09E1Q88yZd4D14um5XMu0ssw5xp%2BxP8rIqozEfHvmsvLUH6yOz4J7ulhIDKOb6ydZxJrsdkDEuPDieCBd5sAYC1wLfrisDI8nzCicHdfnqUa%2FSn3YsdNq9o4sZEB0wvQVrJ5OaTJJDggtGIHDUYxR6E99qOUj4WDsuc2orFdmlK4BY5sj5j4Q&X-Amz-Signature=53f8e4eff1850d87e5a1f75b6bef3807938afb64424e8571f750a574fdf8141e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

