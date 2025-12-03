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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656IGD3CO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC0yXO5OXyC8W6DDkIQy8%2FV6u8K99nabTS58mmqU3VUeAiBLaoy2B2rFJpjcSDV5Rj%2F%2BzlFCQ%2FC4Tmc3fLeQRagUWyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMEbdNne24VS3HaAHXKtwDAnMi3bzxvLESr4IgIPeRhn%2BFNgG8VG4hM7nwAglRHO8hylkxzu6XfOY7ZresqQAFMq4rznvmcNbRcZ60kLy0iLBo05emJM2YpOqcYGoYRK%2FAWSPWuIE%2F5v8Tt5SNAKnjUG%2FtIjJx%2FtYhrUwOM9GksCEDswakWz4OnwnlAYsp%2F%2BeH139kgjfZOJUNhsoK7UD3i3rGypA7Xc8UTKri0yQkTYC7dncH6MMtkK1wllgVuD2EA%2Bf4s%2FNpFcDxO%2BRYKB6tGWafm2%2B7e%2Fg4kxWiYpuOPUdSzsCMc9lS1D5IxTjaHGk9xAdjDvo5SI53JM7WoLcdD2QDT7exWd%2ByfSHDeLrzQKNOlCSniJHekcSpQqzkr64IOFX0vlnOeREm61S0hcY59oTvRCo2bfx9FeTfXrtwXAGODcWzJUVleLrTEVz9PeDbfrqIaDFEamELplOSzxA43gVDTqqdehIEkavLHb45zl9UVsLHxCrc%2B3nAKo0Nzvev5Tl5CHajBPhlS1Ss01NmJh%2F1UFr28acQWOOd6cMJDDv2cwJuEGghpQaIHRq4FU4n4FyJRA7e%2FYQAgBDwZn07coqPjI%2FxVqtIDZea7b%2BpVVaxNXq6O7gN7kirkOLfthI8YNPSAGmv2ZBsxh0wu67AyQY6pgGIiCg9NGzYLNPaDcyhBQ9npf8hEnrF0X4WVh%2BJ%2Bxf13CNlkRR87dmIxc9ygXZcaebNbu9T%2F8ijowIevWX9Pd6tzVLK77K2ymz%2Fayy3mRLMCmfc6VxlP5qg05bqrHLTSR1XhcrbQmd8YReoh%2FR%2BlSHzkjGRHWPjDcV51OUS1a0w8Oc4U%2FTAsBhrdoyIImbShb8Rogyfk2Mecl1NcEUGBLqU9ruZmAS3&X-Amz-Signature=22efe38ca93f043a2ae104c75ab6825cbb58f11887a7c129cd01c5be1a15ff93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

