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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UEJPAC7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDQ%2Fz73rsV6MRNdBteRTnoWMYdji4qeYVU351CPVaTKlgIgZxriwsziAu2XuDeW0z8GgePhghRyJj%2Fn7c%2FDSQqUoigq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCes237giVEdYU8BMyrcA4yu345pspd6RWjj%2Fx43YlWkxSJwXQSKFycTedP6eLyg7Sl%2BulytW0AvsZU%2FQ5iDm9RvwZ8%2BjZxi%2Fs%2Bwf3vZLkMBaWrkneqElrlRrHvBEc7AU3s%2FZf37JFj4YiCkDmi2M5rVJRJW2xbIQftCJMZ%2BzrgySCUfZGSRApRmZOh8pwx2787MJl%2BuRPzWNKjnkFLbjBjAnuQ9b4vJJLCTd1%2FRNx3lwUuMICjKZnoizoUFoVKWsxsITjqAOu37wp7ElFmRZmlbSLFpQe9rl5lN20qhL6sV%2B8xCrrR8a2nX7iLhbZVDAlSR37cesU%2FSE7Jwu3dX8dOUA6tZ34gVe4ZAVOxfcTzBTIafLP8VLLq090SpzhHsZPHB3oU2NGAv%2FkvIT5RO2mU02VqMujS1bWlHe5tbsChG1SgoSiD7Hd8vm9zCjK57S0Fe4xGhWhwNpbCrjeMHzAejcujsb5DCfhZm3nQikllf6kHWqPoWE%2FbI77VfnScS3m5aGJT6MFSvWrSrsxjq5Ws%2BvG1KBmAoR7d%2FxHRbyX8ZcGj45gparCAGHbxSAUqBH31x224vkXgX2AHwKmLs%2FHNdo8cH6eFYUAWhchIVkKN7ESYJ0siNeR4B0qAohOpz4fIyXKiGnMD1nxMjML2uwMkGOqUB25GXJU6O5sWniPSkybTUIQPDrVR%2BW7ed1kyiMez0nSZAtmO276%2FusElVh5oRiWCDRYttl3TB7wSjQtZonrQYVEQK6XmW3kaLdeOd48kFAvbH2U9GPjucPG%2FVUxQfeAPbYyGZiYsa5VObGrBwHwl331H%2Bqix7xdW1gax7zCdNJN2yI3HG1dhGe3j3wSlRGwsV28NA%2F3FTuohfhG%2Ff0ef3tQII2hW4&X-Amz-Signature=b290e2d52094f203f268c32a88f4e0249e7602d54af3a3c6dac507b70375cfcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

