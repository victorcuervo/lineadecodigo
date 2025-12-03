---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQWBSBN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICqQx96zQT%2B6ipjmLZGQItxPu8UrihfJjr2erew8UDhUAiEA3p%2FZDmnEVoGThxQz4Id9Bih4U8UI3zLTEYI%2BDAkpMh0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOfFveVGaMGgluTGxCrcAwKSH6%2FEiIKhtGbbtd0MLaxpIYrREJea20bi9LwpdpT5Uq6T%2BKWAG4reB38APlMimvcZI6LQWHbWcB70FCMd%2FV4N6DQNOKyxho1y1TZwWmwnHt3qUUKzPltf27UOYu4NAP%2B0wveSESOq33PaRRJP3sQMrK64hacoYMUR59e%2BvjZIOwHpq4%2B8H%2B6%2FL1ssTaRjGKiT8lsJfYqZjtVpXbBy0I56Rn%2FCwmoUHQBhV%2Btn8VDrMsH2YBig9lAy7o%2FnHsY4lrQHc4HcCGxB7s1G5ZlsQIeN9IID800rnBkNB71EfTt3%2FFCPQ%2FpyVRbXrWujg5MCVQBJoDr0OBUpHJA4laQnF755Ik1%2Fmogqmuq0emq%2FMuiXk%2FeJq74LgTYDk3LzQeJJaagLzcdDC69OaZZFS84PVDPbDkJsKR7VT4ONgNcUvqZl0oltdh1hhQQBEbhC6DWRCJpjViuVUHPUl4SgCxSItiGGw5zItWQ%2BE1qrVJYg3Qe8KBJ8FfhE68NfmZyxtBVwVofKlbM6WB3BBq2TuaXV5j4j0%2FUeFSVvdRdGwEXE%2BDLbG%2BaiZOvtaiAEZ32ou2Cg7LAiT9aIgRaZ9utd8l4vvS%2F2SBLJze9eQ4iqMiT2Ibu5LTmEwyQM%2FTNFmQ3wMK2Vw8kGOqUBTqkXlpWPUOPJuZid9lrw%2F0snFGGZnjTtiEvUmpY%2B4eNHU5qnJ%2BaHbobBpY7RR2O2lDbkxTjGpAS4irehFuFihcDeIPh9SQntOXBJMbDCKd6XrMzlyWSuuQ9kGbtq%2FBE7kIuLOxEIwPHIhzuyn86raZn11%2BBSifnep6f0q5FOvIf8wAyYlyeXSYdfk1%2F2qMJ1je5SSstLQSvzgo4BfOL7sGAwFCSB&X-Amz-Signature=1e19878733a3fd62b75d2ab02fba3ce7df0d6a7e8529c3a9f0dd8e06aff360b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

