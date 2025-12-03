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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTRLGS6S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCVGnCw%2BBKpw2AHZeomhOX7SyXK5jktuZBjfz51DfZX6QIgSE%2BWSvG8rM0caWSW0WEQvXzUzoiXEDbW%2B78BTskDVYQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBYR6nOw%2F2SCfFouFircAwEPg3nrTI%2BtWf7VbJz3C21BEDU7xQTpJW9hZj3lLs9ofsMMp2Buq6lW9IDT%2Bn9g8HE8yW0BXlnst7KJ%2F%2FFmHfkKtFCU8mgbITwSk5v2k91BJ5Yip6KJZjqZv25J6SnXy2gjMPuPINv1oLfwFn4EZWRuQijhEmCh29nIlu3qDzBm9izJshfWPXKLCQWsH4xw7P0HWTqPGzrZB0sZMZOP4nNbXAWtzgbnVUV%2BDHJBDzJ190SOTqvpt%2Bvfve1fn42kdoogf%2Bcjy7TVSq%2BOQBqSrIP7hqs7Y2HR8CB3l5RiF4Cm1S2ZW13N9A89loQHCO5VkNOB5e14Eh729IAEizd8HOjx1QmCCviVS%2BOsRn2VP32QXjEIkud82utfpqRhixXeOti56qQo6GpuRvKa6ECd1qHvQGPGKx7bS%2B5qzm1YoWYPzuQke7ZtwluHpsGq1DmUWHo8cVCp6cbpg5ZHd6jZxDO%2Fl8Ee0K%2FqTHeZ18Hq4MNNi8PLhjifhSgdMLLFn%2Bhkq5R%2F6QHTAbhKsnTLw01aY8waBeZMAxykdJN4%2Bo7A7Ee6AafK12HajNNAYInJ5JtXpDAiLI9gX9fA21wHsUeHLBkFoA3wY6ctcmFU7vpdrm%2BP4mHfBYSBvKpOZuYYMMLbwckGOqUBW5xvu35kPp%2FVpr08wTD2qtkpByXSUKwwBwVpfuKVUIVU2sWS4qwNgDDsq9FPPBvzw83dEAnQ21UdN1MGuPbxjh29%2F%2FfD0WoMQAMNmRktUEnN%2BWEnMeX8DODb%2FQTFgIj0CGWpVdELNwlAnKL%2FPZoSzsjqOsSshk94zyKxj8gCpHs7wifeRUpoYJg23xYY4ktIFY0q905JfWS7b2%2FOn%2FdOkzEzNoR%2F&X-Amz-Signature=670cbce630605ef47d8e14f7955a0bfa2d2b614e79c38bfd556f94fc8863f820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

