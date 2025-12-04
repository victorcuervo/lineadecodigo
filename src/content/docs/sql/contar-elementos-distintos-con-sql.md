---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFJMYZY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCh%2FUcESl5YXJOnwFzttgYN05h81y3382IFMOkWWUM5IwIhAM%2FXW%2BMxT2lSAh6ITcI1d3L%2FWvvX0%2FbdnFbDJg68SI6jKv8DCDwQABoMNjM3NDIzMTgzODA1IgxwML9hKqYDdT8CSEAq3AMr66crh5cI%2B7hrzs64paURuWfQ8fptugOlcAmCObhGFGykeaYYKQUraOuzHl69i%2FhI7m4et2ozrmT6968euJKgWqRs1BAG2WCEqPBTWBYGmgFWrHVhOu8vP3vbJK%2Fq255xckmX5hOff1K8hMjT1A732IBAMbn%2BrZouQEYTq2NFgJGyvkZMIn0Nru6%2B1BOOr0RN3NgfcxFg2BcDGCnmmPfdKFIKOY2C%2FqnZGlNVtYqgqFgYfCKZDx%2FL%2BlifC0rnlz2B6DBhklNLsIcdV13t0uusUIzT9iaPVYkQupRJystU1kd9prl3MNbvAwlZo3F4hzK2CUJNgOgiAcH%2BhohcJUIpLPI%2F0Alj22qOhudreqhxY3PpqqOhGCQhsCzX%2Fu%2BdCH7DlHgxRV6o4O%2BaSVNzX0z1VnbbshJ3WyIfYX7I99zCxJ6DGXnlpRvdLvB%2BChgikuHNhKNHOXov9QyoOvn9m7GrDGQzeCvocE5zeFNPkusGyJxqcu79rPehgYylGsf3BtUqYgeVswQ43k0mOv5Cg0LUPZeEg84yGN7LFXLb3nA%2FdaZrl%2BEi1731%2FWeYbPQEbS49LqIgCdD4OwNEmqRJIfuabMS6SzRPjtbSsaipM9J2JCoFTnb9s3jkeiGUATDG88PJBjqkAV0NlaUtW4I2srmcIgy0%2FyKN4e%2Fs93nHjy0sVUtJXyy7kGDx1k%2FaVtXJVJsMTukmrntAqTeSdiOc6FKdHozxIOx3arpfyRVkfTWd6dq7iLRyT%2BEFLihApus4zuD0BTIhVnDvgRnDljI4Wl6qIuMFZs14Hihl%2BB6z%2FSeKMRZb48UEU1VL04VBrJg9qkJeY3GgTn4%2B97JfAM0Fr0XF93DtsXgkHKXh&X-Amz-Signature=9d0fb24057ba95d99cd5969f60ab256e2083c3a34d6a83dc25cb92e6eed845d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

