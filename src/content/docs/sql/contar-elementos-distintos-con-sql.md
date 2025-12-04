---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMJ4PYT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD0e6B7SeV9Sg7rJPpzK3U%2BhOZxeMAM5xeNFJb7pvDjzgIhAPX%2FxCCs4aupqUgIBS6WW%2FRqCbrRnRATZPb2ocAjmMo9Kv8DCEEQABoMNjM3NDIzMTgzODA1IgxzpsOLA1oa%2F8VD7TYq3AOhkrKBAwgHhZ5nYz5IKzU1N6a%2FwZ%2FE2wABA0kYGPL5flLjV8Dnw48qdH1uCj2S8L%2BUIL8VUjwp19vhLBmLbazjywR8eqYiIU2DeoFYWEj4xNiEy2c%2Ftm0tGvYWdUwwBoDEACEtPlHmEDZunkJqgH8sh0MtGQMq1F15FW9VqyhbjJlSjf1lkK3p04U0oTyY7hqO1ApqeR6gfbfatuL85N4%2F%2F0p0%2Bo3IBgSGaD6odKdyGAUTa2SDNXXTLJ9h%2F%2B0jBzJNGMFTbnFKMxPMdzCa646YI0FxL6DAcTsAWRzMbqO8hjLKYJSD9cDPbJX7Gj0CPPYEWd%2BPTUhzsd1DE%2FKOP80ztJAu1Y95cKxTeawIL%2FfdEeoyr6NrSrEWqzTz1tZxquZ5ao93atgVhb72I9TPcT1lMq9TSbZ6i4zB5l17G8EKiyqAsCp8uZSiW3YsJOGUnhIwrym07vybKnA2knItyxL9iWCa9bFrq0hQccWG7ymAeXfHBKKDG49VcPCF7q2rbSOEJ54KsvWTjE2eLxOVzI3YJ0HDYSU0Of%2Fn4w4q%2FDXdjFvErSJf1WZqYdCZ7IR8fTPQ04DLn3xrKBcnlbHy6ei5ikrhiPe7psXuf0xgN0rdhg4sQ%2BGv7HVziNfe7DDyhcXJBjqkAezJ1Nc3jcpS0OYC0yhpCR60%2FSBCTRmB8tqEb6IIYh3Rr1iChraI8wU4O6MlHDK1JQD%2Bm16%2F9gGBig88GfyGoTzj7OI%2BgtEUvlA0NZlYm%2B0Iz6q1EyTH488QR8c1g82TvzeAq9I%2BImm4ub0b%2BrPQ822Cdcqou9kNNCDi66HgLydI%2FgeShlIYUsWpmWIWE41uyQXIZOBp%2FLenDJrRNVQ06R4inJzb&X-Amz-Signature=a1ad07af19881df3f86f3ead28543fea239eeda905a088ae3f50a0dba3fcad5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

