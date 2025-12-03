---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXZ7AD3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDUWk3tVrH6s3i5Pb2YYGv7sKmv%2BaxI%2BBGVt4w6rnnQ2AIhAJRdGifXznVzXR2Z3V80KJ3aFJrGP%2Bkok50%2FUvjMMSEnKv8DCDYQABoMNjM3NDIzMTgzODA1Igx57yGcF94Ew%2Ffsnj8q3AM37kHSckHOWJnNxwA1%2BfVbEld5Sf5r5wpSa%2FutBK%2FDk%2FlP107fvzd8IdYUzBSKobpYlg92sXFhplU8swjtbWHdBxbQ2BYpMi9TPU0tPVjcQ9DFuGbBCaE4gcYv0rQZkFViY4iU9LIwFQidSkFYTbEoNhVlF8yJFiar1AnQvrN57LfGcmqRquu3N5WFIZIl28El6gwkq5ZzUWZXQ1k9nGEsA04XTE6DD2gp%2BhTjBwDtERiDPfU8kQ3c%2BKBZ%2F0v%2FvdeQ8F7k8LTZHuIaYbEyQlbm8pJe83nM7lb3jxnlBKEVeq0r7v7Bqz%2BhY94TUQbb1QZL76QGxdLHbQBCunjC0AHZgRKejHxG9A5rkjfhpthU7f9hwaVPy%2BDelWKtitcgiawdcsXPYinWg1JfgtNDNRN3t7tK1Hps7232wXulAzh2qIZclWRPiq96%2FdhBRLb8QKJvyGcEcFlcMrjX1GQNTGIC1ziYHQNyzYoA4m34GZUbPuvjb4%2BfXZThvnj%2BKZqKwuVfFpyUwzJ9PGC8P%2FbZQ7ou4AihQI5J7hic%2BwpqZ52vd268hm6jPSS5pwrzoRjv5D8Y3mBptHkM9fV3A4bKl%2BxoaO%2FBDYYIajmKtXlOr8avDkRh6uu%2BlbTLO36%2B3DDOvcLJBjqkASzERqlMrcvt67tu861fQZu8z4q5anlX5LV%2BYFpLySe6B8wWcLE08bGADiVXwb957096QgUXo0D1c3ffPxhCawLjHd9nz5y6iyY%2B2gBquzXuJw%2Fr8sZKbw%2BDzvVXwdnV7Rb5ur2FlcPAJ6kg%2BKepvORmKb5%2FMIrghqCa%2FTIWoAg4qQTiOdbZmLvgXQrzHydm6EntSPQa7kKjAJRUlfV6v6HcWST0&X-Amz-Signature=308c0668b6ba26fe20cd42920d44b729a976c1a47be4b043ff4eccecad0b1393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

