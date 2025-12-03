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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFJFSHQA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQC4tosA3Ueggr4M0ToYjtdo3DGRW9KtD0JD8WydicCuhgIgPgph9pbcalgfIDQgCUYqxOvq5yxuRI%2Ft48PZlqLQFKQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDG9C1ajf5ZgtPXWH1ircA1wj71rvD16ACU8upEF0tSv%2FnndRSdPipKPRITbFbSSQ4B2QtY2yvbpDxbnprb2jTKWEnnW5coY9i%2BNOkhJp4FANiTL%2B6WnkdrWjs6fBPQfwdJeO0omSpv8jIFHPMkGYr0xBw5W4QH%2B%2B6a6hLU%2Bqf9OuqIHHNxhhzvTlw8hsXn7q72QSpBugREpicP9xL3PN4rv0ys3kqxOLjiUcTsdcdHJkArkkoBRMFpp%2Bh9Fl7Gvn%2BpH%2BKF24fUW9Z%2F%2BEp5qJriGzSEYozHepvKD54tKDbZ1Fmf36h2L3J4vbKWvKUW7Ku4NbmBQe0FxZZIsygcz53LAyVRasEiTQ5ItExs9O4F4C3QU6yysB0KqUIizqacM0lfN6TaXDFQ%2Br7b9IcXLb1xoCiHiT5ZHoU5bXzKdcN%2BABXcaaFFRNAmERLTuZUqLzAmAXBZ3TxLrMGttT6HXg5yDCSXfMDIF1%2FvNvI1eb%2BgrH0Ii4lFyh%2F6mIs1ijpzj3bTe20VTTFmm7BV9GwHnSBulJRL1wLy5nP7ZtEYvidanUaTLrNvK%2Fg1fVTrl1E8Iq%2FAa0DgmnZtxgU37hRoJEwqT5emEoMT3%2Bj4jPod44YTGIYtQD7JmpwT2wKeQPTTv5rGbxFLlS69cI1XNfMMfUv8kGOqUBllGlNsPJ8Ttt9AHHGfvKQ6miHyAMjGn6E2X%2FCT6xy2Sd8Pj%2BfLckR2fv0pAcMpJMOSaWN0QnoKqqwJHAT3k5AkTl%2FyKmkFMc7EQVK82NDR1ElIZoHmsoG8mppPWjKLwETD4J1khRiL%2FXFBWo2miRoZFq1TeYhPXKrPuJUVSsB4LWRBPiqqrvZfVgF6akdvocfdouikmokEG4u55nEzrRFvTEG7SB&X-Amz-Signature=a80adef61307def7b4a9732ce24933eae0b90a4a0419265f42890c40de809676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

