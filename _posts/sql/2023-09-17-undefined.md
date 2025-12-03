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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YILTKUN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCID3%2FQ%2BPA8O4kNdof9l7RX2y1tb0m%2Bsi9jaSdTZg5RL9JAiEAizDw%2FA1F6HK1JoFp8Ah9y1TnLHGWB71YSEQJnys9Dpcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKGhXMQVfaEIK9NKeyrcA%2Bt8zsJscn99%2BEr1Vdc%2F%2FMgiAaNcEcCSL3V3jWy%2FjmXhQt9%2F1MLid%2B4R873epiJGCjsUJLU88MNDTUc1DpmX2%2B1bSP67R1dj4jpZSppvF%2FlO69wwcsX5IRLd9hGhSHu6WCJ0orTat4eAcVaXhodD2CPL37qjQaXtY1HmBryYLWQN7b5mpJTzLw9vZr7Z8vJWr%2Bmyegaan7nU2qpJHOP8txvm%2B4mLhleXOkqCAvxhhOeB06UXBG4a333DVSBVIOV8Q%2B8qZnMxnI8eWUGeDcCTtmBS4%2BfcAQMo0KSLuI154Z5LYW2BkhH9y%2BndVd3uNFbjUJDgJVilQKTjWxU3P55RjI1INjIZcXG3PwqnXdI6akp0Dr6pyRj2SwG7DxBi8%2FcK%2F0mKNgczbfTFnSWGUSx4DoEjPGHvc55NkdmGtMC9XEDxljGCHv2afIL3HCSH5%2F4Pldd1fz4BZ1mDDXtAP6%2BpahKToDhgeMI0efuOjp1pIGGih2ixl9YvbDFa%2FaoFt3XylBEGbMxJkOnUS4Xalwshc5g%2FAikp3wGnw2POkWfBOwrD7Z1Vq35jNX9qUhpszA0ArOvP3Rhe85TZ88qwuDEBMI82waYIAIz%2BDvSgR2KMtsfyiYbvJx%2FIkAgbyygRMOr1v8kGOqUBJFYuIal9FXMxGRXdHP%2B8x9rFHxHdFNvCPc68I%2FznSY1O0%2FMeCsoaeKDv9eLBz%2B%2FLUHPZApBcgoxI8kZ0ZZTc24ZhzEYR4%2BuRXq2tLptxu6zqX4mtnhM3XuTCZ7zqXDJ2pB7cgpUSE69M9eQTKYCXWXR7Rry4Z3U3s4R2JO60EosSLNq4qH0NTGy%2BOWfBr9aOXTluuDu6jCFQiK%2FqCgy3LbFlkUaw&X-Amz-Signature=df56d566c71d848084bb1adbe289d577f9965e094e4c1bbd5f82f0b218c93bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

