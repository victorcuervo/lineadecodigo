---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5PMTXO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDIWYzqO6zMznwWPGVjVW1LBC%2F8ioJKG%2FxxSQ5hFY%2BKGAiAEa79wilqhmRxlXHcdMRTNtleNCGbK8VMN%2BKhw%2BwT75ir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM6kIn%2BrStdgevw9%2FtKtwD7K0%2Fsr8auflR8t%2BAjAvBmpgn7lr3mRZdHHSdwUU94UO0hldSY7qeTCIPxpGLy4D0mLK%2BbKBRFUvoJRQPGvj%2FYM38o%2FGSOay8k79J8neYtgcf9x8KppMrvAlrkH%2FGQYzTSRTEMUlgANgCGb5dUkoTa8Ap4qzo28rNuQjlOdL2iDauLZEZTlD%2FrMt7yu2snZI4C%2F9qWyT2EYFOCC4v3dt2ffZa1jn7YTsSqKqgLdrPbuSbvuezid3tws32l9a1r%2FUofghR%2Bqgzz6anZ6PxuEkLpc%2FkE4UzHviKhTUeSmpoj1oALFh%2F1AOKjMekMCFhTuAQeMqdcOTVBk9h1MV988%2BupFm2nnbs9dqaCT%2FSTaODZ5Jc4jB5ODbHgyIm7fRv8%2BXNo9evkE5FXmozriDfot8TEyePTSy3%2BubZoNhSSYCWo1TrbsHf1gUjiah97%2FzsDegmVVFT2T2axSuRZdwNiHY0wPp79GwQSYc8DDhdbtPKDgjd7SL9YA%2F5yrvTR9RAj7VpliWPWSMblcyos2EKKH4CvKN%2FvQDmf%2FX%2FsvsgWVH47oFrWNygN%2F8JVKS6U6%2FP0QaDDnq211GQvKNeTcchCvTGk2tuRrToKCLuUulNu2mmnx%2BqSCh9HSbbcPF6yMcw2vfCyQY6pgG5Ebicq%2F16mOKK2VlFRfqOnVmXcgaLhwXJh2aBz7Dp9VA%2FZUU%2BmUJqB%2F2snNE8745HEUo67p065zvt92dpvVI4%2FxMb1ngvU53DOU96Hq%2Br3USfmem7VQ%2BcZYOMKrAwWn2kS6Sb5M9J5l6%2FsFWFVzYOWtCg5YAEmDKhp2MeuInEgr6qT%2FQ8zXdDhZfrIrgi8ypGAIBZ7U4DaIKeY1B4QJmV%2B5pC59iw&X-Amz-Signature=75fbebd780f84623c96695fcf4c2c4c279006e26bd908a8ca5e71a2b37209cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

