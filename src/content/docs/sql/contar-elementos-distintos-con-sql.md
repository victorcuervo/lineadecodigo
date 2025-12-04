---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWJR573%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDKWmQP9FyqZVT24tBqOUdyElofOkpFF2RbDvEdAbyDAQIgRlgi3Ih2I4GVIcMsxdrTUrun7eyKe5OAHNLfSLvav7sq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFXCDs%2F3elII6Fuk%2ByrcA8VxRYPpQu%2FR3JClhm9U0ng5cqlV6x2jyzjNSs3oaJdHeVJLz3vMBInsKkfo%2B4Aa9ZQlJVkuOJODuhkbkbW2NqYtpTedpauF%2B9M0YetyEygC%2BMgbop2d%2BcahqXj2lHcipTBIA%2FBHuchlwMb0TXzV8Vyn6XALFNke3HcAtIMplJYFIrODBy8t%2F%2BaLOKOm%2B%2FfEHvhjd45Hs5XeW8DyStbxvsIRkwwQppt6na8an4Dlk2VPxBOzkdavmKbzPB%2BpWDHMxlBoeeK2J5l0FW7AhYVUD2jOhp9KOL1dNXTM0KO0PQMNwxxmUUBsxT48XQlio74TwMcuXHxhdrslbzkHKjtIv7Dq%2BxgaCS61x7XQfEOv4glRf6TqoNskITtg0mvHEk6DUZDklJ1rnJPldxAtvjMllx7SO%2FZUriM5sbSwDl2DzF8jcOpXpqeIrGc%2FS7c%2B5KVu4Pue9AeZ0KRlR1M%2FCNlhPxir3dC%2BXjw8Kf0a05JJ2Q4r9hklxV5sXRMhrOem83rWXfaloiyvXawToiUU%2F1RcMvdRnGi875fzD3YB8gUuoTVcjtrmEBLwzbOcEC2tzHmxwZ6i4EPzGhqr5EPJnYedS7NTXuqSgkQlcTAsU7cU2%2BQ2rj5bnhn6pYlEAoClMP3JxckGOqUBJmmTfm75TGTw4yCMd4bSDvTyqnhGU00mkaRHz%2FUheIZhIuJEUqvEZKdDhjqoIncB4wTl9brTcMXa0MiCQD32468v9wzJIMF1e4cIlXUVlg7OXu3Xt8iX8y7ZhSZjTuIuyS9%2BjtpUZRwq1S3ViLmJGlm4ItkmOyG79%2B9oAR2OjsJtzODLQKLQ%2FhQYynO3dNjvy2GiId4Cy2r4BLMoDtlu4%2FLFBiHf&X-Amz-Signature=11a8c7a0ca8337c1775f15071af38700b4691654dcf8ce271cc9aded99db3ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

