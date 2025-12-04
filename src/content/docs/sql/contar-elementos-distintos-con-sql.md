---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44P56UH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAh9b2UbNWQPJqDJtTwAjAxduqXPj%2FytfPDH7L4sP3cwIhAIA%2FJX5MnM1ma94aHxDcuPHlOUJhwjqa7mj2l6KCvBaRKv8DCEkQABoMNjM3NDIzMTgzODA1IgwPeIOEZdBc6zUXJZEq3APHWunlMBpTRMUz%2B8cyjIrGWK9GxO1O6bgutVmjoPu9LCepJf7BiKPehpbL1NLRXQmKopATem6%2F1ySIEDsrVtdu%2BluRMZGoNRZl3zscgq0zedYORz9GNCg2yd0PXhdjl29MK78vfUT%2B5xpMt8ea7YK2j656kXmFQwssIF3JwvK%2F05GpyymjYy0CLQ0ZO3WJ3QlRQvICjisXGXEhU8OEhByc%2FUZLq75leo%2BnzIvkEaMUHPKUjzyv7LO61QlaplYd9XBL65gF2JbyLqFwRQ%2FYbBBay0LfQuY5Q1HhaYKBVjShYEdJI10t7fbdRGw49%2BAtOMNVCLYsbjR5v7xp6mXrGC69bcuFMk19rNzQcKIin4siK2WRnOrECA2cQHUXr%2BCiUqe2mwwjMlN0i2%2BzucNiS7zyAFWd9J9KcsyINiGDv6xAB1zREQRluUaMC8Cg4SPT45MjPApxlFU215NFTdxNN5ukx%2F%2BPO4si97VmRJh9DfrF%2FzFm3DaXoWJcDpOmebvEC6fOV5qKsdzSBHll0wU38t2B0GG8X2b%2FCoTcTxyKqEy0%2FBKwoB6kJyAlybjJcwwZasHYOTctOuvar0W33YGaUoO0YEm5HVuP0NkyeUXIrmpc%2FCjJjTF6kVX%2BEG6mZTDP28bJBjqkAU%2FFrjzPv4khu2Ky24ofb96a%2BihsBOzg7HdJ8lwf3fu1ELpO9NjiV7FsbQL4rL0oouW6t0Wf%2BmxjDkrIDaC9CBEUIFZecQkDCAY6NH7gp3NUmrkb0JlPofIf6uZauVIJnftqStj9cios0xo2T70JKegRU1Y6%2BEHHlmCa0iS%2BFSreTs%2FUJMhOqaVOkzaoeYRnMtyciMis1ExLy9HoTs4Scm%2FVINIy&X-Amz-Signature=ebbeb65fa8b3fa41571eb967db2b6b4efd4d7b0a7a5d9d1793f669bc6a1e302a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

