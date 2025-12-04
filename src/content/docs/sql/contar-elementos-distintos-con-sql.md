---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXDLW4CI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC%2BxmwhFJfQH3o9%2BdKZHkelLOS8DUWUJgbEZucY3MXJYAIgK%2BDmBzuWYa8W3Xgdl9e%2BPVPPRF66%2BrbNPpfsHNCKTiIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHoRwETFrotzy4jZVSrcA%2FDrVg3%2FXcmxSUk5Kz2Yrnz%2FGYNms7q9NJc9NsSHo7YaE51MQ9AT%2BNNLbVtE%2B00Th0ed9z0mW59dp1PtYTFCyVxxA%2F9shmbUqyGnDjG%2BMY7UTiFdm4RPqFfdU5%2BsQqM6KXqqY7Ib1QkWYiuc6%2B7Nsg45cs6kS6E0rnLDFDLhMZEVEf2h%2B%2BCtHtypyP85jOB4h97%2BZ4ZHxfSaxh5kpy3JTLTJC17pyaScmfxBAH7KAbaKF40sLV5yrOpPc5JEBD6NrNk%2FAc54Vkxss89Bw0iUrUuceCynDHLN%2FCaHJ33hohvx7bI1TcxFzR1GWr9QFoO8LD2hmBBq3i9319Id957otEYDkXFwxaFOcaOBZNAwZ8YnbtPbKbup7dhPlG9VQbDQxWCXEAJMQ79EP8E4x%2BrYJ4aimT2ymY7AWDA8AZaFG6%2B8p%2BqzeQGcUDPKaApncPLuvR5DZza7q6JmEmWwXUPd943RCu5eVsHGol8Z%2BNp1T8Ay673aAImHmdh0NAtjFNIxRds4nL99lSpkMXvz6cCGAdgEsX6g0T7QJgvYCHFSyaCN12WMnxRZv6gz8BsmAIC2g3LByCgyY3Pf%2BTRMNG70zUoGCLBt%2BDsrPAdUMhsTqiCKPFl6AGXU3%2FgRq2udMIKhxskGOqUBLG96Xx7WHp6zrU3M5m%2FusfzJS6WUhJUqfDvK2n0JIRIzvK%2B0LsAP6PoMG5lB8mOM2jpORHRwCDj3QhJFVmuaf8RQYj0%2B%2FJZ4DXmOexHhipAvf0Cc23ttyiT4lJ8eoEIisFL60IMKUKygmQZJMQ9Pl16b7l91KyKVZqQ5Ku%2BSchWbayHnN6j96QPg%2BGfgySDN1QQJk03p4I%2FyZ7oKvZNjlYkNMt5N&X-Amz-Signature=a569ceba765061d63550527acf298dfd4a5580f75c18063bcf4e21add66b05d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

