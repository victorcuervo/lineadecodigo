---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMRRC5D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFxSDibPv8R3Zs0%2BLa2oSQfAZjUjShErOvg2r3WrwcKWAiBGLj6rH0Xx2eA7bL11V%2BWvCwrPXe1arDEAFapTGxcMLCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM1BnP6GcPi3Mzl5f3KtwD7VgAOMucFY99louzH%2FtaUjHew0lpCOoZLUuv9ANj52w7t%2BV%2FfyuUYMaCBR%2FXlp19FuSxf03MfoS1GAVziSpJSNyx%2Fw1R6%2FVXG2fM87uqJtKWiy4fEgBCWTD8VRuIihXZsBc752hXIkLIoPTNwGPTjbHoPH%2B7DDzm5iH69F8OrL5LhQduADIBZlLznSrO8t5PyH7oxq3BLTbWe1d6OwoMkGSPLw7fyAlMir9U1j6ErdvHkMUhLoJF1zyIiPYsUNTsnGYQpG0YFkTF8gY%2FkDVeBZ%2FAUDgmtKc6TZQ1tQT%2FaGPfJ0lqNALmyStT1wcQm8JsltpLQ%2BMXczUKmHf1Eq5l%2BZLBlQziWOiFEodALr1CCuXq03VAd2YpUMOxpV1rLzWPRPN6ZXdVtVsGclle%2BwMHz2pH%2B6kYrBz5S%2FoRp5BVOeBge87LAIyTc4tjZ3jKLaKFhxeJMi%2F1isVDSwwMQVqLG3LVwMCeVfxfdlHvKK5ZqvrKkjbSI7ni5upgQMWvJPnjfd%2BVwaSrF4FKdbcMBy1NMkmdVO3WcDt93SbNRoNT262hf%2B4tBCpiSazgehPfkUKRNkBzdfh%2Bg%2FMS67WTU%2BlrYcPSk4UJlOIpjKYa7oV8TctJ5GFlR%2BUZToIJ0Mww9L3CyQY6pgHAiVpMYjnWdOsHyuRFXHWXlOs2esb6DcveO5kK0SqUkYpnOkuXQrWEOSxEX5lMyxs1NEFjR%2BPB87Ke12WXaH1v3V5K417CYNWe6ixpu3M6lLZKxvBsIRhhsejLRDp5%2Bziv5BXNEoqXSFsUnLOz1KQn%2BeN3%2FxVtBqCjmWhtCTBFUJ%2B7J7HHW%2BBtzsnzzvvoUB4wsKoLLQmBonnwQezcSmsD0n1F7dza&X-Amz-Signature=3557aa20a3ec9b036edebc6c409c4763caa0b06e00b456cc224731fea036b573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

