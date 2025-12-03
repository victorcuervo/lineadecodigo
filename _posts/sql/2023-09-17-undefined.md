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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFZC2UKS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD51f5agje4blQz8L3MXm22f2Xua1JWeQs%2BW%2BKpAEzpigIgFtBp5CRJy72abpl27psTMJwf1BgYvnZ2oQgJI07jpPcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCTl0Eud3%2FEVgUnl7yrcAyIhAnjGrlPtX55TRIovsGnnPguYrC1UBtM7rsPLA%2BJQIoAAZDlEpHF%2FYl7khR5MPRjUiWh9UqToyahf55YauO2lfQd2zEgnV5O25ppd%2FOqfnu0erLymy0jnBDeutlxiB192tgN8z3xAmrM%2FydseKvEmsY%2F4bwD7p2w9tlEf9sDxQCm3T5lcg1PI2fSx8aq70RgVW9B3rqXZ7jZC6evs7GNnZ6dq9ptW7BlN74tjHh%2BReJegFK9q9E6mfw6Jzc5JyZtRw4HgooKaqoyUD2XlPBQpZAMEhBQjBtrKBbOR9r0jLvjvYYyRX5jM0cvTKG6%2BfVQfiUaAgRp7dX3x1atW%2FO%2Fx3T1EfYhcfI%2FAnvd4gaMIy6gdi23NxjlKWFJA7RI0KCjsv9T8OCxcSvwWFf1CwV%2BMVgf5NuyPGp4cbCnW5QQL3jXbb6gdWA0CQxPCsusLADMkQpX4HR9dvFSl7Jxd7UxstXht1yO87tw5b6HpZuLeVKCok5gZ2chGToRgqIx3ng9LHEBYm24OqshTXVI%2FNMlqsLMFcZexFh4FQ17M2jq9vEEvVd%2BsGZ8RmdZxzCYSWuuAo5bpp3R72zxGStgWHLuQahkMsFf8jeUCu3G%2FXWD%2FQxFAktxDo6nEwFAPMOmTwMkGOqUB6rrEWwjCMKVAiqx4e%2FapvDhiXzM6Wc%2Bv%2BSRKH%2FSBnbOOdjNsBGGAV6pCnqdVbqFtW5qJfpMGmWyFcf243ubPRRswivzA1iKIDcznGEOe5srVGkLGqRYsEPNh9jtPdTuHyQQg6VNiNGXAgvYXGKnVBrSUTbWzQLRfqV28w8Jl5PUwJoX20NIbDCGteR2OclZ%2BvguBRY%2FZNN1Pg5pMqbsrsRl07xxk&X-Amz-Signature=4ab251e84a20ae99b6276db84b04381f58225608271fe5c6eef8697d5f790527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

