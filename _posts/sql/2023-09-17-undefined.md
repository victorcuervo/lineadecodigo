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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RBOU72L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHWG8SZyzKQv%2BCdp5PZm5%2B%2BPL%2BsgJIikuldo%2FNsEqNASAiEA%2BUE%2FIQj8WE8dTGCKNDlWMnntQt3K463fAE%2Fi25Uj8Goq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK6KwmfuCrXEOJ4ZSCrcAwGHY939Y9RS6Qh%2BZOxwyxgEnoXODsXfUMPLPUXxAhmOYVibojO%2B77IaVHde6y%2BwQ25lOfYY0pid5E6o1%2FXkAUbI0i5hYiTELL%2B0VnWhRROosYzv5kN80fZ28Xc%2B%2Ffix2n3Ojf2gswpNKdpcCbJS%2BrqC8ClfPywOYV7z%2FbLi%2BgcgqzoTT3Th7qBQ5nLM6%2F%2BO%2BWfVM4ZR3RCqjqoY3Po5sPbKnIsP9X7I0RId3Mps1Nk6oAV9V1%2BnINOGVlEdDlqL572hW6yJVKtO7h4G%2BRR3%2FaU4mqVVQkKEk94lzVQLTL64znRAYn8jVcjY50lQ77Dot2BT2JUaJLRsHLSGPSbb2gq4Tc7vHjAkwKGBa7HfaplVAYHye9gm5icXg9o7KbSH4WRJGDoHlcRfQ%2BCQGTFZv%2FKioWTE%2FKjLKcTHobEXEPOTrfB4%2BgkDAXLuXvw0AMo5tc21bCZ8Lq4HImB41zL2mq88eLO8TUTfdPxHgwG%2BHY4ZGyabGw01r9%2FOYwHs2mg0DamCqRX6o8zRBSWPdtFDzSwasPY0%2FeZXwPmYDzjHrlV5xtZMgAZL9QTttmRbyH1HXco%2BXfObidFYcQII52iETy0F8jWh39Tn%2B9dEMylwgsNGWYHFHN%2FuJOs%2FU5AhMKihvskGOqUBhtTBU47TrAEpK99Nz5FMDqkRqEgM%2BB1%2Fnx%2Bn0HzVHby%2FZ2LbSjn9RW%2FoFr0fPN8y0d%2B3fJ8o81MxiDnIBHgCXmDQjzi2YSDuIPNh5Ck9teWpipWHT9wmX9Wdj3tiW0%2B7kPTxH074Qy2tLNMXrp0DqBeaz4QgWwHJcZyAHEqPYMLwi%2BF9Z4BlNR8Yx8ANWxJ1bUcgzbG6TJ5WoE13%2FlnVdFA6IFyl&X-Amz-Signature=68c55713887beaf213b6628cf6a1c10c31cc0beca9ab8b82feba745bb48f43ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

