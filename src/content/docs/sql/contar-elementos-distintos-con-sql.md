---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN24NYMN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDg9yC%2BZAdnzn3YLH4FgHVsCJ4a5mt7vy457uBSX7LbGAiEArIqCp1b7QSBSVXbEHtgyJd6C1%2BAaNLZS920ow6qLLqsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDN%2B6pBebH3intSbsJCrcA80vjO3utADuAVbpHwECZKxhIH4bREXlrWfYOQ6SzhrV8jBUXYPkCWlvUUfaSV7pjC1CH%2FQAfkX%2B6b8cz%2BfEnFIph9DdptvMOCCKj%2Bl2KBYlpj5UdMyXzxjpKvKWblggJkHMeB%2F6Km0syJ4HVXI6toF1KQuw9WuTuDtJRm42n4c0DpD374tHIcXHHChLLd8pdQ1KoGmBUxEkA55h1AZigfoZX3faPlGE7bkvYElNNEfBli3kgsTj0KLSPqRxkNIYJ73TXx6iExjhzDbCz4Rw0jDOACxbPoax4Y5nMWJuFFRoWKdHlv1IoBNzP%2BprBvCaCAqyayMqZ9LSnCtYnsghgq4iKGHLB2svcABf8iJYuEtEcC1eiCHYUGIFQoy%2BBkCdxcPum%2BTU0xfjR7TP394UWuKplSzUEZcXFF0lUeMRYwDLRXW595p2zS7ITTCb9URs%2B%2F7mfDk6TeoQC%2BPWxruyQRO7OzB8jo3MLbOQSpG50sGtMrBE9oyKHp006Sk7PT4DXJZ5U4gpfFVio6MU9wiiAIwqxrZEQ7%2F1%2BICuK8DAXzn0T2Mr2ULGmFd7420q%2BnoiaUQSueaB6UUyE3vlpfrPL5CtNr6MbCbR5wjKhq5zB%2FcvZ5D%2FLubvoxY8wDl5MM%2FTw8kGOqUBmqMZxqMabDwDpppKN8%2F10XOJOyTWRjDrwu5xDqgRPiEAAod6VRfUivTFGym%2Bqtlgha454wqGK%2F0%2B5CMFxSyD1K9MdKN9k3YqlXe3P71i69B7Uf%2BQ8DFmvpk41RA8Ls9Zja7On%2FaNT3UqfghGHoDvESWY4WYnker5c1Rg3Qngb7fWiPcCoXXW9cBzrWDJ7FB1Q0dRexWAtHykZLL9VEvfkk7EBEDh&X-Amz-Signature=e262d0880a9a5802092c723a7e18736023ac4a7f071e79fd26985e0f7da60a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

