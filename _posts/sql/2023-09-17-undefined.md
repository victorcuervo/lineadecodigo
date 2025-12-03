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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3IPEZN6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDPV5EqirOEkYslDK83snLLG6boKLyi122VjLAStvDS9AiEA6u5vdnFSpU19qakREX%2BMmMbUAPA01hjwxTlGO7oaURkq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDD9Xfj7Z3YytCkzfgSrcA4Oggr3Tq7noULxIMaWa1Pertm%2Ft1kp3zCKpLas2eule8cPegAmt5ZGMUGEBNm0UtRiy7knVuEneqiWjWBXd1lEisdunRP%2BAJEuGiYeM3AMFii2v2zkFD26vnwP3c4A196LWjRqA3cNU%2FQ0EYA6iikO%2BjtDi7aAxlG1AazkeRQ5sIHx8jLuDtwe%2B8DzI8sUkExrTv3VXx4UZhGa3r7BLfkJHHykVcnkI4HnzQdZWCuojolDC7%2BeSWLbn%2F9Dul6uApldtC8pITCrsMah6BFp8YZVJQOncVJ%2FwlMVXqvfyD%2FKcaT0xdyYnh7FEWEThe6bEhUJNI5Xxjsq0AQai%2BqQmcWmxnLCjmI3hfFfYSl1ryqMq8Q%2BIX545dqN4Ha1Z%2B24ScAwq6TxcdQ9fUT11QIMuZhHXI%2B1vv3P%2Bvbat4APkztAcqVX3%2Fe%2BqHeH1WMN7ddKFHmVMfNDqtnzNyVxxVi4p2NZnpRXs2JlYt%2BAWBDWGuzCpa03MVTRKO5STocauEoQyijh6xRXRcLa5JYJ8AixIR%2F4BR5EcUQAfkkWmnd0LkrZPRxBAvsDO6TdkNb3mxq25pxAes9dmL9LWlJqxbGKxApSR0ZHZkMSX0Z9Qrniomqwii7BQ5Mzg6wSU2LVDMOiIwckGOqUBikfKCVVK57uzDlCl9PKLOVsxWK4%2F4GGIg%2B2DbI6Fm%2BWcmlcj%2FJfv91Jk1RL%2BrpPnuE0xvAqPu3NOoEV1OJvJ7Z2%2BkgbGOHp4hmba6NdfFTsBYGcj2jms9OeiWW02I6YsqKwNpEyQDmSPcQM81Ro%2FrNPSdqNodhXhCa2e5yqgF83NoPzeLsVLdOAMQJUcOprxT3akil9QHUyZHsOfg9pd%2FVjvx757&X-Amz-Signature=2f462c3f406975eb32356ba7caf3fed818a5a7c9149001adf66f155a1568e777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

