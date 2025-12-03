---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGNITHXR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCMIu%2Bx74eDLokOwDEB%2FvcPQKKJmAXybIGc8UNUGBNV3AIhALn1kAzPeCTVq9FYNYYmG100GWQaeOibVj0vNyNKRUofKv8DCCIQABoMNjM3NDIzMTgzODA1IgzbcOlPYxGAMUrp4Vwq3APT1N4LeHFaOoUDoOkOZQv8ED1HJ95FL0ny86zy63YyyUBwTrF8YnrU8MLIKI5GStkPrWgOwMcGAsVp058DAMXzNo28Vxxk5VnqH01hdluxu2QMtm6KagQKjz9Jwtg97qL7KTht2K0FgqhKDHOge65J8RFUXh8AH7JvY8ylCKRLyoHeHXge0OUDnu513hhM%2Bqd0kgAC8oizBkUCWnohjj12e6XWgr7UJnSUacQYijo%2FtlxxHKVHi1JlT6gffAjDBVFJ%2FtGxxDp%2F%2FcGKdynw5aYZKl7UEPVOrni3fmKOyEJVbd56atauFIFZaw9LO%2F8zdzMD2jjVN%2FTuJz22V5uqE3oVfux83wOljirs8FpgnBNTKVwyFztJcyRzIEPGKlN5k%2BwZoHwgGaFUnR0tvX0EvaDDDrDfZ6dkGULkZWBGpryoPrwNl940qD6KdIN%2BgY%2FCf2hpeLm4z0lZSyXK%2BhhUbi4fcGtSrkC%2Fljzehw%2F32BP6VNVmUq8qbo6ujSg78zS1JcSAOboaquXz5AlZSRnowUu%2BWvC0z13BJXHSIP3Rb8VdhuBZeUbYYKpiF5wbbyw13vpebPKDg0xiaGtkjCyNObyEHqfZr9e98B2eityUQSNbB5fcmurnAuFQPwe4MTC4lr7JBjqkAfOVOpsizsii8e6UyHbWJ7IxaoltTTqL1bo5DtWMBajyx9zNuxvpcTx5RdfLnoN2iqNj78IpyCmnAq0sno7gx%2FH2owpVEBRWzaoig1xRZeEyi8wTcKv8RJDsah%2B3unGhswVCvZIVRjYV70oj6YsgKsAi6117ySPN7fJnFYfzTYEznu%2FIlOJPxe7C%2FYBibM7Fd5Fynt7EAd2UWYvWWfTRINM6io1p&X-Amz-Signature=5469c4288ec84ee6a63bac1ca0c165f3313d9db44886c99c2f90db3893e474aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

