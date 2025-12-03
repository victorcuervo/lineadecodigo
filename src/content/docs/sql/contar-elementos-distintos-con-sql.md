---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SDH2HHZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFvkSFQYC6YxP5n8q%2BSWftZZ1HNFmPKcKXfi8anpGu6XAiEA1dLxUPsi6JWExxgdUQOTvs8FpnqnneMZ37Lg%2BBHwb4oq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNFmd0a28L6r4BcOBircA%2Fgxz8WKLEQ3cM6AKAPOmK4ksYuW5oJ7S7zdYwttxeFezYerchu9IYziXojyOVFHDNHGlvNr%2FsDr3dw4HHpBTCR1YHtqS9y49BCIaj3tqgpRqgY8PCUA0G5QDAxicgpG%2Bo9Fkesh0D8ugnC89PLh9ujfT101Q22o0RJ51brdl5%2B8oivOhHqOtt2dJDEqyOomrY%2BdvTYeqH2c8tNcpQScUzvAbOv2KXtqD8H%2B9k2gLTdYQqM7rCdtbd1xeN%2B4QzwVCVMA6YXrct3tDGPmCZwmcFR56tZmsANfl%2B37o4mjBZdcSQXrdiQ8614SIyNQlv33MOJrI4DwBTQbm1pq2OvV0KwvHnT2KcSZEZ1Q49YWzbg3hyVn3ZUAkBMxGZufyzrhU5f5dQ%2Fejc7OQ%2FNCXnPDR577pryyUV3JowgRhdXwKQAxCLStWpPI3htOws3Wv%2BIvms7h2IeUTu%2FJ0jPQ%2FTVOC5qq2JQDutAXfW8x1ylXv1%2FQmkED%2BSnMipn9PvDT6G0dtR6Bh7Wa%2BHcTONj5GkspwGZD0EYeq%2BOylvTfV3e9q0Xx%2FlaXYe6wP9oeF%2Fa0RtsawNUbYWNJJgtGJFPUI7L6qvx7fLXiPrIj8oORFjC7RpcdECEedtfRy%2By1jz5wMNT3wskGOqUBV8nLY%2F6irDr6qkBPcww2KQhijxhaYR2uPtw0Pf17vbrLVULGHlE8gnJ4xvaHHPA3tPx2sV2SOUU%2FZv7xW6BNCQMPKTeyOFXM9LVmZKLgK%2BhadBDpIL60Tyuya5JGKmhZ7%2F9w6LmtI1yNYhD%2FRIzXgEDQ6tqjjBcow9lcWbfbFpJC5FrTan8jyEhfBDwbahEpNrm6LMPyrDA2wPxI7tPDq9PQR%2FNQ&X-Amz-Signature=9e719813c2399e3497b18dc871748aaeba66a665c26efa69b5c5bbdbc70aded5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

