---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHPHBLJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDoTWsZ7BrJLNRMvC62MB0OJcPxdlXcd0ssYPkLyUDOpwIgc7t4WID9bHX%2F53uKu9QQcSer7QwodgAfIPBe5hggPlEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFgotlgXrAVXsWymVSrcA%2F0H4oIhW%2BAuLol99E%2FMyqVpnsi9NaOeAl3z08DxTNI9Eir6ZV4g7sax5dFDL2bqz%2F3Wm3HYCoZVWGZJDBjDTOTIVrlgMFiICLCd4VTrLMYbaACTH%2Bd7%2B9LoeTxhN3p%2BPRBEuZ4XNLVwpEf6NODWEDoIktZMcum46E%2FSgRKjIaXPEYYCcG0PRxruGNL%2BoRystpS%2FsKKgrSxfOEBx2T83N3EClpnc%2BPYt4tm23kyD%2F0Hg%2FzFoVAq83I8ejQbO8nG0s7eq%2B572%2Fo5kVLnIgEw4O9%2FE0ibH0n19yg7U%2BbvK%2FvsQzd5jy3LuRyxzycK9fRiJIgUEduryNqIp9cnfSBKMTPg%2FOxhj40RPF%2Bx4y%2FRRdlF9MBVaTTY7h4Yn03TahwkPBJK3mAFNYjAjQv5v3OgSYT2gVskNg71o8nsfYLax5sTeCUNl39xyelq4ex3QTRbdr3hD7Si%2FOFeSRfzh%2FiF5nKBye%2FPs0jA%2BCdn8xVb%2FlchbSIcGpMS7ghlgMsNrnjRL7NkPkHmvCR52lo%2BWFaRon6SKwnmeo8oSq0w1VuBJ1kco5%2B6qFc%2Bn8vJQKAOBB1x8CprP7sQQLSCus%2Br0oTq4qtSb%2Bk0QavVaPZI%2Bvk4mUmHWkzEUet4ZNNx2nT5%2BMMHKxMkGOqUBObJVMd2LnmCrIAIVERnthsFyFifJbCrB2%2BfCHOuKPJD7Kn8tyq4hWr3tEYER3xmzBdAzOj%2FpyKiEbOasOOEUul6iePKprRX3TXcNT%2F3OG1CznVDgPKYbZ7wcjs%2FclQ%2BwwduND56blX3arVu%2BJqSHKyFcRqDdIfw30oPWLqVX1CUcCL%2BWMrr65IJTyJFE7LDL8CkhFIX%2FNribRDanLNFb87pCqMbN&X-Amz-Signature=3a9f51861fd7bc3736ca29244c76bfb6545c9694f859b0a8d3ccb26e402ef12a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

