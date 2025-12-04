---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBTCASQH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBZNCaFSlvMS6aZK3Nng3yEM8njw5vyAF9jw3J4VBXMgAiEA5fjgGDmxpvbYE%2BeX6twfx4kzk2s480YdTAZEIcc%2BF5Uq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIxwws3ldF3gnIHVICrcAw74BsYEqSQC70S2pLYaTf0zPC3xDx1j6unrWWRG9JpxoNqvmg8c%2BcqqjEcj3CMZ8kMqY118tba6R8yRMntDSrBc1wmQmTi3PiTYMDfLzzZjO6WqMyRdTZoOblrvOx9vnqINFfSzJNpZJdDGUXWjWaMHC5p8aCjqr%2FQAQzqe3miAWPSuJ4IKjLm45Mt7X9hvitb8AVZ4vpjng1pysj9MTo%2BokVNL4gAFYDPXIgwexrf3G0xrxjtKYxuzjf1uWLJrPbyN1L6p8ChQlpSfTgl%2FeX%2FbBTOi4VljvYK2HyC3s1KYjqeNcVlYXNmHCmtkxIeOx9nDlY%2BZZOuvbYvJ1H44YDVBdH9EQM397AyPA07dd1lLi5Q0sZAqKPbdYfqtQX4l3jApCa5gSrg8PdHlWCBvctT6ilySdiE5uwR764ZbzjOCLBPETqYFh%2BJD1UEmo6tcFhetC5JRFFK3gPySycdnRvQXHEjBiXhYc13dKoXxnsYLtvcgxRx0m7ystEp1N2pajAc3izjoN%2F7xUiX1KEU%2FtVAxJjP2zxR%2B2gNSXlWlkEsH6vYw5LEhIMuiVf1Jhe%2F3XGab8dScRQJ2RM5IBmxLcTc76jn5LyGyP5idlQLmZ%2F%2BMr%2BT3s2koAGOVohziMNnoxMkGOqUBrLE0Cup%2FN7aGABG9mwV2WI7n0N7JMzGL%2F9nj9Y8RYeG%2Fr86DzPAXR9wjjKLRw01GYbVyItl2l7G7l0sWZTQPm3UK7mFgO9le6Bd19RQGYr7ovNf1KYb3paqZDMcrOmapnuqb302kNn35YGQQpZM6gMdLuAxTIt%2F%2BbAc%2BRB8Vs5WCO4fFHr10mXk6FrrhzqPtndb%2Fkif1DdX88%2Bbvd9ZA%2Bh%2Ba1bit&X-Amz-Signature=852353b1049069eed9f69cc13e5eb1a7eee4bb0ec15839628be5574df71503d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

