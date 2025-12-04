---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBUWY3TN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC%2Fgqqv%2Fa86uGni0Ijd5C%2Bwsjh4s%2FDjrVV7eXZuJC4m3AIhAIciTGIiun10W4W%2Bdr%2FlZMLgMUzsOnaL2hFJHXdlQLr5Kv8DCD0QABoMNjM3NDIzMTgzODA1IgyN%2F68k0i5gnfXzHYkq3AM%2BTsnWCc7OirDOcHiZ4x7FivcXeluecWMc0AqniG9BMbMMo5IR74kY4OTpfD6V0qqgNVq8D1AIB1iFpbev7ZFVcLwBnDlp1oQOQ2xidlV4wzT9ektwetfRYiaxbrNUJfeA6HzzDiysvE%2BcOymteZh1eRRdx6pp6LOTAHHo5KLEL2T9KwXTyIYbn1JKpE7Q%2B8qcUwc%2B5JiAiGZnZ1QHJ3VON5OEtIVgni6ZW%2Fd8p9F1Lcw%2F9ct0sF2KyieH%2B2MM24v4vNLBi5Bd5%2F9fvStnGg4onK2zWZOkmrQB3gt2DEeJlZbl31i45tMTeUkj0toOQig75KX5z%2BZeU1Qa%2F6rRxJkGe4xvz7uadLJwM6BPQjVG8NtSKo4ML7aEPKhwwEivoHGRf3MEgfjFMi3wGR8jLQrgkiBpA2Mzks6XqjT2Ra5Dj86gQIL33lk3KT2yBaOSpbKAH7Chds8gMLH0SN%2FaF9ZvzP4z1YThCjfyBNUtSRIRGMDkNXWfUMIl6KKbEPCdzm9l24QrsRgD%2FRInpFtOWWLL08uOiR7%2Bpd7MSthau%2FdLM%2BwNN6CK6mNqViodlRmC%2Ft6ktyS8HXT8nZG%2BpBVkc4pbryWDrWq%2BcQuNaa3KY4sW68r2Ax0ek5Z2VJLDUTC8kcTJBjqkAXxbw3l564BsrwuR6xIM54oT230iaY6pJIaEcJnZTf3wEs7BKR%2Bs1%2BCqhLP6cFutNseiY3lCPbDywRGPSupra3cLFEU5H3kJiCtG6cvT9gB5tmcgwIhwK9QBGK6WERma%2FL3T6jdFpowayYhDjomfFdrbXQSoosW9ct4svunmjYVCAWOlKw%2BXp0%2ByUWxpwVzivsnktseR8RlDzO%2BuY5bWlbrL3Ur3&X-Amz-Signature=3fef65a22d3543273b4263d3824461bb70d042649b5004db8d2e48069dc7eef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

