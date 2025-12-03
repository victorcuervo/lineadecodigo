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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EWBKVQQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICUEoK6SK0yDFORak756M4QENktj%2B41Q7MC4Flm8O5PDAiBLaIKvsQQYI%2BR9ABMPW8MDEiq1LqRiiAcPeMw7IIBY9yr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMqpxz3nOuyXeDcfURKtwDiJUVe8900fBcTDYSQ6Th3ZFzqWFmyT6uoKI6LnrDPwJKkRSMDknGqfUTBlqpyO9d%2BqeAhndr2txekykd3Un94BEnThaRQ8JisfR6GTHnxWU0b3zhdYF86IAWzmArCaPK4kEUSxljM52hO9UB9jWYHmHE63SJGaqTlfyN1Em3gBbbZR4UMnjG376tmG1%2BFTDJi1lxhaFSaz5vQyWxa%2FnxFmRv0WOd8dW9NXilrdAKwtSn%2FBRXWP7nJamejgBfqF3Fx09lYV0DXO2fOPHWzAAKZpNqY37PN6eHQ1bQ3sfBgKE5cQUrYBfti39ZQKZ9SnAfSu5PqouwWeftmLk%2BD%2B10PbA7x3Xa1s2orhOnXkZkjnyNVmMkAK8CGeSXhEQrXxOJRDe5VY8yCRMpNOwQFIsnmQT3t2KEKU22gh2TqJrkXwB6gv%2BVGbQRsj%2BgKaV606j18g9VtggTWGTnI06Z7lWCTxh85pdlqLAAILHpU9m3tMv8Cm%2Be4UWvuLSLqrFXiUEmVsP%2FXMCi90nlWZUiH7Cf5aXR3w%2FKwJuDQyNkPY7yxLY7Mws0%2FO3viRY3GfnoPDvP0I8btvOoegVo%2B7NBcAA1xsQCVhH6B4JG3F5RmocePO%2B9M7rocHQGvhpO7ksw4f69yQY6pgFMZNBb6G1a1dTke0bai57d5mieigDFZ9dJilc269Uuy4BjRUxpwkFnZsegEyKiXJCu0H5LEMMwgANCsq%2BtuCFSEO3kAKvCgpmZsBdpK%2B0Qjgmbhyp7ljH2iUeJDxitxbb4L0KYIcWllVRGBfbs%2B4%2BHi57CxMv45NxhltSzWwyuXwrPnFxYT3h6%2Bcpz8gViQ7humT4hLsnlvGkg6Fk2l5ZRUBt8Tpjd&X-Amz-Signature=cc32a18f2a8b9ec8e92591aabb2c84b923fb99c9092e3b3725418669905b8878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

