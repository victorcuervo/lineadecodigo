---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFAJSO3J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCBPTSAKNhsPkE8N2s0ttFqeIiYWNEmhgFS%2BS%2BdQNMKNQIhAN4cVaqmsaz1PPSJMPy561s9rTBDqiZWQfa1Q0l%2Bm%2FeBKv8DCDoQABoMNjM3NDIzMTgzODA1IgwoiDnD7vnNWD1rTXcq3AMbbRzEoJQ%2BmKwfusYvPwuhqG%2FKnZG%2BEGVvu61tam7QUguyWtxQold3fBX4ljcZAZv5mFuPR4Cimc9r3aEhTOqZoOCchleHqTrVuTGj7%2BApqUd7gT8eGQXuSiR%2BmMtZ0UvPAvtH6vZPOLhsysvbZV8QtHGaRglQ%2FabGAGIeShRYseM%2BQrTy6zsTtJ%2FbZZUSRyBKLmTG1fCCcTd7JgeBUJTgNd0e0O9fPuBXh1oZWeol8GwpgRZQ8Zb0TCiBJlaymO%2FxgwvHftWiiOBqCfJKhdB5pEc0D8HR4KEkVkLHGnN0c9BlCoqaGkNp9C52p0MnFtuYVW9y%2Bv1p2U0yfhYdMeTIcQ6uUUVoQx%2FQQu4kP29l%2F5uH3rwJxFM3YHSVcRU2bz95wgWkY0qnOPSDZVxUXzOQR8TIGdkREWs8Qy8G2WqKAhcyFhRM2wQNxFqMuprz%2FHeRA5h0e2K2NyRrZ8CZTT0QLfptU0YbeSk0z%2BS3H5MWf7C%2BExCeDDALbMULAcCbmjH8pu5Adl%2BnLaNfpCfdxKOnQfDme%2F1iWVGNat9PaDlg%2BZbwmVuG6fEOmxVhL4Kdgx6KIXC9k5feDrBAxRgbjvzE3vSSoNm4qfZa9i4mVPyS4FNulh94XSOoYxp%2BSzCJtcPJBjqkAeCK2bZR0rkPu2zIV%2BIxqLkO4WnjcbNj%2FwIliaH9vQd0ZhkVATyq%2FNg%2FB3kzukBmeMna1Xdi%2BD%2BoRM4IXf1o42mM5EYPZocabJpOsDpblfGf7CcgzTCRoq4%2BlJpZNUf%2F3xYxLoDTcf%2F42H04eIzwT9HP1vc%2BWahuRskj1JUYILx52n3peTWkxG8iZm1R7bZ8F9jfX44g9jFKi6RwDLUKCe8y9Qd8&X-Amz-Signature=17e77936d1762d7ceb4e3aa508c57f0b81f0a730d62978c983e245c83131c7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

