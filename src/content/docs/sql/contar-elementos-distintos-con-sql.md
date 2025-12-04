---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GRPFYGX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDHAo7p9rVgNfqWWq3K%2FXOCtCLx%2BW8N2hkkyxhQe7ThUAiBEIqaHzOrueR2M%2BOyuImH2xNjkW7oHE53HfnKu0PxnKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMpf83qDVF7t8zq%2BYuKtwDIi5Ipc6GJQ84Wm17qlxRpzifvU0LlreQJ7H28nd4r%2BhNxwQr9v8nWKia1PxHFGwUvxgcobAgRJApdXktNYlwCejIA%2F3RkammhDpWLKIOrFr6fMYeh2Gky8SD%2BGEmzLzHAUIPGe7Sfs7JILsC%2B0%2FxpmGNL5AGKjeO7JqE89DJe8MkfBqxouXtFBpWqzvINmVd1VUaXn5aECrxZAXHDLytXfcWCBKNBHJ9zVPQGw6d3oMapU0rL6SNYfZ6a1tVb7sYhMWuJReWsrELHGJo8Hw8aB%2FCO9QET1eNZKUXWMwJUluQnnjwDLFs4z3VnXZXprCsKGehe13VrIrhrfgefPhLxnXI8U3FQGRr4pWxkISPqgYhyPsMcCO8uGD5R2U4TivhAFNnNtpV68Gp64ZIAsEqD67FU6Fn4ChEnf6iHhfDdFYomuQ%2FVq5K%2FMq0mMqRliKsFtk4zJzkUUbczzG5pSBC%2FDn5PRKq%2BoY9OldVArkAJGduZhrf%2BkcC9oS9qlAz1%2FN7mVPdq5PQOsrlfqp044CJcbRRq8X%2BtTp50TY%2F1P5vxPoFZIj4SsalJXc5Yvt4MGmQa0geDoL8cixIravMcRA1ErpdyzFqGkUHwzpPzjmln8Z1qG4bdvhdtnhXF%2FYw66rFyQY6pgF7hjZk8VQG%2BQgpVqmfdjRiwg%2BLEennsg53Au5m%2F%2Bx8B3Widw1xQZe%2Bta1bd8md%2Br86AYt1f7F4QwS8FJMaTPfDOSZUg5KYXdZPzzXoU43SxZSwvIJDEEXEaYITuk9y817LsHoazxk9sbyD7mah%2FHk1%2BJh8kvGhw3zfyh7g%2BspyWFUl41zd3OhrTW1uTqpoZm%2BX%2B83i%2B97p2xDNjeMFGqAeI2LUz%2BWl&X-Amz-Signature=fe3090735cc42e793733af6c9a522c50e3b3e166875241b917311b640fd8c958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

