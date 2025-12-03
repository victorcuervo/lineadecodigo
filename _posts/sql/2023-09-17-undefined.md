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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S3HPSFU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAKHXby%2F85ggaNKYMwSoBoyrgeF44GJwxb0mL8X4%2BJoaAiAaM4LF2WDDx9Kpex0a3WZ4n6YlxoWPLT4FKmm3eayMsir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMEkjsrilLqNh4%2FSZ%2BKtwDURWOh4VUzV5673mgKLiqNbDxskDfuEojyf4MFQpwT0lfMAuadxOfHk3MdyLFV4URPKtSgDrt7eZkKzmcKYvBtdqcEvHf5PBgMmQSRFL4FlQRWxXeB60QzN5AmabLoFIObSn4NdXCY80hh9mWm3eGHp3z5svMEGcwhz1PICw8Hw37%2FAApbWLRLSw2yinQMS2T9MoubAmrD2zr9RMGRa7kTYXijEEoyRCO8kTncXIYPE6VC8LyDIcrfjf54nCufb16WEf5yJmS24U%2Fkj3VZIE8N9g7zRaRgGWglWl3UdnH0ybrE3KtgCirKob8S8hDOw4qwiskihG1rf%2FOkujduXPyhC1WvqHYrKyqRtbJj3lStlaeG9yZpGtvWEVeXo2XPFoMrycfMNYHm3TogsvU9jYJrCqoDeeBzkrLQU6ztLyz%2Fe%2FxDnSYK6WpitA7ywbjFrrs8B44pxWE%2FRoNQu%2B8db6kb7ixzwbR938ePlv7d%2BG2Fg61ma1jKUfx00SkJbfbh9waz%2F0%2Fol0zR3SNw82vk8Kk5gOEHuTyj5WY19MpE6wEb9VMOGFkLReOCHwjodphSimNQyvfyqkmvSf1WVXuPthtZR7QXfs7acTReaQ235rxT74aWtVBHpUAYV5VbW4wzJS%2ByQY6pgEtKkV14ebP9%2FqBGWKo4ybA4VWRbE57fFqZ5HxjnUVsdSA6D59IIHb%2BmZlJiPnC%2FIN7T1GbY4eW1CFgwYFC36qVUqcco2%2B95xQU931nYgdZiMWnk0DAD3XKSNR86eyllZB91Kes6tqUmHCmCeMhtPD8qRO9CetjSJITE0IsSiL8S%2BXzvmo0LAH7MfSr1V4Q%2FkryIcFKmkAcOfz%2FzeoHVPDPN9kXF7vn&X-Amz-Signature=300ef2785485fa69cb3b8005542eb939770c592d7245b97cdc72fe457b44c447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

