---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMNZRQ73%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw%2FTBu0D1h31YdqfjJmKyDkuCmdHZJeaUMbt%2BcjX6C3gIhAI7IfPf3NyMwzVF52WT7Gc3DXh9GzvS83rJXS1YOHhtDKv8DCEkQABoMNjM3NDIzMTgzODA1IgzsLTV8AjQSQVD1CeMq3AMcE%2Fx3Ur%2BU2kKnXxvUaj5tmESmgMYYNe%2Bdox81fnHF6xnKuBMXnxibvfPXOKIX2nOa6q8UwnOx9Shuv%2FLfC70x1sIoIY3D0kwEH700rkN7rVNkcOsQez1VydNhn84cqj8TXbTXFnFVLJbb97bY1q5FqZkm0FB2SiK8GRe6W8cLN9fhysEjjmcLYXi63gS9Z0ZXoISTdIpNdCcFrf8sC3v9TC4GU0kndfvd1BGbhH%2Bx6%2F3R%2B1xqh3OMOibBB9siR0Vs%2BKrPTjgH28gzBYh5A2%2FSq7xyuIfk%2FVDcGhgrMXVK3VGKwVfkdfYnobquUenigaKoXYidsVUSabWelpIIoFzdIAgscZo%2F9fzmTwTpjsUPRzO0GyYmWYZvnOjEjD57LSCBjG7b8X7Yg%2FeRkPgptiuHNoszLeCkmJCQklrDp6fJpbF%2Frdmi3kn0aH8vINamhxSdbseTyitsl3OEjJWORUy1%2FhhzD9soTuxTOWAJQWkPAbO5shqEC9HP285vIrx%2BUof7wBmmqZvw%2FfigVee35WWQ6DY7H10j6kzfoQ4gDDW8g2zcJXllTTr1AnC1gtDm4BdgbI1nwnSKGHPofqmHkC7oabv%2FyJLkeveDmUmPhP7FxZBKtC9FPEJRtJXApDC%2F3MbJBjqkAYaQUplbJpp8RAPq1nxIczZR3f1vSMsm6N9KNQbXp5smd0eGMetPeIyBTL9tzyYBHLsPh5fpdFbnTfgR7JJ2VMfSg2iegeYKObI0SPt3D7u5T9cQn6eLWJ8AKzaCFcKzmtad3xL%2FtkrC6DOLs2pPvwr%2FgQBUCl0IRbqhyVTrNESpyFqYhNfG%2Fai2GbwonCJt%2FAthC1Ts1MU9I00FCV1k0b4N5D0N&X-Amz-Signature=fba9da35e5d5ddbf8d574ad74cf35389565434f0cf538031fb90a872721e9cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

