---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAKAWSI2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIFM8HF3qgL5Vw1xFnxloV2eV%2B3hOn6Te8mX0%2Fym6WR20AiEAsoPgyIGb%2FRThENA25BuyH6xVe3w%2F18R8lic1EWEEoLsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGzO%2BqByafcrKK1UGyrcA%2FhpSFTfmhCjHEmKzo%2B9oj5s4qk%2B1Ve64NtXYufD42QNhofqu6CvTgslSk2m9fKOSojFZHnPRrId86qULIZtu06j9uv%2BE9H67w9KEv0dqY%2BkN1A%2BXgieHV96uRCDy6MgtJwxv%2BNCAY7Ftv1QeIhSBgwSFkJjZaZu9mYQYpir5XFhrYRLp7fp7USekfHJ3zmsGbJY9XgsVKM1%2FmcuyiPqmKQArMiv8OVqd0tUKMxRV%2FJQEGKeN08rju4uh5HtYfCqILwf0iAFOsrgrxHpsaK5g8v7%2Blkd8x5XyI%2BlbahCgAorUAoLBCiwBb5Vel57ToR3mCTI%2FYLu5v4F1pWxeuTF7GMUt2ZdQjmiSAM3q0tU76iREunRJh15qFTWhmqeG5iJ6AGlrHN4LdRsLTPhrf0pQWTqUtTJkooop9YNvRkxYbPV045ar3bJXmQATXTkmxKJHSWIC8302Y9pyO4jrCeXq%2FnRtDB%2FYK%2FyV8FXrDWZBxKnCanE3CNACGamzIT0R1GU3P3XAfrr4dreiRZeO3G97wyeC55pLOweN7Zu%2BztGq8Yb%2BZ2SHKdq0Gez%2F9kTtxGwfUSPYbEaj8rz6lrCqeInTDxyES9xLgs2e8nFspzDXSIHhj0XToASeD0kCl2YMNShxskGOqUB%2BmIoMxmrEEDv6jfjK6iduhqrdPs9sJWAJJ%2BgpKF03J8S%2F7TorlqusFRPp3WvTNBIepGK8XKZTjbx6l9mNvXVMLz%2F5xMyivHi%2B%2By7ZRdaYZQeQgFE5ys4P6CRVqimzml%2FOooKcJctkWXfUQZePZ9kioaLItLfYvxahoTexCla4JJVaP9hSesvb8jW%2BWEepNxYdOdVU8BrTg0h5xeCpfA%2Bru%2BdXTCI&X-Amz-Signature=fc22ea25c8699dc79eab111a5d9c4b60c4f296664b62a3691c83241cee35da39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

