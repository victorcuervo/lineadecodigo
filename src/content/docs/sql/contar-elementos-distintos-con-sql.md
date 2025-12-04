---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF473U2L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAEPfehH7UlGr41kzI8dg5UTWWlYEhDwVNhDfZn2GhDTAiEAiPz54hBeF4VD1eWtclP9DcpHiLSTyjNAzpEi8tVMNukq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMxWXWKtJ3jv5sMTMyrcAzbXVTy%2F6PGQqVmKQwnYipwbHp49TwxTu2DXlM2FMON1P6euO5IJtoNbTFyPic21L6xE5dND75vE7xIP8I0SEqB2OcY3m1%2BHyPIqoTt9FBz30517axnnJ%2BYkPWDpMdsXmcr0xwONIfxLFwK65laHIkgcgNAI9hhRQ3LzTuZMo0k4he%2FslA4e7S6xHimbWL0Q88gJebYMrB9%2FryizI3f4vTm73zNZJk1omYSxCwNgymPHbJXLOLGgKqEgilcwa9L8ZpAJYOyV2JNuPH1IyL1E2h7v%2BAncmqiDNIjcuJ8FaRc44HxoEa%2BXAFIvxM2jTYwMcyH9HrwwuYehsQeBFRZ0zBfEyGK8iwtEoLGre5nGVDGosANAeMe4fH%2BhmejmNVokb2xhyAyqrNp%2FJuR7YsDjQZiR3Ik%2FHSN%2B2SqoXYjGwkoR4y8JOOZh3iQTmAlBs5%2B82ki%2FSy%2Fqf%2B1doZmigWSw8OFSM1JiTNXUm8v10pcUdjmSOQZlbhwlCC2ClzELPTWPSl0IkpEhgCHKapK7Nomxrjxa0w%2BJsKVprLNxCjOmC9N0b2bhIXx3UK2phfG6lGL%2FaiGDW%2BHgjcDEtxGXhi3lmnJbSRXjuoN8BJcVEjTrQ6iO0tccGsGFT0sW2AvUMJWixskGOqUBuXfTv4VZxPHRHA4jm6g5tp%2Fb1Bht6ACBF%2Fs4Voxlmt7swov2eHjXDoby%2FNl5ywqLQHJwgGT3FWsBTbdHCHHmDLzhklCIk7n80hX0mH5rXKugfNmgkDyhi4tetQKWZFSeIIZq%2FujAsuluk9ZwgYiOk33CHO7HjwMCyUngZip2FKj%2BNWdEJgBd%2BCzvjikm3X6MMKuXTFDLvFQS%2BzoYvgbKXqyAjhYZ&X-Amz-Signature=2b5f3243a0534d0f782606a110e28b850f16aa3eca6dc8d20ab296235516cfef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

