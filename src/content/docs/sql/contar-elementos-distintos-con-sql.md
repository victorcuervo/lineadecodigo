---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z7BNEXM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCnpTxtSJRhVRyB3lrm0JAfeSoyQJ1RMScl2O%2FTXfrMdwIgdF8jdkgcNfcvBcbIkFcj9X6dDQSOJgOmEmVP6vtarP8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNCPiD073asrxlnB9CrcA%2FZSBkrAQ7iPRf6Icz20dlTZoPhhcw%2BAIqeg71FQ42qRwtctFbskKUTfz2Fmd9xyQrZaVa3KGA3a7PQJJqy6NSvnZxNOJM9CiMGu8gO%2F81CGG81l5pa8k62Xfc5PCVvFzSDlZ09StGFaur%2B%2Bpi0EgyD8%2FdQGiNrW4S3nKI0Zea7m4Z%2BDx3IxKAv2N35TzphaClXS3CSyrFXD%2FUVeQZuDhbKG4n6YjwNqeKOwmwhhPx51RIgd7cEioT55j6dfgmBfMpEIajWIWbqgVwc%2B%2BqXafyR7rjNuKRfC8C%2BvcIEw73scUeA%2FZNhCxM7PK7uk%2Bx2lrVIXwxwB6C0aR7GoLya4RVuGXncAahf7GXkYznXp2%2FOUcv9eHzknSSbt2nAz%2Bou5%2BTDAsxAVOv6bFMpgkxbwRX4TXiPzgIZb0f7Qjapn5EI%2FVoRfzxB%2B3Df%2FaUcfhAySaA%2FIfkSpwVZoO1TWDzLFaBf5xodQKCdvLi9piiKCtuKtiM0EU%2B4TAoxfAHzZcFOGiRU1Ztb06qSBDGObLb9qw8EE1nXSGh7b2ipc%2FMqa1iIJm8XtXONTyFvRRKi3HArZ0wLBkpQWcuF4wojPacKBFJIBPJMRbtDZZk6zRAsbQ5MzCU5v6FBhHUlTSx3QMPKFxckGOqUBvZQ2Yr18U1HcWHg3HzT4K98W4AL4XZ3iUXC3AH5n5N4i1nSSgLbwuE4i%2Ba%2BA%2B59drKlaIGRG8k79Hc0zRGBXMTRPS9OhKXFmW1HVe52oaEPAw1qJMf7yLVnBFwku4twN33LXDIhVKkmABo4muC2F2LxKPeildyZJW%2BBtg7DvLGXBxgRgDmEcS%2BhVc9tNYyfgwC6XeKpTzLOVUxkiPbQlk9jf5Q79&X-Amz-Signature=8fcf1100b109741e51bbd6dd8a65a6961a683d8fdd4eef018add501299f3b1ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

