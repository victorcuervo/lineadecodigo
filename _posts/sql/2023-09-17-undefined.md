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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB7WEA75%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC38JXBmZJBQYY5zsUZtwDGLLjTAbPAp7u9PS8kJ3wx%2FAIgR0lSvTvAPVNH6HDlP8dqQPj9ZRHhNsWp%2BB23ZM6HHMcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCRSSvX%2F8zIRKHrorCrcA8yduKcSkswfL50kJLTM2uN6%2FFQyqlfFlPc9PoZKaQKSUALLALo2oiqJ3mS%2BB2gVOMYcRQBrx45BH%2FTntgkoHQtRF4PfzEL1hn8PduV6Fc%2FVTigReLG9ZXzhNoparYTY11oYTCViRt2kQJm9xtTuOkpZNPFCXSvHi57%2BSE3U3xXtlrI12IuOmUzzCE85zSPgYVvAgfJrWKXi0uzsu3Li9yXK089tHGGDumXrimthvxtqfw5tOkOm0XI1j%2FrI6CdTMwxEtuogTtJS56MCp9TlbQC%2BPkk02AsGqWRw%2FBWTZ7jGYHlEwOiVz0AGvQ1%2FZhF5exWP5YVRrj%2FNmy2UaV1UCj7XWE6ddich6ziScG8X2sLBZglWdwRiHEo4OVjD6KYNBl9xFiGH7Z4DIUn%2BM7U6UTPqyv%2Fk1Vph4Npa0k2E6ENEGxQxVm5BLr6UYJUu0dLRiz03Qx06jQyc7y6HKHXAK0djvXusJfrYnmfThpAp576HIuC5p4aLmP4RViHWcDvBodmXgJAhpZdiRPgfRGyTrdTbhV86Z4oTx8vFC8LR4p9R%2FSq6urN5gSWJfxa8tGo5LrwwYNrkGculpSMsSJfL3%2B2WKQwek6uBKlVNsiCXOgX86yExSvkS6EN5IiVoMLKWvskGOqUBHu7%2FJFgYYb0QxhTW1ESjdAH57YuN46JXUiqjpTItVKVjjUX7aqGUjPTP0uZ5pHttNvcWaNqiC8ufAtenIoeiPy7Sb9gek2F4CZb0Hd2TpRcm5oiqXBqoKZcL4WE8RT2aMh2M4XxAci2w3suIyVe1Vc2jOASo7mpe8aKSXJAmgjkOVEEavrtpoYF5JHFqW86q%2F7SlHXkWN%2BL7PtrQEDwIvEMVkKh6&X-Amz-Signature=dd4714196cb260c12cf712b13b2928988a717d4b4559545b86bd74d7159ebf76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

