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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YJGX45%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIA4YOfA%2BMCPf3TZIwoCWlccYdYMG2zI1E3ox2h7RkTRiAiEAjuwxMrIk%2FYiHhKAJh55t8e6I9nZ%2F4mPvx9S%2FYEuMVrMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJWyx%2BL87kBb5VY1byrcA7TxME9WsVB%2B34ctXi5E9ZVkhJi7qe896RDXfp0af9KNCbw0EEiU0SSsFcNwRrfjO7YSTaOLbxw9cOSUCjVuufeJ0eSMQ9sKfU%2BiVcyXPulY3iFNPEKUX2ML4dXVLrXaDmHSU8vE25C%2FDL8E4ueZb7CpA75Jag8fXEt5qczbaTiVflkDhDOAZjbG%2BNFRP4qzInO%2FhgLyiesBt5NfIhlReatOgIxDVNJVid%2BAsby7SiFKG5Ulajz9MR2k5FC9EfG6KWgGGqu9rPx1FWjkAoRcKbpfUkC8L5KjQsMNa%2Byszj4BsGSDrq1edZMt3TlPPfqN0up96DOstXZyiG0kxIXVj2L%2BUgixmfN5ehQSF%2BFNmX7t2oP7ZibFI86JhAFts3DR1pXjtCXR49j03VX0MqvdEyk%2Fj00i1f0gDyqDulFzv11cm5dTD7sCRvtzOP8XQKoWtOlpZw5%2BymPlj3s0WstOikFZMGs91AAZEaSUMLJQDzqgYjLXQoKo2yKS0w2%2BAmTGpfF%2BbphW5cQUYgPg4xy0I%2B%2BdjcG6sGxB5SbOmUuZnhFymIusjBpelpoTr69pkSg9B%2Br6jtn3wu83ALTic55HxJNEf8ati1%2FIbreL3KvicT3IuZNnJZzq6GTQNA1SMNyUvskGOqUB8MO%2FeZlNu2WxzalNa4acjERCPwGjc7DPwG9XDl%2B6FXpMq8Cr%2BQbhvDrgq2GLhnAnipqhLzg7647plR5GnK0yngGl2af%2FI5GKwsIlWXTSXabhRjnUGTcBkekG3IA6T7AECCzDz8LivtSbfKv65fIZ7owpycmIYzQy%2B13zwHqwLi88e37Fuye3oFMXmXw%2FPSsBXdkZQABhTENu2p9K11g3yNvOvqnb&X-Amz-Signature=f9270e210d48ae6c592006191804b0b7b32d99527f4d58237a30e0288dc4ea7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

