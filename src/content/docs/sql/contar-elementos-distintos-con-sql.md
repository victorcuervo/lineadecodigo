---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ML3DVBZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIHP%2BJh%2BuWeIwrPHeUcfVLD2xTSdF1flULO7Klk3Sm1edAiB2K4Pv5ShPPst9TIT0agKd%2FeiF1sIRxKO9wavw4MntxSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMlIc2flrdab3uvjmxKtwD%2FvomBXcM1r0Qn0aFFodkp3ZWGMZSOmnoZgsZYEiWzFWvpNPLWrdCmsExrf5YKsVxV4AYmd8CYAnV4hj60x6nxeykij%2FIHGvHRlW17qU8OcPsGWL%2F7AupC2mwCj8SI%2Bfr28ramzW3RIM9oiINvqVNDVjee11AmYjwTzswTI3apwYswbk591Tgc8dJhwQO%2F5crnWwyCwaA47fWgpQ7ZWAER8lsXv9sSk5%2BZzhpElbNDnUHL64%2FS%2FfAhv8vHjEpotonq3LU8Mi5mNoXkPBA4kEyTQ8VP58OZRvPBRPBfEesXXOOmm5%2F9Wj%2FeRcNERxJpBLxw2q6%2BJiqzapOQzFXFBuWPGwWbuTYzgerqSPo5PiWSK8nouqht1KmItFHT6jVIFoNB%2Bc0es%2FDyvPGaOwpSh5BcMRtWf9CNmaURRI50TDpToxNJ7ybFrxUnVF7eqeqjC8x4df88N%2BsOz6M%2FKYah%2Begmxv9dgYXyRN%2Bk0TTxpcUn4Qv4WLXyps19jB%2BYF2cn3im5DAJeJJ92t2ZHhp8BjGcjpcUeQZXZvWhW9eGrHmZxlroUhMKZm5mBbY2iUGKiz0Xm9ULV25vZF0nVgjfiJvTiBeXOfGI1kxuxKa5dGYtwGMR88gUGvvSbe2yBhQwwIPGyQY6pgHxGXclgIPH93q9AIy%2FcDGRwgqSkVaBeGOmG0wVQsKtLfWREVm80o8oiqHxy2tRprTjvIBgtrS8ZaDblFKDmHyP9vFjXfTzDGWW%2F6q1bT%2BWMbdd4iQZOYQIcnCoccbp3hYE6AGqoDhG8PfESvng6Q9%2Bi1h6JHC6S7CD5qUgJeACLrp0w01ijLKCVT12SpbkcrORXFtCRvVjiXGQNoM9B8N%2BevXoA6PV&X-Amz-Signature=4f2504f74b4bacd12f40551689f310106b0cdb59b6195b10e797c607f3f9bea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

