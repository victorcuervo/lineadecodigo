---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNMAYIWB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDsIo4d47MbAKD%2FW72IqtGcHWViLvIsVyMTDWHl2wdBNAiEAwY4hlrBz1hRf%2F71eADB3iLW1ssAVu01NA%2FjnBxRfSg0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJrQ%2BDJrhjQu2nqjsyrcA3U7gv%2BOhXzhLja6UM5ushvREsw6Z%2FE8pp1mjAdEocV7%2FexLT6INGI5To%2B9yRcwvI6tDzEtlJOYxwkNEj2B1HKFrrBom2aLQxvZ3HKOFf5YNmdtm9RcShTlAgmC4zh8UsISkfNgnGcfynBxKfxywO57gCulVIVrrTDZKfVmNqOgb1GuQP7mY7%2BvBnzZrggEOPNiSbOtzDD8UynvPe7PobKn2SCh8O7guIhnoKhNny5BhBE1NzfLv00RJhbkAZZtMayzmrQHEVZGWIY%2F5W5PR79x93ZspeLWLsJQ5HmAYzOlF9Ei19WgOAjPMZyMWJt%2Fze3PCmaF7gIPe04cUj5N5B9XQigiQSGpIcZZtxpqqLmcYK5px3nFasRSNK7rFYi1sk7%2FYmDoLUAiN4mW7x97lch8yrvwMhLk7py9e9zqjjvfx2JQBXLP9z2TiSh9x%2BjiV84lj9BUX17H08ertP%2BSsgbeCxJopadX%2FuMQGH1S78MsW73du0492EY0htaj25zArngBENk8zL8n2vBM3nr6FFiX%2FZjU9LXq6M7m9awvjNF7Ho6lxnyoQ%2FMqkxnX24hRzmvFmvzoR2G9pHZIMgYrCiIM7Qwiar3%2B5oxFoI9W4ZtnyMZly89e0%2FLX%2BXkRHMM29wskGOqUBDV39hWXqGq%2Bdzajd9QiIwbaY%2BprT3RuzgmW2uFcf8Q3xWwCp5%2BBBmI7YfjO0CDmawqJ%2FdRLRJzU4H11DNdxH4OPH9N9h4h6uzeZ%2FehHb5x7aIcSBpfwOT791qR3nxJL5CpIr7AXF7ybNBWDf7W6WHtxK2zLqBOiSWcQsklCLSdweBLog2AjjsEMycBl3Hsox%2FtiJ6kAjMkGCChaWG8btkv7rKtgs&X-Amz-Signature=2ad5ac1469695c75d77b3747714182e9d930fd0fb4bf2be9a695e3f42cc5eebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

