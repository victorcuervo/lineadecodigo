---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4M7MFF4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDLDdxp2uTMwDlemqyKHLxYaUrTrmQyDDUT3mqNP3UJ1gIhAL3OVFU9y23rF19a%2FFvtwU4G3OI%2FWQ%2BzPGIN1dIkXHR6Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwjLJ08hhCvr0Ig9%2FUq3APF%2Bd06mBkChiKcCZWnaG4HU7Bbvy9eWzMf6A6OT4vBlafuyDKTzw2ge0LXFVfuIGIuiYUteaDYecag40dOB4Cw3w8untWoYueICBq6Ht2XCxXYKciCqGVERBszTgn%2FY4VeliOENYqCJKV9pvqW%2BRypAGP9QztIUsdxoi3d94AdVHF5jRBoUgPdcaO77xgMXKH5OjRffbq9iQaljUd%2FxN4LgY6RD9N6ku9W0WGMvWMHy8jitvn2ahV2R3Aa60ALQGpLyb%2Fy5akyPODbdDJvhd3zCWgjCLXXKmNIRs15uGwoC6edQy8uSQakJx6KfdHPo9Y5RSQoky%2Baqn2iNgorVet5%2BuUni2ZmLl9AjywmyUPE2Mz%2Bjol8xOFyoPC%2BKEXAvUfCtbWYdgaIMLr7YI6jjqUPFpaNtjIrEYDCG67JzpR1gDo13eOnPFRGnApUkAuXsYkX2IdA3a1ZBGxoXJjLmz%2FZ01Su4lsmlMCMI413QLJx3bc60zULAAdNFnhvs00a2oBzR3x%2FKIDHhyvdb7T7hxWEmeCwnOns7aBTRLewXmlRZ%2FVI8iGx3k2v36ZqP9cBipDfGl38UDfFb5SEXZgWUsKum6Oac4udlJvmcrk9qViF2WrDnes7uAivv1q9VTC51MPJBjqkAQUoDD%2FKoovMTuJXcnpBG8RX64Re4Rf6BC3me%2BLY3rxoPTEF7CAlfMcej1kxQe7VDz%2FRebiZgDteVtneh%2BMmzWDM2lecA1XGjCfBwE3X5pKkbQJoN%2BcUcYiXCr9hphIcTx6Vot1WcH0r%2BDpcdNeiqd1eSoE1xBYinqOSmHr2zQw%2FjSJlPgQfSSr%2FVMQ1HE0Nhvvc0qnWdxU8URw9gCCte7OS512N&X-Amz-Signature=aa4322115ff10725a28416c92e373095b2afdd346010dcce7ce15519ca109ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

