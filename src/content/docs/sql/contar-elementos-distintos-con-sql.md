---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5M6NAF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T035824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDXSLJhdg8XFTzB94T%2FyFN691VZ2wpvAf%2FRXUUzR4n8pgIhAPTZQAXnG%2FpGDNdYap%2BV1k%2BZNi%2Fz5fwV9gaq%2BBKTLhZkKv8DCDwQABoMNjM3NDIzMTgzODA1IgzF532DAe2wnUWFl4Uq3AMyQADiQIlrgH35XwtGztZWSVr6Sp8uUR9e3oY45Wz8RijeUjZA8Px36%2B4G3ncP6nr0rzaZCq60qK5xpZ42IhxazK6HX%2Bt9hiDcZIhyTtb2ez9TKRK49RVO%2BgGDmPaW8Epqk9hbS6wzmeXzCO%2FnMUQ6eEemj1H8xWdT%2FddKBSdrCNcxLvSKLntWipEqWMv9ryaw2a7%2BFzYDKuy0By4E6Svmp%2B4h1G6bBFiuRYQ78pfdmm2QBpMhyiYDIconLkqxgeu%2F6uYzPJmb1os63tPGZnAy7VXhmZ%2Bi8ZWbDpy%2FM0VDsOyIOl%2FjNAqE0pppnw%2FjD%2FBMBsZRAqBu5qL%2FyJU%2F8nFRNFIhzwY7zGoUvO8ZqAQ%2Fq8SMT3NTi7kdWnILuFK4zwTKzOaiHSC3Hb0Q2qloedNLsuAdaddBPnIP4sQDVQvkbZkMoADyTsdb0mHRIclyzb2D4Vtdav3IZoZqSbPbnzIA%2BZNi91OHxqcVbIEpipl2eiASm5QzMlBYOgn4NscsU4AHI6hZDZrxs6HL9sk%2FLlccz9%2Fv6IGWBZNnJSdB%2FbRkBY1wnoQS%2BqO5%2B2VMMaHHSC9LXUh2FAfgdbVX4DsS4pFLO1IdLht3%2FVwpuyqZzHVF%2FM9mWQSwSaJvh4seQTC788PJBjqkAUH0DJ21l4kcUjTI7EGl8v0kWiBe839fwqPqsc3%2BFqsi1R%2FQ9wyHLEW0tY8l%2BuqPIG9AnkM9iKDUKy8s2BTafBIO%2BFVWj3%2FxqGai2XDW38ye4f%2FEpdFGdA61JEIqg2oEUfcOPOVWc%2BJROqyDAz857dxIAE70sOtETtVIq%2Fa%2FpCiksPGZTIYufMqe2Tah1A45yUlMkhqLGiE7n2Lfg6v3Et7XhBtO&X-Amz-Signature=a2ed5b5ab5d6941014af18c7add4c5029b185cbea2bac1f4eeb53fe803084cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

