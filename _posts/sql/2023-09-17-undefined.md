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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GIXCY7G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD%2FQ0c2xSAGQ4RROD6Nw4wBGNJH%2BIXH4hohMp3clrtVrgIhANbjp2r86FnSOTmtRhtCQp2zAytTbmHZV5ms9Yyxqf9gKv8DCDAQABoMNjM3NDIzMTgzODA1IgwwL2QrTMhWU85GLMsq3ANDZ1eFmMB5U81xyx32Q5TDTtdoL4J%2B2y0PJbp7lWxtnXr0u%2BtMPEDA%2FjDb8MPZJlfWWXMsWfcl8BkXY7HA6nEPdd7bYJ5Kj15D4p4Qfknaoin0AArY%2Bt%2FUvVfmsAyeVxDlZSFzkjZ1BKWQ3AuiUQC0kIa24fi%2FstTlIhfH37oW7mAJICKTpTMrPD%2FY6%2BwY2Jg5kZZB%2FOla10NUAtc%2B%2FObtr%2F8PV64No1LzCl85COxe%2Bu1MnCwIb6vTRpOUAGinxfubC8BJAXVYdIt60fVDKtcql1mpBzvtnMd2f%2FDAvQ6cNw1Im1i5ua6ldlp%2FZmKvKsAuZgq0KHWOy6C9j3lx2dSge7jqPP8NCYjfXyV%2Frr5DBZWx%2B%2BaX6EZ9eqVVFOK8AkM369S%2FrN%2B%2B9A5adrYreMCAImQRhH1kDiYv242ljqgz11vJkGeldIhaw%2BpnY%2B1TxqW4QfWqAJl4KlbYY%2FlImSIgDK4QRI%2BvFp7yCtlrwuQAbSYfdmTXCCSUcjw6BlWA5vYOqwj8LhJ%2BrA4Lxnzwz%2FaSV2b0nUQHDlmaaabLzawPIZLbWJhFu%2F%2FU9%2FbndECsI%2FY8uu1PKXEdGkdwiWIIo8xsbgzxnwzc4HwEXmJxvpVcclQRgO8zA18PaSpUVjCNpsHJBjqkAbYW%2BxdjEYdRZy8mRCl6a3qMV95NXurcFGUa%2FWLkp1CNqgU8nz82QzmTp79DRnj4Bjq27mMrWOig8CgTDGUKCd6Ce0IvEz1U0GsEQanPHe1xpUj%2F0Ho54JbSbuPXLE6sktIDBamzHf5bCz1ffwibtYEqs6K5%2BOMSbmgJmJrlJXBFGhESXsEwLDezj0kUGsTW%2BxBMsdBx%2BH38%2BPqScJK6BlLFKSCS&X-Amz-Signature=f93319455e0c2cb50cf197c45d88167efa9b0e2a95fa2bda8f31f5d75e385c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

