---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FHKPLY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDmLCwtBS7ZsJtzKEB5hvTljKx%2FzRMizvOyXc3mgUAdowIhAJgIX3YZOTIgCJU3mSGqVeHzoEIU6lq%2FxVRvG4JEEYEqKv8DCDsQABoMNjM3NDIzMTgzODA1IgyjmpD2sZGON2tRHm8q3AOt%2FxhE%2BhfhdfbZ9%2BL3FVL43Qacua3BBfcrd2bcCtyNiA0Hn56QJ7IXGEbVmXxB3Gg4EKYyC90DiyeMYNWDFrU6WhXDuH%2FCNZg%2FOlaOAlK%2BUsvzG3xNNTJkeqmHNM4KV7hfuji3zTKZQN%2BBYEO6sJTlqlslsv4LpZ4CcYSV9unt9U1PmUxJX7Op%2Be8BaxE%2FpnY5tzrEMZFkRJHw9NLbKmZSryAjMRNeI1dYBxCVDlNAb4B7A%2F2cW415tPuHnmmc9S7xedjfx9ozKDs1XqA2R55tvBNL2VXyhN2S6%2FFGdU7iw1oxfFXMW50QdglVclT18h7jhMgsdBVqiCN%2BXCcEyofz1my3XomEVAe9pQ%2Ba%2F%2FhT7CnZoSpE9vbvpncY9KGY2lUKWvlJ9W36pjyjtaEsHXb3De2MDIRoMPgb4QD3IOtdcUqG4uP3EAnF1UPB0ZnwMxjbQz%2Fyhj3zOiHPbAW8E0u8zx5St4NbDbknLyEX%2FJQyRXM7Y8KDLe51lSK16YSbpFuaFzbxlwI9xkdH3ZnG2TL3MryDBhbLbVsRDYvek6TbjccUtf6AIP67hGcd63V2qvQOoVAeAIZ66L4kJ5Po%2Fvw5BgxbhCOs1D1b%2FiVUj9JH2OYE5lg9yvEelKcg%2BzC01MPJBjqkASHQbucd34LBF1PHcVagiBuKKVgJK7%2FsAdGQqoJ3EUcH67jzH2o%2BQM6QHmZBNXyNXSfjMMoeO3gHwn4o61ObN7BbTYziI3ekYVUDhjUjNZxOEG4U37XHJm%2FSkFcGlnUUSeLTbo8FM8GxGiHqjh5BXqsryCQpjvgEXalpprg70Fd2l39ofTbAcLKiT3Zj5oAQyHBQMQDNh%2FyqIzhCHfnnCsM4Mbfc&X-Amz-Signature=a0c063800287c710ade2c804dcfba2ef41e1dbb1b7a244d414a13a364fe0ec37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

