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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667246NY3B%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGLirnZ7xRuGCrj%2BGRLRtoAa8Gf4ydOirGP%2F7oNuCoJtAiEA3lIlOqB%2FtYBewtlM9N%2F2K6%2Ft0Ozihk1dErNHL%2BSbu5Yq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFavtasMNHv94%2FCNKCrcA4BCWgu4i1%2Bl%2Fkgovm%2BQU40uPNoWYkVJCYqBCdW7dUr2dir2sG0oB%2F1iQiVGmSa4%2BG03r%2FUrv3LQaXMCNxaRStJ6zx39j7G%2BwDlKGFB40y1pSRRvdXszZiE3MT7Qfz0RVPkF0NAdt8F%2F2DmR2BolNbRBVpVlAEFkqXrtzvIFMFNiMBZulOrvooG%2BX8orCGJVuuVclNVgygV3q2WR3ZiUhoU0IhEwLHLrkTKFi7gHkL1dSGazGkdy4rbz0bYtQD8oMmatzQP16mbLPEOo3MfFx58wXJbnWEQo9mcWb%2BHuDhjeymnZCXEAukWbp6G6ez08vbUZpps8%2F4JSK9KOmY7zNBhcEoaw6A13Z%2FnNDKDz0f6FbtKk9iFrjHdFNqf0UbQ%2BjJ1%2Bm6iyDWU2MWgdtX8iOswjnyvH384%2F%2BRHilsin1cz4jJy%2BvixkXtwKSmvt3DsyLKVM5K6KjNcgJ57cOgU9nUiRR%2BDAt9xCkfLOZb1hjg5QZNr%2BIRR02oZOWp%2BbQRcoIhc9P3%2FU54kmJq7Vq6RwBrv8z3Br8Kks4P2dp7%2FTb7IxSPoww%2FwHQTSy3HJRM0NmBCzoFB86OP2IEBCmLVg5q%2FsGnPv%2FzIVm9KlELFukvawHvoP56frawo6m86mRMJybv8kGOqUBD63cDP983WHQZY42BuamEF6PtoHI06aRIyZTxte1CMjjLUYgI6OA9Qi1T%2BBGts2miZOhCke0OqaYsaTGPPDn10JN2O7IOAp43xSTDnPyY6ERs%2BveeDGRDwDaFnLeTf3RcWCy%2FZNV%2BzfeASNMioX2OLbW9oAgh0oDzn5G%2BZOQ6G43gtNAxSt4AAV7lQwswtU0kMp99Xk1XZNVO6PoLMDgiWMOMaoM&X-Amz-Signature=7e72da8672e8a625b7a3c9acbb3dbb6b582a0b3aed2ac17116145125977d0ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

