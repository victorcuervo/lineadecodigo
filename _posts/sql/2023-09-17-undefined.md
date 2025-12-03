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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRW5NRG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC0DMyw9xh5bdZRtTUTtrZ1oDIWQjteZyMZJJAPAWKinAIhAKxiae8lWq9ULP%2B8myk7ihqCxjkKVPn4recuUHw42g4qKv8DCCIQABoMNjM3NDIzMTgzODA1Igxyehu%2BfErglo7Hp0cq3AOdyN%2Bas5OFtgn1ecmuNLq4A5vwXawXI22Gao8TIyLl7%2BsWqIV9rniS%2FXP5VC4Zxe5t4%2FWvN39Yvgx%2FJr9r6rkAGBw4vKAzXtsE6DJBgd%2FPaRZMQAhG6NR301xWzaTkJdKc4MSX01h9DEHGafETP%2Bb3uiuxsS2qIFc9XQHbmmbT%2Fu6ONuvsBiKi%2Fu2BwdnMl5MZnlQPXLR0Po9c8Ox89ijg3NH6stsBlA%2FLbNc22cDT8YsjZflX7NGamzUCDqGBuTV3eaiZVc9UAU9MytXfsLb8w5%2F1OQ3QiAOgf8Yit1OF3wANmPIm5SWsGXO3mZs2HmpNjzJbkC3E90xfiZkchHKWeJvOJJsQnv4qyi5wzPMLDFmGDzOZqU%2Bh%2F5qN1iIv41kZs5iciK4eaHpNQHiBN5PVHEGROs3jtIvylvEEbBYXlF0KlB56fleUrXlmGEVHpkCJiyHWppOK4oKw%2FexJi5jj13FLVvk%2BBf8xc5HdosIpgUoFUmYneh5pc%2F8anpycQ5vfUwXAIM0VGJTs5pB1dMKjaAblVT9n7INXEqg4sKkVz4h%2ByKtyppEzdOHoQGXrJcvZZDzhJIfm8Q1GbS3VSlgVF95RHhabNZVxoByHMjQd9bGyk%2Blqy6LN2YnqbzDSlL7JBjqkASzuZD7xqTiSzu%2F4llQfIUbJT03T710hU2iB4lDH5qrN95SkWXu9rpX1%2FPhn9d%2FjdLG8VLXV9ctJQiWPlSoGqXnhIUPgVt5OhKVTHuBrMutzXr1rACsrNVZ9U2mdMMEF0s%2BYApTI7rKWGTutT%2FXSBSiF4iEAHMF1Zd1rsU6JvBMXh9hPKrCAdXAAKusnFk4UKdejgrg1Go2oF2q0g8kP6SvsqDTs&X-Amz-Signature=675124aa3ef964bf0bd6d8db716ee7ab22a459611a1c268d98cad8ef7d52f3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

