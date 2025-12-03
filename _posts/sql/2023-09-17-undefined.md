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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCVUTSVY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCVFxsmwpETmryXe2zSAGbl1cz2kbGmUJF%2FjyxcnnzLdwIhAJZhIBTrUYptdSKVzs5UEpO5zZzpYaq9gHTWrMA0R2%2FlKv8DCC0QABoMNjM3NDIzMTgzODA1IgznfkXHzDReIzqOPfwq3AN8bcG8iIsjuST8wYm83Fo7KcDeLEzUH22NL3F0ALVVGg%2BDJTqhbW0KUERWLcbGTMiem416qpzg7B%2FF4Wcsg%2BhxjH7yCFP5MOHte9ql2oAJBxi9dvs%2F7HkDHJvLlu0qvWTVl6z6nMkF3NzI%2BOHNROnbnb%2FZPz8ZwDbccYmJHj4j0NvOtFJu%2FHgUN97q1%2BKWz9XHuhqxY4fHAt3qaMPkUJ1ixGdOXz7uE%2FI%2B05sRYCgXdv4ULjbhRZTe9Za4QtCgszYsuHlj7BMhXGTQzAcbkWb4H770QDobo0qBnBOM92bOQ3DEFEqMymjPN7aU0hu%2FV42Wwdk7KFw%2BT%2FntZss7eSc0infbV6f%2BvuAm0QoqGhgXXDKligus1KWKphf1xSkfaNYoL9rzorNrb3UNcrAci%2FBtHbBhV5k1c9Per8SgMARkEQDwCAejJwxb%2FuPk81UOXPsRIvFbn%2BjFrtvhwT7SvuIyY29nlttytMu%2FaifYUPg%2BorOvMRpy9%2BZ0AaFLHcyYNZlsP6WrsNg%2B71fWbGEmfads3jRLgVQKVAqxqY6TumuQG%2FRaIesZ34ts17O6wZ9Iy1wv1PXoA%2BuL0E9XROIaW%2BGq0YU0tahkkQU3oFQkFygJicZuluG2c2pdrBYLvDC7zcDJBjqkAelefLsDgeS03TVCfdKg0ODUb%2F9ND9GRflNmhRd1d92j%2B%2BM4ie9Bo5uLMOqLzE44os7MWV9Pd2S9awG%2Fesx5hnw0eujnIApmSveu0%2BksEroYoOhWkUIxthtbqFn7jbX5rktLs56wZyEgQrCO4H0TsfD%2FNisTPMVhNh4izt%2F1erSdmKY6eq5FFibY5C1y18z94WXZfspFoijlmrrz%2FgGLlQHTXWDc&X-Amz-Signature=db5fb1a8ed5f4e4d6d93c1844519d304d302a87015f30912bff4edfb03e31420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

