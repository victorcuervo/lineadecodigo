---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626ANXJ6B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHIMpEod%2FAstT02AAtTthWG0Uj7A2q%2B8ueAHZkkVaezgIhAMuSUQIi%2FFxExu7FbV%2BobXa5RcYr437mPDeO%2BYRlbU2uKv8DCEkQABoMNjM3NDIzMTgzODA1IgxqZ7DIOHzOKwT287oq3ANSDBGG76Xt0GdT1kPqqtqFmvR1Xpe0nZXzpTYxWU0lMx%2BpGZWvu3%2BAc9x7ZVenrNS5oAnbyBCLel45U%2BM2kbK5oWnhUQ1oPLXRvhJ1SYDenOovkhhCYWueOGGXnleCj9%2FvedUoujTBG8mwftQRiFi94pB%2BKr8rtb22h3USpevi6zeZIZXULy%2FtayJJ6k2PuDoelnl4AbsvrGTpP3NJ4szG1rmAm7kCm0ki4LtUpa6OJtmuW3yDG6VbLp2lKB8%2FkwIC8pZgrE5dOg36r2B9lNat6ZKWViqANY1ybFKBefoDfMYqz7ruOBg%2FyiuVoQunwTWsgaOlcVwfP6WMa0hIlL81SXU2L3FWaJl1pfj6pfO%2BLts6JwH42dYyqEoJZr45QzjibHAl1Z7Ds1JKKeiQDnURyZES2FEXlg7k96tbYK8OXI0DMe62gk88z5z258qJJFDkoDSpyAXZoCpGldBUYpb21WaxmobG4yqRzh6%2BB1YfWuwDtWaEDnzck7EX%2Bq8f9658dqi%2F4bknQ%2BEY6SiFSbKDYhyPtpWqWIbT9pevBZuNxefOfl5inUzQDbKnLxB4WtbikE711mGXZ1XYFEw3sJuKh%2BW2DzeFYMkO4cDCUgKQlS6LmPWF1UeWchwPGjDj28bJBjqkAfPGelIZNL%2FkzVQ6vKB7KBEdf7duI2miGki4CIaNnfV7D3VQyNIKD%2BJqdGoXazgx8pm7ZHJqaUByNuZ0ACVE7upq4DLOBZHPgEFYdBbk3hsg4N12gAv9QZn4TckqisGlp1qjWUI%2B7CJwz%2FBgyDmtUNTC%2BANCh8QY7zR4uVwweZy7sLm09y0oY2BGclsOfN%2FEatGJkbEhHjczwp%2FjBhw%2BlCVVjoV2&X-Amz-Signature=fdb7d731ac20e57b4c2511c3fc016ecad64100316814c78c15b95139ac19f6b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

