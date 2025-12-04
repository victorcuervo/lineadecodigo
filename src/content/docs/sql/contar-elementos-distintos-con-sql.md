---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBUCSSGG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFhxXPiW0J5gxgGVOm816wTEKcBYuuJstmM0H42w%2Br9uAiEAjfkb%2B%2FMEY0UOpBXGZKFEtnGx2pJMH3R2A7VqKeVnWYwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPniDbXNLwdyMd0tESrcAwMtgVQQEyTTx3WWmf8rvKItDh0RU05grTahPT6MfiIY2nBRTUEI5T9zaecI9W0L5CEUf03OFFV0DLiejRSvCsScJtREgGRrjtHt8u7mhtpPCHQiyptAZwdlLVQOrhf6POrFGVLFKhm69nrbf7xF88IsMX0fTB9xZHTakzr7oKAtqQOQ%2FecEdakRe0kjCLH7f2XHao%2FOoXIGEkLWFxxbv6k369VAxRO8GaT9c4r5siSX1Wtuyom7z0Vy8eFjWDLL6KJfXohqBsB2xK%2BpwNAHz3xKiHd81hnifJm5b4cNao%2BCyX1I8t9S5vVn3esOTf9kiau1D4DOe%2B4KT5aHqyCM9dc3N%2BDqw3wm02Yyi90BA6tEEJYlJG2%2Fo%2BzOz0oLNBbNZgK8EzLD6nFfod4YDw4zONizJz8ElxooofKbL6nsN02zG%2FPs8lVjZAmN1pg%2BsYdGjmGBhk8V2UTZEVUQmf%2Bg2zawHddsgQtxl%2BZiWrtrZCzykfF7Shh5ltijpJYKBhr17iV7E5lb2VXcrPiKrghyeiyTW7Q2OmR%2BnjzmDJVLtOqVC07lFoPMrp1sYbSfhRPJ7J7awhG%2BWq6IH1uZRy%2Fg1sUY8%2B4G7qo2urgZeECpcX0nleCgebM14TUFyLfWMJuGxckGOqUBUQobvzRvM6h6lc069V9D0ztlwy764ezMOQLGkmNV6kRvvD4u1MPgXQREeaydOPFM5JFzJEZuWHBd0x%2Fycjww59zilJQ9iVZGEOSaW3Qq45h4LGpKLVXnUjBnuSuZD0TP3viDorDy5vz5A%2FQDoyS2%2BqCo6OPHDSuXnfCKG8zuN4DQzTp%2FHknd9WY2%2Be%2FjaIa7UMaxF4X6stT%2FjCzv3QbffxI3mycA&X-Amz-Signature=4e5bc3c1f1f295365ae3872dbeac85bfee34525db9a3621d48ec02bbd2721d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

