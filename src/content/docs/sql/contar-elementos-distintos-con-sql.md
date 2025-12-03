---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SOF72J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBwxiIxTJTxScpLC1GZZQNQS9oGGoIr5uwDpFR264eqcAiBAbXKDNGp1VWgc3vk2OgvbQIv4WB%2FaZow1SNwsR8Q2Lir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM4v5N1trmy%2B1sJF2zKtwDyNfvEVMhOiWasTpC6OyGIaK2BogE7s6ETSbMrnP6kA%2FwWSO2uAZV3dopvRKlTOkX8ehULrWBBQkCf8a%2FW0uxPlN0tAhxE6YqkvHIi8EXNtm1LPPJWRa02af44hvgAo6%2BREttnInzpk9DY9u%2BrO2xD%2BnYnG60R64niIqdRjnNo5tSwcr6%2F%2F%2Fco8%2FE2dZ1o3pS8JmU9%2FfwZk0qak%2B1cms3EnM%2BgL%2Blv30MI%2B3o2HwFs%2BNgzbdQjzzPHDOSyKpHN95DkxQU0hKtdAdhY0Ij3Hh7qIQQHfp%2FP2MgNBb51yYRYPGfNnZRz0UuqbbtaCfv25eafrvenSEvUlz%2FsvfcSOcKJ8FkvySlKqw%2FtGL%2BpehQDj8KnnQT8MNfICwwOWamD6SU8WV2m%2FTANp6IMSqZUoBC%2FKjH4KH4HuFlhPU9gD4euXZ0um%2B8bw1qjdCcLBfNIP2%2BT5B4ecy6p%2Bg4jFEVf%2FxeoJMDkvO72SEYlNy9ZQcKOn5x6x%2Fo%2FO9qKU79oql8L%2FZrYr5wpUbpaZknQ%2Bufor56WUy5pJARF%2Bjz4QWhhdINfZF3oKs%2BOaBtT8ZFmml0rafrj27TpfkYJin29Q1%2F0biYlK0R9g7T2zE54TX49OxtNJEwizYGowtIm0yKMC8wsb3CyQY6pgG%2F6wwekOhqjVkT3F4qSzWJKTri59ZJKZnmf8BnPASByleSp994hG0Ti66rVOhkqSpRnoUX6eAyaE9QgKHwk5I3sz%2FucRDE8OJH5jOvzKGIGsNcTJ6tUKXZUfDBkMDUNVc7J7WnYz17dZHj%2BnHjOeSG6B7NzFJv0%2FlZ6OdzueOzGQTNbpl7ZgdmWazg31Xkl1W3Kaa9rDgx5YJaqjvBvzW1AGM5bd98&X-Amz-Signature=083f0234dd599caf2a9fb286315c5047f3cc26509c92af124d54a505d7cab790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

