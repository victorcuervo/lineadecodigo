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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQWB3RR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDP%2BlJJFPkXQyR71ZrasuJ%2FGi8zOVIBj6CSGn3hGyeKuwIhAI90TGHVNJqUwVdCbjWvS52lG4XEBMeXIKyTG%2FvP%2BHz0Kv8DCC4QABoMNjM3NDIzMTgzODA1IgysaHL3Kvs5e2k2O08q3AOl2E1pCPMMEIFE5rJIwVlCKcLqDcbCTnX4FXCXxSzqm4ooxE48Zyi1lLqekQAMocqTKBoyJHK41nY4F8YT2jfUFuNO26pjWf6pQIFWlEKAHJRklI7J1JWGk%2BefeN%2FrQ0a499q4W2MYJMZ5d6kHdzNbPyCKfjpoA%2BMUEDM3gPvv3bzSPXWq%2B5lTIXha7Yf8cxQWLNvSW5uf32YYHT5TVVJK%2BFIjGGtzOtHZImc15LiG9OOmey6FFIWLikAjnObK3lBPHBJe5CgJEt5Aa8kMH%2BHov2rLdsjcEp2%2FgmoCNhwI4zDdllMgJ0x023GUpqQ%2BsE6XqhwL%2BSZHS4T6OpT7r7yeX2ZtXg87Uyz4Cy0bXjNsxx%2BK6flWBgPzMP1c8bmbB3oUEuWB3fDfQoO%2FiIPww0ipuqiPFUeGVBurgchh70R2Ut%2Bu6K0rI9pzgMbcss9DusOLupibDfToANmNe%2FvZ7UxkkXkIwQCQ%2FiTwp%2BAm0evaeyPi2V4pUdmfX8HlvXzUzStToT7ZHpJnPBGQBiTR%2BhxZPAO2VRAYde4QhXmrqhhql%2FmmNpaGmFy6MK642ITuEOAWwaat6jZ%2F4uo6L8Jim14xQnv0R2qRfhfxi2e72xYFWlnKO1rOQjECrqyCADC16cDJBjqkAQDx%2B6hxW3Oi1nWh7W4PHgyzinGBAwmn3yobvm4uR6kBTfNhuKb42yKvipNet4Aml4n1c%2FPVVRYSaVI5FQE4DxWGpW2rUQ9JPddKHIdOqIfpuHk9%2BCZqmxev1%2B4gHOQPo1rmgAb7w85oBj6sXRH6kqVXbQqpatYafvhM2h3fFIBjXWbTtw1E50NDUHUZVaJ6CSEwm8LpFj3Ps2hkEE8StB288oIr&X-Amz-Signature=4bd8eb098349e33bb13eaa8e19475832cf2908cd39ec794b7beb2279364b7da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

