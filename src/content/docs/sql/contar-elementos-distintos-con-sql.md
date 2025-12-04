---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK6M7BOS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBCel1HDOKcg%2F9%2F9AM%2BuZeIr64Dl%2BBr4JfZjYI17TueFAiAmPYdSCFFLjxY8iKrDLdRNT4afXTVhhDc7HKEMGBOb%2Bir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMjw3phTNkTGPa73cWKtwDVFcqHO5qSRbYx%2Fmx77lS9JRy3B3GbWJSJ%2BqztiECp%2BeYa24G0NY12FSannzPwjYOY255mdUw12HGvmxD52J8NiK1nMn6vM7cVRNIjRDrDdOCH%2FpcedZPfqtrUJ66lFD4BfKlwPaESY2QsPoWQYosPj2wnk3U7fM2jU2F6%2FKPmBHDyYx3nlxVTmDXdrnFQDvUyhfErzUQUqvCe42ZlVUmEw6wgbzS0ixPXG%2FOl7z0stijYQx4elX8Wvu2CpTDugai8yVTtHL9cGwUYuNAIB%2F0UcKzujP%2BixpOiA1t%2BRnKJmBD%2FWK7wChqC6RbUc7b%2FkTDwa7jDr%2FN3iz60MgxEP1JG%2B%2FRi5CDTjwAi2%2F7HbYWXVEo4hXGhU9hjQwNBMX5F38xhqH%2FqraeNW6aTIg42TifUYw4oZ97Lez9l9X0Ip7en9YWFfeRmQyF782ga2iV48HbZ406TMGQSg6%2B46hra6KeIUkMSlUSiynBWxRidkV1jar9WdRy%2BswoKIboideBa04IMFs6esjx74HijGZPbI1sWpdvQRtu8guyBBZ0Ngwktzm%2Bm5o3twrg49cgftTnNq4CjQgNRS%2FaWCHyrXCz9UB%2Bua47BgTQsQuUIrKST7G1QUuXA9d87zRsToTgWCkw%2B4XFyQY6pgH29cl9xyiqF%2BxG%2FnBwqTAkv9sIz6DWcX4WES%2Be9x72y%2BhsuuOxsmv3k27kP%2BfB6qak%2FNu8bTHEqC3z6IzeQ%2BveypG7X9WVexjT8%2Fn5aVl%2BdCKvFNJKmr%2FmaK95mwa4pLMcp%2FYmYF28yr9oSvzAK%2FmfZA2YhyLJrJSOsYpaheAAHTO9tV0uwiLXrfXiu7VeNQsf3h7EizBZfj5dP3xkrhx%2BM3Dzexay&X-Amz-Signature=ff4298d957ad72748091d008f6dce8c62646bf4ea21d0df156095f9a29224a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

