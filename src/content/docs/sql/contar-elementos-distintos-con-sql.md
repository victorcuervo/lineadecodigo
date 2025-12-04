---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Z6OIQ3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDiKaOKBHLYfQV%2FJsXzG2xz9QSHikCCCe3johjnFtRQ6AiEAz30v6gxiantSey6i%2FbDVmHVOBlp%2BtwP7J5zIrEyWB%2Bgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLhoQ67H4MnG%2FGjYgSrcA%2F8ZY966lUfJB%2F2GOSzf3y%2FruFMq3Ha7PwLK9vrLmZylN8AGTAe1%2FLDvKveB6%2BGfo7HlFkbMVW%2B83LJGfrzKAyFAO2A2TKcoq0Yr3Dvel2cqvjbOB8Xm0jN2cJ2E3cz5YxVB4VF%2BmT4XMBxY2jOmPaPuyo%2BbIDolIut6ji1QGfaz8ltx3wqqL5yX2McCXllDfhxfULQ0%2BCEi5gk6ANnjE9LTXfe0JqP9hjCq792cAGYe66ElRVl%2Fhr%2BBm3u7yAEdbpvXsaj4LSprGpufyA9NK%2Bti%2BAELwsvUAcGXHBMPHVv421edFWNXpNc1RDV245f%2FqkiGr4g6ePiROjkH9vO4irBS6QQbpAgN2Pm8oNLmvk9fN%2BZMyJHL74%2FKlsZ3bZ3Aue5QOF1AJS6%2FCEsRxLYonzUQkRrwuy%2Ferln%2FZzQmMXQjr1nrI8HpKSukFgRpSeQ3QqmxVfBoLI9TeZQyrjuWFypjzwXqdMRY4fHgwTNSkyLvdJLBW8dg%2FdliubecUhQygVuI6uskbU%2FGElHsfWXEtALAuI9rWCYkxrpD3E3BiC6WZ%2FH4m32GD7Nu7jhR2Jt1gf4IuwadJi6e1gKpqSTaJ61wU5MboCjzHlkc0ajIFz3mWeLdmAss2AD8tmWeMJjLxMkGOqUB4HDj3kOb9NrmjA%2FGcDFzkP8%2FYcyCqsp650BYfGm5MIl%2F5uHTXK3RGWZjaDO5AOzgkGxn9qQtdr23D7pjcSW40HtBFSF2Dq1nYZyQVcQ4iPVf65qdjrvKWHdk8OoJPtbehPro4i6OnOLuA%2FOUJzyhzyfaf4%2BQu4zzNUSfq6ZxgbB8DfBnWqh7eBrnKqIJIlfDAELlilaS3mf%2BoM%2FSSZ%2FeT35qKGN7&X-Amz-Signature=bd03b21d8790f271a1a4d384fa5ea7a7e3422fb46a558dfcc8887ae4d238b2ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

