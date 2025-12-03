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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZTIUVPX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEp8INmqPkcO1cmGXU2vRLh6n1Sd7p3qaFFQ%2FHL7pcS6AiAlD0n2gREXSOdzO7PSVRxMSQxCZnNN%2F35B0mjyTDsyqCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMZS9jKDz4kBegvx4eKtwDTQUh3BnrdVOnG06c2GTmc9FurzPXj0QQO9tkWu5v7iTXUWRs32XF2unive7uiEj45HWb7vJnufsbeh4HSkxGHU9m4eXHv7kC%2BHd82UCrvn%2BFaq4gMx0kV6NlgfiCI9Ew43uOI%2FFlGrW%2FhpkUDYadA80Gh0F9R2mkA1KSjAacdf3Y3ExjKm28O%2Bu%2F1Hts978jV462QYn5mw6tzs%2Fpq%2BhL515olDLtAsef48DbStTfiL7DzRXXSF26OKAaIs6JYVCzj8S9kdppA6OjtpNLKh7oO%2FtrmtQmpTx5JEfy7Zp5aIticEdtA08w6BPzZgETrGSkm4FJygM6xP%2FMrxaR326sDQbjxRe6rwztUum1%2FomqNgLig4e0o%2BEca9ZrzsCgeCC24tF%2FWjVCgVpOBcrZ7VRoN06qJdVDkH03sLggqNeX6wOvPtBVIDq21YUbwK236DR2qZ9KgfVELrLdGVS7194GkdsFmrYe5cOeaRLF7ZLtMLIbScJFTSsIc%2BMn8j0Py5JEIIUqK9tg1xw6Un%2FweDw98BpuIX%2F%2Bl%2BUxdf76l7strq1OtyrD7eSC52Bl8gRp4gtmA6ABO%2BIw3dLAgMaZ7NZBIvdoJH0cF1wWGRuKSXHVXeybFmVR4H4T2MFbr4Ews5q%2FyQY6pgFzmMFEnlOtpsnniH5Nihuib0xh%2BO%2FwF7bPHQdVV%2FL4lQ8dj6zp%2FlKNv7HPdSpd8f%2BPFf3PfQoRphUYtFiDTrk7uoru8QHeqCVurAB65qeykT0U5JLrabxDrRIaJtU40J5KwqTF4IUuU4Cml3goELMoj2FUMiHwxI3Q06FaaGLL%2ByKGO%2B2j39NvLZvL6k%2FuU26clQngmkTJkcH7zqRLEh6dl97Utl%2FJ&X-Amz-Signature=678182543aad68285133e036c36f1532b9280ce0ee207393b1f67671c899e9cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

