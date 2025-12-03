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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNMCR2N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCNVdv0Wa3ve9jbPuXNBu%2FTC1yfRPiY4JYZejl6JmCSDwIgYsaoBNsBrfcZozRXQWBfaCOgB6HE6YJO%2FBCS2QcRrS0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDEDcsN5po7O3aIWTZircAwHVRXBYPHqD4H1uzJnsAW9%2BuvtAqElw65lbsjDfcNVY1tfqtWjLEfKffWLV9460nVN5jWjkd6I6CAAJOrWD9AXeQaBd4XDvuxXyr67ZJs7lE6f%2BkAuZBsDaOPJJ3FBUeaMvuanojVulUggOoAe8PaAbEc2B77hk0DVBGzTgb7xMQs3sXpyJ5X5%2F56nJ%2BHJCHXIIIAeOi5Z2mGTMOKBdYSrtj8crSQ%2BRJ3B1bhwbKkj8DmGkYoxR3EEUoTKN67qDmbmedIinGA9z78TDqD92D4YO9Ow2zt5Ui0Ey%2FxdzeIlXtd9Lq9O%2B29VKW8sSThdtpa%2Fm%2BnQSUgPPzx84leK8b8tQen6inSSqnhbMM0uWE0KNWm5bwLz%2FzmdO2Gw6Y97Xhnw9ZQErXd52KCGfzf%2BZYYcJ2PcXDtWQeNVzGtCC36zOoSXIoW5ZamsKhLQbqRaPqLUF%2FlZILM7P151ENW22hr1OqG5R7MwHb1aI%2F8CkhUmqVsBMbDC3eT6H1WUiLo%2BsBDFAgOrMpzmZW8ipq2sfDKFSKpQoNNhGjKqUblfqjWp6hP99Steq49td3PQBI52YGpWKkf1qVz10BEMenzOEEF8eZci%2BNaNcU4bEONlWmvLXfino6jRTevoVN61fMMGmwckGOqUByROm%2BJHcwA9%2BxqWXHASbMmb7DVuPKyhl9Kh3dgjeJ9AjtXe4lmA025VYrmtqk%2FeOgEAVAyuyYdsNVAL6D0FGzurlYrOZwiUysE8r25JtDqDTubxf92ZFLSxrhOnEIm95NWG0ae%2ByCguHFqLUOwFBvXvVg3FLGq0UdiuxZw2SClX1mavqggUEn%2BVgKQnuBrUysi7BKXF6M3a%2BDbB9NGQDedsEZp9o&X-Amz-Signature=59fe1da5b0194af47cd172f348a94b8988a21e4f8c1fc74ff737a88480b58ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

