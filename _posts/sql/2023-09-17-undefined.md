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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUTSFAK4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIHDR9KlND%2FQy61VItmNWbd1qPazYC67X4AdIxZZk2z1xAiBFOwH8qljIFA1XAeNDYORls45On%2BtJzlJE7NAWJAU1gir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMjsuzihzcG0uQ92mhKtwDU%2BfC5H9NfPc2WXH0eV%2FUlUgbXlKHgwfuPOHP%2BepBsA2Q%2FqG1ozOxP7gPYhvGe9IN%2BOAJRoKRPSvnXhXS73t5FlI17L5M1mQN%2BPN2aXQLJ9rfQzlofUQm%2BpeXI%2FnMsXXryXhVEQAIdJQzmBbvuFayCbOCGXTQxx%2FahqZj%2B5a7En3I6iUnBMAsvbsGoq8ix2vBWfQv%2Fvl62yFRJavPGn5Xt0Xsb3%2BUnD8js7EWx7Hh9utGtVKz59MbhWdHBL%2B%2BSyd3NZJdBe0ApHZOvS6lOICiSCexAlaU4F50h3hZaPV0ZBhNKM3cSQVvY%2BH6j5%2FbRTIuWuapu2Y8O%2BMsaWAujGpgnBoNpktPBQR4oyBYxdNwRofZOkgaT2%2FAMkXnaX3LWCs%2F%2B7I2uPhqRlAEyOx4RhFQucg0%2BEJrsw60d9v96d5IyGiz0xcywz6XqXLecWpQ8yYSPu11iH2vYgPSQ0FIQ77oV2w1ZXBpyH2mO0lVCzYFmy%2BdXKmQRzw%2Fc9k4fIiwDeV9C84aSG69B56KiY9gAugV0%2FQrY8FY9KnTx%2By2d4wdtZee8vK6wegrhJ7Hb7qOcsDQoA6JnPFx5a%2F%2FrOFNOY2ck%2BAHZ4dfg6Um2d0ol%2BPb8AKaLszsYT%2BNdCRXvEwwtabByQY6pgFGmd22thh6Dhh3EkDQa2bFgQ%2BdBl73nc%2BROB5Cp5%2F0o96Ejmkp4TmRdM%2FaIgHuDm6bPmf9JV%2FKHJ6jMAEk%2B6%2BDg9fHbCkRYz6Ril2rluPItiVeJi5KVG8ZaVlnyt2D7UKeFjhbH28NeEHEarnUEhp6me8vijKzfxmGYdaNk54VN4Ivjr6VjaaB%2FMj3e4T6wqNcW%2BxlwKwucFhPmy1Zju2t1d1BDKnL&X-Amz-Signature=5bb9adf15015c5c525ed2ab59d56062fbbcbfd6dfa031190d9a55b3e4ddb7b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

