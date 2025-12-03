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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR22YNDN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEPUF%2FqxylWoz23KONtueGC5dD6hiNjazNF5oPTnZLD9AiAzjDgCDbKvrpKU5P87BKzrTKPjooD4iF19IuzbkNLneSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqKMNyqfgBpT7Pa4qKtwDJS0EQ3PYlboz%2FUF4bFXK%2F%2FOBhRXCroAimGQHPftzLYaLWp90Nq6tT9yU2Aoap39jEPGsxyaVJC6snFZqKrJuNn9WbRFWKczpn5kDxMFE5IIBf2DGbZ2%2FqTD6tGMzPOnkeVZkbIGlygU9Af7bvpj36HtLtx9UPu5SxM4L1g3YqZ11%2FzViAuPDv2d%2BVE1rmlP5DEWKBCxavVC95574uTjdbKsiqBregrmsSrpUj6juMek8jb3QkpotgVf3UvvIbuVT0Ap3cJP8KAdzINKmySl4gQvUVPwoLr0LS84WgD5kZwbXAXn3WO06AaFWCRb40P0iLKCuuf7smhxTFtSMweiXMLJdp1g9ni2JXfyzxwsBZ6rqKAtgtGagNIdXHgPKDd5LBww7zEJBAR2jrjJACpEYx8j576RNFHbIZra%2FS4Sq3%2Bdg4exJM6IQyiOUjSYmcSYVevLAI7xVAlCSLG0U42jRsYSTaoOBP0Kbirs%2BBt5G9Jk3%2F3NOj13NyP%2FLPaIF6CmVLcaKjpG57gdfKOe9mYlljRvEvUHtLmacojAY5w0HMMOqNfot4gxBXP2l0IxGdDxQ3%2BnJKyyhxVUx8Quyxn1nlvyrtRfsTqB1%2BFoLlcaKc5D7ckSieidQnYxOUSgw1pa%2ByQY6pgH1yMQDw8fBUNYNOGzij0iF9Ma8YE%2BpPltSwcaet%2FBW5aTOCZ1wTPmiROfP2Lksba3x3WQgpHHpfjmt%2BJ5mgNAQBl7MNLmzyxOv2KNGN7mW59iqGs6%2F75b28TleuoPBzkfXCpeo2IQcCRpi9LM%2Bpr8UHQ6Q0w7KaMmU4MIBwnCvHwWSKHtmbUX46QJ99EPw2rFw46iuqQPvNmNSO7DkFtVisaDfGM1x&X-Amz-Signature=631692cccad1ab472dba0615338c51b4055d57c68a88627ba248c31e9af2f51f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

