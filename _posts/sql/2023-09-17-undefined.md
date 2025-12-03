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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GESGIO3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCplfi6pz5StYEREv9CNwAKS87Uy1pF6ZNt%2FKRcJG42xwIhANHNEPWZySGcDaIW2564QZMszKzLxSfpX3ZFNxrGqkOVKv8DCC0QABoMNjM3NDIzMTgzODA1IgwedGO%2FgN9%2FB83MbSQq3ANmZIBtgdMsG7w6Wh9cNfzlRHiKJQ2YVVNQ1MIMIj62hFuMRA7XUbHU3MYK%2Bszj9dvvYi7WD%2FSiTu9uMPMDZpJS%2BG%2F679lnjgSBhlB6McHal1BMW6gnFn8FY4VCBIiug580mpDR5m0Qk0MzASOAFJBuMQbax4V9qOzt8I3C0YXwKjuKlLME7Bv6HF5nEi%2FTPo0zps8wRvZkjVfWWDO6n%2FjCk%2BJldSYO7Ls5U%2FkGZ%2F0Iv00AQJ0RBi%2FIJk68JJBiEg%2Bj%2FGvDmEe9sJw4i2n83IVDspQLbDa%2BX4Yc%2BQNVSof8eT3%2FNNGnD2WS%2BvR7GLbmh%2F7kXtANTSo3CWxqngas%2BwKxBV8vTEdrCpydZNr%2FKzmzV4iYjD25%2Bww05AssH5mZ7aip5PXEUNaq3d%2BbQW1gT6Lv7RTrYBxtteSDdk8pAWdXrDPZRQ9jzS1FW9w9vqezVQhlNZy45a%2BbVneWT%2FuonbkwDLmTB5mIssv9VjA4dI6%2BwgDk%2BItqfVbliv132KHkg2yJPNRekQEBUMWi4ETuD835rMEdjgP2j5Mbc%2FMweqiKX5VE2PwLP0Tx98GNo5dIo9Z9J0YeWswGnEK%2BzRm6YQkKAdhbYyE31JTW5s6%2Fa1xlxN6yWa%2B7qF6BRmv%2BrjCtzMDJBjqkAcKeoMWyfpNrZ6hnX7ZP1TJp712yIeqJV7sfIcr%2B24afpKNsXIvQWkLlleoP8tB6WGY0kftkVdl1HI53EFZzCej1ORIbYMDu8G2LqSFr52EhlLE%2BIijwCIMPAZfulN7yEd8HMQvu0oZJo9N18hpNfxe1GKM3FhXxpeb%2BtF1sBMEb3E4fHs%2BBU9sUGvXHw%2FS1URKrD9mHPvYLOBXO1d92NJXO2qZG&X-Amz-Signature=2e5c5d5eccf74ce672f528ee357294913353631a5d2c51473d7bda84bbfbc240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

