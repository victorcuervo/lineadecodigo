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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVNR5PJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAFXtDhwHJYwMK3IoEJ0QyIduUcfOvdKh9af98QCe%2B2uAiEAxYh7%2FmSxJeW5DXm3E4ptNzTxAlfWQ9cM4k7kXso62V4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLatHxzM%2BpHZJ%2FRYySrcA%2F7UbmHlNHKNa1j1PHCu579PVHrHSvkvEWq3vpFZpPm4qJCwanM7XsoARORBho1GWqQZiwoxvXL%2FWrcb9eQEWxsB704%2B%2FheUwrgzrA20nRy7uYkkn6G%2Fqb9d%2BzITbHdeRLICSLrRaA00tMYubYOSc4BUy7PaPnGL1oOJlX3VLDB3HU2EtXm5cCFpaz7E2JzmV9uJHo1%2FrSxwERWRa2GIou8Y0xOlFwlKpcLTe2Fy5GlcnmmUOpQFTNbSnG9Igt6O1KW%2FhnymiabVcZXyHDmA4pJUwtOnpzoEJp4wwIlov4xetbTqxTMmYabN7OaYK33zNXNkspxc1emA8aASQJCDI8C7s9cyzp8CMdt1de%2BdglARwJUt45Ed2ddfNYx3mU2qLMXgXsHplcPqJZxBs1RZ4LS2A4M9bcNepu4uCWmqvvit6UFMc%2FE1OxMEytmyeGKJdbRzozU9DK14zNW7Y2oQv4xKdgN3jqnhE3ZCaiti87GRgFCXRohkpSKqUy0avqyKBXIjFVKJpyXRt4VORAGwdytMpqgO7dg4%2Fbl3ZOpRQy7mc0V6YvSJDLbEOsOD2xC0CY38fnsI3Fbhjrmv4yNhOTg6yZNsq10TRey6dgalmLxifkqAt5Hr4zcJIF9nMNiTwMkGOqUB8l9N4WVR1BDIOE09oLZTc3BIyE%2BNlJLHaOzM23WKd%2Fnh8VN2Hdzigwgz8CiV6ao2yo8ux21T%2B7PrAcn2D4G%2FdmkUZTeD4%2FqkbZscItOtpU1ra88Q08oenZDqegHsGyqKoEe67nnGmz2l6YRyitqpnImQVTTkt6Tw0VCL8tOeQv7bjlgvbEIfvRt5h%2FGZyD3tYYThCma0Rrxe8IdOSEzrAlnFXxOB&X-Amz-Signature=53051cf8bf3398dd5995241ab17741182abd435225fb7248a53c72314ccdd8d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

