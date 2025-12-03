---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNH5VWKC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGxcwbYpNHrBbN87JG%2BuCqiMjRtMaN3Ia3Bfrx%2FThPB6AiEAt5clUCjA%2FI0PUPSNyptPG%2FQwoEDjGOoTelbg8LnJZ2cq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFdVAYM3x6ikGSWHTyrcA3xZMBdq5A4Bhkde8FGCgPXsMwEpQkmddt4a0bCL6MlyZ%2Fvsv9Hm8cm1oeDprpasygGI1f3fq%2B72qRJ4f2zlPYxuMmv94ukS2gB6EVLKEJo6lRK6ITyZ8kIGjoi6uP4CcjLTf%2F%2BjDe8EZmVvhHu61Az9ydCXI7Xcx7JdMQWMwEpGOMzwjFJut3MgTmeb24Hqf4PngPvminE%2FQhSmy1RGbqbljLJRyFc%2FciBpV8pld7R6Xr9idlKDcNg7lFPmYS4tFeWBIJSa5UggvNo8nHuCassdK7nG4TNZNy8V4EbtUqLVL75K4LrexulkODd0cr75RQARMs%2FckIF39m%2FJQ2oHAyJAe3ccfJqmINbTn3LFETGXT1A9exNWqk0MYlf6E0Kj7eMvxkeyAdWhMu%2BcbgkO2N%2Fbx1h%2FDmFYEYpO0h%2BukvKMVaD3xBtfop%2FcegSXwFeEFs%2FU9XXLVxwG1%2BbFX%2B8zownO2rNuOYytwc1gPGmLfHARsPuNbaYOorQ0WKDmUFjdo8sIJ9CigEKvr%2BprE1%2FeQ46L4PQfQfFFZHse0rG5qrrtk2hB9Cxv2Ngza214L1ixJ%2BtphkW0wPyEQ8mLP1mTH0KivoJBsG2srR%2B6pbRwbV2UqAg5iJfw3BAJpGDgMMf3wskGOqUBVo0BqAnyXzUZq3jsIC3IPw6PqrhslKbmRUKsFh1RRJgK8Pa%2FXsR9C8aWto9d%2FFFKHhgmzW0d6%2F4HwK5oJqdZOIUCn1mpS4nvU3%2BqRFCgclA5q2awDnV1ASiAwcwKbz5U4t7xfdXzKh30iEYvrtsdaoHhAyp2opSS3oq9%2Fn6n9CT0RCsp4lBSDP%2F6i4zakp6lnKeifPBqeic3%2FU%2FoJQ3w5lTn1dJ5&X-Amz-Signature=88e1ac023653fc6ce99c1d53cf92e2fe04ec344b6b0687e4ca08ff37568f7aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

