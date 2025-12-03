---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGGXZASI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFMa1LVfiNIFrwQW30YYH0jhOVdU1DdDgCqJ6YVriy4RAiB861Nc4WXm0RAaQqXMt0gFvYLIXiT6fXz5%2F6q3JxUhgir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM5BT7sHqZUx06wz6sKtwDJ%2FXldR1E0X4azD%2FxxsqkQZe553WUdI44BwuE49OroR0eqUBN8IiNAYcM%2F3QR350hhhtA8zsENDvqvzPfC9fxk%2BuQq4kUD1W1J42ABrWoLZw6UH4ku4VVkQBds7iJfR9rMAGSwu%2F5p7HIaWK2KJAyHyFuEg84DCkHO2lSOcVMEoDIbg0K7ZkRcvU%2FwPec0Hy%2BuGOrN%2FGXluUe38DP1kGwqymszSWW6iIbWjA6unXkAu16HfyLnRp9kzWj%2FUJvDWwykzHIENLNKWOe%2BFey%2FZuxZHlrTnopHJ%2Fjh6X8c8R36nzlioeGJIRvcpvHgb7w0TAQPYnFBI234FFtuGNvhsmdZNrtgrs84tPlahFYNMUXiTyZTN01ZBqoQXpZPeambwcWYXbyvk7%2BEzYjD%2ByJ3IFJyyWfk%2FPKVMS8dUxmPUve%2FxyFbvVxa3pPMgdVNcH4Pjpvf4toCmhNEoftWcIHxQHeoKtxtl%2BDBWTajrsjsL5DVW3Bq79BTIgu2ABdRVCiwbJHoSxRFHEzz%2BSujEfrFedATO70Xk43kt2wrXPs5GZRHCQ%2BluX3%2FgoQxB3lz6WigqkZb0eUSKzrdpyfIy%2BQLZOCyhl9nl%2B%2FIwoat91xVGvxbkddl0ERrRu9Lfv%2Fi%2BgwqPjCyQY6pgH5a%2FOqUUgfQNs4YNylrRWhl4OzSfPgxODB9Bqd2Ih4sbmL8y0r6SiYLSePStrESkTuUi%2FIrtvGy58PUsmsg74Z%2FJilPlTpVTu9yluacb9IqRJ6%2F8VnGCjPGLhRPQSGfV3hmQoewECg8d5pnCv7mpMuZap%2FSUhiKCA%2FeRg%2BIoE5iaXxqzn7d5L3TNp4NsbX9reZl0MG%2FlQEXviksKlu56i%2BwNfNi04W&X-Amz-Signature=9128636de61fb66c6aaf3ff2f5fa2052b11ef3426c55a3796585d57f6ba281c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

