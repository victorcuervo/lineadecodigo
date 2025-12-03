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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647FTDLXF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIB0tCgTsd%2FpFjYcWuAzFwbZ1IUvrmQ97zl8B4iZrcnC6AiEA7W7lWwhgZc%2F8XuGIICRsuqzfkGKthZGysVjDtq0fVkYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFt2w3UoET%2F%2Bh4zIbCrcA4Q9gw6zmWld0W9ki8RskrMyzvlXf1ylOcBpp05UtE9F4zTjIicfdgPe%2FOJqI2kom109SZh9%2Bze8Of3ROCdeZl3Acc88R6mMfv8YIrsEQXB0XPIEeEFkDVkP8ewxbGf80WNDRtMzEFyUnOvWhzWZi9JaC%2FibJDAt6NHkyv%2BfLIq1MOmDLbs9deEX7rZJDs9yuRlxKxeVBuX5o7UWSwXw%2BRhu33xm%2BvTyt1IaVM%2BvS7RWOcpRhEjX%2FZbDprAj1jkmlmz601Xp8Nlr7VawipwqhY30uFkPrMELLFa%2FyrDowfwiHt9dYUs02HCBBsy31Mg3x7y%2FnOZClVKvLrE30AzSRPwjRgQ1ICMeTZG2wqwARoWp6y4qsuqZW4nsrBKTrCAkg0zATo%2BD3Ga%2BpB4u9uxvy5JM58y77v7VoNnBbdMPs6N6AU2ogVfxIxvrKBlqu%2BzIXQpS10mGQXzeweTCNpDXSGZfkVZO4RcVnr6lNnPNXctbgEpb6UyC%2BJBQEix6DxCXn3iWAjO1STqafsLpiqCBNIB1LbkQ2Hksb6L1cDS9%2B%2BKIK9X75JZJFxH8lQndatgowGc%2BsPD4njdT13cRqoR3ugcEHO%2BxzYt%2FnWlDFOvSIF4lkjaVKKdubQBbA0yKMOPBwckGOqUB4DAxQuuWTQ1I5N8n9A6bg%2FHxVjhrU8BDZ3sW7qj2F1jNUzyxyEDeKqAmQjm5qc3obtZu%2BtWWbd9ru9mU%2FQ%2FhRSrar7Aw%2FN288EfHBHGYFfXT1iFvqXD5CV4sWFSkTNlyDH1yIv8mUubQVFxxkRmwxfNtECIj27RgPkNCGvF%2FhDTYQJmXfO9IHooZw35cPQY7CfXlQ%2FaZThXyUaUkiBzmLduioktZ&X-Amz-Signature=d9d628b2472727c3776705313275b0220fba0da24f4d9ae535aec0d1d94dbc05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

