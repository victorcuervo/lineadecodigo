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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBGDMNSK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIH1GUDDYzsaZkAc5FPHJIEmh347HTlaJ26uRtKgh68bTAiEA7BNUcIsVhfuazbc8pHtDnWwEgL3TIF1lYJ8ZZlkTqRwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGeibOUCu5KwVkQkGSrcA45reUFFN7yyhCAgJBgwA29NeB5NEEHGPaijp78%2F705b4S3G2tY9PPEhYHwXQ1nG3p1Kqx2fNo5pGZB9L2dD7AnVLaxoHO2BdWk%2BzFG5llOqBM58ozD1eKse26wTH5OH73ekSXvBtrofDin60Kx2Ucz6rnBS0LBIG8C1Y9v8Zal%2FIMMcvb5%2FTIhxjo5DThTvjKEbbwRbCjps1WJzLTkEapz0hp2CQn8kQKvlw4k1F61ZOf2RHeojvs1XYruGl4fZ%2BmHXLgcjzk6sGDz022YMhACIeCKQm2NUUzPmRw0L5IY90VIi%2FycHwjBdTqupZPCuXlSPQys9K9ZHL0i733%2FOuFIvpUbuL2bVfAAbZfR33%2BW%2FlG8WWu6uxbOhaveCaEiTPMELrDQIm2yN0PjsidCK%2B9cZZrs5Wu8OrgeBXwX0bILMf%2FlsRLWe1cZvoqO8BK%2F4xW3LulksWzir9lWvFGHyviloQFYUg3wDIa0r8Ldmsq%2FQPqetMDnMmIKvG0iFCnPT6GLOsgnz%2F3umjq2Jd7OnhofO1nxU%2BFe7CB8HF9QYmR2C4osXTgbjiqz3ZttrDAf9jmwzgpjn0Yo3z%2F8OS1MUAw9RwizpyePjh%2F5GLVs5px%2BT4eiTg0JdhwwUJdIcMNuuwMkGOqUBXnQn3rLoKBpW83c4NfnDrogvwCenRayAdYMcJwpPKQp7xd%2FifczKZtX6G7r9CNQyYitsALcHdiU%2FVjljZySeGF9Fo80rSNRnFDbjDufV9GQLS76v4XXSgzSSoJlNVt2%2BBcjrdFVbSDFvl%2BlwkZx1Y2Qp%2BJwMU8hJ1hjWvcXDu0Guxq%2BohCsyOorpVHbhSIyEcQKC7yZrjUTbDDxghPk47shkKZ0w&X-Amz-Signature=c7542665614e059eef4c1009daae7b7ef2ecee85ae5cc3b20663731d21a291bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

