---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T3EBCPA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCZR19gjoyfx%2BX8edJnMujrFW%2FUxnYIHIRv43kjzS6o8wIgLXt89gy7nSzAsW9WMYHdAbrdmmKcJI%2B7%2FmJDfg9tZUUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOLkyPTOKKwfz0HWQCrcA1CQEpZS78cwd%2Fk8uRsZOpy9IN%2BOL%2FHiFWUONkChW3Td%2BCPvt0NZDz6ltdRt4GKi9NYWSNZr%2Bt9wxcFIq7dhjYY6B9PE7z3usknQ1W2kXgyvGPo%2Bh4DbOvT0aGoYM5bNAuybdUvQ49pGZ8%2BkmEDBp%2FDRR50jxO6v1YIL1x2ja4VRig2RcnSTu0%2BgO%2F1i3feCZnTYNKHFhA1ftOtClCia4w7VtuXmlsnNw1SDbrDX%2FcwIXm%2FKdL4yaM5ODyfKjum%2BFikUO35cBSucf0DMcWrkICAW7aO4G5QFkR4xc9gtPhTjgEHuc%2FpGEOPszSfW1We%2F9CcnPfpWIY%2F3V8fEC9tr2Bs2KJ5Ltm%2B4IBWoIgowoS5LoAwQkT7lA5BnT1RGgTK7ZYlSMf3WXZGZB7OqCbZWNVPHKNLnOYFDrWheE2G9lkQZYiHqQdNtlQwSjqRqNUPcFq%2B5liw3OTTj55OoAJuvttZYqC0ajCNZSx7oYyOD0MzsmWK8kMEztwhwTHg5LrQ%2FBsHxAt5CA4Pq1pG2lL4qBhtWfgKm%2BKr%2FYUK7GEbqsVZhJbU3brzo7lkedZfvb%2Bm7yNInNkUQfCtWxKDp444BfoYkjzVdSGeVN7y8DYk6C%2FpaaU1knfXYG1fZMH2GMPTKxMkGOqUB4cPGslI7p5cq6oZHn8yijMC%2FLa2oQPjhNtthanQ3l0bxmfb8n3zOFpxfhMDXS3VfH%2Fc0icOjLmbr9vZEA5W3UkvMlNL9A8mux5WOLfkDGRNniI3GSK8ZJFKzO%2Bf%2FcPTiflY%2BlY4iAFCv%2FEuApq1KN6Ccda3KZ%2BKGSyhDMaX%2FqTs%2BIQoNFyJPGsKebHpH0KK3SgNBFHBgePKaYlD%2FLkqeA7NXR%2F%2FO&X-Amz-Signature=6e54c28d361483a254ea7017e7ca79756c98f30a1d383cbc6805054c1d191ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

