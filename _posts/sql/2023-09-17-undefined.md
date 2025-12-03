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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP2HSRPI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDMTG90reF0xNCGb9JuBNqwLm386LLflsh0%2F3WpWfMswAIhAMHYeCCLY1F6MWnJ8BAOJxs2%2BXW%2Bwq2z%2BKMrACSsLC7eKv8DCCIQABoMNjM3NDIzMTgzODA1IgzTYpMNaOj3t4uMmOYq3AMa8mK2T3butux0SOlvm6aPHHmMhSHt0TDm5qDbDvl0WKOQr2ItDOC8%2F5NjinBSjgEZ9UEi%2Brr6OXc2SCWtfkXnr48jvfeK6UbA2uyOPg4HhRRclTYpX16OBXTDY8mcm6xZxYvVu8udKPxCfYjnjycFR4zkpuGJMZDolsoVWFRXkTUAA%2F9cmneBg0iRZBisrKlU4C2c6O89e8%2FXuDrAjZankhdzTQKL8IB5ScXNu4kxlMIFmtOjcL9I0GvFWxF1scTastsVYIpWmemAQJyg8nZ%2FEw%2B0HZdsoq2H4bEJYhw84lFZLoc%2FI%2BEST%2B4xByFvpftp%2BTU6tE2uVnW1%2FdRUbhRf0rWI%2FlB5XHtpLnRF5PvgB6Q8jil1GUpE9zyx%2FsyamKxP%2FbxjIURMs72yQicrkSN9Akae976iImuhYOF9KP0OCxOZlt3uzDYlFw8y7dAvfJuisqeZuaqLMyF0R3DSfkOSKGtp%2B1EIOc2VX3zCsBXwuvuRaKk%2BIDgr1MChGy2wlggBb44Phl2GnxzbXE%2F1aeLZVo3fwMfjGlhV%2FZeqshAU1vnw1MlMKcIz5dZPlwN%2F9qkchEvY0lliT2bR212%2FaUiUAqUvS49%2BOdMSTpcoPcCSa1HONyZYpCTeuqXZPTDBlr7JBjqkAYZspzW%2BPhsucf3sWcyezXX252fWFV%2FRRfFST04ALfFyxSdKms9q4WVRsccuMRz%2BFwRlxodL6loVoaowJCxyRMrRGkC17FiuzugHfAjcoKSSmd41G30cwq80%2BipFdh5k%2B55IoMGbuWoBdT7z9X9f0O8qG%2BtOQRoT7kd8awZLFht8YOaaMbGo%2Fj6FVt6wrLbvdjtPye3Hs%2BaiWBFA2iYHBKOnvYcr&X-Amz-Signature=0ff835aad0f80c023ea3a19cbc817b2a6d554a3bf0a1a33d49acfad28cb192dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

