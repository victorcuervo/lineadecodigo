---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466424JNPRI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEZoobO6c3xt%2FpZWbuVgwDetLldWH3MuJ%2F7fGPStcHp%2FAiA5Ufs7pW9csJrqdWBBTCzlMWr2P0BJSoHdLHH8pOScjir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMOkxiv1JG1UAb%2B9GYKtwDKKoiE0mjbkqQzgCD3HBtUOo%2Bi%2BgjZ46jslzWnxb4b4r2CovxSzq6UpenFoQelhbhkGTCDWt33VTt54%2FkzpwlFciWbsPHhHHJ%2FWB2WnDkM28rasw8TvljsfcdeJZ1trXuOk1y%2Fowbk4azxIEoQD388gWblijJmnKwjyGKz8bz4esXFiVtGV%2FxuDIW9s9B9IMq0EwUwPCylDESIQIAIKvVHOSsHVWUxGCb8V3IOBZ%2BJxfgmu5ARJ4%2BgPk4mP0WqaPKnWfVU2d2QO7kwm1HBbgSpa8ZRp4%2Bq2lhRBTJvBY4ENQxKj%2FvM9AaBN%2FLpAp7r4yxXhgA%2BPeB7Skj4dS8NQc3ypgtYPZhlnE8njEMkyDJEAXqSrvotUISXvZ3K%2B2hx1kfjjMiWvaO8x2rEdh2%2FgvvHQUs9TRwSLy9PIDJb29BTStRVX30VDqDoi2l10u%2FmbvsPoVJa0j2tasU5LYXullUaMgGazcdxyj8rWzMs8LJyMZEaRQhjVCd5MiTjDLcr2JSfeHs9aPUOiweBc68Ar2g7bzi5OpN9ErPxsMDq8XHZat7oilJhsuT7irUIGZ87iyDHs9Yr8kal%2BjqDquTng8PcGTnek7ne9hEjgfEslJ3P7SkrQIU8bOsIJSMMjow7cnFyQY6pgEtaxWE8thhEpyGKdqQOMHUkh9iUNunY8%2Bbmfq4OAYaaTTdBsd3a9JeezVywW4dQY4%2Fy55WeKsfUsYNodG8QlvU2MM4RVqiQpRJAZ3EQ10j%2F62Hi1jXdDM%2BUmt79WDfqJWpzxfrZZtgIG9M2LdEgCvtntPwHR9zpEWDTpAH2a%2FxyL9VMpWvxfdCXNaMAkC6nDvPuwj4G470pKufHDdYnVD7n%2BRPwj%2BP&X-Amz-Signature=576a858a5a8da08dbb313fd758d113a9ea0711774867c8f089cd298c06cc19ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

