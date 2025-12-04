---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGM7JFTG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICm1q0dWJh%2ByFFywmN79asR0JuPCUlW%2B6D4KSuL0kUU4AiEAlMJztBWZXQHhjil0F5hDn31OLZChceQ5DAOwyL7S3gUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKXr71rx5siwO9MP4CrcA0ihY8%2Fb2qDNyW1OAwBk3nh6Nb%2FE6kCe%2Bv5CpVOiuCj8u%2BphFVggaAOm7I8QAvpbMueKpJMuC5vZ3lGt0a1Rl2RtaP1cL45Tm%2B4%2FcPGCurEHi6dH3RmpfCdpl%2BlUXTZEaPXQCMlbKsuy91IM%2FWyE3d7l18rpMA5jhjVssGrdmCW%2BbGgLHZ6Xjpj183JFHnM95VXmxGCEpRD0wNNtIRT%2BkfrMPSRsVKUvIUk9xXlKY361lFdhjBIg0qmATkAn9iDzVvfuy3kJ9DlohWgQrPwazzACQLKnaaoXo0ItZrXMrk8x1wLjMvqWHFNPw8wjGQaAGvhb5XFq8vEVqckoVIomFZ5n0nUpJ%2BqHrrGFJrm2hYu7hS4nfNKCWxhJWYlvY6sITlKfeQkJGMO9WAcWeCywBC%2FG5EAYFVFeTqJ6PChOU2I4QoT1MyCj9GKzdEJ%2FZ4PsmfUwr%2F40Le1vnCHNBjMEvSMunez612czzATdZ%2B7fvOH1b%2FbDA8niEMzkI7lyRyFVVeywtaI86pHx%2FZ9hYtDtF058ELG%2FCRQAOxHgVgzGdmGh5fmv37hw49Fl9oeB7fMCckn8Ok5kPOXMP4F%2F5aojBWsifUsyzzSraK13WPEc8m4sETkIx5BQ94h8MMleMMiQxMkGOqUB0MvGLWnCxUP8Lelo0RrHka%2Bbc7juIqaaXmdxj7H2oznHaJ7cRzo9B9jPxgaTA0VEbCUFYbG7ePjhka7q7pk5RjjhWJ7GVFXCpfSGYqHUC5%2Bu3m5xgwkBFtlYfqCx7DcgpjcyHn%2F6Jjczpu5Rq1rQZu0G3YpcOj4D4m%2BP2hNqElwj4oipIQKur80iA2qar1FzLPBt4Uw1YvL%2F4eMTI%2FABpv7oLwBF&X-Amz-Signature=a31b194bcf2a15f6b3faeb44fa4bbb25c754a65219eebc3979f847271e7213cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

