---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPKWMEVE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIC1EUANsmk7aZZbe8MZQKyl71miMacq6OwzUSaKsbqUrAiB50XiH2aYfHGNwFp6rqQNHh4u6zb8C%2FyB%2FsWd1yJGV7yr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxJoMx3TiKZwdW%2F7eKtwDqd6x9Y7o1osfdzmyPUZJDSXjFWafqfjj05njYtWFwyAtaOS%2BF2i1GIkRLjwoxCVlHOg2QV8U%2B5T98Xm106Ba41kZtpofKKiI42TBX8muxqXU9InaKeTNnB40WLQvqs%2F3Gyn3Hvt1%2FuVK2%2FPzv2lyPAntDA3DunCT3kWzUgtaaFJs2kReH7jWg57RuPFpP2vWrQJAPuu5ybbY5uCErjcYYX7kqpkaxwNEAnUDJK7wSdT0ibkevAgAqtGjpok2%2BObDNsGs5qkgZOLGtLPX56KrNZc%2Fyy%2FNz8oC%2FzSrVAyvLSpqAc%2FJQcocFJMZt3rMqXTiaaTOGNF30mgHvRkAYnOYlRm2rXhmzKJzyOZeyqaGQg87bLanE29NGqNEyGqHJ2nl7EG%2FhsFFaA2cJBfZU484RaSEmnyPpq6S9OUzkYci9qC%2BRSFyod2qettbsuuDXcitCMrxrsxIUfZe2vP2CvujDgCIkLjMo6AnW%2BNlKcg%2FnpBfgruwnHLCrmjlu38BVNLb1SoC9RtHMLxiNho6eYxkTlvJni20q6QQyObrXGpALM7vzVmVw6surlLOS%2BlZq8g4vpsgF6WKaPkuVx7v7637HZKVBOOGPIk5lvFTsvSIlG05ZpSbpdck7AlV4oYwxZDEyQY6pgG3CRxvV5Ohx9%2FwIL7NSgGCNVPc25jZcydY9GjcAgYaWz07LDz7QHVimGz%2Bm8ACHrl109Svjm21DRwWfJ1G2R9wDTxvCuowWAXClySyU1EXmggJXCyhlPr7F2sC8E9TjjNp53z8aZCXx7sz6C5pc2kzQRwEYg%2BzukklJ9VbBtzp2TO%2BnErPz0Woi0uZjdLtqYNlbTXMv4ptEB18I7TOihOGMUOB0hQz&X-Amz-Signature=4a55863806e9d17b835ed27cbb7c852a47b2732f418b0db726281b51af0bb3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

