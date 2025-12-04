---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUFE34O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDHJFcKktTPmLidrHj7aMQGzi5mZwxelmOWcKesGc8W%2BAiEAt1prWTTpznBaKLFqMVPvbX5pa%2Bt75Nd54c0%2FMHW7B%2F4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNGkNRhkG9FcRizJOCrcA7H3vV1%2F204rH6Ja6dCjhLIW8nnAKLZav6sGBKr8NgoMn0Uht7OjvzPGE4KccJPi87fl9fs%2BsJ2RxJe7DaUgy6nJCrpcDQYo8kN2x0ShgwTIeTjWALoJZLs3pVOYnSmljFsLywwb8Tf4cgKDokBBhmHq5xa13uVd3VLEpJR12kfJd3uNVKEU7tLHmgxg0NSIABAB3KmAO24tY6f9qp11lHaGQGeLw2DE41Qpvctie9RjVZWJnv%2BJr%2BmLwZVTF0BBdiOb58u6UtF4ew464xO0dSsJszBRkDueDbU83toFkhiGOZLc4QCaSP5w%2Bngsh1kG9ORZFA8NdYaZXdpIH2MZiUic9CzQbIBvgehDMbli48sULZyJU05FAFGIM9SK%2Fj7Ne%2FCPGdYew1feJQtTMU3g6hOXXtMyNvDkpStFS7mgecTYnFT2n%2FYUpW9V7c7reQVIk%2BZ0tO1juOZikwO%2FgjDejkZ%2F1YGMywFY0bqUzV03%2Fpci3lPfIY84m5eFRXQwGmcZqDSPAGkUDDaT9FsX2u3GFGCCM6euc4aRqxZSvXKsbiOBfu2RNsfkg6vP4pSuvYBctLingr1JcgKR5ZFN3sxPdgQkraxgsqW5hZDDb7JH3c%2BiE9shOM2tCrA8WuqvMJG1w8kGOqUBt0J73sDOuJsm8FCvxiMcN6UoVuXMNcFpCEVoXGasPdQ45jIMrDZX3FR9h5hFQYsk%2FQcBXwSiO5klgjnab5aOdhxb5u860qD0I%2BjGYZiTQt267uZgOwnivX9twFfp4tUe0wEKRxZ3WHYga9muD3d6WGfa5RVtWQ9WefUh%2FYJR4Cbu%2F1qomJILLdnVrhHx0ml97ry4q%2BtR1jRPnQlqDhG2A61dW1SR&X-Amz-Signature=ccbb7476d60e7829202a472c07c922005c9ddc7af0ecfa26fb46af587e9a6243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

