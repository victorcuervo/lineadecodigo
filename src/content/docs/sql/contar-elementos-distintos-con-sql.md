---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2B5H3WP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDFlhuVaF6qg7R4n8y8khQy48EiVCippjC3W1PlcGx0twIhALnhWKRvrLcxJ%2BbFF9caRcQNgqTt%2B1Wjw5N%2FXX3nsXqqKv8DCDkQABoMNjM3NDIzMTgzODA1IgwRO7o8ABq9snCh22cq3APEUjfC%2Fq5fkUSaMMK4suCCtcxdJlqngw6fbEZkP0FmcbfF8Hm7bQ1N3JD9ezZiZDyYM%2B3IS%2B7PgtqtCxRESjwQHBFJKNz%2FSBYZE9icNVCk1hQvaZmhB2S44v3lOp2w71vCbPGvIMflsw1WUBApeim34%2FlL9lo5yqEyS5iB1HsyDHMPj4A5R3NY9Q85hGdNfzRXJgsVL14U5M3Htv02B3clYuM1MtXf9RMBF6PgCTrA6%2BYHdIR3cSFeSS6JjhXK6gJgNhqxriauFn%2BtCMcJJucu5%2BBCmZJ99qWKW7WDoVw2VcrC4T16cotmryxp1%2B1lw%2BuFzt9tjpDbM%2F9pIujhoL4IOkohPV0IUJAWb%2FYNdH7LNEZo6X%2B9pmKso1VdUEbLJziMzUACXj9pF1nTrKzS%2BK43WsRmsnfG1IXAnwvSnHVAeac4RzZjnfHVrmCEa5vI%2BTimLW1d9RKMIV3EJccGztEGKUl9WH9nTGWWqE6A6VeKYe4vRNR%2B83jRR2ezETUvMSkjUKjwfmeNcVcVJqu%2FLv0prHQ0%2Bo1e5d9O7YneDjqJUjTL2kddfAJVsKNdjd0HIzwhEb5jAOYW1UK8r8SKNHwQIVFxxUpYbwuvU9HTVjKHKI8MD9NeHZadWTaOuTCklcPJBjqkASAp9kJb7cLaOatUlIstUC9zky%2B2Y8ZVQpSEK%2BknNmCjRcHXjR95LtJgiBCkzXtD5tmF4SWow38CEOVmWqdnlFxWFYJH6D8aGrFFEIgCEDm7C%2B91nQszullfANZbW5PboYjLZ1%2FVtXUAMecO5MN1O1Z%2FHwV9MXbpOCrcBpGCgvoCplV30dh%2Ft3S3Xn7gzXT4qC2vwEOEAgIrbh2r7EXT2ZYT%2Bjrn&X-Amz-Signature=633c901e4a128441bb41debfff961bf9a1697860a211a4e6ae8f4c6d1a719f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

