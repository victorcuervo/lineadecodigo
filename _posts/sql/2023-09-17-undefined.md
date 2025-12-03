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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QZAFRX2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDO8%2Fq5s7Hlm6td%2BE1DLt9Aj5DJstFK6%2F%2FZxLqXkihR9QIgBcwHCRnbKuUOgwfyKhRzOQ8aFVg51tJim17wBATiX%2FMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFvtBhrd%2FHo97flVJircA4t5gEDdPqFkDAnJrEdRxpiA4J8WbSOb6HGuujK2Kjqcyu9xu3b07Weo6n8YdAuKaDIwsH%2BH6l4mg39jevTPQxWb%2BHlPwsjTh834gmPxJmwkkIcfcK9dCBh9gS%2BpXXy8T3R3sKqngBkCnrx8%2FIc6dlauNOUNIVwqksaOlLJJxnjU9SUGpn6Fjxq1JZe9gW0se80y9HwAXomFHnne2Il%2FttgIM62Mojqnv4TkgxJ%2BcHlEg%2B10vqPRWs2dCe1dHBGQmtZiFryMdGyp1HtRHkfjTSzjv1JA8ChuzfqT0gS9RsPXi2ihtbjEOxY3HRnue5P8%2Fy1OlOTAM7VDBwXlAlhImKVz3gfEcCndQBAQFzLdYPMR4Z516a%2BizXkjhLNW0KNuthM%2BKxQUI%2BSSKBfdJ1J1s535HatTgI7hEZxmgXJl6o%2F1wbLNY0rVDWRXmlMix%2BxfOQZLTDzb5UPsUNN6%2FE7AkTdnCyYVO8Ul6Z2eY9SujpO8lfqaYdHGM%2BuSRZUGZRBHz4XS%2F9mO%2FZycI0WzNk4n1Q%2FwJ58qYe8HHlLqpbLVIw7hP93DTR%2FmHu%2BLbfc1rMqLaP0beqeAVJZAQ9cUL0cpYMnZBSqnDa6ynmp%2BYrCK6TsgUHxjkktd%2BhA6sveDMIa5v8kGOqUBDDSnRZMGxPlL2P%2FodPS7gFYuovOA4nAK2iYIo6sx%2FWAN8qebnuX1G52xWJAyp%2FwNJu6bgCRMvJ1BZn5p52qw0pGqvswx6HTcw80eRjAU8SXCXwy0Iwv%2Fxp2HB0zlIOPEqZQrg73fXMFvVrFmz9qo6JC0JBfbKpuPqmzZxnUOF6%2B0elBtZLD0ONme3bQig32uXfvuvDSX4F8d29Y8a5iWR2ZNsJss&X-Amz-Signature=4772430cc34e0dc135c588ca4bf556a91510e842710f6648205272adee666c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

