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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673EFZC7C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCO89Eb9vswLW6xtI9OHT7jk7Edi5RThONtz0hdD%2FJu%2FAIgJFDNYTe5BwsLWyDYO%2FdBFs3rdwcDbELGZL%2FqMeM2FBIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHx%2FF%2FP6Dnzy2ofsNyrcA%2BkeMLhl0r5CfGqSbbrs6PsbP0jyySLUh1yQHWmCP786Ksl6Dw78rXWF5SfQDOO5gWJa5v27%2By85yIf2rTrUfUKHg91i5nHftpYqbdcRMlfrTAbn1k03qJ%2FvRo%2FWPIoZfmSI%2BxDnZjeqvlNbZ%2F2hRlZa%2B2kIiBEffNs2nJRQzX8wjvrd%2FoDrLiUf2g990ttytM9IoGSw4mWK5yAB0pBMQdhcLQbuQMM%2F0PmieJTyN69P7VqLNP2WrJ58l6bny%2FVB6VkxkegWQn7WWBVjy0qUyAD8bgWGteCGMhe1Y97dHt8G2jbBwSIZRa6PdcfV945iPDo%2BeWD43V9veLkisM%2Bvvq3lyDRNJXyl4ZrR1rp8C6mFpemGQ7Su5SsN320ZKAF4MaZdPFteTiJZyWPq6h1TRy2QWPPRBjnn6cgZg7bW7B7pDWbJrxvixKRgWreHLu3JsdsT3YNNvglqvFJ4tSSB1Hb2bLIQYe43Kw4zhjPX5%2F%2BSzrfnD%2BET9eDuyJvI65TLHffe%2FNSVEqmqUxnz98VjBOx1cfF6CFcNGYHJ0gjdnvFfydTiuHpyvujgEnmJxiAHdU7ESoezJWt42Alup%2BSw9u%2BjHTRC1LlZhruvqfMXCApfVODPwOgrVOayXgknMMeUvskGOqUBwiyNVN74Zr85rVfOglvrtXR%2Fqgwtpf5fczb27iO64LpgoWCDvcb%2B52d1KfkmcPvGfoLdM6t23ULZ6XYuSp2uSgjeUUNHdeEjP8g8kD5Fv6VGtu3A5SeLvpQh%2B%2Fgqy1M03t5wTGguL%2BQRGNNQBnfcJgmfA9gcILXrkbOn1xBas%2F1wOjd0eTdZVre9dzn1E2a%2FY4binpKcsoXkukso2aN5Z7COv7d4&X-Amz-Signature=356915c0e38f90cb2c09628a6f58f78d0eb52a3c6348392738a73cc801cf68ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

