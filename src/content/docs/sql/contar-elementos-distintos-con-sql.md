---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBS7VA33%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBE4whs4JTZcLdrwDkHIhNzVZJeTclmhDyEtAy1jzxsWAiEA%2B%2BUVJuEvm4zaywM2qlM6FsNVr6QKK5mY4uFlX6G5dKIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKuZUkFPxWLdsB1hjSrcAyGAtplBmUsystDKmWGOcAvxFeT8Uv2iaO54HRI5gRWHvuHEMjIAWGFD7L%2FHxESr2XjWR3VFRYh9XhaN0ZjH6gQBRXdAswzk9moNlH9jgvMITLXo%2F4GLeQ%2FcJeqNMkXsFCv%2FNW8hieg4qod3qtuK%2BnoXBRJ50F7XaRii4kQel9%2FMujAaaPjliIIr2hNptoLHT2AE4K64X43MHTWC%2FvvUClfACbc8EFGzQRrshyu%2F5rDsCN3CBM%2BpVrt0b%2FQuTLIfcKyORpgG4hNb7XwY2TX%2BBjsBXAf10G2PlllcaDBAO58Mbb%2BUdrsU6kffRmgvaGm%2BJdVlvt3XTsR2uYn7P3giK7IRU8fArSMJ4WHtOZGnjeWWKzNNdedjktqCWXEEM0fDw31dniQYbl1%2B9DfAAz8baxVmySOOhWdyXpLr2KdY6eIhhLgs8D80OcdTBIa2smfVquRYTMp%2F5EmqnsWRhjr903V6eXzNrxxPsuhjvHRWnFEaMyYKtUE8pM170%2BA4dLoWNneTPT0H343Fv%2BPIHLgCu2%2F8wOTnYe9%2FhA78TuQgo8wL1rMgvCNxivfe66btW93%2BqNDmH50erXsjLb%2FF7%2B5qrmblmqW%2F%2BbZosYdIO9ECPxPE6PVhpdWTQDBZYPddMMW%2BwskGOqUBgxtD76F7guWOCdZ6QptM6%2FNcywK2wPUW%2BDalnuuWcmFUxP0TCzAvFp0hR55CRq%2BQ0G6MKdW2UXtLnXGg1G%2Ff4QdBt43xbt7D5DlAOyJfzVwtk1du4z3m3QjYyW26FNabeRuhJbaoqpkS6bHPU2FTPt0YEQJ%2B3LIxQrq7tf86%2FOtIYI4u7AOGTiX1RECrYoGnB2V92jbHvBAvGXwW6ggRgdpLwNbA&X-Amz-Signature=276b63d0bcfe9d18ae958948014d76f9f2e3564f61545de786875119ec6909f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

