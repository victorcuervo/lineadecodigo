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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDPJRJZN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID78LUf2JGZL8xfezUCNk5hHllLRKwAdZ59gs%2BXZFpYdAiEA5ij765PPTaZlAleYSp%2FtERxdjDXWzcpzHzVoHk%2B2GH0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDE8YSswSTq1gdY75gyrcA%2FoesF6uZCiJRGB8a%2FgexntMFsOQilRZUN4lrv12vTx26fvvHz2zwlp87mgBVaaHr%2F7jXp2WugNNElbGePFm%2BY0wwpIwW%2FgUloXAO2e4ekxWSsaDVp7%2BUmEwwz%2BqNY71AaTJ213A4wlVPWLRinB%2FdXhnSs5DGkqu1ybyRq%2F92aLDjfadXaQVvINECqSD4sGXy5PRMJpyRktD1BbHI5V%2FeM%2BU%2BfDRnD7hcqV8dll6f8iaMDIpDk2Oi4vg3ro2it6c%2FVtYCIriO61CyzX%2BNJSBhEsQ4J8Hx5Njl3U7QLz%2FxrCk4pvZso5s%2FpNpuNnIUxRV5SWCW4AQqAPGYKxpjo12V%2Bwbq8DbDExzFf42pq0fYj9UFqXsMG41HSZN2YXbxiDyar97HgUMI3OahkYohYSSFK%2Bx%2BXPM7BtHVMUWKFRpaz7BU1w5RT8Lv9OhlOKgTciXO8ZB6WHL2gYX%2BfgCONWFUBKEbgH1YUaoc%2BitvlnY5uAN9rZV0oBCMv14TgQGCJICORdv2v%2BV3jcGGNpXVtD3hFfI6itlGQzhcERTEaVKiq8pSEA%2FrZOhwEgsqcRi4jXBEDCU96sT0UZW2HkPJSqT7qtAk1ZYnhhvWcaWpUXbxLNEEZjNCDX1YoHzsNgPMO7%2BvckGOqUB%2BmF9GEjGAbwW4F8Rozo1t8VVtU%2FiDOmd1nYKeAaz3PyPJW7WlG965fh65FADKegPkunS4%2BcbLPS0e4Q6uN4%2FSlKyYGdq%2B%2BAn0XMASkTBK3fkvSjuyAH8oyhMGt0qAHoLf9toz%2FbapQNklQPnRfvy0fltYUlTcGBDVWU8LxBIPU6llqV0eBKfuaxOljn37ZGCts9Gjice4IeFz98FuFZVDAwDCBos&X-Amz-Signature=3fe66d606db739350872619a68d3d042f2ff2e89137d76fd6e52af70c386d079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

