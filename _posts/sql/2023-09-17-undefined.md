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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSUAWEV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC4m9d%2BVr2lAKh3dGmEtNhxTEmDAT5B2nfXPCtaP3CbnwIgCOsI86SPNaZYzCEOBzbDUe4FyvdRh9x2EKhja9RWI5Iq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFiGMpepws8DOhNSQyrcA%2F2%2BWW7qKVsAlV5G3UyJsllbmr6B9kJEgOgHeppj5cSc%2B4sjURmCbsjEpE%2F7xNqeyr7lBxj34lfbo3KvQMVfHKJuM23Wfcb6Qq%2BzGwQNuzSXtXcu52ELUpOXa1KRvV5mEsUHkJEwiKpyNECTqdChRTfc%2BA6GsiowvFD6I9G8x4FYnJWSfWl69m%2FVYqYwvRTP16f%2BSL8r5KUwTKrALJ9Me1VflOYgF9vQQ4YKrDPymDBKuPPYQifJkGzYVaoMbrWZKBvT0fMpPZ%2BdFdUsTUgXctkCxCwdJvKI8eFFz0sI4Jx9eKbu73EUcer96NYJsXsRjbGGHyIKkZiCezlP%2F9s2QoZqSuIngvXCP9wiYB%2B1NoeiJtJFW%2BXlTIMPajIvP8FQzYtDrDolmmMaeF%2FCbO%2Bs6R4XHxltx1Fip%2FJPMOWsFKGN63LLgl7ytQ5hb2PdAvSIMY37FaTDIms%2BGW03smBGd1J6iaGRc4fqe9YE4Cs%2BCm%2BDYUVchjZ5XYUaw3Kho1Uhpf0IPQLZyUvCypwsRhliqJfHG8h5pAFE667i4SIkriqT%2B1GsyjykaUlTpaBZTEMopgqJp3KanMMKy2BerORMxELc9zcaOh48DssIdyjF65tF6pvDQqv%2Bg96cfLpgMMeSwMkGOqUBhYCAMSk1KqJEv1b9YGlXyKwq%2FSoAUhCpRbnqwKkMu715Bu8toMkJ4QuE9XOhEvcIhDLKs6da3tRRNQCPwIAf%2BwvgsE4LdJ8I20jQMb385A2%2Bd%2FtCgoA4MG1o1xc8zrL0dXVKYxH7OY4NiFolu%2F506W25Iqs%2BzRAFlmcOndnUeQyHrk8D%2BTIQsLSYHjfzaXTKs3uQmFkCzaLryghTRWCtBkCc4lO9&X-Amz-Signature=b4639fd62cf48fee4d03017781b4db2b0f5ef1d93f995697eb46f482686c54d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

