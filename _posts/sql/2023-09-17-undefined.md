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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VEB3KWE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD8PRAABuFRbHOmoweNJl%2Byxg5pduEDRQsZRPxNApCRTgIhAJHN3rtYzxNPZDpotugK%2BlC6Yaz8SdPqnOXMvWhmSvUQKv8DCCIQABoMNjM3NDIzMTgzODA1IgxiAFK7aPfVksf%2BhLkq3APFA4fodfp6RBL9eW8eVQGFSlYOUO%2BEXhrk5w21NH0Fo2BD%2FUZHuZqwc%2FrHrevyuD%2BpjfehImJBL71BbdgReUcTUJC%2FQ3kLZ1zIun0bNnkXVYadDsPpPAy%2BZUWbUUt%2BT8Cw%2FTRBeh8TMfGDpG7gBxZ6O1CUL92tjVbmEqhiVSClClSfD2%2B1xuWTm4Zk%2BaTw%2FqYYWNYw0MTGgNbBr3%2F8ZmQmU%2Bb1N4SN4jc2TW4BG1tDBJUDgmyT89nWFCkgflKD0lOsTOZHaj9wH5fx9r00Z0r6B8Xgl28vFCqUUv1IMYqEKU2ydyJCO5SsRJ6XUC%2B%2BrYMiVmg24HlV1H1zopN3uVQF4zn9Vq6rQq9%2BAMDxg1htmvfOn3%2F1jpH%2FZTzc7VSUpahm2lkAo6z4tmHDeJurC8LdJPhnjGHfaZfdDNNC%2FlpLHOf0lZBwcMMOf9UIvG8%2FxJlwGQZDPlpO4IgOe4Ex5t8nGwlYqsQuEpxb5W7ppoK23PlfO4RoXEcaJbIPcbxL7Jh%2Ff5J6JKkXP3aD0%2FLLTCDt2vx1iJGoddh8ZUJnT5xK0TaxUMe5Wf5bVaaQj2cjZ40advjkICUvUavYL4Q7jQU4GUpaI0kZIBItKEbGUnaixTxCDucCBh0HS6%2FZKzDYlr7JBjqkARQYoLpEKAfK%2F1O%2FV0aJmIdIHP5o7yjQ7tl7notf0JS4NxOrT2c2h8TUgyTWN6P8fi7yr6htcDfvr69qf02E5MSZy3KJHQoqzr82%2FfjvmHmn%2FUhZBntTgnypLdAFeXiMzvmBzbYTHARIs8hJy7G5pDQNA122mmLCA9a5E%2BwJ3jLtRUo0WcSjT751BI6h8RCUKhYnRxIBMdl5BdlCssLA8dW%2Frox4&X-Amz-Signature=7c20a3eabf9ce178f8d583c89777da333d9b68d052beed59f22eb2b58638a2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

