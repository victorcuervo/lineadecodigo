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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3VDGXFG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCSYJtLru%2FfyO8%2FzNLwnSkmt6tnFjgTa3o8ZimCHlhntwIgOKOonYRXZMeVShdBMxQJEf%2BVzcyUxcFPbRznbSn1WIMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFL9b9OMGl1WRKmg2SrcA3dvm7LbD6RI4H%2B0Ql3ITRQ0XzqWomGUHLylWdu7Kr75VVBXTqNKWSjByUM9GGh%2F175I6dscKwRItWsmjy7c8tsyS0tFBxgZcUJDEeV1pOgcJfw4o%2BuLd365q84DvrvGoxILZMWuslqhgBA4jrzdBjulHb23jos07FBrI9rqrtTCfX3d%2ByJwaVhJUAakY0Ac%2BuMoGPWva%2BXZHkd8flUSH%2FTY9wnS5%2FnQY%2BeSLIKfTAag9VXBkPv6zZ5OiUpjwZ1kDIqqr6GqUmC1upQ%2BL8XQg%2BuWYUmTaSvWhs13vwxyvAzbYkwwRlXKiHz6%2FrYfiLqcJqRayS7oZkz627hC3ZaZcbE%2BhNX4ubYpKtX02zAQ2uOrLogFCWQ0e8NOUYFJAkvkZZbHOwxp9xoZpLrfbxPkkgqYTnMUDcq9gakc4IqQZAoXehT16JB%2B32b2DV6RbuChuGcxcPtaoNhyw36gZFYSrky2mKnFiWLJc4ADZGapFOGAnrrNfiHE2Nk3LWzNdA5JuX40NjelmwguNWXEoeQGUBaynhsP2bnj4QVs9L%2B1IrxFsylSyBuKfPmRm%2BoViYkqM%2FmMyZ5CuP%2FQ5wbhVOzIZqipByY23GZ1z%2FG2nciZmzFxzaEcutctnzc8R29KMKaYvskGOqUB1fUfXAqq0mg3Y50dPlOxj6rmwIkeJgTIMseQJkGsH2AmljgJr5d0gA9%2BJROFijOoJnw38amJwo11%2BTo3mdbOHI1D7%2BCSHgaKzc2%2FwcfYmYzQ%2FAYitL63%2Bhap29PRFloI51SGiPHwDj0u17LF1R7aoQEJRGK%2Bqf%2FvvFJnObM8EBSA4ELJrGGqNwI9XmGVwm7VEinLBIVwSG2TChAnN4TJgrJF5ZE6&X-Amz-Signature=61ce347cf9ca071ce6deefed7a2e97ef1fb49833ae2b6540e8f4e4a630cdeec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

