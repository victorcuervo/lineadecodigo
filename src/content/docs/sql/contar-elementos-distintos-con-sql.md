---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2R2VXE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCMZsB%2FOYsbxsmJ2fGqeyQnqojLTlTLRWNPAg5th8t8WAIgLjaO6yCc7i1GyibGDkoqDxLMqendJ3NeSUZzjtA%2B5v4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDHEz1TamN3rQGiYwgircA01V%2BFz6Am3ho%2Fw05Jf%2FaVqmHVan%2Fvi4PeiCsQWiERs%2FUnVsT0XcrYUPtYCC2xUicV%2BBu3guuaVsfPpqSTjqF6QLIFe6gPKpjtwVfp5%2BQGXC6QlZjR%2BDGwC5kshdCbS2e68ZUUETmXL1Pdyr8raZK0E0oxgt4EUeP5mxVe%2Bq6%2F6Pc%2BZpcB4KH%2BhN3R5DUH%2B7oORQP3h4jK3zI%2FJiRNO%2BxNzb33mrSsYIxNDf14ZbOP%2BuILg9oA0AXiGomSQjspQAD66gTz54ANM%2F8a6NHLopqyk5sbfNAVbHPHcRzBJVFqqn%2FVDUnSjbCUchn6Vze2mDsPUraG6bjsZA%2Fg7maraYH44wgx82TF4VF1L3J%2Fcz6%2BvGizbD4m1reFWt0lnQISq5Ld%2Bza22UDv1IMeJZ3u58o55poPlRbrwGccOkuFvwe0danFoJQZ%2FM1X%2ByY%2B7fa9zrPddU0C8pOKS8rdx2OidKg%2B5Ikxw8BkN9Bx8VP7ZZSY9mpjJHOTbRayGGdWpRKkt9k2OS1o43kKN3muk6zynROOx7lJB2190B5HcPsdPmXDysOp3VgFxa3XOawlvu3uf5li9lGhXqAwFVhpP0oCeUlCQ0%2FYXZeBZpGPR0fQW4aWrX4CR%2BsAmotSokQXwoMKC0w8kGOqUBvlmHBcdVEiTL2unYoaAf5XD549aV9u3arTISmQReeOdqdol1GIaQ0KmdNFOtdl6DFdHEjX4uKcU4hSEJPP0%2FB2O%2FCWZaSumpSvJsyOYkMkOwf0VHl3wwpc3ecKlPV7RDwAu%2F%2FhAVX9nbavds91dWPrTpAZMqhHn3y6FiWfQpQXWuXhkFCx8aLG4gpiUytElWtsZqNp30hnbcSlyIJ%2BLoxdKMY1s1&X-Amz-Signature=17ed3cd1c6e48d5d84760bc08570e3f71bd198762e6dcc4fbe85d3ad403b1b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

