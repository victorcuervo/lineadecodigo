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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUQNJEHN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDe0p9amUL6At8mnA%2FaCMQYkb45nEgKDntOwkfjF89XngIhAKKhX7eaOjb68UmMc5%2FBMP3Uyy9edGxBnMUbuhlAns8fKv8DCCsQABoMNjM3NDIzMTgzODA1IgwV0%2BKJBAzlf9%2Fp1U8q3APz4ZxqORmXUmdRhrr2ZLuHoG%2FQ2J3%2Fo3nT7Bh6C16oKnwZI2%2BdseGAow2CjgaiIl2YoYYQbecrMYiXd03TbJu2Esq5ngegFG128DKFnxAMPG7yOI%2FoMU3llZnWZ9gZaqade3Gzn7XwKUuAYccd7ABSz1p3%2FFdZQuU5d%2BuVzKS9YCMrxpSlgp7utUGn6jbvr95Q%2F30JwvSBTu6krz1TI2iwk8AHFJUFU57KnAue7oxHNg6VMs7NlE2WHnlz5oYkQQcU32qds%2B12uZRFxYAkElMLZtBP3b0AN7fLa0kZqZd2kv7rvkDOpdCLNgDNFz%2BP2izczg9BjgZglErzI3FpeG545ry9lDRAlvXuns60K2fpVedYKBCctpEEDOUVWLZg3wILA%2BhQ19bSnsMW7il%2FRA2zlLirWxQ1bMznQP%2B4%2FpvMCjfiqIDaUMHQr1i%2B0wxQ2Hnsj3Kvy59paEiEyHLK1wq2GFBMS0oHRb%2B3ILJb9ThK3V9%2Fts5CLHL7S21ukc4M25eafo9OkHNhMnQeocTDRE1418yRPWMcP4h1CwZH8IlFmJibDik7APzDO%2BKQDLfXRDOcjojqxMgWH%2BmkofNUUcp2Yr%2FgXMKsV%2BQ2y6qvGoReuazqgkOIr4REOKFJjTDsksDJBjqkAe0LSgaDX1qm0Ilee9zROybeM5s9toQyMaGB0csrmdGkB%2B7NfU3Eav0v6vVO4%2Fn3Gj5BWEGzbgryxl%2F40vgzKo2wq3fkmFCHAGzTi5OB4wUPtdyuovUqaz26%2BSbmnBYuA1GdTeyS4v%2BTG20%2BfqSi0oPFtaZcwPV5kI%2FDwMnkPOVF%2FDR1IroJDIVFHur%2BdFvVjRJw%2BVvr%2Fbjg7tTMqmHy0fmzh6rn&X-Amz-Signature=955242b3fb8cb79103b78935503bc527ba51d6b6b3e6eadd91651435d03642ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

