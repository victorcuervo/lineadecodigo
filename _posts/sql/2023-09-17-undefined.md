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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKPZTIQH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDfezDSOzLFidcvrf1EFs%2FFUdx3tJRHhLl1j50eHZaWWAiEAsgIGr9nLAJoAL73GEKsWmsBIj%2FjLuMfuoY7375WemxYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDI5M9IrBfBPrwP%2BhkCrcA%2FRp9ya8CeR3tld2IyO1LUMeQ2CwqjqgZ53ANyLdz407lR1OuXnfsv3okjwyU3sz6SvY3cWhbn1sCJUC3EPJ15IJ4ZOweibNIVxL98n4NLH%2FP%2BUmuy2PjsAvpA6W6D%2BnGQZTxAPH%2BZLV1qISNpZTNSe%2FvL57JDffGEF9%2Bpg0iUj%2FdFdQlRE0XmiHvsHGIBQL%2B8%2B9NkoTvBrjHwaYtOK1ICp3yASBVLrfEMUOLtpzVI9Yk5n1wjPF8q4EKg7iouUu7NGA0SCWj70QsIpxmw0Z0RQ%2BedehWdhmh5O54yQ%2FNn9jFJ2yawuI4233%2FhkDG4YO6OAgwXk1cEHDxE6nj7IpDTnp%2Bid6zomn1DWmlnK9lDUMboumHIOJp3Y6sJnNkuxnnGqAY67fV97siforRutZBeYdOrGNHgBI3xa65XqtyjskdLlFfiRtqVeuV%2FLmqGMj%2B7r2bFcpDNfBarqYub2XGVcjbYJ9XT2pmaeHcrA9cK2WPLcYClo2NC72r5rWN2tZJuIX43q2wpE%2FLMoftVwM8qCwMn5YPLG7t58uYJNAbeym8LdKtqAF4dRektYVfsbnRqExLkr5L7nJWD4tCia%2BCATue6REzztDqKArfc0gYEOJY6z6xXw1ZVCrvvHKMNmVvskGOqUBxvD8%2Ba9%2BxzCK9F3MwkojPLu1YzPYCx3oufNVpiR160yeoeLa8htZVRbxn1El6MxaL7Qf%2B6BFYChgeuWBq2q39MHUumqoETrkAR4AFqDf6mlqJ0VtMhn2zeaSB7ot6ovy6Okb7zMRq9TxPrNCHRhxhHUA9811mz3A483K2%2FCAY74Z2UOzLHZV0KOVZ9CP31AVx8E%2Ba6V5Uu1s9HpEr30mwFpesToy&X-Amz-Signature=cfba34895adeb9182c94d624edb61a044efd986d8bd867f8860db17de6da8c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

