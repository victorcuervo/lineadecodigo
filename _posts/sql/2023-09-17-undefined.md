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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M2LQTZI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDiis%2B38eLLflv%2BvFP46XGSvcQS2wgKw88%2BXUfzyrYi3wIgLeRH%2FOQWbbxMUYvJ1OZsA9Dh1uRAGz9HNiCF%2FpwopSQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJBrG%2BHuvLCL7zt6YircA0XxFxQARPPZooLu%2F2PJJS2M4anl06h%2FouLgcKTRF5R9NW31rehzjN7ahWKL94UJTguYfJZNCjXE7YO5NW7T7R2%2F8krB9wKWqrH5OV7JaQwdqBOM4jeACgsZISjyQvu0%2BnUjsTPZ1Ftve8UkxcTAWRsRq5UIXdS%2F73JtxY6fRbsC%2BLhq3WqRCt6DqI9Tfclu7CCy%2FRWKEvWSE8VA2exojl1%2BR3QZ1ugQ7FOQjpx800v1SbiqH3JCtskD3QzoGH4nU0ibifs0R12S6Pzb03Zy2Ajy7IjyS6ztlNJTm%2FSYtmLAlZoGY58OfzKHsXSynKtU1m8%2BqPIlukzb9z%2Fq%2FSr%2BsS%2B4PdoD%2Fbh3uWdFfoUl3kkt2KIc16PKnJQjBeEWWaLl9igQSZtfwMIf930rYCSXpa9RgtpGQMSS5JWobdynFIb8OOLdQEciLXhKIfe8L7XBGeUR0V97HNWiNkN2Zv4BCTvCMOv8WYAaYxjHqdrZXGt%2Bfg4Tsr2VF218d86pi7LG3bXSwkvvmH7mig8Em%2BUjO9mSWBUhL3H5sIMZu4bPNqaVBx316CvGvJo%2B3y6vtu%2B7z5YJgbJVJ8KiqBQSh5VN71cOuELKudG7JTAKaDAU31ldgl1s95ZsEF82B1tzMJqHwckGOqUBtqBUU35n1sNDRqCsMJrb%2BJ8OF9NO47dvfuCF7quMi3zt0w1KJ68BLMiur7WClPxferGfviV9tKRgIfILb6WxBPE7ubpfp0Hl01s6o1tU9%2FL9e5TgY8lpnKC5aMY5EdqKx34ew9gJgZyX%2B1Qzr8qpYpsx4AcGbe4Zp6%2BAMV7Pdi6RMxmPD3NtBDWHQzMpHpORrfJ7dfcX74ARGt4dqt0xFcft4WpZ&X-Amz-Signature=b036c947f1432399ba60d4b9101675c6718bd331d208e14ade2819cc25cf9dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

