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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJHXGAJI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDdGRzywekimkb8Kq4Aem9A1hwJbNj3aSLztna149D5rQIhAP42dKh9OF5ACXeU1ATYBDt5SzNvg4dYMUn%2FpC8iKX3hKv8DCCkQABoMNjM3NDIzMTgzODA1IgznhC4NZ%2BEgbCFQ2Ccq3AM8gpBY9jwy3ZWr%2Fh%2Bi%2BnQpVnS8bX2waOWMLSZtMD4BE4g1vLFb38amAn9UQKDqQKuOqJm3gcTn4X1NLxj8%2FZxtvhmL4Cc%2BsRoNrI8mGwzAyinWMPyVD8%2FxB%2BOx4dfUhipM9y5L6UaSjns0rdBkXuQwWahtGRsyHCqN5L0KzIxt1H5IAWjgAp6YsP%2FaPVmTGuqYVbXbjVh7F4xhDMRr%2BZ7F37yl9S5xdqHqMmqZIGJHdrFIRJM6ryJ9IKDvYvIUFTOHqmUB%2FmjFJAyOHkLLRELqLQaYCa43bIeAx1BJy9S2Lzprqu8l8H3YwSuSFEBkBl9k4%2FvQ9iofdpyT%2B7MtFT%2FVE5yh6GaONXLMdc3nmTZ7%2F%2Bajby9nxKau9iVcPXAPAyk6%2BE5RtSQDlEhrMuBxi4bpQVt9ZAk1UNi8VeGvtbddYvHKwhn2bF4nncLmjBOIhPoMibJSv2Ch8oGK0ghDb94zqT%2BW1b%2FtQ2Z3vryhii9CfZNjMTdSV7G%2Bq%2F8Y8hNukDNX%2BAZOjFkpCaQJh6E09S4gp4rM0C6vzMu9mdzMcd8RwTALQeEtgUZpsWviVoinKHr241zaU4AL2GAwRyij0p8BIwzFG85p2Erb4b5QxJJ%2BIXPLxJEYj9iraHez4TDv1b%2FJBjqkAQYrKu3Uzljb9B%2FeXf2A26Sel8foeRjlRzdNJz%2Bip4XSD1uzoWoXPEnMFXWhFQBTtDV%2F2O0iz6DhSlun4MsitrymzfMeVjeml%2FQ8J6aCNkXFGq%2BXtw3T9nmZN100H6VqzcsiowLCMVvWyzsRXr42F4dk%2FW34mom3Hh2Jx9%2FB1LY8k4lOt7N3YQwFrOLWmc6l9olNdahuGBbAZ6Ij%2FhtHmafHKk2W&X-Amz-Signature=d6f8b481ceb28c50d166c8c3c410035518d796de58be927f815a93d7d023c053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

