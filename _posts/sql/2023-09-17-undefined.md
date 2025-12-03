---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VJ7J6V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGJWU%2F9pbIlLvceIHUpUass1phxGedCT28K2oKOlT70uAiEAxOfoym6yCUnl7JuYpyQv0BVdawG6Tl9QMhpNllKLrXEq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDHvMjHscbJSckVEVlircA6%2F3ppKZWw1N0EgvaIWYmJd3QweIs8BDe6GYMaVSsmUQbQFMOwmDWnq%2Be21I3%2F58tCrOqzH2ncJwj2thEiOlKK72XPdRFGivXAu1xcbTWnG9JyejsRbTpU4XpVpzUZmrCQVr6JDar6tK2sp%2BJmjdSc4KgX18vXmXdOkflwCSEXnVXyQrDKYpp6OYKkjZXFX6hlHwiaY9BHZaaSF3JigRIFEuFb3nN44IPyZk7j6ApOwlYD%2BjnjW9xyrWQjMeP%2BR1MR1U%2FFccZmuoqDAdTuMa7fffNHkIsR%2B32f7KrVGtMuS5dnZGAoa6syTvzMo%2BqHMPyfWYCiulWVRPaPUEG0baOA3eFdKWyuEBAQiPWVYqUABMaVR3aJ1CfyDMOhYYKo1oK3BzYu%2BRWS%2B3hp1UYh0UEy5xyqKf6BFHsJXe%2BxaRFvEHuu%2F3ttTYwmpXpw%2F5P3c%2Fyvp0Z5GVfrgZF0ZE9kB3DzwngfR2rkDPd3%2B%2BAOc7nO4A%2B%2BX0Olr8daD2myD%2BYuCFk60Bq2lPsCyHHwzP%2BUzE%2FMyD1cUJmmAIT2Qfyto%2F4yF%2B8DmMfglAxY0PK21YfsgjhYXdlODxR%2Fie%2F%2FqsSGVbC035IhWqbdsijDFWPQii5HD6RIM4zomIF2mdfeEVMIL%2FvckGOqUBMTgh2mDGXl3xQeJipcWBjOwZY15Jhd4lLYxlV44niot9Od%2FZpoEi0C554Be5KsjSG0nS9nHfoQH0K5uN8ZXbtOksG8SUcLUEuqYMj9yBOSTTcTRk%2BZeVv0USG3xvWBza6m4yex6osbSX%2B9q7pToH1m2l2iWw03ky%2FwlZ0Eo7oMvwH8lllF%2BOrab4Fbfi2U9bLBh3L47xVdB4eWN6Acic2k8gRI6E&X-Amz-Signature=5fbfd93bda6ec5680ae6e6c54dc701b8fc1ade338e6597c2c703cda65a89a380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

