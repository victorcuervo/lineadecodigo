---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PIRLS4K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGTjlZYk%2B1NLvZ2LNs11YeIVnhBtmoCEijVO65Aq%2B0CCAiBF%2BMpAdh%2F5w%2B97YMdGM5taFKZICvFxgvKILoxxWzuMRSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnsXSHqY2r%2BhnTls6KtwDBjtL1bLBMmLkkXpGp%2BHQ2HTh8EL0H7oiv6vQY6rnKB%2BYsSFAQHe8i0dy%2BLk4VcuXppHD5FsbK8Zd4Ad3R77x2293Zey0cwnfYqFJ6EGktK8nj9QUM1ySBRJvXHxePhHcWteyaE49Dzp0%2FBksDRQ22gSTSeSK1DCe8Pr4jTnANS0h7rc6OD5RRpU37V1Uk45KKJsTbQWwTGIKqGCmf67YStr3%2FADMd3DxueY6%2BD793tIxUkl3SY8v2BoovCUeHyO4NMCQmsu4kVnBYb700EfoHRGxmMOQG0OzHGS04XbfkMe70e1IAGXBR9L0ae%2BW5OgQGFJnu3qtoB%2FAy2ynmbWcEHncQoy%2FDf6gWPjZFWBZGAfoVtz%2BldjA%2BO6VTUoPMGvr07ihU62wxwy6cI4kbh4zUWuPKfNIVaei7sCGmdCSxw7tmGRI8HdIWPihTNKtry32U7k04gjO5LlWLqH4kUGeMdwOPTePTeFAuDblieCvvnXeY2MuyrDAMOgLO2GG21Ndes2ZmXm%2BjZuPLzg9HJl%2BVEGqTJa4FDs99Nwq9XCXaayDyB4f1VXm%2BFntTRJa0WnaWw53%2Fkx%2Ff15Uf3zqKPOhljbyovR8jsqHCFiC43%2BHT%2Be8lx3UEtCo2h8qN5Mw8%2BjEyQY6pgH6u9mJu0CSzy0eZtOOEvbnibDiH%2BVATDfThCtn44dLvtclNfXPBCV0F8wl3NragjQMON%2BbuPwA%2BSXEaoZMOFxFi%2FBQ7yYXpHh5S1BjC%2F4bFWjGU6RVIsz77QTXm%2BdrNkUH7KzZ3nvOQlOyHx2pZ7qu40P%2FB4fU%2B3C2DZ3EbQLQRp5RNMMAmnN3CuaSQ53nLIdAJgHD%2F5%2Bag5klrI0fGq3YwYtUMLYt&X-Amz-Signature=d7c94da143b4725a043480ec78bf2bb6a0946e555f9d7f2279a7b4fb070c6430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

