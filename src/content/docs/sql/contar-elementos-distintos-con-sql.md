---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE55SJNC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDtQDhK9YzA8H0FGSHH8poqGMrkhk6X9Z1tBqHutTs1OAiBDJ1R7zJKgzam8z4vzmLfJDj4GtdKG8F%2FVp5M79%2FSLzir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMlzoA4a7F7hJ6bBpVKtwDePVmTqZCC1vuikjUBfk2BSRv8bJkN4OS9Wdw8RSUzCXSsdK%2FCisSxIUFx%2Bxon0wM7PRfYat1S601E4tLhfGqE7Fq%2BwBjCFJQRL%2B13EQTSuJ5%2FnzjqMIRTZ8plnwPeUg7213bONjbhWkcZ%2FCU7HXXcsRYTCYbEfDcOebRmZFU2u1qQD6IapJkUw0vOyCgtcZNRLlEdSWjSoE0dkrtRCavA0DBvO312m0037DTeupGV%2BZzwEnWEzOD5MefvcYzgQLa%2F%2FJrjSQTMDs2HgpASJ8Lx%2BEo7jTIdH3ht1hPcBvcO%2FIXJfkElGzubmfFFjJCMgxjBlMB21U71Y8lFv0t6vPpXuLAwbYEUbJQFTlqV1dFhziBUaVY4ZJfrkRBL1yP74nfLxrbYbsBZaUfPcSk755Vg95c%2BHn3zEjVaWBBbdwF8qEuk2k%2F1EoP5PU2mZlT9o7c3ls9omETmm4e%2B6ToVKlAI79r3FbmaoT50Ao1iwVGoplipwfTO966hRJ7mKN%2BG1jKpZSp5GETK%2FN%2FhZdEHeiDfBfDzmnxYXls3Se0iAJZyxqqeXH3plEED%2Fje%2BKGDOMr3dMqld57t337LGu1E2cnxxv0OJLckke%2Bx%2FcEcv6m%2Bo0hq%2B3oHgOvdbKbgCzkw0avFyQY6pgF86sdi8YyQSrXwFVq5WRPKW972ZljZSkKTkm0lPlqRWGC8eKPQbbReoujnh3ZYMreP8iy43p5IEYuK9Q2Iem5JaXbivtKcLVCzRDksTIMTkAd%2BIybMk13pxa26QRZUbhtiiUgDXdwJFzsEUh7C%2FqVoHYKsDN8FGrZ%2B1rbSwBpXth4qGMCglRBiZJMbB50UcpVrawfEUxAQ0BsZ9I07WUzG8vINvpBm&X-Amz-Signature=07dff01af5bdae897b62f5d5fd10832c40b8ae471464a423f6f1201fb8ffb81b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

