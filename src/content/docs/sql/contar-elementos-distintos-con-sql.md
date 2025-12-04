---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLQB73T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDBHwLl529cX2C2R1uRsQUSRYC%2Bsfuuh5YjNpKGbh%2Ff0QIhAPHrRTkaES1WmDm0r7Kyk7EJmFlQKOnXbAMAF24mhaavKv8DCD4QABoMNjM3NDIzMTgzODA1IgwjTGX%2Bi4ZaDI40t3wq3AOmL2Pc93EbFa5sX93MlniLY0prMNBNQxCg%2FPpGNnQLMpyxtSGI%2Bu1tPBDmCFfjIMK%2F8UEkQYhQci6vLM6Je0%2BlAryum%2B9UXpW4%2BXHPZc7AQ6ARk%2FhbO7wsJYFWngPelD%2FIyC0aRJl3K68ELAoK8aBQjKc%2F5h%2BDhdRlwSqofgKtvjWLgeQVKmfBsDtGBd%2FTu2ZCt9TAsVEh8Y%2BJDggI6ZMBaaq7rWEV4KuGkBMUNQw5NJWBvtUIZybbhthBmtAA1QiOVgusUbjWPJZPG2G%2BAO30qKX8L59ekjxNlqCSckUTXfF9BfV%2FO8HL7JEvFaQ4X9yGMKlQhkkRyzdbvV1VBvjxhKFOUJGP3a0pJ6R%2F19c8pT%2BIBkAnavNeIGMbFy4PlyRGKmABY4h%2FyKHc23GOK4z8uCUgFp93%2F1dxYoy%2BnoVtz6btTPwQvA2jHktZxhY0cDXvKj5r9S8rQ%2FkpgghESUNfYskdzPb7F0S4s7nAWQkotDFSGjOMxGNmQmC6BWbFaFHonE1TJs8Ig7V6oTVwiDvAClNb%2BE%2F8ntq1Wnwo%2Fz6sv%2BSOI8UIEo6XHYRrwJlI5I7I%2FS5tiQC3dSXbJckT6jO6pOHjoR%2FboJ7trv0UXvhgugCGMzqf4k1c1rQCWTC5rcTJBjqkAVLAWHBmDkLmAiaWkS9iAhWDX0TEvOqjk7af6O6eGYVGCWm2mL04yjjF1L%2FtNL3%2FXc4bA6%2FQbxXncmkvISmcSE20xzePUlnTSned6XlXCroR8%2B2xTct%2FAIRXUGoWapqncp7XrvMXdQHQY%2BscdI45Wp7tvzhshEplCntuAFqoavfEjDtBsWuS08pSM5bTdgsc0AmjNJ8%2FBGq45FpfWvpM%2F52NoHIJ&X-Amz-Signature=2639fee6407bb83a922d35ceb975b0e8697e0dcab0a3714793a707d7545fa860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

