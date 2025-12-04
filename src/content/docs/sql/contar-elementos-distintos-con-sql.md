---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
slug: /sql/contar-elementos-distintos-con-sql/
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622N6J6FX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbeP2gYgxR%2FRA0jBtanDoUbMSK7gEV7OnesMKbaFSD%2FAiEAhg2PaHlABjXjuZX6KoGgF42C80ZMA2Jba0p9H0owzsUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBSpSU%2FpPKw08Go3hSrcA6T2x8u3r28oQAwzHr83pxTpEiCHy7CMgYlqUtPGJld4bMoocI%2BJse0l5mh%2FD6bXLL%2BZlcXJMScMUDNftW25RTprk%2FZfrd8jDNlq%2FuALrFQgeMcsYIMi9rLPe7tFZrSy1bl2JUBhGTdvKQdavnl1HdVvD%2B%2BVdCmFP%2BgUCPdAmwNJ1wvyDYltqy77IKSI%2FEjXpGq911DUm74YOmGHldxAm16hFmZArdVFvfKTHU2dwZ2T3EoR0Ok3HumnN99PkC2Jb%2B7G63hE4tr6Mz5AMNUKk4XW0ejwwag0UsEVUmyLmwQC3RtwQqGs8UTVAqoU%2BHBUwJyLzR053N0r1BXfQb5Ip3qt8z%2B%2BBub9a7XddouHUj2Q2RWXqzfsrKmXBwxGnpXE%2FIZy9%2BYwgy0tO%2Bl%2F%2FMOtebZDiAwYEKzGDUJdpWsl42WoDP3AVy68b5osleI2Rc7wFz%2FjLVvWXwWNrbevRNL22WkaCfaYzN8heN%2FUqAAZBHhNIALyQ2NNXYDujQmmb8Nsjq4Duqx3leoR5w2Tb9Ln0SNatCBJa8BIbl2cfiia1EshClYzV9qKnxzIul89e0L4rNaY%2BRF1cm3Gg83LOJ2VtBuGQVpHkaA4pOtoTxiF7hu5NQRjihDxyNOf1hMuMJWMyMkGOqUBJo9%2B66P1qpH%2FO4IhEJdVoyFLa24%2FWJCzOo7VCoCQP378KwhyDrcOEoznaLT8Hfvu35odsiCiHSQnIAoyZwjCv5wHCJ1p5D3jdbakaOxvUFDc%2F869RfA1hT7g8LH3A8F6WYnEeLpSF7voR3K1pwo1nJJIB6LQ22IbBmwehAx4da%2BKnO%2Fog6zfmNDYcfhxI5kU9%2B9JLmJTOOK%2Ft1%2BmEGgTJBG4MHYD&X-Amz-Signature=f4d05b990eff9708f43d1f4db6e392978219f5140f0759334fac2c962a116270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

