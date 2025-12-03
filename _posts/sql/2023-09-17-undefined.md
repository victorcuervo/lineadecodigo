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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWSZK43C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC1MZ4S%2BkU5xmLc5zMTbdIE8uZ%2BL01JX9MvnrsVqt6%2FugIgc%2BJ6cpL2xZkAzQblo2GpCk2iACzhjSDwOQf6SZ%2BMmrYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDAuuENaMDUdp9iyGyyrcA3gnnsy7%2BESX8zZoGLrgtmFbFXiuhRGJElsRpUFHeGKt24A00%2BzXw%2BTry%2F6NrR%2Fa4OLx4HHhmmbWbbCvlF5gTUDkBryLCovhHG3vTGBs7zCCZLMRp8OcGZ8RdEbx8UletOXyMl7CDYAJNW8nlbkC8QJP6rn%2BhrgoUs%2B533JYXg8LlE8YnmoeaKLAezjRESh3iFJwjRKAI1vi9eXLPpAPm17rbP3huwmCXqfI5pJvpQcuX%2FJxuXwrcig5Ph7mE%2Bl0Gsh7Psw8gHz8CR4lLtv6E%2BZMmDj9OA%2FpXeVfN8KwYjIGJ8aHcXSw%2FKeEEO9oHgebO0HvoBHhM8xgZZmf6RQnjQ%2BDPqvyM5F9v9TgKvfWZj7XsdmFKxRL1%2FC9T73KhqJcQDJXHNFqXsY4kW0EuVTFcJwwUhQTwyD%2F%2F%2Ft2UwSys%2BXW4fKog27RxRqV4WQBg9vFAH%2FlTGtEGaOyxaJuflDY4afkn0wQ3QpSZL2bpjffYVa9G%2BjMWQtrbahpF38dER8k3KcovJUqIM01Bvix%2F%2B0PT9IeMfaWcJAnCNvrYS13u3v%2FJWn1jpUj0LdxkLzS3xC8wrcQhMKbGClH4ooF9D0d69E8yi%2FuLaQADj%2B9T8OvFamaiW1KdVKQzEsdYKk2MJmIwckGOqUB%2FMI9W%2Fy083zwf7EIgo%2BlCkJPhL6YwjWnczO1XvIoS%2BnZGa%2FHcIwy6kGPwkgpEfDkX1E7m34WxG2%2F55BdwE4NByw1Yo%2FloHW9jcSthRBu%2Bk7NrMlMfsmyhwK7trnT53Gk9gZ5Oq8hDvPG2yq%2BlT3iWDxIKIpQnocCKHkSC94lMdKW11SdjeCu8c5fiwP2OtUMAJX%2BiK326pw28mPCdRWr7c6eQBYC&X-Amz-Signature=a016fa21af40235e182b8df0dba9404f06645930b7a54d98d873a037faf997c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

