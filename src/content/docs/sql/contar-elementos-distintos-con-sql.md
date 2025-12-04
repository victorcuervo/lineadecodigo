---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N4FIDMZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBULmcRqYC49cfS%2F4lUD1eq7rQMDhv6onqHt1fV6e09bAiADy1axE8rci%2BUev4oUX8Zy6J1h7J0eu3kGrGyeayUaEyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMZBz7Uc9BahHIEBQkKtwDDJbiTmgBPgkv3XE7Z%2BP4SCpY9%2FlKWCwBfVLYW3RAVJnaaoMxTwvDsM97s3bjs48sWC%2FXhQnN%2ByAayKcrzhxrBEeEvGG%2Fq38zc0TrU9dBbvCcQYE3SSICNhV6aqmAoQ9LXLLG6XSyNSl3MIRLu1E6k7pUBnq0FAc9vLDSqMJ3QoU%2FDHGE2MTyUCbl%2FnHBUL53WEOVeyyLqZtTMQWjOPA3Uquq08Fu8QnNNq4qfyDqxopgM1S3cn5B1h4L1d8iVxSPDCOeLnYq%2FYxI8z1dcX9yos5vC3zxwDpJ7n78NAyQqHKM21376ODsosykqoTY4h2wpJQ0MdZ9bsLMWr1vuosLRUiCLn0%2Fw0AGY755hE3C3HXAacZHYLYa487qlajNXenqGL50jqv3KXTepYsZ6deSZ94HUk68vaGUJ1Y3K5j2P3j%2F1FFFCpH9NPlqSjXbjy0nxEMnHMjX0GK04pKFxxDpCG8jTpsUpGYF73CICFXuwNrYJYjC55bjeq2R5piZ6u3lxODFvEC00XeB0tJS4iJjXzPdoQz%2BNumnlCZugBFMgMfpO2NEH6gE8%2FKDi5SLh%2Bfwzq7NJTp5rHatdSFJPUDzP1hEHUd%2B4eFJQJ5yhXEs2kO79WXY1RkFIArUkOYwyYPGyQY6pgH9mSdjKBRGGo7lPQReDqQ0Z2gp0dJ9sf1Hl8kIDrU4dQeppoq8Z%2Fo4T0dhXZh77oeNjnkx1VKqawXwdc8P69%2FzxKjf65D7NL8MTFXD8NNDGCxwdqbIncZk5ZYzQsoELAP4O9r6aQCgPdp8R8nTbqu58n5szPKHi82Mke1DQZRL4xpxp5uSZEQsAzo%2F1A5cpBkbVrXAa5vBvUvhghZGaFxA09oi0XsH&X-Amz-Signature=157357115e59a8dd84e6910f440269a4c04d89961b1e26a863295edd4eaef35d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

