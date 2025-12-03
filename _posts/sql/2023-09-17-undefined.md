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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GTWYF4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD107y%2BU7AGsIn55OD0w%2Fydz7DxKBLTSYClT%2FF5OWiU8QIhAOpAQS5%2BZ7EFJGZE8%2B04nR%2BGXWKE0rRXr7FSOQ2REd%2BmKv8DCCkQABoMNjM3NDIzMTgzODA1IgzaWl4vlVZLPkbpc8oq3AMvBX%2Bux6K3%2BQ0GQS2JJjH5UWxwUZYcll3mEEbYnBh%2F5YDOfsvQc1zTsjrjN7eZgHjtOIrnn8PoPmpErtYFl3HpIUyObzYepH6Tvk1QySm7U5lnEMvZxXNLVqdLFnjVIEs0ozL8xK8seBw4vXAkTUe32%2Bal%2FmNh5k0y884fpA5AP2COSNLqQurrbDzVlK1%2BFx2eYT6whL8sQhenJ87dBqDoF4WLRgum5k47fkMqj7V9oKzGHp2AGG4AD8AC2ncM9gEiMoSuF0zHsr%2FHOUZ2qqxGSBuDb0bWaO%2B73bAeAEa2y7%2BgaGMRbhYAYaK4ifeFElTXKcUyjJtFHms%2Fm20EWzN8LIxI8kAyh7HRCqjLUi%2BDV2hfrt5tlzgbtXXyoMMjjiKFJbNhcuxtvRyiq11WpgDavhi9HqjOXqHWoRncnL20EN%2FFfD%2FSRF9xYffEeEQ%2Bs5ytMdM%2FolL5IpqmACsEYBsgcOLniUZwU76%2F27vDThzcx2eGaiWXn%2BILxxuCbgE4VHzEQ0u3sgJUi86Me0Y9S%2BHeDi6yJWvWHHey32DIRSntAXHWGgR35dcVbFEOM7lCoueJeemrDJev%2BkA%2FjcHYl0Mpv8lt88tbs2Bhq7Qv9zUrj6hjVQj95MFWIuti0TDv1b%2FJBjqkAYr51I8Y59krswVoELBD%2FiHcR%2BQNDFGIE77yhUFE97%2Foht0444Mt9KXncL0B0HV9JSWOy6NJPLbGZuU%2B1exfRc10Gyn%2BsYddKc%2FA777L1wqAcgdfEDF75aSW%2BO1gEbVsUAkQl20qh%2FoqtgCubbtaa8M4gZu%2FOk88jaqbnvO1lJQ0o5WiTpaB2JoB7tOb9Cs8i04mBm0sMv%2FKCEYZsnxCteYb2yH7&X-Amz-Signature=39e21ac8edce6d5ee9583c99a4db3205ada69af1e7c7ad2e59c58fc7e0a9d0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

