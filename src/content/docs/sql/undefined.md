---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJDV4F4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGoUwWkAxNDNk4c%2FeGfZ2eoh8kIqA1STrdB1WpTcCfxgAiA7h195fdiXEeAWfiToDaF6AEnSMwbJE5kYMV3gTZIQKir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMtTn58ILJbSCIJbhbKtwDImvv6oqeYZCvUpEP3G5YI0fHag4y7OmLrFd2AOn%2B%2FUn%2Bn%2FlhXAQhvDE%2F65w86HmT08KO1mByW2Jgllpl4moNIakxUrj0fJBYY%2Bov6NExYRloIc2lFaCa3bp%2BfRNEhBECeu9f71WuNc1m1WPdUdCKg9AV1W6bg2OyuO%2B9sbz7nnzFOPWnYIEQl%2BbztaQaU9%2FP34zWpcLgNwQ%2BJeFRCZQ2wmPas5MlXWReVhN2Tv5P68PRwiP3Wv5jxN8g0MkDLFRL2HmAe5gEFYUmRIne8x%2B6xcyw89wiOICb2kiFtohNSAZ7gfFG6ZkUFwnIIbxo09daDcetazEwyeAvBUN%2FYkJtdx5FjT50RjfQoHCE0Qq0giwbB1utnUU8zArFBF2vO9mO2fh1z6gB6a9pua635UuKepHXmMpm%2FT5zDbM%2BDYNuNAP%2Fzh0Jcc4SaOfpoWACgIpBcvhrTY1uvzCedOXqJjtOkDNsRqoyk8v6e8IROVmzyJYmnGDY8UcheYRkX65TNCs54OLTDrNr7hwFEkzQFEE1bQxdUK2E82iEixOdEg%2BNwfhh3L%2B985vZhZkYr%2BaW4GRb4rMsiuV7Tr5ZdJf%2F0bVYnyck7mP7RMfUjqTRWoHp3PcAy4fbjMmRbjOue%2Bgwi5HCyQY6pgFvHF5YfQxgcm2qb%2FrfdocbDhwJQ8zuDPRFxEbaoSuMYdQs67PT5wQQaqMAK5ND8%2FUk6dDyis%2FipAU%2FLyIdahqEdVFVwc1LEpHFKo0uGCSZGItDvOm4uMAAXDNW35S9uegg8olQZtI2UxeNLZ2OAARp0Xj1XZaFABDL6rOD7Mm1LxmrwNeiFEx%2Fh6JZ9m94RX%2FiKBidT90PMu9BpTqs04epmWpKbOo9&X-Amz-Signature=3166b6d6c10353ecb8878db3ccb493f12aa2d00db73bfd8750418594a3dd0bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

