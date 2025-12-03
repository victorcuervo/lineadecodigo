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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLLYT6J2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T011330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDXG1aZjv14Q%2Fzh50n%2FgKAD8eGfYg8LPyZwp2i7Mb1SRwIgUuOkZljpo3YPr84fH1K9404t3j5qJ7zkaTUioY99EYsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDC7btcWgh7%2FPwKWLsCrcAzMp%2BN6r%2BzVjSWdtoQF11jtEgSRwoBwf3nFgWYpy%2BlVu0dsVgEnuiu6UNJycJpGgsJY%2BpwtS0bjUGfLy%2F5gDLWcv2X8MvVvB2Cbx4mfb62qUDsp1Ni6oaC1HMW%2Fj7hcc%2Bo04dxsY5HbvkjW1xHCse1VF%2FoTf2EguzeRX9cRsIAbvLE%2FTUdyZNlfjseF6TuEkO%2FR7%2FxHI9D6P%2F26mNiRVvPRF7gmZOxEt%2BJd5cvdp%2F0DMEmQfu3SrS2iEKZIz%2Bq2Idzra7xY3UGLr%2Bf7k1ksYn%2FRxro5fM355y%2Bttv7Ra2ksO8S2VNG4DUAWFR%2FTdoGy%2Bp2UzfBKgAU7CHpWLEXdHs5cQswi6gc0J4YzdV1v1i%2BtYargHsVhSAfnQkQGR52MKA4Fwy4sujA276uPBlCOqj8Bl9r3NH5f1mfLrVa6p01XbhYYzYcNWmaPMUfJu172pLK5gTzqSED68ALWC4MttW8sJLpbGd9W8HX1SlIgIjbu8DkvgGr8MxkJVafqLSmw1ReKc740M2VNPlSrpo6HBHIBpqma2Abj6tveWm4AGOkA3JSHMGaQQZ3Ea1AGGaUXL4%2BRdYBCj14FkqFFdG6nIdQKNAYp17R2cpIf%2BSTT9FMoomEoAukQ6Zuy0coT8MKOWvskGOqUByNLIU0aGo6T5qGQ%2FAAtstUgKOT7GhTx025INoqAkiJZ%2BQUf2BCoTs%2BXudORszlsXdsLzJlSDltJV7OoK2OyQehoyoZclcph52KGzEzRS%2BaTfXNWBD2mRfz8IWjmmFGZ7LVQwLlWOqnVZ%2FWBOWFaI51zev2IcKABqhOPsSdDttFHtOaMR7iS9asLqxfhAAAdPh6yrAqW6GwHq4kpKc1n1CmNMLboq&X-Amz-Signature=8b5cd46e7a331c6f9ba1c4d52e8609188759c057373372f5e3134ee11f516175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

