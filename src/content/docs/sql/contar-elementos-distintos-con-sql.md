---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7BR5GN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC%2B%2BvPjqHPryyjcfnFFoV%2FmNK6saThzse%2FjL8N%2ByT8AJgIhAMMymAdwb8MRiAH2FxiV8wGAv3283nRvxzPnrQqjNSgtKv8DCEEQABoMNjM3NDIzMTgzODA1IgyxjKvSIbTCYnd3raUq3ANxrOQsE4K5kbdxBn3d3dZUuhcWbKloAtzk%2FmyWOn6u5Jfo5h4ubwEjSM2K2r1XCPwkh0uBK%2F%2BrGrFmKfZT4FxaXyv4i9z3EGo%2B%2BN9QI4rb7suQagK6JYUYbNBaLH6dW%2FmPOGXBBvtg2tPMrEt33AhCVyZuYBEYtiyrXwc72uAT0Vd0IY1kt6n5lwyVnjbSYztnthwueans0PmRLjBcrYK7%2FMaDboY4LLITGCTjl265FZcH8%2Fb2NPDX7ictML78dincQXr0jqDBmxJuwTl3m85ILZi9pAU%2B09I5h09HdLwOQieh99sDNWCsXFx1r4kqLrJ1fwsXssQuKjLGorwmYxTC2svoMGpO5DohJlmeRlH%2BP53%2BdFZaQiNqow0qflPMdo%2F15n4j1z%2FygTPO0YSEwIIiGdTIyzMgzrgVbntk%2FxAhtfNQVlxB6dI6kY32ggmvsFCfcAeOSQ4ahLVfNEEFTmX1ptAgwqPXb7%2BCd6aTOZvn%2BjJ3cC%2Fi7acVrafAJXcA%2FIIsD0%2F5dyJte5lpx7zHFs8O3rNn04lM9omRr16kLWs6RlKJZmy2iOLm4KDb0r%2FcDzyDX%2FETJGKN6QtWj2G2S%2FG33oFzQoT8pEjFmMns1nsxZH8XwI0J8QJksPiirDCnhsXJBjqkAQ21oDRNTEL0IfVRqSANfhrXIverndYs339hQHR7%2Fjsaa%2BVEzlZkjWc6k10BibOA44WWo7DoAfGPmotouum%2FnWbMAPt2g5Y7kTSxmxD%2FJwMiPFcPhKLKJX26GNj%2B8jBdpYv7WsxAmAztD8LxnpS%2BEO8DBM7ON3ohIirNgxaEJKeB41%2FFI8qxLywKe6ZoKRxSnC%2BnOvDaV3tTpnY942AnidRvkWOO&X-Amz-Signature=cce840905f7121b3c4b8ee119b29c82c63811f1e2a23091224f0d0a6ec11b6c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

