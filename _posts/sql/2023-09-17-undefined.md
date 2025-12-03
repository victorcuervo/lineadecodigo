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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPLIEIEU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCxgHAP%2Bj5uLdGC26R6EIzyWSJoPOQNSCLCtK6z95NEPQIgQs3tvEMJ%2BRi6NH0cwU0qFE%2FZocMJLQUrR5to96wZaHgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDIsNvBvmc5k1n4L1aircA0uJMJmfpI1K4Y%2BRLC%2BJBItDL6uS4lY%2BMuYGPfm1iirwrvuJ7K3Q3ML5NOt5rgmmce0l2M9pBNkcKJwo9as50QlIYf%2FUDUuVCv%2BCWCx4uKOrO1vsdnzAaCA1n%2Bd9Fv4oQPB0S%2BNJHJdhl0UJGU0O5JJ7LShYAQGySSOjdrsvJtMYYtYFOAuQV5ehNNo3KIdrrwmv1wZgLQGuXLUAldYc7CfrHIkO%2FeMqM2%2Bx2qvPkjE%2F5kcf3eeIgYhkMRKPizI2iMGh%2FoPbAuKSDm9tMiDxhNfiCrt2QUcLlrCBgAV0k%2FKNw%2BnUPkfYuP2AGiMqmYNBcmpF%2FP6f1MLzPydnVoE7yIzWgpzqq817BkvWs%2BKcPRbDCjMdIbHTLgG3Qjsx%2BLZsHc2H35nrGM9dhd5eUZaycWPDaO090k2HO7TvwtQOAK82NEEwcQDWFc9O5QIEoW%2F48Bo4EYLyWqNlYpj62Mm46k9jXVfu4ax%2BIt%2BcmXo%2Bg6weGnCNEx6ihQBwD0jcroHEsGRDlBkAo4lCDLf43GhKWU%2BtLUHnyUBNtWN3Fp6KGYTcVg3VDr1d1OBFUrhQlxQACOD9cjSrKcTzXzki3Zd6YEWS%2F2EkiaY5A2m7eUjskvn%2F%2FKIS5VBsxwHCfifLMPyuwMkGOqUByluV%2BwSPybN1qOLvouI9WJp793OhDqjF6iIreDn%2FVsjLASZyaOwdWCQ9%2Fnfs1Sz2nk50F4zE%2BmPq%2BU%2BcOSQeDtLYj74BkzIUuB2x5Ar%2BNvO%2BmDYzWZ5y0%2FgCHjFox3NI4RPfnFH7hfFPWgxTjv0V%2FxKfoc6V96%2BEbTY9BJN%2FDZXnvn1uo62HVjHPCsUZ0RdmSkEn%2BjIUXGNuqRwdhRyJ7Ks7cRL6&X-Amz-Signature=6a8f86e49558a47167fc065937d855614945874e4388b7f1bdeed33f37c4b1bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

