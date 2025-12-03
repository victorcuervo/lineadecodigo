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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZTVOCEP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIHmzQcmV6xAB57ROgya7Kcg9e2%2FWakKTG%2FtbTZUaJC6aAiEAh5z1JcA1opt3LMWPoBM8lDhNJ8wY53cbVIsqEmjPkbMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFtmgg1ntcr3cdrLoCrcA0lRVOx77M26vuG4%2Bf4lQni4DqwFzxfWc5q6nqMdkGiuHMRmt3aNePdjKew44sTez91U8RjFB26CcqtQAxzKF297bgFzcjiE%2BcIXDtFD%2BH4SMhO%2BCuIRQSsBxpen9U1vDg6u5y8c%2BR8EzwYgfaPivYbSKmpic1FMXNy5a7WJnHFHfl1sp32%2BjlA3De0R7WgRfkLGMKp34AjXD78rxCcuGuuJXLa7QwKotAuZqbRAojI6viwG69R3G4ZpXlztBb2GTbs%2FQy5oUjLjkCAhfH2XXAV6rc1uCF4%2Fz9UpLmUVEd7X5QNTmfUf%2BN11Zq6gk4e86uuWKTwkgEMvcsRCROmCYeiiOFPIXdnKBSPb5MjQ5XD%2B5WwkMqY%2FqkF0zZ%2F%2FYABQfqv4nJLCfG0KudlX7PPhRwAhAvUrkJDXaa9Kcu9VfnpI%2B3f0PxkkMjrdUNbw1rMsvplEa8DKkexIHJGWBGJrKYioCA57aXM4MGjYhkwcS04k8oFQi3XPC0Zm42h4i9iEmSrVpXN6JdJuz3KKnGWn3QtUbyjtBzuf8MflHikVZ3hKAgFXDlHGVnF2PYmOzrgxQkIgdOst%2FXsdYz7FS68emy3MCu3qjlIwVRhjTV3QF2ZpWB0gjIzetaqsEKsyMKO6v8kGOqUBGqLd1kNzx7%2F8Kb8bTGTE86lq18yndBOcl6vTBwTQ21mmfLAhENTtEqsRh09JZg6XtXTprlDRcJjNgNDQ2g7wUdLcu31AO%2F%2Fb%2BGFkDKr00YzSIB9V2G4Ma8nK7CNy2ohIhpzHLB38tb0HNcFxD%2BN1nRor%2F1JcWRWR2dKgYukCbiwVxUWKWfgqH1zu4fAnW%2FYUUCOngBOojQDy%2FZyT1N2UGHTgiZbR&X-Amz-Signature=fd19fea5029856c60b160b7ce69284d41ca1897fbabf4901dd4cc337337c00cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

