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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAPROHAF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDrIarSsrstm41aadOYVRmeRGqiCjf8Sdc3Ibww30YPzQIhAIrwWIfOVWwmQZuie6SAaqscHo1Ej6It4sPLSEDB6dwRKv8DCCIQABoMNjM3NDIzMTgzODA1IgxLxHaXxIguYVpc7dsq3AMLVljyW2xpH9U0FTsw1dJ39eR4nbpZdFl0XiGnKLhlrciBrSxraELnpPSFWLz1Y2CJO5wbRValWLTUEpi%2FvXEaQNQ1e6TKJE724x2YdqwpUsaxVqWOWsUeBgw2pDDP9Zm08A8cayLKZ3JKYQ3ewzKGt44CeCaHKia470dCIecVWx8JgfSWIR9F9AdoepIUdboO71Sb3EtEHs8o5X2%2BxUUigwp3k6az%2BRM0%2Fa%2Fvq77XJJ%2FZ7Drqv32LJcF08Zh1zKnSQFF%2BuQd7uI1jEpY0fiLXqg1EKi8UUxUrTqvz2kWFbKMpe8T30HzFenaiMKxLTK6C6%2BMB9g7TqdhXQ%2BzFo9IpVvAZb2DzfI4EqJTlDP%2FUpPpAarMLiO72U9JvuBICTNKo74vbzI7SIzMBACxeUwizDZWD08gaMtjC8TG3S8g11z9QNczJ1bkevZE35yZmFHVX2cn50o7q2QOnVmoI07zp0pysmwbEITHDk657V56lT8r0kZHSo4px3pMSKf4GzyBXgSS4d5lSL%2BRslMREAJ9E5IIo2H9Ycy8oun7fVzltcCuF2SVrl1AUso1Suu0er4vOCuPW88CKtq1kgtEr%2FnkHroFa%2Fx5UAyrqN5EgdkxD5ERAJeOKkNlMeE9VXzDjlb7JBjqkAZLZ6u8Jz%2BmCcNbpfpYz1y75YATUIFfe4%2F1rgGCPc2suBXMUhQYSES%2F0rCByoXg%2FjfKWK2ky6nc9RwVftvTsL4kEtvPvpD9bWKuy7s9ew%2B%2Bi1Q6FP5iEa6fSfKBu6TPk2SL3Xl54MKN5bwqWMoALQTsIiEHMHQK%2FnPgbqeITLUrxc2nz0gDFMIKb5IbUkB8cBWsvNhmxMkNmx4semxQEUx2ukFMP&X-Amz-Signature=06ffce60cc6afc41602ce5d46f9bae29111747ecc0ca238a7a66c983c32e9232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

