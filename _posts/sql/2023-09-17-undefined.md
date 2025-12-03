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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO6N55XO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIH1%2F5wocqBrlo1zhsqDN0Ulq3%2FP1BObwWpWby5eHv7J3AiAY6ALNYcVIBCfeg4tr%2FC%2BMXuJIsn%2FaqfAIFTjdrARAtSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM6WNxempSd1CsDyD9KtwD299sXpf%2BuZpjscfduEChASNw5pkNlo5MSPKHLrl5Bazj9nYq8e5gP0Ed8TBMm9bs%2B9axlSGYNN49OKtA5MxZhkNCFxThQeaU7iadYPwOyICcsDF9UqM8%2B0WQ%2FMudWqALtb1ms%2BjBAwy4E1yKUa%2FPeB8ZgkG6SOVrDKTcDz%2BlKQWUYmBBc7%2Fo3dxf2v4iNGpJh2a4xp0rUihb60kZHGf9CEpgrvZevrIjvo0dcCthtcJSNaMOdJDo%2F9793hLKgS%2FTTBULTV50COv4RU75XZ5LeuydPA70rDZeHWiOTF4Tgo2bckUmrPbc82MVeJVcBd55aMidDgEKE9GPznvcbyDOxaOP7P3m7i3YZjbmRptZT9Yvm7SswlUCII0nkBzIXZaP7bmw81A4p%2FwbjtQPyH%2BuyEoxSWUkJdNOGDPKSJI1dBLCdNkiHaIUIUtaQE3VrieB1P44DMP%2FP0hDQARKTb5N2oLH8jmck2fuvTzl8tx10NNYoedo6aGgdWUBKRj7%2Fz1J73i35yWRhCSiXwNjjuCymhH05cL1FSspph%2BTYp5a%2F12ScZskBsTyyFoDgmXbEyXaUQqfeIVODSNRoCgI2b0iAlDudgsn6CSXgma3uqIdlcs4YVhCEQH9BhOVI1Yw2Zq%2FyQY6pgF5Eeq%2BX6%2FlUhYb8Z8K2WR5erNWXaE3y%2B3TjDH3l3tH6j2iIs3KNDguq%2Fx%2BAMpWMqVmN3%2Feuj3XogY%2BfW11USHhxoA87zT0uUmSL3t%2FT%2FR7wtfAEkxpfe1SIZ%2FwJxmFrcjsUD80eM6GHIX9VtvGFRmLcKTNaYXi0SJuRj7cHs4MkmLASO0%2BgMd21lP6MtKiN85KRSNl2Qz6ZVpalmQRPXQTeIQyWEy%2F&X-Amz-Signature=d9f2048a12b7f1d2ec2a97617945c58b2e73db29703cf57da701323fba2619bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

