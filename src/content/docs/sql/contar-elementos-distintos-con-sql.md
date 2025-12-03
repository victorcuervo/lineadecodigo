---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWF64CKY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBXojY7nJfU6lZXewNfpK8XKoBMQJ7XZBHB%2Bs7CCTlMvAiA77IGwThRU8onPNNeTpwymOI8vjIVocAkUmiswfulwrir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMcViw9RHyImNilHw3KtwDSb8L7AULOM%2BspeH9TRSvpuo4FuINHvscInj4V23nycaDAKampHbMZJm5q1XWUlGmkY1d7PMMaGKKpBf%2FecP%2BBv5HajVQL8FVGeqfDZo7Y3ccfn%2FCvppkfeYyFh8YlfLKp9BZI%2BTcyiKQNPG9r5r57iTHAMGXKLXfp3XVgLkkM5GVDnGVv5vY3a1bDGmMwe%2F3DhW25Tefy7cpF68UcungDOm8Kn95TyTD4xtDpk3UPaCRF%2BRlqAQQLprvKA011hsJEBLspO2QjW7ITcrMBDrjNZ6%2Bjb1D%2BN6jWq54hMdvBct4EOWTNHdNMORmVoigygGKtEk8CmNHryx%2Bp8C4UImNJNUQQVe1yfEiF0P9Hm6XPkjU6H6CFps0gDIAbVt2uL9RQbJ%2F7zVrhwGHaYfJjrfuh3NHogKb8QSBBiiFeNAEMz%2FJFDFcieNBvpqY1f3kzLg81AqBuOBQyWzBdoAYznyonG1hQdbI50YGmMm9DYVw9uvpUhcKBVs9B5ny90mGfch6sZkHCeH8iM5LxtSt2J5BmcRb%2Fu4TaP2qeJyNIz49Vspec5F%2FUMY8lEFPFbWz7tfw%2FoKn9aCJmjC4BDwHTHqFYUI%2BWzIT%2FgohDkHopmUiYDefR2pqqHb3R96ySqYwhvjCyQY6pgEfAQlzlfPT%2BWGkk1SCcl8o82xWGXyrO3IXAysUw1RWXTzW4vlBHpjbwi8pFw5elVJP8bY%2BJHozE4UaTRugWy9RADQSXQSfBMhZ5wSRkgwcqUojPehCXIoS7FqPERSuOSJKgzmhldwfWedrmbs5ryqsWSTRIVv%2FXlkkSinGnmvH5G0ZXUk%2BrSU5dFJyJ6Pd7%2FSQY%2BnQO00%2BeFIwzWVJsa%2FWVG58qs%2Bf&X-Amz-Signature=1a54f61831068563ca0a36adb0b4827805c282a417a20d61abaa7003adc7b6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

