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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466254SEPUT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCRg7mJOj5m5jZ%2BN0ZQO8KHJDW2yP3DeDEGY5v46FLQzwIgJuEWIqRTykxcN99EuIoHkAh0mf7l1%2FKiPYhnv25PEm8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKXbvRY8mua4aQhM1yrcA79M6RmknXcLDU%2BE286qiN4JkdC%2FpQwLVC8LpCBa3i7RpTyjtAbHAmksywCGyXu6Yf7jB5cEtDO1QlX6hhsZQ98pyoaIwbT7q7ZhUdyHWDabUG0KxeHJMWEDM5X%2BpIFVrPmKRthL4RcmZ8%2BkC4KSCnVkQCKpwcHtCD4DFb4Wifj0NaN9jLYu6wC5iQlGxT3xA02LmtZ%2BacanmEDK2klAt%2FIy6R5uYdIY9kt1yprLiz6dajRwbun9Jz3pj7wtmUxDPQbBIvvkOPIBjeVB6lRiMedZIPCFuSx2%2B9NMZkHaQcFtTOfVnJancrW1dq%2FlZhAqLaqaVjIsqJWi%2BD%2F7ULT3j2R%2FHTBsWgOopTWc76qPfYsM4kbxC7xgRT1M58TOv0cVo7Woc4t6e%2BUYn6muNNJ6V9bqtuwyYS91rdIpk8XD4qOpVf%2Bl6A8G0Le93oXUDbSHCxwZZeYIj0SNsbMTlclJ3KtiB%2Br9ubMrYpCcKWGER%2FcuhLVuq7Dfo%2BLQxXN3rnl%2BEp4vmy%2FxuVnQ0yLLedBihgGVx6c7iaHWDfGZTmk9PD7kiHuuiO9ASsJXI1wpNpLCBHYtbTL8tPR8xyctt6M8hcMMBUMCwvIvyImBQqq4Dw9LGHGgx8RBA%2FymEmAiMLaUvskGOqUB3oZXnre4386UwtCW%2FicqoBlZSGNtEeqSFXtEgfwHjD%2F80JYx5qVixjh1q973oVLfmNJYsmmao5mCSXZJL%2F7hDmzI2MeVbY3%2FJG1nrWKo0I3KoQ1728c%2F1v4moUjmcX%2F0I6SbiqDIjMJiZgCHM4qG8M2Gxn5d%2B%2FLbjb7stl8rcxvuZsZmi8hKT47MRYT8bJpRPJMGoG0iANpaJ%2FAGeV1oPRZTTIc9&X-Amz-Signature=1e8a3bb5b6cb0b623d17f6ee168571f0f073424efcd4ecfd0b8c3e3c7151a354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

