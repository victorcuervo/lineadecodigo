---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAGBVBF7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDJOycGQ2Pamjn%2Bw4FTLUr%2BIBcyo8%2F0ESGJDPnMpVNXogIhALVGoXAzOYoBrFanKoCdZBk%2FXvvJLXB2b3Rcjo7MstjSKv8DCEUQABoMNjM3NDIzMTgzODA1IgwBEJMDZn1JYyfDoI0q3AOHk%2FBytHo5C0DD%2FSO%2FvmXxc7DU%2FQMeX9%2BWEWmPUyfbijsfaQ16V3NvMGxyLSg3emg5kiwYxE6H8ZrYAT0ho9x6Syn6a6BFGJQggs5tSbVX4c%2FMLesMrdbPlwm95HM4yMj6FVYiXH3QZIuO25U%2FnGi5rPFxskRZ8QGf%2BHJSp3aPTQwtsDerwWLTmQNHaa30ouPpL0Z9FSstaG64U6Au77uoNp3gVdJE9fE%2BWLXQ%2FybZr5uNmuZ2tY4ej9ij7HlpwoEcpyI1Cqg4bBh49lRq3jrkxR%2B84UaMD2Db8b1%2FjMFeSaorjggXGqRe4LnnE0LY%2FUpRVVS%2FspgbbOHIpwKYfaTqjX0gKEvVm2orqVt9mJfxdlfZvYsy4lxAp85M1%2Fxv5LcI3Am2OuXZTVp8T%2FtPkdgKN8qArJOskvEOSPtO2BdLtOx%2Fiti3U5gWGcB2W3u1BvwCAMgPnMKmd4eTlUTKNcC80%2FnxB%2BxkKMMhLELv0qUFhWN%2F4GEBpvLS%2FDAewgC2%2BQbuxaBY%2FtdPseCtkV5qIFueyv0dcME8yQ06sfyWzxjUSWsmyrxaLyTTA2HyTafqaZ%2FG89SUFin6K8Ot5CPJ1Mc6WqmI1J21FfZyO4GGJ2z0OluS3KRPA3AAxrqvfTDY5sXJBjqkAcM%2BIlvkyG%2FDin4pgI7COhXRNTfbuksmPCF6L88knx3x3PfHA28BZ96J7wJsukJDXlor3eDI073cAwhQbgOgNbfvXypGWBBhVzLBpIXT6HNQFk%2BX1ff5o5MtN7HjHKWvYPTz41yo%2BZYLe7y7VLTWvsLsmvfvWpO4B6cpRe%2FYiUojmrkOU7XOiIQ%2FaCicpYbvJDgG%2FmR96yl%2BEPS%2FXQ9AdjdO%2Fb%2Fg&X-Amz-Signature=825225fe0a44c4a8063625998aa23a7006c761ba49e0082578d52841de2eb157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

