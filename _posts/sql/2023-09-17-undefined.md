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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHYFVNLH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCEqVxKvekB5SMv6OUm4rZR0xFTIYNUQ9O2X9gA1w%2BFTwIhANgktDIeZNY0ZDZSKM%2FS52gO6i0jIIJmwOtvzCFdOy9bKv8DCCIQABoMNjM3NDIzMTgzODA1IgwYGAlZGFq7DzhUGrkq3APDifW8vcz%2B2ouQNUybRUk0GRBpAppXyU0bsGceWKI7XrevjT8gPHRX6NGHR1x7eL4SkxUYjcuZRWlTJNwIaTA3eJJ7W6Oh9JLYcRlgWUgvhfRWcge%2FKI5cr4h4DsbyX5i5XaLUX8DWDwmBlfhzR1GrLREhcV6bjTf7sB83%2BNs7x8lSsYr2wSN%2FCXZmMzwM3GH%2BcpnOaiB4gZBAoddcwlczfF%2FMnpVXV9KT6wJ%2BJT%2BcHSo8aFzWNATxzAQFC2I206Xot6vQHShpNFrruuyNbX3xgpXPFcbhFmLX6Pb00rcd3xPZTY5h%2FFzQ3fJC11FqLiVAbT62JOKLu%2FW3ympDV7K3iaFdLsP2SXOgsJHqPpOGwAKwVHZFvxlHj1ra7B4h7w1mV7l60eRPnHD3JU%2B1toChjN6M89IPDruUucYV6Wqy47oJ6xazbxNOXTWpiw%2Btnw47oGjl0LDOGhHcm%2FPU%2FZY07fIeJSt1c5Q6T%2BWplosPqYlqjStGs7xIqAbqCqL7MzN9xKe65HtdSbHhU7Q80qAfbPdDxg2w69%2BlLXL2LjYX0y0iH5AERAqmvjw80McWy2%2B4Ebw%2B6ADPSSv%2Fcu2Yt%2BJOsVgXK9vQbMpDXVbcPyYdCMszeiMXDB56SiWydDCllr7JBjqkAZWhN%2BjjX%2FSk%2FhDBIfXbv0vYP8Q0tdODt3gLjKN%2BXaElubrPiR3vlB753241a76UnxGAuj8dz8zfkQX4LdLWZq2FIdoGjJnRCY4XJN0AQP38mqCNqtTSpy49hC0crKV7axf95%2FuJ84mmqyXFy0Ipv4AaHwMyZ4L%2BSVJ%2BYrjNzyX9f1uee47N%2Bu8xE65kgid3M8LQ7kPGaNzL8POkJHotdTEIvhLx&X-Amz-Signature=355292acba96196e20fb7c9bda69559f032199aa238a938b9ab8d840252963ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

