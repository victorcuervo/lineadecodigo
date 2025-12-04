---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4OGNREU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIClJAUHJZC5vyzQXQNs%2BMB410yButpdwWkp8yzzB7myuAiEA95caiWooGraH%2FXJ%2B%2BP6t9GIlWiJLRo8r5ZPVN%2BKcmPgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDb9aZvx8o7cnx5NMyrcA9ICZKdGp%2FXlxOAwduXGyJz9evN8gnqW8iY%2BbQU6lRx1W9%2Big2g8baj6XsetXUN8kTrIX3VNrpuEuka%2Bkv92YpTmmlWOht6T65Cw6T9jtdoW04MWHmrgtdC2sqywPJPkp%2FjAif%2Bwt%2BXjxFwd5vhDPn7MhzAfx036MIs5FqucRS3zR5QrQMsn0FGIWedaer124Xn1%2FVU0D27spI9pEIzVXhSda8inlEBVI9DTpL%2FvXJQQXEnTyIcy0Og03fdsxmSt5SfcmgMex9xBLN%2FuELmJpP%2F%2FYVPpG8qwk7zhE6prAyVgBaBTlFeslYreZCAF%2BcGgZAoLAy8HtdzqMdmsNCEsMuQM9Y32ajZjsLgtpbNDqsoycLC9YZ5VNA%2FmRNv%2BI491CsKWM9ajVU0c3wT3jsm4ia0%2FTD9OuRKPHlAMgAbsW0oYF%2FdESRvySGbH%2BJdZmnPX1rKzsuVllbTzrHokfz3CtaTE9t57Iq9pJXQbX4seCwS9X%2BQPgNFeAoqc7zz%2BAV0hCNAL1uoXM2VnJQR11O2sx1L%2BnuENU7c%2FzDEul3yNYSg%2FO1%2FuPcOqCC08aB2Z5hmIgcWEsgO2aQOnMLKMEVajyJoSjmuuauU0D57oOkkuAUFhyoZSGQMxg60o%2FjhtMJ2FxckGOqUBTA2tGWjBgmo5xFCpBNC8m%2FU4qypd21NGCCrCgEP4dys2hEdcdPampkepsOWrQSONs8y5KY7y%2B2zhWtb4%2BxEq1C4IXmNRAAduEi9%2BbMU3ybeK2BMfXjx%2BZkcEJMGV0CCQEv%2B0t35tatPaGrbZDI1BDIaUZLElUfoL%2BNTt%2BGPbX%2B%2B9Q%2F70tHxGo8t5DB3bjpG8ROZ5WUbEzQF1lx64IkcZBIw1flLs&X-Amz-Signature=31b1292007c86cbf73b01b8a3a8d0e3c7bc710a313e8dd970cad5f49c9ebc819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

