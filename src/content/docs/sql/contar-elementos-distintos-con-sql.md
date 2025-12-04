---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAOROHB7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGKRs1EffangQC9hJOe59PZkwqVWe8Xtmf%2FzIGF8dc4IAiAMAS3iRRkj%2BoJM59IQv1s%2BweLRVBA4vFSjNABMO0t0gCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMuB5rCFSS3dFyBOpuKtwDU%2FPk0gclBFAT8cs%2BPQfBxSHfB0dhdAXBGwCwvPHFVKbqI%2BM%2BjCEShk4r3rVMJTlgx9fDWqXFZ6lilS6oKvz8uCfokJVS%2BvQd9HbrYODiy4a0gRyf1f0SXn4%2BNa2NeS4%2FbxrRfZPMr8q%2FzMpxxd3Dwsm7UZUpfKqWze0o7iwpbrQXOlsXoW3D3uv0918A9RzBGSIeq9HH%2BxBBDzgieAkFsOSL6zn5HeyU5TqWHXUVvbUg%2BTFDoMHtyiOUOmtYAu9OnR0vn%2BlMLszwUs%2Bini4CzSY4G0ClCgAbmbtMoFK73gF4jFE6VZ4O%2FmiDTeBEPuFmYh3D2XwHP6OBQM5IcbcLaVp06AlQyA%2Bx%2BXmccfQHJOb5syiQlM4SqQghYUbG8e8GogpMG3euRDDXQu1PDjwE2mIzko92rNO1%2BHP3dEdKmhvhNCkfty7JK%2BpbdUolVXVwvAsOi20VRgZ%2F2rMIXmVtI2LBvYCEJMCE55dd%2FbjrjX7sQTlg1Jt3tvbuntSUUaIfHI7XYPIX8P7WQqcg9MsThZ%2Fq%2FlcnDpfma7H7QAMLWqvKhgktjRMP7HR6L6EiZ1f3UBj3xE2LZ0UjpBWYMBcpXQusSd4aE3GKVOv60iEtXLZCqwGhRkLITST5XRwwhdXDyQY6pgHJjXSxyCQEQnRnEKYRMKFlAi8KYs%2Bv93xTa96cYXgd07P4e3beRhO21YPqNqtrRED2jv4nCmSd%2Fs9GbIAxGUSDtth4clRnsJFFmEGJagKT9tHTXFL93ccdMZI7Acg3HdjHwD4ibM2LaKscBgEPJRrEUbI8K9OASkH4vVCHVHbCjv%2Ff%2BBbASXkejKxQ3rEVI3cUoDIIlif8xlcvi6HLOyPi%2BxZoQFfx&X-Amz-Signature=e770da4e0597c346b58db5ffa3cadfcc5b8a3a236be14530eef0388b4d85f606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

