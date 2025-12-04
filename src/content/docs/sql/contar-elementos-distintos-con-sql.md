---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXTUVDSB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPSMtxe0fk2RpEkJkyJT%2BWrmRDXYkGj1ggXDrcUmvZzwIhAL8J1tm%2BKKeE6K0zPE0mwL9WOZMWsIV6rKhNsu2ixAifKv8DCEoQABoMNjM3NDIzMTgzODA1IgwUixfp3%2BhozcFCHjcq3APB8j4%2Fcxz95MRIp2ugPbgfJRuiJAMKYI4ewDQNBF89FT6nJR7ylDFXPmlCQn593Em2qtCpe2GVrL3b7EYD0lCkfyjzVXr9ybolbmKIifDv8jPCxPhXgW8S%2B%2BYU4HhxSWQZvjB%2FNnNnxaZXZcKVxj8A4TwDGQkeiydcf0v3%2FkdUjjBmSQhCFTPNFIlbKcKvg7juH0wQn923DdMIDDdng%2B5tMWAsjf80Uf7IjsttXU9g5gUUj3ebQ2Jcr3dYDfGBdkUOxIjvMrKVG9Qr0%2B6nkYskYBwwKyk1%2FfUCi%2BnEBsSLlgFg2IN4QtapNIyWHxy5b5d%2Fsx8mj49MlbwCHXJ%2BYSsszXsH6KXaxl8kMjWRVNppnEiwUODokgNnMa54bbWZENcjPf7aAS%2B2XTsuGIDf7VU9K7LiF1osdaUEAJUjlB1OQlNWWCC8y2D0gD5SRkn8gloaaKYyn8FXDjXDCEMLe0lWJkxSo%2B8wsAIIJ1L3QiPAR34gLCsJXvv3F4xrWaonVY7hBfXP1QDUdauE3eT2Du9yFeErqF7HP19DsY8pLHqdnYsu7SgDNTAWrnead%2F3TcYapZlT4aRLipn2Id267jV2iiJaDkS0iJjatKx7LrH5BX7Q1iW4yx%2FhGqe%2BlYTDN%2BsbJBjqkAVbjT3KaiTQVzzldfnmn1BveVQZRqivDnbQ%2Bz9xRR65fvfe4XTugGcbeBvm%2BWJ9SSPP%2FjbeGm2UHyNnumz380VeMMxDSOpghVDIV4Ql5xDeVZb5dAVvHtxaYhx%2BH%2FxB4xFrBweW6jxsPQaGRLUNB7CJzNMPJnoWf64DRw8GszjltwfWyEL5Jg9ZfONH8QvLyXwHmpILHG91R5uev%2BkQnGBNguRVo&X-Amz-Signature=3a4da1d852a303d1c80c573d808644b0e605483cae6f63ee87ca816ba6346cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

