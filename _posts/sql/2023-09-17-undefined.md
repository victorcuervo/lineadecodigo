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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNSILA6%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCcL93WEsmu%2FU4pV1RlyQTmyAJ8Gn4PFGgcbzPFdHiTpAIhANk%2FNCD%2F3kWhosvO21ZQ57P0AxNhyV1vKbn4IzLurEw2Kv8DCCAQABoMNjM3NDIzMTgzODA1IgwrLnMEXpvEB8RtNrcq3AOCdQqJjsd1HzunKDnn01FD%2Ft3fCSpo7i771OWC3%2FkPYbpvnCE1SjmcSa97hC4VblgbmVk2uyGPX0nB7IEx8qQ5K6A2xFS6hOCAn5MBP%2F2dneGl%2FZhsFHDeKxPKSs0U6bVyJztM%2BHDKGmrh%2FN6LdR5VfluI6nvmwlRkO40g183jmCuusevdfFT%2FYVX7mSRpiregxXjF%2BPgalerTEf%2F2q5w9AiJ3hUMynorl%2Fz5llkjizCFIlg0%2BqeI0050mOM2JdbCfU7au7p8mwGfrthzIwQlWRTVhql23qJngnhFOY8j0wIglhsHAgLUk1dhfPK%2FCCfaVtnZYcFg02BnTJJ8bTY%2BADTdUDYnSc28KZTzqOpacrlA8oHeDJT5IU5TGq86rpp7yEY71jisPZEpDnLV9lerASqfh4DNGLlkzfnyJmu34h7yAbUrLbIOnLFm3aCGT2P5AHoxy4zK3attYrgDpsDfKmnsGody7CE9oQpeq77kkJ6GkUHf5zvaJgGTyA3WyjoE0VkUmzj0KOt7HjIf7Js5kvNRgll3VsA5JXwunWlU9I2lnKtoOfWOG6AuoFHuUuBNszYQQRKj9M%2FDtPo9nuiHpqGKuXMdAAkEyesGdkPK0j1qq3b4Toirf%2FzT%2FezDq5L3JBjqkAUcCypOAMVtA9FQp0us%2F62Ddo%2FpfeWg%2FNZ3bGWMJBWpPbsYVG8ObrQDIQDJbQqWg99KyDbfpwhLGC%2BgruT%2FbpQXrX7CFLQcmHJrbYBZBeK1EzUj2JNcSODAGWWjN2X4ENDC9KZ09%2Fm%2FKTVzH%2BN6sspP7x%2FHJ1zrjApCDzrIVGEAU4raQQKuFnaluAGFgP1Kin9nd%2B%2BFfpg9QV05s2rqADSq9E3%2Fc&X-Amz-Signature=c5e41524aa445da04a2fce4e32e9575aecb01caf03a831b6f55a483d3a485b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

