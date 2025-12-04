---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RELF35IT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpWU93nhygrqQZwxVwlyxvnMN4N3LKUrY%2B5wKvbuqUFAiBN6B5ZNsGaioNlJXja%2FXfffX0PcnTevVr%2F0%2F5RmnmF1Sr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMIh%2BRLU1Fq38ZV%2Bp5KtwDMrxejd4120%2Bh8bRyaV25HLYyu6am3j%2Br%2FWYoxzcFAsCYT3esotpxQClqow%2BFCh6tFZXNlRnzdUKVWhHX4LzhjvOX9ztIACX3EbIKFRFoekWhYZn0OkFO4KE3fGxGEd7kjUWovjeZELaHUZd8KshloX5p23JbPbEoNtyw9f3Hzkfwx9oQx3BjotbXqib2l%2B51XYQqDXf4Ei4nra6IpWA7gVTjixjDHTx0hbPcC%2F4YApeWKUJidjBhElJMcKwfKDBcBicomR39P1qOVilIpwO7i8%2BXf0StuDAAFzXNFMUrDAMJZ2DcmNNgFWgSj361XuCFLld9ufxsJwXFnZ%2BQeZRheoSl5pMvD84fNmbQQFkvJCzj0jvtlklQ2xg4RazgET3pM%2ByfBibeIZT5eXDiQhDWjnnOhCO7JjV6UtryyXLQG66TgLhWkh59RbUfcctx8iR4hsDHfRozUsN3Uu3zriQUJqgKmwLJ8Qb8ua44bwJ9ADBYlirDFSDhs2nCGLY2uwCGWNzjYdPCBTS9qMGVbUk%2Fe%2FbTQeSGCxMt%2FKftZvPecGfdCShS22le3Bzx0mkbEhHEAPw09ekUcdNjDTN8UvoLToVOCIJlSsRcFDV%2FlX9m2CmscKTUbpbCRmnZhjUw%2FdzGyQY6pgH3%2BKY8YLARb%2FOcbsY8usz1oiLqWnV6LRA%2B23EQQcrFrJM2OwAFDg07on43nRYybsRk0QHbpLrOg8EGQM3Knz1cZwbb9dxMBtaRrCRXTFa%2B%2FgFNn3jL5G2PBiztvoM%2Fc7Pd8kZJE6L4XGKVF2McKBPT4n4RHicBTfrWlTgraCdyktr4lUJiwEIFYOtRcyKIcnTUS1GjqLyWrMD3jRz9XXnhJtW2Oqvh&X-Amz-Signature=537e319c5b2bba6160653a130bffc77eb21417b0c13c08521335f8069438dd96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

