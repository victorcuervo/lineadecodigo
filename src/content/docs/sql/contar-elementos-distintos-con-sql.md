---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R5VQDOF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDnPS1R%2BPf61B32JsAGs2y8MYsQZ%2FjZwHhGAoP6mTP4rAIhAOuORtJNYNxVJy2qC5eTA7JYnge7WtTMwHbrFMHqttxGKv8DCEAQABoMNjM3NDIzMTgzODA1IgxyR49f2bAOc1sJYbEq3AP32VJwzuM7wLviUpvak6YMQnrwv79SJC%2FjnSidWAc5Ff7Z82MUV0oHrYEGvGDj4M2beDW5bbPzfo0FYQ9UlGlcd5LXqgBlO80XoykDiJmtD1Jkt9GGJlf1o%2BusWJdiuFwygWfROtPRaOHpY90oIrpyhgxaxMVg9BU%2F5mc8xbqhnWutPgibTf66MoQYY0FcQjbgshosmhJAiGohBp3ePBL98a%2FImnC0mit2pNHL9bfhOzf5fkhxhgnDCpTDidTBkTob6LytjC0wGb%2BYp8Fc3abRQ%2FrTXmKm5CPS48VadIuqfC4MtYNX4dXjAlqdtahC%2B4FrtKo8V4RWiOEiXKlr42BFEf%2BsUVfH8Hjqi4mzLfFs5SAQSzq5Ujf9TsO%2BjB6OiTd3knbGKrNqX2L6AQV4ZtP45SvxMEcuC9D4uQ1xklEuJtlpuBDxA%2BycNvtMyLcu2X9WrMIv7wj1eWw3m%2F4wmdykIY85fQhf0CTckxIDsKQJF4yvgg1o2eH0vVqtVUYgOI82cWA4ki4cj3lnERSEUeRONs1tCjgOTRksNR4g9RXsXVjiOL%2FlzXs91GP64qOW8BTMwFhrPCef3q4FHlVpAdgDUrsimp9Mmu%2BUj6A2CuR1Ptj5x1niksUgn2lWwjDU58TJBjqkATfpivB%2FFyx0v5eOYKsSJdSR14SIsoZXLtKry1SWAcxEe%2Bqus5qlb4p8hLadIuvYg0bZLgLR88tjKH%2BaQp36sCYPrWoUmtXSpEcjSBqm7HXO7MflwX4S4D%2Fm0lg6hfKMztxHfQXufWpph3IbXPupS94pm88kBzpD50Aqcj7%2FLDF1wYsgJrEe8RMndSYgLF04mQFkZ1J9s88ALsw%2FfmSND%2BzcBPm9&X-Amz-Signature=8c0cc3634b21f971fe0257458b4ecc0e9fb792cdeb141c5d38ce1ca1f38ed437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

