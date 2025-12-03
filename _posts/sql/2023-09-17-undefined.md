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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5ISLRY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC70IA0QSaa%2Fa4LE0ZyfrZOxGrHV0PBcX%2BBDNSvhVUCawIhAOOUusDrLfUrxY7VafRdi4QS5xWWyL3rLAR%2FJ8oB4P2HKv8DCC0QABoMNjM3NDIzMTgzODA1IgzS3R23GnK%2FfY7IgaEq3AMvHkXI4goRENm3UClppAQeUEWu83SRfiHZ6yaD2ZiwaGj6TJzqjgiNmYi9rjWeiBZ3ldoHDmvTWKK1qo4SpIJRD9Xjg8F69bVmD7YMlxBC1QQIGJMyuPTI5R1fKYFaywqLe4j%2BDOwpkEfHfApTTA0FtAGc2yHdtcdeeNVmQ%2F7nXTDl4p9pxrXRXm3l%2FdBoulQqPLVNy3vwvRcHPD6wHj%2BYGIcWI%2FgsfTwxeqroMXC19aV7Zgf0LN44LAoSms9OW6MNtRfCyHg1Sxg%2BeMoYJ3OgSmpJsSMIeBJj7G8ODYMWtGInQwTFIMkWke%2Fkjz36lu81kA33rNdn1FypjAPqzJh1I8mPOfDf9MdljiBav3jzhEkJKX%2BFiKRaORgP3Jw%2BIrI0G0V10RTr44CSTYGYNFEwdRezb6mwJ%2BHjsMoj6M4dESczB10iiBc%2BRcJfH8oHTJXgRjYrmxj5n%2B7Jcnm4NvQsqFXs0Fyt%2B6vjXUhU7a0Qo4PtAy7zW5APXfWj%2FOEHxlu%2Fd34q6Gzoc%2Bb4oUojeKU2e8jG7K6zi%2Ff3nC2f2U%2FyGK1qrqe8xVIJZRXL0gTG7I3h9Qbi%2Bb%2FnVgWU35dH1SuD5WnvdIGmbb7hW0bfVaijf5pliGqMf2cMhOdHzDCuzcDJBjqkAfEQTApHCV0GRv3Omvr%2FE6U0Oe%2B0dNjDbm7DMpga5zd1CfnMzg0PvaiqSsyCUqsm8%2Fpgar%2BS4xDT35UUst%2FDtq6wfUJrWnPB6BoZahHFUx2rSCHxkQ4cIRdTiCxTPRndjI%2FyjlXeRTcyxUQFymE9CWbeqQqzf2yOoXYlM2mIhNAm1TT8YtF6iWuRCYB2vx%2BXF%2FR5VoTXKwQcnscsdIPiCJJj5m4W&X-Amz-Signature=e20263f5d0c814e7dd3d0c84660e288e6ca203638891bbf5dab1e3dfee50a44b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

