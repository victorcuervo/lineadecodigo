---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWPMB27%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDQlM1%2BY%2FunSw4ndQ20BXsQPQhNm0rIr%2FKqqrpJ%2Bg6CuwIhANfx2y%2Fe0gY3NaPfOBDXIVCZAxfmns%2BM12vrXFQzAwxxKv8DCEgQABoMNjM3NDIzMTgzODA1Igw7HP1YYqbXM%2F7nJ3Uq3ANaHjN8r0Y8p6KpwD4%2BahXEhxKihgLcsxDf2GgiT7Nlluc44gra0LIKCGR%2FY5HGhQ8bh6oA2JGlFqiw0EkMhHw0YczOg80S1oxyYKuHalLTeWOSrrTBHHUvfNeHkk8vHDX1y5LFBNaoBu99Bfgr4f1uqSjkB39xupZRNYe2MPbIKVFeW%2FIgHMTMJ%2BoCZgiEujFcnkSzDYSDfTqVoGjHObmeGN5xmBa19re6yFs1UqWPvnVBk4qhctuy%2FfmzgPh9pOqTqzfZ4WlszNo0bswZ3nntxEQkyzBp%2B8N1%2BQBq4vx0V6T14TOfdZUI%2Fmu937hQj6%2BKmtkOy4b0fkuqlpt4I4kK0OEMroHNfmM%2BIiOi2upNkclASNRmVj%2BqvhsO3IXhGGvR02hiJz9i2kcJsTMVKdFd75nQvj4QinSz4Vs0mambE%2BtDz8eFmi79XtcrNTP50cIJ7wrQgG92nfmCgDvXJPOZG4MtGKmJN30O%2FXq3EHL%2BDTiRPdcDlORv9C392V7jQoZvdtiOv4Cwyyk6JDqG1JphF7at2RP1cWvg1XHbi8d1%2Funyw%2F0sOJiiQTxBbKziwKbHAasu%2BUF1U02uQTvpckGHQJtPOsLjorGxD4QrnHjkfRMT8JW9LtietyzL7zCMv8bJBjqkAYb64nYgBVs6YALvGIsX41dyiEerM%2FtpyipqEAoReRuQG4iZpi1Ks7IMjknV%2FPWxW6bgVWlccKdLIK0f4TVOPxLzmpP%2Bvq%2BKa%2FvUQl0rBkYGtxdLYmW0lUb5aQCqEYONrcMQb%2FHkkeyeT54MgyIUuwrLtJLNgWbq9hTCKLgEx5pwg3Z7Kv%2B%2F5ojTejT86LZt0uwtv0JYF29dlXMgcGDGp1iwUia5&X-Amz-Signature=cce40d13db49225e20c7fd978598085104ac1e6b1887a70a46185188dd1fff98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

