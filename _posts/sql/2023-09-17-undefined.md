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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O435XXT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIH5%2FPFYTy%2BCRmcUArE9rNTe3ROugi%2BYFkFkLSgth6l3PAiBAdze9H8Aw5eNERRAwgBztzg17vqUEyasokAkG%2B2lK1Sr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMDap2ghni%2FcGT9E1zKtwDqKViTYZ9AWFB7iI9BDW8Exmr36mxxWXZyCoxzDKDu0h2kA7Ea4F9vvH%2BAc3f35hSeDbnlGIHMlr97Aos080Bv5wRm7w2av2HPKCZq3DOf4dGViadv2K8JbzFgOTza9qVfTRK2XKJdkn5PQHDFHN0%2BwSg1UTpInH3GFCB2pdcTYzqFsdUYvfYmy2sBS1DpEWidjcAUnrJdtmwoUbwQ55P0%2FOJU%2ByGLlp8JVPl03P2CqUHwvaE9BIGitfEltuwYhBvNrlLGk2gf8Sx6opgUwRl4jV6WPMzF3UqpsNcAYCirQMVotTd8L0tyiRt99bvxqQj6p5x7CBrxNK1PUFnShHLWD6jNsfBISXv8RINfxTRNpD%2F%2BxCQRvo0DAG15sElIeB%2B%2Ffbkz1KW1gKje2W%2FldWtcfSmDcLGhVmc8WwKdM%2F1u40qoYH5EJ%2FBq5XUt8Zy7uL6rEIx0xvvp9nSisb3MVkcDB5cL3mzv4ajpcKS8BgA0y3dvGwULSJyr%2BcNTAtISWAJW%2FprlgpC%2FEkPFqpLGOIEYAOJgozUI1GqBsxgrdVwkupsiNDILkYD235pOlLbw8xqb358TVfw5qEj48W1JfTs3afnY1f481EIQOz6pIqnhDIka4DCj8sLs3IJXjMw98zAyQY6pgF21VboR5t6Z7knsF4TFRh0RhNcsJ5VlN0FbYguuOPBf58YyQLSytizB3TeROAEeIf81nLr9TbszpWF8HHfI3sDlNS4u20mSo7iXTX71MIDcah42HZJPpD1IZGA90zX2IBrPCywNsXP32udKS%2F7wlz%2Bx9p3vpfRlL9WKhA3Xn4AR8TExjRH3cnoOlq%2FA1KSuBAmLLRu0VXNmLWTt%2FiVlTD70jP9aCe1&X-Amz-Signature=23b6a1d1e3f85d9f60ef84e2ceb34d5bb09ce2398b3504c208afdc6c0fcd2857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

