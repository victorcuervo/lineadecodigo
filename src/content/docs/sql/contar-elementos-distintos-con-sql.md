---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFEIZCIQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBk88wVeg48c5jJgLHfEzBXbqrvxhuKysUBGAQ%2Fz1%2BbTAiBSG6GPPZMrmCwL%2Fu2Q6jGE%2Fh1WdKuFKz54RLGVoFAQbSr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMuvd6NNdlZD7xEsjeKtwD%2BaVGvzRMBjTsoi8pxZhz0jYSqsbXXtYVAbTNHfb8GMsjVUFbSQcbSmWFf97CtH9YMuQpnFS2DXLsSUQZhlz201TE4vd7iicmKD3ZRKF8QGBoQQTpenj1yid8B6jTdKdlf2GEFyQfZG8ns6KASfuvv9w9YOrANJIJpZa%2Bc23DA3QT%2FL8gefHFf%2BNsRle2de5euB%2FaDR4RL%2Bopo1Qc1CsNsusaKCBkMxP4mN%2BxcGmj82kSGnWLiPSeEUeiZS5edr%2BsQdtpQohvCLRAK8dY6OYJ3CQD%2FhIC0%2FFLO98vArk8e%2FsyVnGp48aJte%2FlB3%2FSlLThI755gX713sw1Hzg7UfR6a6xWStD%2F8EyIDyQg4vyWWIQuxrY3kBUf3tstxMe9hoBqYR7FAnR%2B1TvEh94IfmhAeLm3vjtecrR8apLsfs2V7S497nh6d1wkzbCgBQDndrwCTu0X6xz5%2F6AOf54AAxrS34JP2EI5Bwun6h7ah3GjHCDVT4dKzA9eXzg8UMaMrW9MIyuka%2BQ07nckUjjQ4JUCMAv%2FBh11eJCdHBDcSX8g1VfcyPW6IA0%2BAiWek6MgsuSPrtLYf1%2Bj87fSjw8ngg3EgvlCcMsJEZJhN3i%2FcdrUO031UFYySvXeH%2FTcAYAwsr3CyQY6pgGg0USoeIaoQY%2F6OIhF%2B7ky%2BLosGth5Er8dDvFUZYtIC8wvdN04O0l9InnNStyV7NP5FfOdJpbNeRuW6r1LYdyxmfPphh0FL3BLppfJGwRpArZNw7pP7KUe926go3SSwQqaDTDWQKAffu%2Bfc7aX3tVnnIYbT8NzLmE08%2BxdTcKNIJ1p7VnCD2oMKj49pXNF8OLSwAdFWZdMddRYn6GEu1IfooA9tqZW&X-Amz-Signature=e80c6589f3a7b6c6d36eb847149cd0b1c061da0941e5c37f508f6d92d433bb60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

