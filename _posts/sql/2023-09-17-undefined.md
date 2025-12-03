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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REQQKNI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEvZcUjLm1G0UY2frSpJmlbcW%2B5N1VLIDZfQzGG0gHcOAiEAmBo8dsNEcARiWvpO92FcHUDMtVSsihiIV9LoQ7xO99Qq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDDvYk0v%2BFa8B4RIvSrcAyL0Yg1ATXYqgH5ljwG841eV%2Bqz3PVIpJTXuucd%2B2Bmwv0gm%2FQgUS%2BW2N%2B9u8688FvgzaRPf26s7ZCa9vno2xrthyAVPZjX4YXJpjiQxoG7GY9291hB3csbx7%2BPVGugJcI5KkeRch1Dj5KzcuZkZTJhvA60yH%2BF59%2F%2FFUDjITtkXF%2F0sC7Tgm%2BtTUuI6Gf%2BkN162bKJsez58wJH1x2EXeUWk%2BTM12UpkR0an8ZYnanS0jufFJicnXqoCsUmFz7X%2BsGJZIHmdQT4OzB5XNpeWvq1pbuqOB9p0i4df0d0hXD00WLKnXhvkGZkdv16X7KMkdlkaKXesUyI95LNuPsJFM91L2Apa22bgnHw55efgpF5VjxGz%2BRWE7rqCLNigBXMUsqLQuaBKX%2BWlNTQuPWdooDcfNrgdQYEY8PLfeKCJ4XK%2FiiJmUmmf6bY9wM6ka5tmqgq6KBUv95xfF6qAC2HrqlFkX56Imn5mRnK73noZDW7ftCkBqIrjXc1C4FqUPoGVP4UvSAJEUV5e%2BUXKu6IlbQ46n%2Bfq0CB%2BTQWMNwO2S4QOrGPbAvE%2F5wqQenMmHCt8%2B%2FnKcFIjOk4vebHK4A2buNteDgBFr8X2%2F9ciH7LqHUFUjyxxS9IwKJWWZMpOMMeUvskGOqUBBB5Ku5FOVgwdgqJtZe05uGAJlwx05c0OvIeSdXtvu621dxXd4zFv4XyHJfEiEhtOWztgztPGgpoU%2BXtYXpNVrdQWTWnPKJS8NAC9A9IiniqyAvBf4eFF3wRG9PhddQkwfzo525rser2IfPR8g4TyA6zQPf88umerXcrWE9R3jTyaN4LL%2Bfm1mj3uFjyNKjMFagpXrhfvdTUrjmHZj2BXjYHhVME7&X-Amz-Signature=617dd9e8cdb93214497546b7e622369bcaec9d4e379d59df1eab9fdc8b752ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

