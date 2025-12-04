---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWHU2CO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDYc4jRD26eMb0Q6IJRlFMhrHDA8AsdVz%2FRX7fFDzXqWQIgV13D%2BzYoYWA5GBqxhFmpoa%2BXseie7Qe1%2BC6NmywEm2cq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMIW7I5Pe4rJT9OyyCrcA7o4ePL9sioz7IkzY5RC8a1yfrkYHz0HRb%2FpHXdo5jkiQkctwt6Co30FoWgF0G%2BRrElzF3NcO%2FunokguUpGgLSaG3PN%2BtXAN5GHkRcW28xdxs68I9S1TcGbkRyRGcqjenQRtrYSwMiHQWzzRBsGwH9yoQDzWXIYWWAwL7rlDjQlSntw%2Fir8UhuITPUzWTw9dIrlnaKH0kpu7lFYiZIZmlYKxWcHtoB1hHLO44z2q%2FnM%2BpnKzVw%2F0GuYwtM0%2BN1GyI%2Bf5Mz2r48pXFSpExfygu1a%2Fs%2FoKOuT0tvy%2FgafLXqM7FSGTOKbqtCG9FQgFlLkL9%2Bd8nV7yrXa2sMmB%2BRsX1x2BRGYBq%2FZGIToIdZifoX4wUG3ey%2BJP4n8L8FxpIv%2F4RitSkG6hPPR9y7YT4as0DwGWS2TTkenugY%2FZo1A%2BGr6rzMQ0hnZzogh4R1zEBKEyXe6EfnBY428esazdak%2BWYUvUSpVHGWTkou5CLDg2YskVxnYSLjvq6w3wPIKl%2BoWtAlpYTcEfyaOpHc9agHmtaariK9vdX8fNS4XoRLTBMrU0m96Uf%2Fab8g4yPN6b%2BnZBi2eYLm4F0lYizbPPQrriE1rWHj40QhcLNgY54WWff7o9r%2F0k1NvT8M3IYogWMKu%2BxskGOqUBp5IpS%2BY6F%2BBkqfMbH9xdafnhXcCHkiv2qQdqzve2mej%2Bi4weaJOL%2FbRxJUWp3rourYk1KPzP06s6KKU7aXz5%2BVg8W58zLN53POAMpYQC%2BOcUYT2NySjBHzIwGu6ufg3KTsltm5aY4dhdAO11dJsIHabxYoRhPeB%2B9myVb4UJ1RBmZmHLq%2BKiXDWYNpGUhtBvAZGNBmCYMkcQDseCxu6M4V2tEJSd&X-Amz-Signature=942d7f400fc981e0c5d5bdaf3b7f620ebfb7d2ddfddbabb11d206b9268de6e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

