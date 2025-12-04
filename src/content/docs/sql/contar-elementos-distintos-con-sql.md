---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y6GN54%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIAbdf3%2BwOTIvG%2FpncG2wCuVIi4vN%2BOU3jw7njH4HB8HPAiEAqBn5Jy19Eeoc2L7tIGmCt%2FObvYYHPEPPuzhLCKI%2Faskq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLGQr7ePO8poZUZFDyrcAzcxizEIQTnInMpX3Xd%2FJIkQTf%2BBZq%2BFeA8XdhgyNuO8Fq8DQBq5a6I%2F9a51w%2BrID2XKRBRHf352GP0RzQSOC4YB0vuXgvF%2F8CvxkT%2F99X59RDz58jfikTZCCjiDeSVpZk3kTfekZjjLnuY9Nqo30b8Wq5uxJWclq%2Fn%2BInYJqjQYGK2QyWseEkilde9hVBcoMGoZ%2Fn%2B0EqJBz9h3pFvExISdej8LBQquRXk%2BrvBpwJlFhEgZKM3SvnrzvRg%2B6aR4ylJb6coSNTbZ9Awj6hAlkGs62%2F3eiPQ6iTiEqgc0HryIIMNU%2BnJcsvfrEXrqray7sTjTe6v9Wll8SsRMWoS0cFLj3walwckI%2BbcVfjsm8GsM%2BCe6AnuITfiz4AV1idCX1Wof70USm0Z%2BbhLN3dTMfP22h1harTlAAKrl8BmI6f%2FL9AuE6Xb4eQti1l7Ivzc0VLEOU4GR2hyvK4BwlYUygXrRuQnbHCzAhbSZfqHBoLnsTkPituqxaRHTJrQQHgEhVDU5E5FIUBsRj87Cc1mJcnIMje7xHTpyTSutp5WYT%2BcQc7XMYrT4K0p7D2FO1zQtLnDLHeHp2mz0%2FqHhQm7fc0tav9XnsEXVHbmrz7XlduEVVjbOWByIVQm3%2FITiMK7LxMkGOqUBXEhDhyiLiKmi%2BI1Kt1PwbbD0sbvFyqOmuAdNt%2ByMEM4CTfj1dx3gxsxXGDUMrPG6F1X7lctz0xpQPjhIYdxS9PZcI5Wy8jo89jNU8abg2oa15Xhn3Je3Nz8Z3iABBc%2F6HY3kWhMOdzSRGnrwHq5flcH69ykHOc%2BpCYvmISplblp5BY%2ByIiHppFS0wxVhX4fEoLumHDIej0oNonzTWUIht76ca0rB&X-Amz-Signature=65548820f6101db67cde9c920e067fd0e979cc79183703d481b3c4b71d9a80be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

