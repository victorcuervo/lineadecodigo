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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PVJN722%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDqO9xlfYuWgBPP7rxckDwXApWUbK2IKfaBYbp8ls6Y8QIhAKDNfKldHz%2F%2FBFiFqVdLkKnhu950ZBU7bltWsz6NeEQoKv8DCCIQABoMNjM3NDIzMTgzODA1IgwY60BuC5jyWT0NviUq3AOBPDW97tsM9tJyKkm27uMSNZexiyWE%2BAgvnN8wnzyOnmsSnxvW3AfM7MPcLTn%2FNKKZK3LKkCLBe%2FIoS2zGSiFLwhe66Y8NrmLQD7z%2BGIt9SXCCMTrOtVs7e7NV%2FBzENA08gUwbPNFSx8ibORmLbIXLBG4xdtQb66uZeVGQa6xP%2F1OoHTS2Eka90RdS2LtLrv1npTDEjBGc3NRmhRQtyTKqbuvG3JaKhnZmtTNT%2FoGg0P1m3svaFlauZuievUHSr%2BzT3xKdoK2BTYhAV4xSX1O%2BT6uFqzytv5SKSxeRYeKRNBvdur6Bhg6U9pfacbnDjtG1dpbugZlLnL2X770QYr517nj2Wr%2B2Nan1eIuB8FIUQexRP2kzHhZea30jAYdxnLMLLqAMqF0Mmcx6Az2wmKxDIDkykenQFb%2B1m8MfrVAzlSRd7r7p4QTQJSeZqKXi1FldyxyEtuf5Xo%2FRIPyX3%2FQxhopRs%2B0jpggYcndQS613oXMqtPM9mncj7M%2BPpVgEW5X2sFK4uk7%2F4X57Fz5hwmnLO3maPj5uurFgFTsySw%2Bqdw7C7OVlAFDIPiw%2Fne2h%2BNsh7XvDSAZZMpPWQ209mZAIm%2FlDIzvvKgNNy7aQ4BAGpDD41BxLmdNK69KhNjDZlb7JBjqkASPivL46lHVvSZWtuXmunXZ8ws8s1m%2F915OcnAkl%2BTJYXz9jtMceswol57V0Fl38Rlxg4jFMsqvSM8fBFZikIQ4MedKbJuJNGbaEYBO44dpCNJ35qdx7BZjwaTOq7CQj4u1fk28YtdiZn7oZGq2XtIHdE8wdfxhOFCNpgZrJzB8Pv7UcGGEd1Fx4WHPjEEewpwF7gwWPvbrRjnn9H2aFcmRcCkNM&X-Amz-Signature=4a5545102b88e7168a8f1e1165b4941b5537a329dafd999092980d87c6dab9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

