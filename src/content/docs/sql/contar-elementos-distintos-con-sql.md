---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JQ7QPNM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCSGZWYPoTYkkhQLcCbVKJYfiFr%2F4iZiRmQhK%2Bp0HVB9AIhANgWpzX0Yx%2Boaw9ekzlPLm708EHk0eJyJEZF%2FZ3B7a2HKv8DCDkQABoMNjM3NDIzMTgzODA1IgwqxbyYPqpUxmyGwjsq3ANmgXF1VzJMbvi4FZAwyXtZBlw%2F3A7f4sNYA1xWEmCwCmx6c0ZfP8eRNWKHE8BPb%2B7YKpHGMVoUVwCj%2B9qG0CdRsH35V7%2B3h37y6Y6FC9gJRFjtz49rTqBZz%2FmFxN4re9IT3RMHW7eoJN%2Bn15hYpBAL1Ev%2FXjzMC1kzc8pYKs%2FKKY9FyMa2fbQrXgphRPoCb5Nj5eqkbquq%2FraaQARtgotAwe1OdCHoeAsimg9ccERFReqXcv06df6%2BmUkpKhv%2FKuTd5EDCXLqgd6eGG4F36ZhD8BXi2rQQ%2BJoe8bWkaa01m6m09utlrB1jsdriVN6Eyi6rKgYy6OOrNPugZ4vLMcaCe0xC0J%2FzFo5sU93yT43XnXbPL%2BBTyF0Xvgtgielzm4j%2FDzbwxm%2FgnZwmZCC6U4MxJVvPOP%2BCR%2FAz%2FufFOqNSdiocnhY%2BH0BdQU3VwgtLtT1ZJfOrBAG98ZnOP6GGMM%2BFt0pSdmBqRR1x8tx0f9FyWl0kfqOWmEfHcbOCDvRXqUe1y4Xrw4AIKxaQq7ZPPT65Xh4wv%2Bo6mHa3E5PccIAXtu4PrnwvgpHgUzxsQ7QL%2B%2F%2FD3H9p0yfyvhLb9HZ9p78TNNuZ3ebWdBt%2BdwSntCdUcag6NAhQcVLuEPdcxDD%2BlMPJBjqkATrLTniM67rPDFCG2f0lAFW7wz7maw%2B0l%2B8IJo%2FZuvF3XI%2B2qD31YOkCNMnTqqyibhj9shipPS3fywagMZXCaLaZDd3OVwUSA5WYTylWeE1aaQkSB1VmeClC9L1XQuvUjy98%2Fu3o0ncqEh9cH1OkiSqEHKxraD5f13xx0KCibfeVevnkzva%2BdmrjDkpO5cRmxjtbQ9BgWLyYTAWPAgLXg8cgmQA1&X-Amz-Signature=7768acffb0049cf4fb176150071f515af57dc66639f430db4cc3d9faa951989f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

