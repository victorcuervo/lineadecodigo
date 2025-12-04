---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627G2R5CJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCNu%2Bw34pq3Tzd4Cb6OiI6aAZljeJ%2B%2BjAFyuPBBm54vYAIhANc1ZNtU6T6v%2B%2Bav9dIlWU3a3pfMTJSWc6MDg04I8YnwKv8DCEgQABoMNjM3NDIzMTgzODA1IgzfBZTje3SFZQeodGgq3ANr1sLv7LEhDy411dW7ogce9L2NKH4dw833SdRFKHJYXehVwSZt1Oe0otdzbjjfUeSD%2F6WdYE9q%2FP489g2x%2BDZ3gma2xClvQC7gjNkrkZu3nh%2B6Pq5CHs8HVCcobL1m6vyIrvt%2B2Q3jBaO6ycl8x5G2a5b4DukXPUh29Z3B6RcMnWChRaqARiFJvrVXMcuTEVvcduJb4oe3%2BK1iBkPLWfjwL%2BVVhSXLsAjeFBRv6AAgjTtveHOUdkFkhJfAdMy4YFfscKwGniJeuGLlfU6FXb06f4xf3oqoi7217ELyjt0CYUpcBhrhXytMY6MbiwIm53%2FxomGNURy6YQOlbnNRAFthjWptOsE1RqvaDpcJNIRImoNep6jhIqfQ2TGtEawYSXN2sWSe2lj7XX5QHb39GDrEzaqwP2ECIHwenO9dbi4gIlUu7GiU%2F3eRI4nouw6qDe9KOHnNtDYYQ3ysy1Q1imzj5pqzrWTxt5uZcFLqIgNL96XBgW8TbK8BKeEA0MRLatCZ2TtQN8fpr8ZgpinN2OUrwg9cAM0Tnx3XEhSEG0IUBlxbg%2Fbk5m2V%2ByHWwcUmw1QhbML5PW8%2BGdSjOy0yWd1FGMhq1PW0Fc1QcO1M14o%2BWYNAkXONH9mKELxp9jDgvsbJBjqkAfeB1%2BvSfagRO%2F3kcZMym8uwZQEl1TpKCwKBf9IgSJFPCHuqODoCM0C1k71PTFNtg58ZVyKbpE9r8Co%2Besr%2FPMMZpSGRwSx9X93X0wWCA4qAacfCjySJKZ4zqTV338bV38fgNM3PeMq8Wdo%2F09e3lwCPLZs1zQghm3X2gw0btZ7LWtd8DaDTPx9wl2FMNm7dJjNGn3x4S9E09DaKNz0SblZdpmNM&X-Amz-Signature=dc766f1d26b46f03320d2f8aaadc2e60044c5320fae806b25f11ce19d59cbb4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

