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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SZVG6UQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDGuUi4tnPw%2BsnlirkKfUf8TFFdGIWkfVCdYQVq3ImPzgIhAIShelBEL47uCwMHh00dTk6H8SNsaxfxgfY6yDnS94AVKv8DCCsQABoMNjM3NDIzMTgzODA1Igz29QDb1QIhsbpRzYUq3AOUrkRSdlnHRdq%2BL6EvTzx0b0vyAi%2FxtuVsVnvF1cGO5j5rWlZBUc36guegys9UvGM3FKC%2F3IMBw7rex7hZrb%2FE58fx2%2BGtYU2pw%2B%2FNUClMe9Qa6NqtIVSToq3Qa9k1VCRj9qvjL%2BJLABeOxQkNUVmvlLnRaOWRz41220QN9XcK56pmiSk7boXEdLr0plvIDJ7a7QuIU7gyf1vpNn4BqzlbFv6eN626JIbCaxjJcf7uIUXMkLl0DpgBgDlBnu0zZ64tSqT8%2FI6LT7aNZxwWwRpmgOGng%2BSJo%2FfMngx7dLEKnU36J%2BUNjjN46r26jTPKPcjoTLv3RUoMKe%2Fe8R75L9bXnfEE%2BFPFapZ6JVWXc88lMQMOsrWHyQ%2FJniphASaHtT92MQMPFespEGhZ6MW199wjTIZyHHLVUOn8wXmYHB4N%2B7EQ6xTDSagDgF4yTO5YhUj%2BQslCgmoGhLMU%2Fy4y6gQZDzAG1PSziT%2Bqab5a3TpvZTiwahXk85Ys7t7R9YvVMv8l%2Bem0dduFJkrqcBVji0QNdpxcjEsqoqPbXd%2FOFec1OqyKxFWwPyAfHMwhn8k4PvfSitVcb02JShGx%2BmnmAD2t3%2BUaEm7JYGcjMl72yLy55II0IqKBL%2B4tBm82gTC7ksDJBjqkAZo4%2BdgLCLsYcqt2%2FaAW0UXqplAzZUTXPcE5aUhKQonuBFZr4%2BsqdtsHYDRKW%2BIFGa2UYDkqnIW5lToRB8KMSwekzuupJrqbitfVcXJGsn10HACTKd1UR2YWqhxdnqyqUW1uWNY6EsWmJM9tFxUGfR7mvt4dxrue0vu7W5%2F0rgmUrPnFlzt4JrUbt%2F%2FPpBqPgrZxPphnjfqF96%2Bb0FNppePHDEdb&X-Amz-Signature=c396d1b5a4366a3ef3d3392c789846f96343df3f8a9d35fccc3f60c38a7f463d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

