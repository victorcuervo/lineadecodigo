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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPXJOLDF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCeIXjt9ER8EzyAy3B6TOg3%2BRoVgzJsN6V6Ft6xtmfiBwIgCuJ1XvO3s4OSFeZ8c9C8iuK776dx6qozFKX49n%2FgXhgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBveio5HzyA41CX%2BIyrcA1B8a4b1SGQFw0MYKAsvF9tWCkHq28bBvhvy043xje4Zq%2Bm91qIZfr4b45DWfHAJR1bLQai%2FPfE3mnhGcHHacT8jizugRBQp34%2Flw0jxbd9LUHpP%2BqrC9pch%2B68B%2Bo%2BfApujyCXo9um4zd%2B8oDP5fXUcr7CBupSO90xPPCjiD7MEFdtZx0pAZQ%2FlV33N%2BmItz9sOGfznn63OHqv2QA09rIyO3%2BNSSR9y9C9OqSvMhel00iHvVHiAcPJaYZvyyy0jLkjO8J27v0AlzQ2DfWuLyQp6DDf6TkPR%2Fl2ge%2FQA2PqCHmHZe3USXB4YFBtY2p85PWlS0XuDJn3sirSv6km3tOmiSaOrlpADuXBcm9O4K5ZMVUPjAHnD3AYcU82UT5hC6XLEe78gMd3Gd1vtKUZxIG1GLiELETnInWBszPlNiRnfTcZrwveB3CG%2BeEsuj5QvqNbkWK%2B4yvxtzHF5zE7%2BN3zUEQtZqZSlDWAZ%2F077Hdl%2BqEXM7zL4e63EHNJ0Yhijua%2BeWse%2FidF9xntVPjLp0yqJH7WLZO5rKwSW0S1lzUBFG%2BBuNFrsWgTh4ddCnvL%2BL%2BoVdCALG89qmDOaipGC4BeHAQ1KcgdZCA7evzEe9%2BWVQyXNFsNZE3T%2BsfUCMKrMwMkGOqUBEl0ylAXkaJAgYOR1olDfquxfNLtsSu03VT%2FG%2BlyEy2qfjwsozzA4ssq8xUIk%2FfiTeOLXoMprpfyA%2Bb3avRgMhh%2FozedSG3cONOJMlz8vyoHgrIqYvew7niqD9GbUn49Q0W2%2FfdKyMLo6KCVTdO0xCHpfZdxt66PMFf5n3s8KDQgXcky%2Fx3Rb7xL4pA9%2FlZEuFXbRwxeBizM8%2FZOor%2B8C6MkReByH&X-Amz-Signature=177cff9bfecbdb6c18d50b8d10974b0825cffdca1988d5814fe387ed218ef8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

