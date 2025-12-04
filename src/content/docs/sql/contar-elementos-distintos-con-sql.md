---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RHFGTWL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC9BLWuWqemdA6Tm6XGUmZN94mYyyqIv%2FkF1AkPM2cL9QIhAIJCjJsMzM72xlXZhjBttFPF1NjsqLKgerlhsdkSI%2FUYKv8DCEAQABoMNjM3NDIzMTgzODA1IgyMimY%2B23W8GOQ99Hcq3AONrGcq%2FN%2BkVcFYAI5hAx18m2zeKK07YM68DXyGlmU1YmCK5MDC%2BEI4AUEL7b3bUvhd95A56XIatBXJSRPWfw1M5HXOmIb3eFNXb00nkYGZMzWF6mOlgQDM8d66he7jyi8dBXWpPhcdxuE%2BfUxPU7BvB5oGZVh85H4isfSbpHXwCwzH7DNvLN3kGNxLSDNOLVQLBohue1pvbCOQByhaH71eA2kKo58zwDNcNbtPbPvoWf%2BfQtRacUEZ4aPOyOC0HBAZqYZB%2Fo44QznR9TlB1I5ufYal8AdkimxfP7S9dvFVrI1v24Gpr%2BJbeXJumcVVLUrNGOgj%2B%2FEkEAuZqjJw0h2edjnPR6eT6sko0nGvCFBgKkRY4KKSp6f8%2BidriW3KksxE24elG3n2XcY3QIIXTFRJBb7GBQakhHslc%2Birx4%2B6HOgYwknUy53K4OtiVtsp4YlchAfVytoGvVTpiITYnDxEmeFpqCC6hIFIy%2BWomtTEjLBiN6pBgHM78ZYw8lPumRGiZ7PAXc%2B%2B5sbkPXXXPkjMLd1jV21dGd1PL7qyzB2p%2BWA4IY71hUlvFhx132T%2B4kIs6fEiyNG8Ar9ROkYmYp2Z2M%2B9NhiX6tR0uFGI9vrVXYw4n6V9lz9tZ8z7zDDK6MTJBjqkAQWmBmpCdCaE1I55uPfN%2FUvXBAe9ZW2dhmUexpXzh%2Bem5zuOB3WMmk997Xy35xj2Mjn9fNfr%2Fo2LxDT%2FgtucJoaLWyz34SleK8mk%2F6zpkvKfTF9TtprAugHLkaEIV2i%2F8tyEa8N1TS84ZrrL%2FqvQxxHHa5Y9NS569rSXvc%2BfecZHqAqgBR9nRaV6prvAztzND%2FYosJcMONmhAiKMPxnytBdXBDTv&X-Amz-Signature=25cc80bfdb0f28fc056ca155a45fdb6349d9a3716fcff0298d12a2234e88c1b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

