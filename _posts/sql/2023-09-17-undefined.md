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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSLZ7SFV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDj39zCuad%2BVGb1HB6nuwOoxDHNyZi0dX0wZ2XXO6dmBAIhAKqvGcNp9u1R2s4fWSu%2FrIcannY3hzBLlZYtbHQgofhKKv8DCDEQABoMNjM3NDIzMTgzODA1Igw%2F%2FiaGwbCei9gRo54q3AOylY8eOjw3IwYxQToak7bV1Dl01pw6ks%2FKoS3V3PPj8OaOxQ16RrHt3ln0h1wpxemI0vfLzsWKNs%2BO1rcOiN0rVAHOcj7e05zSPNeLI7v8YZTW4hwsfaTQJxVs6aCmFJk%2B%2F6hCCENU9G%2FER57CZGzK%2B3ucC%2F29jsQXK6iUlC4mos5KlN9q6coVjmCraBG3Vk4s4pzJWrfBFbWpXaoWndDnB%2BllwHmF7dMPqrXDchW8aZpd7L1Nx4DRZwiLnJA4sB1euMsUsBWHsUrC4%2FX0Y8Lwn5b2EUgyVUSkirhmm7g8bvOXv1zQjVBQBlHknNjIBsNj2quRlpjFQ9MyBZjVRAJFAH6KKrws%2FtFDZKz1LGalpu8qbQAhk%2F074GYGD9u83%2BXnG6sl17cJauBGcr4Z5hOh2MpjEX1rpYOSGVM6Qn4f5lnIF42BGVwz57vJ28lueYaXywzbgrTzZQUXEIyLcZZAethVgAMrIQQXsGQwXIri%2BzlpQFXkejDOWtsidCmZwZDikzhBt1wQfDwSCwGHV5Zt5%2F1akYsdhSRPUX7iPBiiiS3uIM4kldB%2BrhIDxgWz2M5LkfWl9FaK1QTvKJUp0liwFNHWXtyUVKbHaEb5gsRMom8cuq5ASnWQ7%2BP6PjDTwcHJBjqkAX%2F5rOMQIvfweaSy%2B6k6yUcoukToZE7bKi1x1DJhYCNudrHoB11D6CwV%2Bkzm9vMKh5mpdLFrC3v7OjZ9oBRY3vpi%2FpN9Gx1gQxwXz0%2B9Lf1VOwHwlHtT4AZgDe42tL%2BShZM3SboOhvbU%2FH%2Fx9qCTlf3I6K2B2r2Rmv%2BTdkKhnHg8XQMWc60obQK%2F660Va32xdMXxTi%2FOGzJIU%2FV%2BuUs%2FczLnYzmG&X-Amz-Signature=d41d5da91fe56e0cb674acc17fc5d6d2ef6e4bd9d6267ead9257b660037c2cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

