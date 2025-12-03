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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YXQD53E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAF35S6KwsrBYpmocu6efqVXgNGUFI%2BkyHz574%2BdU5N8AiBNA2GF3RPbxG0F7fYDTxtfriExJ0T0P6qDc8UpMz%2F1Vir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMGG4IhWAcxH3UZUChKtwDZY%2FhXvfke5piXoadMwiWSVW4D3c2xrZTQ3vwHg306H9Dpydoudg9QT3Z6xhTk4eEgxyPhXr3rti7LF4llLdLKY0Ix5LqHJUJvUNv8OLy7MRO4Bb0U3Oj9o8tCRapdbs6OHd%2FACH980MnoVt8ssGSGWoS0DauQAZnkSVmvXVUYatUgC7o1ZpPURbQgTOk708tK4qJSc%2BaRXO0FcmdHPNl8us1FJCIVcy4P61AKpPl9YVq2qUN9On4rNUFeGunIi2WqUVq82FyJrGWOZMVJ9BF86%2BbXZhfLbx%2FJfV4c4oS%2B1J5gFxBpkm5S%2FEQB8Y%2Faw%2BBO0jMZqyEghiIv8PXlPSj03mEQz94xAWBeWCNw%2FYs2F9Wp504NcaqpgiU5XCMrOKDUHVD5I98IhwWhl44SR7tBxCJ0SKCqIpCOr5oCBvF3r0AWSQg0cIRtbI496%2BVT7tVGKf7%2FMntS5PdEc487qiKzn28uiu3VCv9ikdrcI7EKktSBXO7%2FHTq8ixkmWH32sbdlce10Wq%2BZBohOfTO600OYYig7r%2Bqo%2F0wbmU9YSLidyEtZxh5ozv2cBgA4jrCl%2BjzUiPA98NT09QpXyOjv5hKpQAxiLTo9i2Ltpnc7CYPtmsgpA9r2piM30SanYYwwZa%2ByQY6pgEUUF%2BA2T77vB%2FBN7bA9gAhmKD9aFlb%2Fq6oSrkVXPGF991uA4vLmK%2BnhHecyF0o9ox33bZoY1ekByz67TK7ZxCAWdDWnqSXkqHyF%2FMWmL0yC7cymPYJlasmdcm%2Bf8QdFepS%2FN0trhETvCCe9MY0I%2F0Bfb1BmcF5vNWchNfIQ90kKbp%2FCkPSz2GXy3XnFQhgCATH2eJUVWBCH98B%2FJFwRocqk0wbgSzm&X-Amz-Signature=0530bcdbe4a6485273aa8b2ea7678b8a8afa0b6d46ff92e8c2ea8fd1de7c10dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

