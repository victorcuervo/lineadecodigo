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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2J5HUE7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCDR4VIaZfhIFqxoj4qXilA9FqcZ53Kvo6qfvwTRAgQyQIhANv0hn6F5kzb9VZliguyxj3cNwbjooBgSmNKX6%2FNSNS5Kv8DCCkQABoMNjM3NDIzMTgzODA1IgyuoukddSoTuszb460q3APXof%2FWJGAERgRHPX%2BlWZRMNZR8%2FJzRJrrH1XUdxzB7ifOpSma4i1lf1j%2F5vxOq3s%2F1ytuUNzQzKRcje70IqHTTqkqEe%2Bk8iO878Uir5R%2BL8udUlT0tah11RX3JdcLJZHezLH3l%2FSfesU2IiUf6sETNHF4jamllaUZL3XoOzZ4X6wbfJQ3fVjEDi8Yvz9B8eNAxqKaRZThSkX8%2FY9qP0XngiTihGF%2F2qPJ49WIl49IeuicvctPWJ6PQ52LoZd3IHyepvIK1ZKl5UH2i91fw%2FNT7ZIjFkdF4cAAWzITTuW8sgnPrDWlJTJ%2B3ikA3s1xgGDoS6VqvPMIo9BrpVYPHRUOR4lnkbGnikXY%2FY7BEPTQGweDq%2B4IDdLf3dKQMF4WdQFS5%2F4ZIJMfiFPcA%2Bn%2B%2BZdzjUNI74b8Rnco6xv0gcvy4vw0XsF%2B89KjLERbI7T1a0NfjimsVNCEXIdxynm3vfrlxh9%2F6m6A%2FZgK2FaDk0PZtsg8G%2F0PbxoM4JA8vzxqVI2yTa7HoURJAqc3a%2BQ00%2FOUYlEgpQPCxJGJAsT6uNgNk7fwkdDEhwf5OsO638zvt5sNgxoM8irpqA6JW3huqyNScA5pfWaiJNsVek6VDvwY04tH8ZviZiNVVnFDa3zD61b%2FJBjqkATEFoL6ug97kYtTCs%2BoFRRn6Yq%2FoFeJt5Z1htK2XklUUys97uj1geKNBe6dSO4Qljo2PDzejHSHJPBbGC%2B5eNJ%2BujUr2LlTEAWSIOuwJ%2FIuM5JB2Mfq4ZLRpDNXyNBlSlLXZgFQvTfrAaqFjAcbpmmZm%2FZmbaYPWsG0xQSNiaLIKM%2B9%2BBIHtspa0MnQJu40gGv%2BsvnIhdatkXdAhpC4GS49nCfS7&X-Amz-Signature=4c9ba56a67986ee8a917c5881b3778f4d5a04f7fb2b7daf73fa18a7eca8a346c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

