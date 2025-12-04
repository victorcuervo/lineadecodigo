---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674TD3OIX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC0O9b8HOKhxvFFDkS69Rw3QiwA8GrzhjjV8FHDRy8uFwIhAKLfc25UuVPZA2pjjlsKssXKBY9Mjs7KK%2F9doHlZdBAsKv8DCEEQABoMNjM3NDIzMTgzODA1IgzfpeSLOeSFkavNiyMq3APHsbMTZAxsJei4uv35Scl6tZzf4an0%2BgZXq3fInFjFycCMWNUa8k0ZSsM%2BM8FWcaqy1qivMvSRKjS5O9Sw5%2B7rjYRpe1SAcio3pB8t2nVznQRRzzrMDA%2FwrzDhl%2F%2BbWtsRXImKjr8lKy0dZlZmCQu7U3DiDE0phBpbnY8ukerVtHN4SKKq9dri7lx059f0cxwz5B3BlBKxIjPww5c4ZW3F9q8LMxhPKeG3t4KIkxLIgrKTAEuv8W31tSC0DdCWsDY4EDRezFmDcX2CwrKsf1GMlNajfNXmezQCcr86GCbuiPNqiGczPtu9PGORz3G%2Brtx3YuW6pFQHkx2Zysj4v5TKnjdqym30P%2BCCgQxCyWUL4PU2fx9q1xUv%2BZ8b6olZzZex4hftChUiYKSjlG8IHeYvfKQnSI8JBQqC%2BENb2kKSDXhJShs66%2B0y50jnjh059d32G4oT4mCZaBatTMCY41ptFJzWXjPpxlAe%2FOQcv1XGx5ca5eiMvlNCktLFR4YJpQo7qWx6gu3n9I8eFJTmS3CzBu0hX4af2F%2FmZ6zQvBB3TR5kkHfwTwNpMZCVvGXLz04LBP1TrGQHCmncRr7%2FGFLiCZkVJ376A%2F6WLbAkKn4hI7w1saztgfYhc4dfkzCShsXJBjqkAevie2Jtlo9fa0dRDAAkk%2ByNzSuDY59%2FEaxJ%2FT8YR4g7%2F5l0lypPqJ2hX7hXUaGj0m01GtDPgJKTKv70ptKMtOiVDIXTJqoYr9gGOFfnQ1855hI8cyxoXxely8v%2BE5WaycsrEWtgvxWjuSw0QyNSiDq%2Brwjj4wIz2G5eHD875m6PxaAEtAvSYOFOIA2FAMDYegL7lhv11VObew0IvUrv4VvpoEyh&X-Amz-Signature=f6d859fbd00355e5937fe5833e293a4eee4af574579f4c5f162cc3223394fb7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

