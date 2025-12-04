---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MR6URJS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGPBgqk6VA1sfygQiQo5jPudyL917HPkF1bJ0Zt9eHF%2BAiAYii0Fl104oWxeK9ht6Yd%2Fk6w32BfAbWruyAPecpbQ5Sr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMXwE3zDM5gTwNjSLQKtwD%2FCWwbDIP%2Bcxw5SgulZ%2FB8Sl6NdxPEWPQqiMzh%2BbWlbkOeqbnPKkEWh4s%2BQaWxML60wcbcD3wcl%2FoqQFzOzGwCr5OqujGGGr84%2F5JClRTaviBNRA3cnTixc2nFh6HntAxw%2BcZK8LMwwzegS6mqDmt%2FSNTFP8lUSB7OlCFMi5iIyXjol3TmvkAQtz528P2QaJ5vGH%2Bq2xLf2zPoXQy9L9pqQz5c06v2N9zNdbvmXHkIVv9Daw0ZFUFrZZKwbaYXwbITbhuF7co1PISFnWROd9Wb6iG3Hw%2Fp%2BqDz4bEs1PtjsuMA%2F6TH8nGHe7V3OEaimQ0tAFP5kKcd%2BJSRrLSgyudt8N%2Fi66eNZtNn7B%2FB6qbyUVSVBqVC1gptI0tM85KjU06xpI0rW0B%2BYqhWhcC8JqXWgvPNSXQq2V1zGAXAX%2BCM2yQ44ERsW03gwCFT2PR8EtY8BadZTgxv8pwY5Wk7i8HbuS3suIUrgJwJIxiuHluJZw2iZ1DSIomj2tw5O1Qr1qZaeI1rqbNqzA%2B6OtSnaxeD6L4To0ASiU2nFUh8CdJiKhIIpz9JTmkodriJdyBTioisyPrG1Kdd08c6UYW8%2BmtUkIQoG9g2gkXd%2FTnz1VrR6oIiYewK1k22md%2BhuIwsdPDyQY6pgEd%2BToWxfdFgYdxn6f0ljt5p4%2FjexpTFb4lPlsSOOhQpRP7lrqKx%2FEau73WP6%2FyUGcPML156Po6UlPREwpjcrSS6bW3u19koO3o9bW3eckoyqCWNk7KabrFKiLBmjda7O%2BCR0221arr8O0Y5AKR1yNBuktD9ks01CWowGtL6qTj%2FrGmdMfUoXFh0lF8KLZGWzBMa5HSGk%2FbwL8jatP5%2BrfdVU50Cat3&X-Amz-Signature=864a48fb0216160454e6992baf9746b20c3210f8c5678188c947a9244f2ff5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

