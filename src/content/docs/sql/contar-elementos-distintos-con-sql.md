---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHU77MGK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCHoyXhUlQ06ONHB0jasU%2F9APBb0PKu3yRR9BuxoMmVZwIgN3E9g4%2FL36yrl1dFPK9JovulE9GXIIrPFuHINj00Bj8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHYt%2FjN0wsbkuC%2FO8SrcAwKzfcXY%2FsNN5gnWwxSoH25c%2BaFJGpxRy5Pnwbldmp%2Fa1w05NWPJfWi52reEY7r2YIcSvde1elGoUI%2Ft6hXWp0aNqcLpJK1FxdZScJm5gjFYB8zXfcdoM7lnrUVMeduOc8SIOZGmvuc6wlmTP8cidoC%2BCf6vk%2BiASdglAMLhpv5tq%2BwLYO0iijmT0BdmZaEFOj2N%2BaM5S3DoBtbqRhMuAsUXZ11nm5Ah7gkwVSEb7iucgu4PTZXoCYPyTkxFq9zXyObG7f26PN1W8OAz2d5DNcGmPHgpG%2Bn2KrGYZFMObDSO9ypQOtqdFP4Zkn5CjBd4zULebK%2FyPQAZ2s3k9ZadqnDKxm0kUBGal8D6AH7K%2FLXk5tb9MBGDO%2BhVTPR4KeD0KWiXpHlIwrzINW%2BMBC4EmkUj%2Bt7pKrTOeXgwxCBVO5LnM32uXw0oTmn5kt7K274IIcGsEmhdc948cVznCvShI8Xq7ldMBlmfNA2cj5XZB08WZneSawFNzVggQNubi9C0B9J4Vwle3HOnzG8uUYwfRdZyxzRxg4RftzcHZq63FUtk5NSxgjSqo1yuI9Z6BpZTQPeCejvNLLb1ylXvoSH0zqiBnMBa9LlBZMNBVXoD4irV2RhvLVL8uPQ%2BXtA2MOXTw8kGOqUB90c6jcPavNSuTPLuNsOpUfslQVxeQgsaO3Tsuan9f3ob929elMLjQkpY%2Fc%2BVhnqOy3Owt8dCW0miVB7H3xpnJJeCFe51n6PU8lolVBAfWoeM2axNBuDA0Mdyb%2BBAMMnb31bsyp0zJv7C96ZROqhqWt58RlY%2BQ1Fc96%2F1VDNm8Dr5dziaCJhP3zt6%2Bic5lVYN4v8XYlXvUrcVb8dzSa2MX%2BfXuEjC&X-Amz-Signature=cffbfd17201a5c9a0e4902a0b762301ce43836186e8caaabe6c1fc124b28b9da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

