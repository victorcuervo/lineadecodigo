---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VUNZ52B%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGcGrXMC0pRkvq0ZY%2FqciXle7wLQ%2FxhloGhEjP%2FSfpb8AiEAis25O8dGiWFHQZBMhHRnkDh4gOMvS9WwoGQ6gpEm1%2Fsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDLMNq2QBWerkFsm1OircA11nK8nBPUxse9u%2Fykx2%2B6ZQnYF2Y03guQMyvwiE4N0ZFW0NPWVZoLT9m433T49O6CYct%2F6ZlIOyQVEtki%2F9Ilh5mMf6%2Bgwsuo%2FtDitUrEZI6sq%2FFDCYM4d3CrfZOUI29poQhj0BeM8yAWhDFNviKXaNj9%2BPcQ5qSaJoAUkokW7JiX%2BnXUPstC9Tnru095g0nj7yknnMhojNgxXxe7WnyjLs%2BwJ33ZEqbBavckg4hjRAIVY35GMHK24BZqL8MAl8fwp1A%2BaAXZvSPe%2BJn1%2FCiXzJHYgZFtq5qMCvxzlnYv%2Bmye%2FPbfQ%2BzsPdxGoA4UOPhUW0zvsHFqOWTXU6Hvrspde2cN%2BgXhgJvtjx6A3kN1TKMyTXhnNISOP0ljjcmIp7p1ECigHvsYrHyo4lI8sMCLihgCk27z625etelf4iDT721tD9pOHujOlBv8KMxvVn9%2FL2L%2Bdp0ZmAJW91kX7i47iSuE%2Ff2p4YzMXE6md%2FGsq2PLFji5jnhbrfYGKKGsLeUK2GIog3NVQ6tNbDZB3rOG9kTFYde4A3H8po41Xzu41dmlIfneP6ccxFXDwc9%2FPZQCfKsaFuuREmRpBiWeI2G2uWnFS6RNN5R7kuaww4pB69%2FxNglPDCP9xFs74pMJK9wskGOqUBkbc4XDLABKnFuenmM4piwWsUb1jk%2FNNmW1OICCepGRTleObDaagSlTCPfRshkbuqYaXEKWe3ai%2B7I%2FVTaMQ1qal2eq6pyUfkQiDGcguT5moWQEXD92y%2BHoxWlxJvsxM7lVlbqBnzD412PqlOcrlwyK6MpYjisGUYNrWXsCFseTz0VO%2FRmSlp87jkjUdWD17Li1oShz%2BYn5IXxcaSzsm4%2FHi047kD&X-Amz-Signature=0538160196323d880e8fe8d6ca4cb6ade32c409e59fe25dfdac61c51c3a74acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

