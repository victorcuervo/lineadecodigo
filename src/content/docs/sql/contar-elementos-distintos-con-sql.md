---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWO7ZGYE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIEUj%2F4i2p1kXP6H2jJA%2BtyqtWE2tgv4coHl0uwLiTsKgAiEAzNgdgQlomRoQRf0U75KU3vTX3y3JG2FhdomqrV37YxYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCuvOaGGFHBK0NM6%2BircA8%2BwOPKzAfXg75E81VxxPd2cHWQ%2FzbRY6WIEUeqhm4ecJnpl3%2FFCX4SIr2bVzIYqLvK2LnHqwO%2Bzac8Ylt8FS5pfulcMc%2BEwSp7mSb7FbYD9LSTUEKboLcoxbJaOE2QoI5E0UDr2uaAfzu9A0kXxz4cStwYhUPrS4HLqdBdA8Ua7cdvBv9P6slIm2AUrNGTWCdIS3dBl%2FZDFr4XYOAGy3dLTS%2BhxijPOkg8UH8ZslDq2zIeZ9AdzKWXB%2BbjVf4J1rTGGKTvpvSUDpond89G03AtrElwjKzn5adc2h3gymAw3ajx%2BRWHpgyyRBWLkk7SbSohfb79V2PLkpI7EKEvW80M7LSeF9q0jHHhpWupP4mkNYsgNyaXmaeQFlj3fp4lEBdg1vUYu4H7pSq40fGfVeFdUPh52Fkay%2BgZtW%2BeCDW7UCVvMZQzs1fjdJ5hBZlTUuVnbZeeTEMagyTHg0pzelwyWmZSEzpxuHGzIJSS4Gwkv9UIr6KrL0MDwIfB2lVGM0w3ZnjB1XxJCpUqHEvIXPh3YSIPeKkcOtUlUNyLbiRCXr%2Bvg7fB0AURT5KX%2F6XyotAy9oE%2BVCabpIzJL3D3qzgc11%2FtnMxmJKxsgAPoWeMUbOhKXeCkcR33gzsNYML7yw8kGOqUBOrRvqDKUm0pUuB8YjLksSI69xXzNAarUnOhQ5jbbPX9a0oaBQnNgUprSx%2F93y9Z3dwi0iB7QZvi8PWhNzS1epYSc1QFsoDCJc4nuY6J6aMizxb5dhPMuZt62nPXcAmnAMypzm16nWMimSBdXpxBKd6s%2BXA5MXOMs%2FIDA0fh4Ju8pklzWXVsl41Dvghm6du92MYf0XV%2BBvY%2FEcDJhRrCpAPVG%2B6jT&X-Amz-Signature=f9186e8becbd0ee7c8d9b6364f001538c932f6740d58a17f35aa32cc56e3da6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

