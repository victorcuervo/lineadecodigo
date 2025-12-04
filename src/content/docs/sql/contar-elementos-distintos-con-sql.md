---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CRG43FV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICpO4Hqw%2F0Hlmg4aUJMM%2BnzCg7dIRyfCHtj%2ByoTd63s8AiEAt1B1gsMzQgRVDfrEQ1x9FkwNVgLD5aNuL3e4EDwP%2F8Yq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGFl4iYExMtilrlLLircA3sbFz%2Ffno1NE4%2BWpd6SGzo0uy8It56zlcJ7YX%2BEhsyTQE7mOvDda2XJYBxbBFg0UgdNxG3KoeIuOc1OzOhTtHnhzdDlRxf7sjrfNcroT5%2B2JmLttoum7YFmNWGkBHypwVYZ7xJT3jgCPhvgo6vy6ls4XLa7TWbaGG3bjngWlJ98MtTSE7%2BTr2nMPhtHVrjA2wLST4mt1aquvMd9NO4FpLBW9JQyJSmm%2Bz0Qflxk4JpYLsWrPk1Er6uEAvGLfTj%2BQG7dyu9y08ctRTStaRcCxQ1TDCtQo48n4mFqGW6WyH5iCEy1PuPGXwr1s8zCrYRzzMcep2FDdGQgqhoeobDRk9DYBGmwrQODxNupLGzWBYqZDh8ITburSGawoyVnSuUJ6IWrnTY5j%2FG%2Fpu8IG7JBVrHFDGo6SZ8ISm51E4rlyk7U9dxDALUpI8REMgpY%2FuhmP5ZkQPGvwpkkVfxhFm7UhUX2Ru8iXVRXvRCn37fkZSom8lJFtN5cd4ebES0QZsE1vrjmBt%2B5EN4riuS5m9eGorE76YDKBQ1huPvfPG%2BHqpYoj8v%2B1GZnRCisv7AC1UjT9aw%2FcvIhg7KRyLsHn5HEuArglxP6iOMku3SrUFfsiBD9aJjtsed5UtAcNagHMInJxckGOqUBjl2hJUqtQ%2BU8HXvRW%2FoEsURP1e5pijFsJDAfDWyGqLh0LJtthbU0ni0qRSCKjMNW%2BRqYY3wVBOYWwPtZT691KHJiM7U9eMLhLcmdb9kakQ8OhpxLJxrShOpI8SC2kXRWbI414NjkK7syzaLdxoIGm%2B%2BG0KH4OznPSWYNUpo4SDKPoPwp3xjDTb%2Fdg8jrPX2HMX3ZPU3tEo4FyHqzlv8mo6t%2FV5X5&X-Amz-Signature=9b8a02e105475629ec382934386c7af4af4c4bc1d699a48947969c3dbfcf5f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

