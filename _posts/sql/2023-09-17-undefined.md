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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDJE6SPL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIH4IdnGOwkEWS%2FVGnCnoG8RoJ%2BOFuvjtq3xFDQEq0YInAiEAs%2BX2HjAsZGyy7rK258njIegZrW1NTnyG%2BRREdDI6sG4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDB6zm2utbfymPmLm7yrcAwLTxt1HDiAl%2BHy1FzpCwDjrIohgfOuChTlCLpB8PDIhgDlm1nJz0yXCpTF0sV0Mwk%2FlJ26M1%2FGme8p6X3YiPdR0gc9Hn%2Bf7oGa8NhaK5mgOtd00Kfajc0fU4afia7BYDkEHyYAWi9D9lhmBJl9o2rmvj4bpZ2p6KO2p4ru7B1d2xXMPobrKcs4jbJOxv47cOpEJ2l3sIj65y3M%2BBSX2LVzeL%2BdoIcANq8A852XfD%2BIaJhhg7r36ThwOAasIFKclmrFj0qs9nM7dGUUGTK7EyiNMEEjQnNq7QUXziywKe%2F%2BJt%2BvpkoUzLZOt12b61ZHrHudC7OBbZV8Q%2FSUpdKh6Te0bMWSU3Obar3SVZQ1FiL1aB%2F0SvUi47DKwfh6XmHyz5PuVhW%2Bfc34p2xdLOgpRViOaUO4DYXVZErYRi5HCx6257Howqli7a7g3AAmLa1MqSzv7lQFAFFRAyoNfVrcIB0MrCH%2BdC8ivMuzR5W0KYFG9zOHbltzlncOmzFmsODgZcgaRUNnQQsxHufF1yYR0xaNvEjVXKeUvg1t36DHeRZY5S95YOpSicRr1zZA6TL41kK4gAhhMdxM2V2Y2EazuROK894NZGOKk1H%2Bjc2KU6WFHyaiVjWXxcP59pYGMMM%2BuwMkGOqUBRE12O24hmACnM3vRLoLUtm9aGssU62Sidc4f7LMxwbKyK6tgb3hhXdmCsiRhGWqRwZEaP90%2B4%2FCvdZav1YDXVWAud7tEqk64wfCb9ie9fA0gyrwXcBOVaBmZ%2BQSYkLMvLoGk%2B3sKjPkuMj4L%2F8zfr8EgKJHQDJ39ONOSrIQ6L%2B5aUr%2Bjg7WZGG13T23hu%2B%2FY3rGxbE%2Bi0r6vE92sWiKOjGRFmtbw&X-Amz-Signature=a3f4543d88bd7e76ad55ef03634be5fe4fdfacf68625d133fb48fba691cce5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

