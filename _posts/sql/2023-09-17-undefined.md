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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ6OGSHW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCnU1d0HkM17TeHY4v8E%2BCI6xRgZIlqzJNKhDK88%2FstQAIgIrpf%2FZqvYNQ%2Fuc1icaHWxlsX%2FzATAbCm2Csi8lvQgKIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJcc4OugAkiFSXCd0SrcA642dbkWr9s1vOcQ%2FY57JVZiyKe%2BRF3hG0mDTsxb5m4xpSurlOEv3wg8xQDnAtaewKHI8MqzwQO%2BG2Fha%2Bl52SpiXoij8e0m0LrdBRH5hKN%2BbN5sBso2L1wYPl5z0HnQ6mySiJFKFMSPRwxNe3IH3mwBdtiguI9JcMgL4qpmt8I63zJb2hG0U7liNB0NjG6bPOpCpmEP2jIcVBSohib44O61tG7FNJ9MwOOn0mA6oFWYu2kGuI1eAgOHR6GXY%2Ft8glhai%2BeRwYRCi8xitZHCFbPRbTQQPeMoHLBMaDGGPkhv03pBEDAvGfXsr%2BHFAnic6God8N4EZQZhtr%2FkrbKiXQ05K80A3JOPsLPdvc3wX8eN1eMeu48EsY762y%2Bs1YTZVaadrDybF205udSsH0yUkWTi6sO0IlH1o6XUjEmGnhAVp%2BVZ3Tvrm0f4w8%2F0ubYoXB26uFbp8St%2FpB%2FE52ZJc7p53SlF%2BQN6ZoEEdaGfaZVkKvxitB9SEzfUGr8X50vMnS6xepDpkS9qnArG4q7HBQSoteB8nXRHMe3LUoR7yjydrMboIO9i1j2uxJvhHoEGeh%2FEe%2Bm1896P66dxL0wpki%2BVzFJqCtfYf3WmvCvo6bBer%2FdP8Vu8WAbMXFgkMLaUvskGOqUBUbutObWNWDpUWkyaTk1FNWGRzbTDeUOqGVIAmaoYdyXaRtStFvDIjgxiaQK%2Fi23fmLxORKlig4TgD%2FCZRCfR17QWvGuGyX32w9cSGJUd3RgCergJ7LOEzjFPInGEIz8KSMTFxmWqSRTF%2BpXcEw%2B0LHa7jTsnsB0KV2YEubFg53dCx6vn%2B%2BKzoe6lPCUb6SrSSKujv7yMzWTrY%2B6pS%2BJ4xNLjdH3T&X-Amz-Signature=056084a2fa985d5d9a2feba7af0bd2e2fa29ff3fd6e5f760430b3b3a5b249edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

