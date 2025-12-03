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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GQF3FW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T042244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDoyXVq3y8RuuYdiWfMni7N7DRFITlxp3rniCYNjOImXAiEA%2B01%2B2sUvAfXb63Pc%2Fa%2Fycq4jRu4LyJBUzw%2BbTDjQXZoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAKIf%2FTSn7a2VQxNASrcA735A9rKBzGUr7UcTmSeuel%2FjUOwljTAv5XUIIUWn4GWKhaSuQeo8f%2F%2FYnRhnpN%2BTp8Wj1h7siMo%2FqkJt1CwVeJkPptVlLI3ne8sNqo5LINkUFomDopP6dlnP%2FXvrKjmHLKK0Y1BpeqUgPqNf%2BwHfIfWUTBig%2Fm%2BtanXmFhaybFCAtx9cWMjaIckz5HKLBTklO5me%2BA1uyamYupFfy%2BaLGelfcmW1WAkpF%2BG2ya7ymMWctpsyKkQt3PtihjYegzbnAHjwm2lmTY4SsSgtTtp6%2BMQUEDRgo6YW6THcXHC7MfJ6XYDLlOfM7SKYcoNy%2BuWeIbmJi9fhUioO%2BvR7tLO0LhoG9eJE4C4KVqrlW5yw3wk8V72tquBZdKM44gj1fop44eDYTRO9Q2L%2FrhMlRkfJZfNCjEJqp0UP5RtyhELUlpOmNEJUpGIc1ZPQDldnm0dZ29z6qv5MjjxP12vddnjAOi5gSTjP6XE%2B43%2FR13Bcw%2BzB5%2FOBnGcr%2FGM9aBT218wceWtYcEsIl0pskMD2W0sn7JugJ6%2BTP0OWTYAlgb1ct4023SNIV01MN%2FAXYkqSHUTu2ij0dkRdn%2FZcdbum0XW0SlNv%2FF2zH7zCd1Ii8MYkovx85rvPPi%2BxUT%2FV8C8MK%2BWvskGOqUBL0zdKrblYkwYiW61nzieZVPEIXeP12Wr6zbdaw7ndw2So5jzlHJk9JJQkBAo%2F8MFgFO538WwiwwL%2BJToJy%2B4jCzmoI1Q0Gw2oSAqqttI%2FKs2wqHJ51wqYtIT5FFLXtB3PwUkSwne5HkLUi6AaJELCtx6DDY5esMEt%2BbnnUkLfjcYwe05FAvrcF77IIRj4mmo7W11NQvXBY4vB0Nt%2Bqeuur%2FEXG0w&X-Amz-Signature=1cf8633c75251cfef3b2fe6bae45ef63455ba66b5c89ec42c665ebcbd2b5218b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

