---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJHWNZY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHflsTMCSxLJdkjd6ibGdXHVuVol7MKV1fO8RvMPvZFVAiBBku4li5di2qChZhNyQYpR6fZmUtQMQ5gJpEx9Xl%2BS9ir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM9AHm8v%2Be6s%2FNF4nbKtwDT%2BV%2BImRPDLRO59GxZMIRVn0Bnx2vzcWydRiZI%2FR5arPjAKlyW5P4F0qulCnuG2Bp%2B%2BBoIOyKzzuaaP%2BINiRrjRIPrdkTCQN1%2BaeZSSApAAhf0ooHgk5rHehVX0IONWyw5UuX9g0uaJmkQnWmf5CY%2Bn4XI3N7N%2B8WTWCsbGdhYTljmDodaufhIBR4rNEd%2FciGgsXN5ZaICaY6%2BItferI%2FZtcN3XEcG%2BnOrcaE8B4%2FZ8mn74RIMpl6W7JVZTXjhYb%2BlF3MgvAXQ8MhTVVV8xpACqBn3efzVOc%2BJkn3q3CIfm861tWwFdFmU%2B67oM2GytTxvJE78LgE%2FYUp2m6Pvuo1nawoJwJUeylJoTAwwpsokcDzeAunLHXgvNTLWCP7NfzNCclRSwhBwrCxpa%2Fd0PyyjAsdHTWLURvFd1o8P4hB7dP%2BMm0Uyx7641KJ%2Fgn%2ByDKRbtNOudTKFVEgOafpYc3p2AEmyOSuv%2FRYdTH1iirdG7ys3WXtWaiwzHiCf38RuKSQhakzQyshhRCsn%2FYyWRxwJjrD10dYfTgXWoe3irOFo36CjS6%2Bavsj5BPDtnnnkaIYxt9DzRLPMfBJ26Yj2jvOSj5Bttew%2Fw%2FygSuwdIqrRB7WXKgFw5lV9GstHFcwsL3CyQY6pgHIC5KpfHJ90l%2BhvD9gTTEZTCoYOXIu1FjCJf9P50t9%2BeBlsj%2FZgeXl5JiAd5ZUyKinNgkMaTJyTCitFpuuu29vd4YeLShFR19hSdSmFdZElwSNmT03JaIDbOAKlKdvZEzrP2ssFnD04L6WSLf015%2BRohS4FIk47jOJHUbNPdNJ1NSfil5twVkd1AVEk4JfcRHNVGGFiKr1eBmAYRQ9%2BdkRxl8mHYmC&X-Amz-Signature=a75189f31630cc909358d859f3d79f650163b5a2ffcdd1375bd1a038888a7789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

