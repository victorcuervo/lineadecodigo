---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRZDGAG3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIB44tOug7iR3Uy9rWUVGyJLcqRrTaxop9VLGnoK4CXNDAiEAzdZZqRJnHqSQooVllaoH18b5kYcxi2pG5u0az5s5m1Iq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMlWLuIw3lS2T6NSKCrcA3An2uO9ZD567Oy5ooBaQAv8PC143XJrJA2cjNaiI1whAc6qZSKJXV%2Fh95MEkBzuCnUP49G3W4kacJvB9RrImc6nPPp0G0BJESgCeMXP%2ByShfGz7eXI9Me7CenygGK5%2Fyg5akHwDDzBcYEf5Bbd5D04EyP2ytQJSr2VxZTh5prD9HoQoDRbrX07KPyGVHU6ChzfEZMrawhq%2Bf2KycYl3TLpXOvPP5kRa3iZrEluXMikJ7HisWDUiu9e%2BXkMCTIh1%2FZXGJ5jSM0gbymsm%2BS%2BK7tcyHggnTXXFhBmY7ljg%2BDXYwZwABw40q%2B%2FgkZOZxIo4JVZplJvMQ%2BPDJyS3oFMgRj0%2BZE54C65GbX9A8HoUvQWrYCLNJV8Y4d7kNAIdyPYHft59jkt9VuvN7nUCMjJMKIFt6dggfb3TvimMoNM1w1huvF%2FYavHjzEfJ2Sm4VQdJ1pzXjSHTapPnA3a2lgFekFLwSAyCuA%2Ftp4D2WAMS6Hz5eGc%2BCh6Izw7Dd6%2B040QU1v%2Fa56sguie%2FbabuGpXhvZnqONx7Bq6nQRsZtB2188SJW7MgINpYe4CUzVNXfTQ2b37UrLUnUSy4Cnc%2F4Owl%2FVxwEYuw20OP0LVzwNn%2FgrFwokFZuC2EpFLhyWPFMIaixskGOqUBlPQgsDfqtkmUxDcbS3FU2JpjkiS8OPuQS4iuqskkuCqkSm2Jdyb1Gzq5vCI%2FOY%2BKBZsYNtAmCqWjxJIBtmWqLeQ85EhULN%2Bu9dmPTII4Vtt52RCHb1PCnxn14KQV%2BqcP%2B07gVmf3ynukaaXudPyVXqDr4FsgjxdkiRu63Uq7H7b%2BqW6j8BjY%2B6lUDGk4JLJQ73NRRts4nxxj%2FDWJ2aBv3xpNG2Pv&X-Amz-Signature=14b812d25210c81e0b74d8018b562ec5708f2e4aa567676b6a41ff69051cc0ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

