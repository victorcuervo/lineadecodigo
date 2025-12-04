---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNNLJUE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBDvkRe%2BlKC4XLJvnpd5Dj%2BjnDkSfVZBzFI0cRLlbl2yAiBQIrocEcKi6XmgHFE4ySH0NZ18ju0HOvUUmneHjkgDoir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMk7o2r6xDQc%2BVDRvKKtwDwQvygfC1ZWmlSZhPZeL470QSsUZDxZd5EyjapHHo3F0RWe7mktZy8SQ7qF0fFW8YJhoLdTZBIbH69WerlPuAS6Eo3uC7wZEXsntpu37sc3L7muQd4uY6xv1FzGV%2BtEKIF5Y%2FH3HWFxicCvl5CYEsmN1LbNd%2B7gdbQWm6CZO54UpX6lX241GmH01yglMW8F1FGOl4wlzeID4gYbHXvPdOjYHk59avqRHE%2Fab%2BG4cA66fcWTM0Tn5gYtV%2B55g%2FJeuojjcP7yXgdrs1CTlM5rlRPmuReLJmmiUkWTMF4B2TGOLdbkS8EXksT8iKfI7r9ItU1nvzTj%2FcOkGdQvarA%2FO2cQLuqTtiyLH82p4PHMcx1ad%2BmbD8%2BW69GPvc2YoUeLJJp9DV1Vwekfc8gsanrSMzsiA%2FMouEE%2BNUlz5xlzWlpQX7eoGGDGM1ocm10Yi3nQ1TcseJGJuGSZTHHmHxa79uPaxdvAct1G30nUZP2Zdz0W67gO93TgLBr%2BDjGwN9HIn9pPbtxZHETmY008nyIcTcDyceNevP1fIHTcIpo%2BgkbAZWtemuBJcQ7v6IptVZoVLEK86t4adXcNkYFKjofzUoEIYESjXTHUiHWYcSEP37VqmWAqTqGSiiAXj1nnUwwsvEyQY6pgFjoO93awSlgqAQ4I479QX2tXrMpOumZELYMzvBLu03sWyLsMBJ%2BJKlqnLvkauL6PVSkaLFR4mN4LTIbHgSKcBeKFETrdGrXs9Wj6LH7z5468Ncnni%2FHog9IEU8L5bsUtdyILgYoD4mr%2FJJQY992XrXsBzt1PaHbgFamzFwSDFoDWCGKh7DkhLtut59BRbfjtzghWQ4xNzrZ%2FaSl1Z3woHIy%2BswTej%2B&X-Amz-Signature=8570055d47b8e25f4dd7d34950d9e6df64ecaf0c6f67fe5c4a778c4e1ad0e585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

