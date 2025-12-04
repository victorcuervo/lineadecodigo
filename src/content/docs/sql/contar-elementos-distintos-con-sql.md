---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTCJEU6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCnOcwffBfk0063qGAl4unyzPZWNsJPM%2B28a2AN9Wc5pwIgTi29%2BI5iiJhq2ZtzSk84fJFkV9HRvIJccq1jgvXxph0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJIzSHEEO76XgBhiZCrcA0u2xNDtA7D4YXVhnTgDzPwhKfEC6RaFp3Ztm7e26Syr4kDqNRqAIxVmbO1n%2Fea7RU%2Bp%2BxoxTTS7XbmoSpJT7%2BVdO35xzZQQItCRGYigm9XlKKpiF5KaomIMTLvoDELC7NL2NIrUbn3CLpBLTExL21GjwVAqHigbRwzqwwEW3AsGGA5NPsb6IzBtntOc6qG58QWSfAys6CDjPdFH%2FmZbjkI7QGTsUhjcVEQVQskTINGb65ojFBNDLhzyiETYBGX55cxweVNqWbN%2B92C8JCoo8XNJnDE5dtvLmRRnqLFikEi07NSGhxbj8156AcJDEpcBa3kGZGrof4N%2F8vm%2FaftReRUSHLWrdKGWSwycEzXPLfP8uSINw0UhiEDjG%2B9GxWMJqMTnAayMrEMqvOZkV11LJ0yHjQI0Vn89XBOw7dNFrG6Gj6tQHQfxwbAUUemNar1ZwG3wVULOq81w%2Bf3HHzsm5s9JL0hjRkW85HesDbrnwMnPdGC%2FIa75djlk%2FhvXUtw44kNxbbxabjrOF5QS31%2FYN43FplqJmKhLOgelK4KIK3xw8zYE%2Bz8uhayC29N8%2B8nlpFJlj4%2Ft61ggFLNFPBm4dVizbPlo3l%2FzMnZ%2B%2FPUHNMKIJtie%2FLOpsd%2B5%2FO87MMSixskGOqUBxDfuyjn5e5nV3W7LeawjpJBUxNhxPR1uPhtTLMnRe98Fr4w01fSo4sl2Xqa9f%2FJPYMZkTQxqjmKhigVORPGKCJEg4yFGk3DF2xENrol0kroHd7cdQcUROQPmoTLuu3yKFCsyPSWYMlUmf1pfQTODzd5qOKml%2F2lOUtAzPIU3ChBTunsF2jcna7QIAk6uK4jC3wxaRpcfV4NNCpO3tumkDl7opEcs&X-Amz-Signature=dcc3c2e0d2c646dddbb273a80ba0ca2b1760ac71aff6cb1c97bc03c4b7efb042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

