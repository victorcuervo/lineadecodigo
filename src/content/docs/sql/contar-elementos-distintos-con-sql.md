---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PBGTWS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIH1czYVmF%2Bv14uvmjq0md4EChFdfC8kde9Fd2Yiv8Xa3AiBodZ%2Fd9e%2BnhkcFKs9OUvIsaYrjEr04ajWRuAi6%2FqSv4Sr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM0eKW7pYMqw9%2FwJYuKtwDuNgHq5IIy7uPw7DBOx2zHjCA%2Ffv3lqcOgLQuXVWxNOfWCrko5FRMSzEQ6Qg9uKb4u8NXLQQ58zqIvopT1aiN80DPOe%2BZqnfsRM2iJRTHQU9zEQQk9g%2BHY5rky6Jlt%2FuO8xfYJVTNxx3whqFHkfVdazVSbQC8gyA%2B5CRaZjZ7kqCJDJmi2Q11kQ7CJBjzcVih2x5HvAc0Mn0bDvGB5PIidme5plxTImMh87FWmh%2FJZm2T4kEx8GDri2TekUBzzgdw1b%2FmT1hp7T6E%2BUsvl97FafLf2oSDuAS1KvvEwGyYK2E5xqWjyWJ2plxsGqnyjO6UkVAl5GdSAE%2B2H%2BkRtlSViGnt3LU%2Fvotpncd%2FeJrzdIdg2XYGB2VhJCQR1J0J9x%2BPNHQs%2B58xnj8IKp28bvTCvkRqW2KwgUo9%2BApKw8qOZRK6Ztvi17CczSXUPZ9E%2FC%2BdO1V2zdD1FrMWq2lGVDOHcDi1sLv8l43neK5AG8Y2E6pAdoAVcVQRTafsXEYvUbiFNCRM3AYlRJagQWkDbmkJUyOpoAZfqoREJym1wXRxwBKTP2sPbwGGjgqAC3DeRH4EciIAqxgrZNB8QLe%2BJ58LNIhxsz6F%2F%2FOCXu020%2FF%2Fdi008y8bRo3XAO7Zee4ws9TDyQY6pgFSzSkLy8aaq9sfGYXd86z5hgIr6aM%2BAeX8TTMiu3WmRO4IV8ymch%2BRAFbm%2FfZjJJs8t2zN3ZV8as%2FqTosxdmm6R6kV1aFDD2jNzxz4HCzgKzNXasZlt9YkxoMQUyUrNopBNdl571m%2FV2XBJkZB3xTp7HSwE0I5FsAw%2BInyqYc5LLmdkcFnmPUgQbaQKbzKBmK42GyRgMeB0x3GfsiSEg2F4QEeu5Sa&X-Amz-Signature=6acb3d936939440baa4eeed64006f4bed1957fbf4598d12e33b43800ad8f2be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

