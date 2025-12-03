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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SKXGOQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDeg%2F0GwkAWA4nLiF7T1UtOQaU3bNQExaLgN%2BIQJ5DKQQIhAL%2B45Iej5W5ISxSCLyO54vkl5h6ga9tyYVwbnz5LK9OPKv8DCCkQABoMNjM3NDIzMTgzODA1Igz8lYVHDsoBCfjEa3gq3AOBl4EzflPHrSniQMxcrBl6wHviRS03W6npdoNw0jXigHc5IqLRZ%2Br2hOuGSn77LQEL1cWXboC3XJv2eiAxaoUcQB02kuAHxYEWTS%2BbPT7iNh85NJkHhzpLco8Tz8yncEZsaYh%2B8kvK46TylJFPZMtRlh80ALCT0TK%2FTenA7fqeGDxE3HR2jjRyAeK5QAR%2Btp7vzRVZR7mVfvKJrSYWlb0xWlAdvsWEywA4%2BEw6bs3POke9MIMIfF%2FVnt%2FgWg5JCsyPJ8wMfmgK7dc4chtkyhMHA2ce3d5qBQyupW0XYXFgBZvqG6ibZVC5oitMj9Q1AexOD4YuSE8D%2BxMZAVYdlQoT80ofuVuFZo0DDu1Eka9QVXI0%2Fl%2BpHFMPzI4KiIwSUcvIVA%2B49vGVaJ8eCUB0iS%2B59wz483ZshB1fhubwyvVauWKuRYiJjFQZqWgbtx1l3ArlYDL0Lavb7mhAsPzj%2B2GVZADYXwMdASeHT0FT3l3AuV0pbxOA%2B2WgiA3cWe%2FZGSE%2FRaFr70GDm8mqS925MAphwpMZ06bZPPJxAGj2QDr2yMbYZTP33ohtagph9KKWq6IZTILvFAkk%2BbCAJbEZCScMO47O8u7gqfThFsgAw5djUx7zet8rnMh0dWjK4TDM1b%2FJBjqkATLg6t94EUmV5wnBS3BTV3yXYsvWq5Jc13oXENAbP1MwhKOLzVqZIpXUlrA5F7Q7yujh8u2nABaqBijl7P6SPT8c16lwtcxyBzfUpYGvppTosFQ46UM2wnWI853pyztIajB1hvFfqfXltUen6QBLnMw8hKJ6FjqyW8lmyzgsU2MqtVA5EbvEJmEuAKYwMEnfC5jvtaP46KYqN4UEAC6QdUECqI9%2F&X-Amz-Signature=cf9f22715e1cd022e19e46efd1e41261559b830043c07788a02da38865205c05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

