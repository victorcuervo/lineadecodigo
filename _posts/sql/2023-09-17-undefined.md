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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCRDVDI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGUjcajc%2F1sJGKQbmGW0HvKABLpkPcbvlOx2vtrqWBNsAiAk%2BYkM2wR6GOH4nMvm4kbBdnokTwnPkGYInmEDpTAEiyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMEJ0%2BfDxge%2BRRMPnyKtwDaIPNL3Lv%2FoSPUhaDRk41hQqDFsaSgSjYLWhf7pw0HoJuOKhx3qzhURv5yn7u1XH4%2FaLHmepySXRSHL4M0LM6xW2KubTApGTuTDQa00r4f2PWLUU8e3bJ8Sok0vrEUKRn41P1m7gm9bkPaBXFLNcWVjgWnUnvw3JU%2FpDexGGaIgy9NLro%2BZRoHosErQz5VeDhV5JbdWkljoyLxZXcg2mGZ6Rm0eplys4iHoRDfJoydqLAT3vBBksp0s1Hf35tFJHLCIcG9oLpR0dVRKlr1xivTmxDCdVl8TqMpRq81fjJ2Ks%2BUnkOIczMuwy39xnueKMMgeEPbBWl1rCJ5T3sVOyKvjtbw8JMyJV3ra8mB%2F8%2FndFsIILysIdyETmJ2BcmoidlubjG5KImHMYWGAJHyNme2cHd3vTDU0XSL2r91wpLrk97PPvKz26bjVJssvQ73du2hCy0m4crobIU6P6nPjGFR2zRJiYYJ4Oj%2FsGdV%2FV%2FmGzL6zhsiamgNcMyYls10LWTSS%2F087x1Ap6iADyWuvR2uL5Z1UdjOIEvmCmC871mdJ7NmVG%2Fa4KcG%2B9u8yTuUFljpmBXFKgkx%2BQAn0qPmh9lKJ1R9z0ig1R%2Btbjlgxd545LaWV9pD%2Fa4oYlaUgUwxJS%2ByQY6pgGaamQz%2FKMxXjWO4%2Fh%2BZMa0L1KDtEvUopG9PzAgpDcEis9z27Cu1KCViLg0FGB1o1JS1c7p7pEY5CEy0%2FYATdm4%2BkWiKvWLxzd3OuL%2B9vfdLRPhIkpyidO55upBOExraPYXBJaXT3YFXbJoNoE5n6tdYVXg%2FvGaefUWwzp%2BrEFVtF29Eg1fdxnnv267fjqVEgcwtb%2FZ5TFv1x4V5qysY0Jxw%2BGIt%2Btb&X-Amz-Signature=81724713797f61019cac4c21dc111c0765404f3275369242af263abb439a1ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

