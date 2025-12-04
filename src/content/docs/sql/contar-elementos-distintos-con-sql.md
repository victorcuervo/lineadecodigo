---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ENA32MT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCHJdba3qmDc0%2BqDDLhQPwxFAsloCBlS2U%2BE8EyEeWxwQIgcdc4pvpUpda0Qp4ponlP4gTn4XlQkF9GQe4aNUYOGRYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDEn%2BFR8w%2F5mnXe0%2B%2FyrcA%2BPSJUCi%2B8XQR7TxlKZqrFO8azDgeSwmYScwmu4DUtDJoA8X47XhaPpKPiIOz20egFQG%2FCmiTsNrBjgUycb%2F2wWARVguqXgbSdV%2F2ht2%2BR%2Fa6TQBxakNaw8SbylQnKKwrqCIH3VmNrC%2BKw8oJjwMKtujRZzRG6ZpErlkap%2BOTjx8R%2F%2F%2BUhkvEDNAwtN258njV%2FCfZWT%2BVR4uiZwLM%2B6eRdHAwINkeUUnYZ%2BJ%2F98Np3C7qbnj5oaLyCXBShzIwI9WD8pRPaObYOOOadnzHs27kw00YKJzXE6uuXFetLV7gM6Ru9XCO6FTVcN0%2BXTqD6c%2BILqG7Z4%2FygWwNsWJX6cYv3twyR2Pgfz9M970LeLQmpUQVfPIbb7wlQMser%2B2i4ncJsiwPi28aVkIgo7%2BFoOd1JdMLep2jpNboqhTWj3pavfkE8Rf3if%2BsNgdLBlLiaC8GZs%2B8T7dun3XCC7D%2Bm%2FO%2Fj2PSuDaaLajW9Y4u8j73%2FDMFboQXEPsK1JnNUiFDX%2FYI3y5iu9zHzIOrknUfmQ2wcnQkg5iydXQYetaQMx7zdvY7P8jeXdB6qS4KtqzsZfhJUNTQ9%2BSFkgRW%2F4ky%2BVwi%2FwYRdWXvkucAFtJerjMCVz4Ypzdemi5adgw58HhMOXyw8kGOqUBxqdTMt%2FqLp4RQ4C4%2FCuX%2FEDBmWpXdI%2FnqmCiAgnbHLPlFsHHES7xdJgwic9pZuG9ieM6RPSom2cy0YXtRvNlExod%2FdWJ8dAoAemMGHJQQG7tWCGHwMZyej3dXKcQqVxu8cDIj26UyZGuPrZbar1jCEXoc9JeNzggJ8an85qSbxImL%2FpGAqgFMEd2RRFUX5sL7pR%2B3Pijl%2BnL4Wg%2B8JZfMlHd%2Bc8N&X-Amz-Signature=29480c93ec36de57de44c5f9cbbf1051883760160e500d36850e5426d10d3f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

