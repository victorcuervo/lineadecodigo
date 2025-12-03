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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEYBJYHC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEPp%2BxG3po6xamAtYY8Pyh6JUSftaUgU2TZwLR0czpJOAiEArJQQ2aI6ijmROQmky28annbQ4ff8QmItDD%2F8ew%2Byw5kq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDP4zI3LxjOF9hYQeFCrcA0Xmqp9ExgvxhMI3vC94LHOlDmAxh6tNJRFQgsoR2cUYzgU4tbmDWhEDCi8bE3kgqi4sNMW2SxlBWrYr%2F9EIga87MBFByC7YElu2NpA2Y1AAgDH9Y5H2gIng1%2Fw1k1Jz9qLLgfcIBiGOepWACDg9tt%2FiGPF0BbYGZqypmQUYnTMDbcsB1t9Bloa6kgGKGXr6raVlEGT6s6U7zgaSk1Q0skachccxP496QdBGeC5FWSSgSygVNWiYoGtr%2BfxDV8mfVi7mvh3u5hRe4mttsqAorDhlVuO9VtT1rya%2F9JzwiO0kntuitvaXjiJsoKZOggi7MA7ZgVfikfOp1NM12xz26Tfv23pTSJ71SA9qwoSutV4R07c7M0N0Kb7zuMmsNWOyZeLLAY6OS%2BRgywbFGdcwR1cDCHKC%2Bo9m4dkqXxf7RrX04iL2JDEEdpwnOipQ48LxVDPkPFajWABRFnKXFSgkAqjWHwIejrRxesS0H9qGP5e3Sfj%2FRs%2FiR%2BxbJbIqP%2F8wzUbffOSmnqmG%2FjY0xutSXZPSFOa5GYuohCWanmBh7t96nrEWPpxNA%2B9qUjgwVWM5zqZsNbXqbl0IBSToI4xAUymiQOdzU%2F2Nfu8%2FPmme%2BMvNSvR%2B1bpEuSpPAHdoMMj2v8kGOqUBjsjZcidAS27%2FVVfm%2Bju1qzDgSNMMgjXcTZMph5dU62nRzzuECs1ar0v2rFPUaxpkaHELdE4IMt9Tjks6GxdF8Augj7IzLdSC0BkgpJoJeUpeMfQttLwsxkhgklGIjDsqhqUpmFcBkd4581F7NpxeulqAlcw7DVbhfEco22ip5vCoelKtYf27Wfy7x1tIULv90z%2BX99T9Rs4DjwpTVD4MuQfIguhA&X-Amz-Signature=9e681da66e8de75bc4f0304609f89c34ca10c15029d88cdaed4d6f2c7445b19a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

