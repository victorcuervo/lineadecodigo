---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQVNDAF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCMdegahmI7gaIRy4frDguONiQgHWZJuQDBqo%2BPftD9fgIgfDlbf5gv2wlL7sxK8b3hKjh3gcxyfNyvRvav8BS5XhMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBmmy6LtVUvTLE2xpCrcA3imh%2Bs%2Fnb4bSmgagyVYUu9LTrul67eBy1upCdQVtD43zLexwe37d2eOuLMvivovHyM0XRaiwdmiNy7FFm7lyn8FITMK%2FBjbTDbMQTgpekLZe3OO%2BwBh%2BYJ5aTya%2FTcUTuhKp3nyBzyHu0nnXr0HFHQTGggQzsN33dgzQFBwbk6mG5%2Bv57UhLp0NzV9AK9mpOlvyX108r3yllIw2s2ZUeOj9if1naR5Fk2VtpmSR%2F8MImsrzAzwZdyDm%2FTns2rBNqp%2Bnfd1K9Xg0waLJB%2BX281VaM%2FXKQUAswE6U7LdTesWLr2IaWwUbs0nh98JGambf9UzTa78vFnziI4zcqD1%2BFH2GnnHujUXedN4Bevs2TbiIQGhQ1jXHitdzZaB16GjED2xGjY2v46GG9cBRGmsegjrSMJ7bF0bJY%2FWIF2DttNE8AXPQF2BJbG%2FMdPqXeJaZSMnXnhlIzpJVqvLRWOM2E3ngnnRSpcKpDiNiDiZtmS6uFrRGpMdIRZsZkMkH6b0YWhpiWoPFc7pwuRwLscdCVaC%2F%2BRDGIdr1tZAiD4%2FXPgkHpSA6Xs41Qw5KpAl05mG2%2BngSqaIhEGaeNSjh%2BL%2Fzd4pYCsTvJBVmUG2RIW9Zd3Qt8JZkdNopn5XIcDrPMJiuxMkGOqUBkYgEodU3UX8Adb7q8VQwR4VobuOPVV6DlzzhkiJPYKLcu6WRlnSZUF%2BHj9Zey227i0bdmCnm3%2BpsPg4rOXAQkml%2FfdbVsQhQGBbc279SRcFYdWxurH%2BLElMMic92CDoBHDUb42uQRc2JdN97Z7XRSQPmW2y6VtDCTVttPgMaA7ju%2F%2FfxiTodbrmipzAI79qUs05MvA1R%2BaCTQ0Z8mKQzfzAKwXrE&X-Amz-Signature=518924c75dbed8833020b9a314021e026184f2932c3fbd8463664c06fc933881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

