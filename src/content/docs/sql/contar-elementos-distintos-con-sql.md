---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ISJONVU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4BADl5OgsJq7r32AYXIso73S%2BhkxlUrCEEOlH3XqBegIhANr9iOAC9WC4n%2F%2BCzDvvxY4x8by4SC8W69fC5arLsjkZKv8DCEkQABoMNjM3NDIzMTgzODA1Igx13Uz%2BlH%2F5ZTMECLwq3ANxHq7v%2Fi2jLAIb5rF7FAuTFOa3VzbC%2B6uJ3ozsRY8s8pFf2fEaA4y9ffZQK9skQSbzjW3H7jgoJXjhkJK4VVlUpdRvvg0ArmK8zObBoIchVzCX6gbp6%2BEhgY8VCHdRgb0vDHKqE7nrba5djBIiAX6RpE7jeOk%2B4uG6kH7KO8Jk4oKhJB4nyYYTpWUijtw%2F0B0JfONsi3QUBtH50DfgTwpnuLWPuqLRpdI0rFUog7Ga9LycYdvnP4mezXIgfUoz0jdgZvrDLOAyvq841MQ%2B%2B3E9C0oWZiWlAnUhjHYUuVfa9iiK3hlVlpt5ly1%2BOWgFHjk3t6l9UH54DVjws8TxnJrY39aRQ4LDPeZQ7QdNDx3egIQRRJ1lgGelg7jcSAHQ6nu3H5b9OfbVYTbDN8WqycphuxFEZjfrjMgzsEnZ8J%2BlRXmOQNc1xW396ETnavtVXhd3eWbFsRdIFr5PXIwJUCSDjeEO2a2OOiDYpJPnws5aw9Ti00w36oEIXNbVwDLrySnK%2FPX8dxME4xAWqmr36TFhwHmbHEZ02NrZZLfeJ%2BwWSNQH2oNeXMfTBVTlUMAHKNtUqx6SHD3KKznDMsv0YuMaH5h9eclO6tDAIPHXblfWOhYkqzMB310SleyiEjDU3MbJBjqkAdk6SOZJgWYzpZlrZFIJ96DgVfEEytfI8i6FLscQbPdKf%2BI%2BiFb%2F4ifwNkyTjAzSssqizaaexxRUizqc2uqud75qsFOMiT8lyDqXQGgvBB2PLbmNNYiIZfJTDJIKc9qzN5gysDRkw2gZiw82HSE6M7KjV1O7wKonH%2BKTom8MS8HkShQwJfZn4FrqO9PyCABd2aISNbtcrF5uNenSrLROfqckv4rM&X-Amz-Signature=130d7d4aedb56cb434979b6dbf05fc1c46511481542fc1131d17b7ce733f9dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

