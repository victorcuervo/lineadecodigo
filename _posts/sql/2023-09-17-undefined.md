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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCCJGZH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEY62Xk0IZJjk%2F4uzAqDh9nT7h8%2Fs%2BKimZk0pjYJEVx8AiEAxHoIqZlmjMMRaf5auaoJ%2BN7rYRUrOURKjLTVh4wTYEsq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGcUZTELJcC09mF%2FqSrcA7h%2B1OVY2zuw0hnWEuzRDjWo2cHHpmlKUgtBuys0pk0HeLJFl7N%2BN08T%2Fz1IPVAjjT%2B9niuauIANFqeWHEK%2BOzW0O5qoERAcKWAON1ETH6zM0%2F%2BzbCi5L6vKUQOo%2FTS8dME2cvRWNk%2BSmessjjx2HqbxbL4DDpaNH2Au06rbULy0dEmknvaM6xD5TSGgl0mDLLFuhXKYr%2FH5H9C5mn%2FWW%2B%2FPLcQ6Q8E1me1xY9g7D6lwIjXwnXepa%2B1c1PiHYFgFsVdjA0SfOEVbs2jfLkJJBmmGaWAWbxN%2FWFkrOKuVG8XoNLtFhKs0MOhhHqyKZz8uSn%2BO3sr%2BG1iF6UV5sySJRyds1LpeMSc%2B%2B0IMc2kPonOF88dKttG9DtNPjNZlxWZYTC69w0ax%2F7Hgc96%2Bl4DT337Hvs%2Fuh7jnkL0e8%2BdozZA%2FKYZx5Ir2FwSKzJ4t7sImw9LYt%2F2eSkqSUHUVr4kd%2F9KRklz921HxZ6nLATDbZUMzYxqojc1ifHSG8bWB%2BAShxdl8M6qlYKRiehy%2FTbDmb2Sj6UA0Q7kK0Eiz4ov9BviynRP3WDxY3Mqc95feVXgPTrMogI9nB2lA2UKGtVvdwwrLRkcGZpVIVqY1KluvG4pA1PABDuaPaw66MBG0MPnMwMkGOqUBT%2BvLhPu46sH7uNhEdCXlJJ96%2FMJp1rrICrtnRKqBoqGHoD8%2BIqFrpZtNONeHk2DwbZmIC1JNUlHF%2BA8OWhpIVMtVMOqIFCYbph9aY6yTvTJDUXUIMYTIb5VAYSul1I%2BGhG73GVzxSlJRXilcfDLagUvWVCuSMTZRKQz45gBHmTHsqnbdC%2Bf0puydEnBZWiIIKisbxfu0uSy358JszFgDSSqA%2FAf4&X-Amz-Signature=63f1527139ede2b3282aab6395b23400bbe719f70d8583e0a935ed15c166c389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

