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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNA775I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAS85lNxu%2BO%2BHcOmxAG6dqnrbrAmQQdYNBlm90RxZr7KAiAO%2FiJtsF%2FRrrVXwCA5yJlAB5lzvEe6ocqCu0mo5dzQWCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMfM24AvkzE1s5rUFpKtwDHIGz%2FX%2B4p1tt8C%2BY5f15oJBPJ%2B526avNQJgk8BE%2BjImJQwfxK53H0Yxks4%2FCj4Mcdxfl5J%2FEgCxRAVA%2FjAgSFZL4n%2BPZ00xSiT3jx2yLfaIejVJ4hjHnmEidxiCuEgBvMPXKY19IAX3LemCuX0vK%2BgiXgIvR%2BP1bsjC%2B7sYE5%2FZYl9N6JrO9mLZMvw3tb2Y0Tzx4cfjGclcLhH496W8L9kTb1CLHDj3RrItIit225Q5%2BNrRLq6evatyFBMZN8ix5%2Fj9EgXRiG4PB9vMYcb8BrT%2BwRFYnLoYaDMzizgI0LioxBgth57501Pal1kMoRcLEYNltXF2cBjiOluY5duo8gzNyPPHMGBt%2FqVMCAYiT6cHjtCL2DqHaJcW3f2E16Dyd1UsX5c3pjGum4jWWZKu7%2Fz899nXsdWXCej%2F033E0huxbDTaMzSV3Zs%2F8lmd%2BjtCIoVC3PNkweZzoFvGrTOkcIOcUQ4Gex%2BHmSvvUp1sLwWcHI%2BfjxN6YiH9W7mZVn8x2vkHkA3%2FN6MQYyuirf82MKmaWExqctE3sQ3yRSUT3Up7rYK8YWW49SOyAUNDyb4JWw4BdOIo3nrnP%2BPSnMtpLvOxyJ4yXgDoEYpL6jiBn%2FJl0drXKbBTwt5KS9GEwpJa%2ByQY6pgG%2F7xxdca8fAk4gTF8lgET2ddLdEJbyIZqiPzVLbEQk64afKQWdIC3ebswr%2Fy0GVnkM3f%2FImzsshecQjl9xUvmNQnxsR%2FVsYpIxQ1LfQK1IaHNTE%2B06UK4%2BdMX30smAZXuFIFEHiMLhoxD%2Fk%2FjKTGPQxI0yxQGwketVXWJAVD8p0stjVtUmailfJmh84GHN0JwxFAWfjhKiBddDxCq8EGyWqRIAFoUC&X-Amz-Signature=d513e4a0df68ba6190a4d7646d4d41148ddb2c0b5e851d54af9ba94c6a1a5643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

