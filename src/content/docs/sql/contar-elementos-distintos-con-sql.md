---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SYTHCPB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCsF3TENx9JHbGi988OmDv3vpXSnOB5wxhwEbX4OncA7QIhAM6hz0o7NRQL3tk%2BsJEA%2FS%2Fu6uOeSbYkgA5iNZuiYazgKv8DCEYQABoMNjM3NDIzMTgzODA1Igzs5j24ymlvXcuUbpYq3AMZVqPGoj57LfSRC86amkyqcFGdfJUA1gk0%2BdBA8IbT4gS9ODbv%2FyiZv5m22qtjRjZpmHeV6L2QPreyYTu%2FetdilHn4T5lPbEPrc0Pt7TMg6Kdy5RVYjaevWceEXdSC%2BN3kgR23URE1YuyJ3Idqhh736imUIMNqPcAOfdUvlDXJTB6NvuDty3QcomIqqxospzchKmI80LoRt%2Bo%2F7CLFOheUxzzf%2FuhZh%2FirGddnLl2hThzzT9Fvg0oc01flu6AyKVxj4S5M%2BSF3wGCVY7p3kWuc1za97uaQX4HnNstpO%2Bc5IsG%2BMo6Q2LVzie1j9lHrGN%2B92YcHsXVXjfcBysTYm%2FmmbFLIM7E3985J6gGOwrn%2B%2F76QsKtaaQlXUbk4L0DAWkbNmg6aO60mtL11f6mWte4LWrO05J8KYYsJbTZZnbRHxtTuXITHLapqCe2hrN7cqzAmcQDGtF%2FEU9psOE85GtHQ1TvGjB1iiHz5nKVkPsPgYDH%2Bos3Bn6hVyDStRG5AwYs8dbPNmHql7%2FHdLLi1A2PDAAmRqd5Q%2BTIz5aZSHkRfLYi%2BCellgI0pwNWIvfsIfOZyCeTIxPb6nSlW5lh3VhKHEOkEZmT4UDSpUaNNfsLmtDBl3wepFWu5FDzHjjDJg8bJBjqkAREeGYKtCcf2go4Rk5KxMOsfJCIhZs0P4coGypcoHB0DyNfNajgTl2EZ4%2BceS3GCVKlOklbZ5RWw9ERweLvDArcIiwemEmmNRQDB5zf5xeYQtZSfGrdy1nyB%2B%2FGMpoWeL0wML%2F8LyzY8efzgGN%2B%2Bb9NAxuD578Jrx9H2YRVC2%2FHUfeGGfeToxn2eaO9octM2MklGL68k2By5JfZ6KToh%2FYyKseRl&X-Amz-Signature=15b6f28f539c3e536cdbd0a885dc0fb6a090f86211ea78846c1021c3549bf787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

