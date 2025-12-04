---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFIX7D3E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDJUnODErgp7wCVkHfDUI8hN6Lk2kpbJdKKpRli5U2QdAiEA82%2B5g5DPIr%2F%2Fp5B4tzU7m5PUqPP8D8%2FnaVpcn7T8%2BcEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPbsavN5m6we33%2BwCyrcA%2FCFSuW1gh9elUP35EQLGJlCyQZH5HsdDl9kBSSDtIcxtHZEKELsJUL1T5zAr3GbX7NTErZwgVLHSAWJJwKtl5yEbyz01CCjcH8AcegjMDBMSqR85s3DOs%2BVZFDlqiUxLO0aQhzx6JRoJ6f6rkZm4OQRMy1dnUcRS9HQ3aCM%2FI96h2KDngf4es8zrRNBCgAwGd2EwHlXNEV9bwvDtZR66Lex%2Fdo%2Fs%2BakSVcbiGSX9HM0VhM6Syv8TBKjkHOE6%2Boybms0nFsFIZWdWBQQ%2B6Jb5kMTk%2FrvjyNvYLOMdxitm1RLcTy%2B6G8fU4qBT2PJh80AD483d3idpc%2FzYLpiY%2B6hnD74Q0482M%2FOZL4vjm5kxq1AzWc97mBGTmfvbgJLL13mBmUflVORSFsog%2Beg27Q2mToXmxtN83G8wCVciadHH7d9wqTP%2BvxtMbredn3cE%2BP8fEk0astWFG7t6gaKmdPBFIZDjrKKbayp3FYsDnAtP2GS7Yv0mMjfdeos%2BMwa6yqiKT6EyTS%2BeGgqWl6jjAxW3pFr%2F6uHudeL11GQonutqhjMPY%2FQDWz6tX6nbHnvE7bJn1aXUU8JqaHavklAGpMx%2FaPx05RHi3Gd76DlX1UhkaURSA%2FQ8hVJq6ASw911MPGQxMkGOqUBxz9h1B8BHWLwEPLnktzySs2qZi%2BEWqwUBQBrBSzZ8YP%2BPsbNd1PDfEdNj4Kf%2BEGi5CZUBaTPRtMqb5FfM%2BfDHCTEhjibOJjL1fcaOwXijd0388MdCp3oLhf6eV0Q5ZXijzLmO6hx3RLoKjeXEnwqJA8EEQBG%2Fyq29Cv4rMDa1mvGmmOpTNv0pqUz8lJwrmQA4gzfm%2BgF9J%2Bgtln6V%2BLUyrmXTKze&X-Amz-Signature=27181b775e4e03a61204ec9efb6ac2c53c8bdded3e7e49b098b9a76a719e687e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

