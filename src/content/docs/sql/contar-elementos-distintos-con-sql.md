---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JKNVU77%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIF%2FmPNg6WeobosJaI%2BNN6MiJW8Pxa8Y4fg0Q%2FMjajaL0AiEAvn34zPgpHXZWlRqM9rgsloX%2FF0iZdcD0yCAFRGc5WhUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIA9pKroN85jq1it1yrcA36FSFjg2KyTEJib9BGNsqKGrnpGzQuyF9nL%2Fl0W89D%2Fem7rzciDVfElp9b24tJPOo7TkZeRAOJKkubqrIQax2nCCvFWc8ZatPNo6hozqvtYS%2BPwjH2weaoerzcXBjNphhrfJSXli4%2Fe1iXPX%2FU2lX7DdP9eOQ7XkgZEU9wXGw7MOA6NdjPU%2Ft%2F115thLipW0YiKX7wGtsJ9wsT2T%2BnmsTssgnIRpL%2F0idzpfQuoMfX27eEluxLemFHXkVExnSl%2BoCjRTHDntHvcV6x4ubn4CJh8gpFCNOfEB10fscDJ0ztToL9dY7AZdCPymGVdsYtOKab4ex31xIVf9fqme64hmPHO8Fw0mNRjAM1SJcqMCwMeD5TnHRmGR%2Bi%2F7yBO5LC06Xyffj40oPkoFRPchPdeiyIeO09sTYrqJ7zIFcd3%2B9hC7RkDzJ2mhyOdQabvEhBk4Z11aZ1OpY5%2FJe6qSFyhHlo6Wi80mfZeYlXoVQtKQZjKLifJhehA82EB0HPnBwvGiK6NVfwLeaQdayqjXj7l7pgo9ZOqlG%2B%2BxAi07hG%2BQwG6DTdxn3RKsijlfjc5F0%2BOjq75dpD9R%2Bv%2B0JHKtgmx2EFYvuKjNNAE%2FYmBscg0InjN%2FSr7UqsqBzJCjKWBMI7dwskGOqUBbcFjDupSmpJOZiJ8Ro0Ck9DMhqvqzAf79Zd3QGWeKFvX25v6VfFeXDoT%2FJ8zVJVUsu8h%2FLwZP3KAT%2FYNXVxgEcUxWBrZhaofpKz4spqtmog4ElD0B397Xk1Y5L6USMquuiGtV3cAJBzJsFDqW258KJGaw4cGln%2Fl9ppIfiK8kSR2BUErFCpJTUQvFq22f5dy7MPdNTjuoKtHPrPuxzAgH7gHObbU&X-Amz-Signature=795fd4c5054e9bf55dad4e4c77a3c0044dc267acb472566c50ca00a8976aeb43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

