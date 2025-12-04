---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7WTSFHC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIEl9pb2QExrU1ESWfZwr%2FO2F3CbLrb7mhLcV3UCQf1vTAiBaJ%2FHdsvWP6gmKQvCk66CZ2zpgw35SqlMypgcYSEYP7yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM9IuF2eOkgnWiwbIFKtwDDURLHiZ%2BKpfzOpxbEA6f3d4tf4OE2CuLLzGbOsO8r8uqnz0mKUiaVO9nAyHVBissuJ028tyx5AuvLjkme8iG87nYJcJjxzqXt8jBKwLJUlki7aPugxxaAURCmSTBrvQkJfv8ENtIlGLVVPxJRpl7ZxbBNIS%2Fm0%2B%2B5bpTXVwZyL4LvI%2FTul6n%2FVkBPPceGRx5l6L2XpV3QwCL6%2FziEDhMhEaRwcodPopwAmdrr9Pa9mn%2BUsSQDN%2B3MBFHHxIRWZhbDaoW8%2BSKQqT2XAWO36LH6Udx8Pm5OKJ%2Boq0DE8X3r%2B0%2Bsv9fRNgIRHkRXK8Dbr7L%2FbCpqXTyqWzfJne%2B2n3IsSyW9XKQkEecUURxy3gw5GJ6koNm5DRPXxvrqlKXrvS%2Fl4aXAViW39xqpcHu2BSWTF8RjCzjO%2BpLtQ0Jo%2FrBAT5uBH6bognndCnmWKLNfe4yxnzb54pNY0bUd3IQHbgEzo%2BmMVjiB7zGKWjEKVrzZjoztlI9AXke2cyBRCZh2czg93C5bHIbEWn%2FkZIDDvsiQXf5sD0mjgXgnu6yHIl8NMA91CFUMUkQXgztR4lOwrbuV51pY3itUdxYImi7q6g4pav%2BTB2hkjC3x%2FZ7yxJaRYDwNBPwym0HxPAnX8cwhLTDyQY6pgFVhwa9MX%2FXjkoY4tVaRe9JzVvx3164zCyEmB3NMsJT7%2F%2B%2BxGhULa8dhgtfcZZHjntVy4PPBplYmuxY8njLJ65TfkblfrlUkHi92CwcWaa3MfclYyK8XgEsNZVOWaRdhBSCVRTGxm85%2FBxC7%2Fw4UOw0POBb4D0tD1dMDQZI9mlin3kPlJOFhqAGGgFN5G5tRwYe7rxOhx5rAWbCHJ8yomb2farIxlTw&X-Amz-Signature=58eca8f912f8ac1d81cf604a44bfa69c99344ba2348835fd8a819b6bf1c8d28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

