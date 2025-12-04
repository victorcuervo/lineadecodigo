---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNTBZUZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCagAeN1PKAVgiQrUarWQDQdOYKSZM%2BSNLXdguTOle7NgIhAMatNaDMpyJx8lI4%2Fxygp7%2F1G1yuNfKmkRaINRZrXA%2BHKv8DCD8QABoMNjM3NDIzMTgzODA1IgzYqTE0afBVuOItMO4q3AOMJywLghaluQguBzyHnlGvTm9HIwQTMKKsu2l193Wsq0Yd2CmqWUsFz1NyskuesNFnueh5AgQdFbGWoPIE1mJT98TUoU53gmCFY3JkBLSR%2BUdbSIjI7hyL3Ptgogzzz73E1e%2FjzZLyk%2BO5myM1Xi1a3VOhcRkcaSKU24S0zZNVJvyA0NZOpGVCrH49YYbiulCvKWYDoMDj%2FfcKpU%2BT%2BnrgGS68P5523X5w2X7l0evOGfc197mT8bOa3RbQxa7hZmAL33sea4im7lBHQpgXx7pR6sOFJC0G%2FrWQhTWX8SimM0%2F88A0%2FQRDVKAEcgKlZ1uswFc6RQaAgCGxPnfQTNblosGvxQfd5ou%2B4zIhrPIYoyA0HP%2Fdo8ICqHnS5NligWXUy7Aoc9yoEffXK9umFs1bzs1L%2BjDEqJnQuMClWTCHLOO9d2iW5P9j4r4KIA6c0RaTOEGd8rUV%2BL%2BMTjBYNyzG2E%2BFIcN9C%2FullqdMgpi%2BLgVg4I7KU4OH4kM3UCOoHflcwJPWlvYEyGsuggt5K9Qb93dK%2Fyg%2F%2BBoTeaThVgWyxYmhjkqp9K%2BjlINeRnssxmutWQ7RMWvWqai76iADtFxTDe2EtPBIxJrN2jhw%2F8y7ZZ8Za7Q%2BpEvvWeFo0UTCHy8TJBjqkAUEbjpDJswAlgWBalGC916Nv2JeFxzHz7MZMW4%2BeqAUfEh7lrbT8QjItFoqG8m88OMHxliMNlgCVuBff3%2BOF%2BUKcz0xjYl7ltr6LKl%2FSIeQ7Ktj2VqHTz2kARvHx%2BlA%2BebKE5qJJFZp0Yd6zyUONSGQWcW9ZPbmRGHcrL6MBvP3hQgBglUNhNzJXu8gWWw3JVnR6mRSvZbp287YYVBxWtSK2uxtk&X-Amz-Signature=3ad52ada7757d936b47e6d0db052a645c45365dbde70eb86b35ea2c80a587e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

