---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXP33A2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICa%2BIl6E0SxsTRjVhzgkzgtrnudn5GePjjFPl8STCXS4AiEAl8M9pTo%2FtndEgFgae17dWGy7Q3ObEEvgbgzgfycA3E4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJ9I7rtmJbrHxJoNISrcA1d09YVZ1bIDbr8y%2FiUWNgetVM14vvQBlyuCyGE%2BmHI9mAXpElV3SWUM%2BlQkYpL0Q1%2BwwyiHI4u2Md4i6%2FNAC2IcwB1mbh0R5H6isq9oV78K8KmGA9LFkCKrg8c7TKMuptfGBbSQU4YwcPvitE023s44K9THGSre7yQLvPx3rier1kruQK9KowL8xt1rvTVSeRCeTKQnWWpITAcrn2q8ImyJdO%2FM1YOp%2Bw0JY1BcO6zgnxVc2PHjfQU0%2BlxyPOmsa8T6SZoF2suJvZ9WVP8ak7zEncyql8bbvzZjSODFLm2v7DTXd3mqBuSuHelAX54BiSXbgH73AHlp49te3IKdDaODE%2BQEAbzlW5yZ34WNE4t8TWybQRaDKArOUyg6ueAuMgZUTvi6dHjTqXo5%2BsmNcyDx8wCh0qA4WV4Mtbd3BD%2F32IoJVx%2FfOJIymwx0YlZccU8YcIkCD51Ooy1aq0Rf1XBPyDb0peGbJpjSkMlc5EsnnrJ2Jd35%2BcMKuGTIOxz%2BSCpLuWAAYyeBbJmmRX%2FXb3fDNk%2BTzSZneTLoXFGm7vZpvjjIx%2FZw%2Fvy%2BkbLnBC4rx3svpRdCCh3gc8YrDcTmvb0Ays1NXGiEorl9Cd9hBsONbqolUTjISrywmSEnMM7oxMkGOqUB1gI5wB%2BEvZFwe668ZVxyjhUuPDJvaoBOtloWpwlL8Q2T2c9A7ki7DzBaMW8WN%2B5pUklwsQHtLzGqt9xz8TVnsPgSiaOcbGKEPt%2B%2BqYRMPidN27CKEP%2BLQraN7Wv%2FOm2NBepxoQhYQuGR3rQAY%2BBLhtBjcOjPjAU5aJdEIl4ekCcdHsJ%2FWnkLRCVJHe3DDRVq6Z1pFBRAQYriOAEpAiMpSTA1N7pI&X-Amz-Signature=0bee25f8d08669decb7aaf9222d68f0a5c3d779855e117df576a751c712be7d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

