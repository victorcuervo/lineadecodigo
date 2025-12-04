---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ACYIS7Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGVP1hKhxfz930q8eJNUoJzXDgbAO7eW%2F3h%2F2EnffZe6AiBF1rtelDYAubjHVn%2BJy9%2FIAYS7YxiO4lAR%2BEYYenKMlyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMZ7WSVzhfaUJcLlALKtwDeU1bBArFwqnwa9RcMKEncyV03txJsyzo2llbQrLncaXePFJjWvr0w2T9ojQMfrPgnL%2Bp72N%2F%2BmLRtiLGfZ1ur0epEnB91rsJFKuVS8ycVbwa6IHE4%2Bz2XW7DdZMsnvCuGXgoM4gWeOOMfn%2BOOSXbbfzWKvXz2akmGCOuIpBslHEhy3VRpcLG2a10Wq77nDge0zQ%2BV8nTC7lw3Ko2j5680oJ24XR90OgQT8mUjY6yPgxzDq8cgKL2zjZduzB%2Br5dT9E0Xn0eyJ7h%2Bmdc5RFeckDjqbTz5N2JXh%2FbPlPwadgLXRcKJD4p58Ktb68DA%2BAk%2Bc86hqZIWgh%2FPQ1RUd0DZ27j0DwddxwAQ7R9Z6ROGwfI9I%2BRTEQ6QBbgdX65pb5f23l1QZNQWEyIsbEIU2PKkRvezp5XI9zPixmIqewD8dDWw4sNIVDMdsV4aTQoQQePF%2FwfEUoMnZDrUfyIMSyG1RA6mX2ypVhrYincDHIJ7Xb8B5%2Fnht1i2gL25vYqHlf1ADByMTo2jqt5ndtwQkaF2f9shI%2FOXv9jttFpis08NrBMeZoYyokSqIHqvutnQ3WhBwyJxLonX0q18nltAutzT6Yb47lvzYkNtbxx984%2FAJ70iYiYIyZ2c%2Bme7e2Mw%2F%2BbFyQY6pgH5YKM67w5psdVtE2NtwdvOQPl5TBl5Hvn7Y09AXfGEkmIGsC9i%2FcarBCRqT21CZtxxo%2Bj3Xpe8HpEuE9JS%2FWFkgE%2Fseih25NuQDi5yYMtVGh8KJXJqgL%2BoaLKH17y8zOedCVGtYDzXSwE1hiIxvjQKf6bd4N5neKpqq9UmyJuiYAn67mypyvYy1N765VuFLCBkkTRydy1mJtQGDJjBVZVrg9z73MN2&X-Amz-Signature=af2dcbca35c745e2b6c914589b889197747c4fce319ed0d535c2b301995a7497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

