---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJRTSDYB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIB2l%2FIEeXsiV4wWPF7e3n5v8f%2BjkOH97fwkuXeCoruPVAiEAqBs8d3JbpZzid%2FUWu8yp9e%2F3YzUG2j2nY2NOBclolYQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJf3dgv3iDK%2F0aw8cCrcAzn8HG8VNDzCE2LYy9MeXS%2B9ZvgomQV1wShieOLHQtswU5cwI2eB8DYS971zhOSTV9LwaYpfVvmf3mq7glt1Em%2BQ0DiwnQ2XS1jvzbQcTlv2w%2BAE6yiGi8v5d5To0j7H8UDAOy87vlBQJ8hWWD9%2B8N7vxWaCtSF0TF9pCEeu2hLWzbKdpX1rDGTb4WuluuT5NGau%2B5t3exC%2FF7t2dTlwRLhBmPTKN3ShUNVxlG7IRyB%2BztASrKHbVfh%2FScQRZ5E1HpG644%2BWzcrod5mFrSQIfepf%2FmwFkwn%2FsHgtVxn8ONxbWIxhiBRxreUeVQag4aKQOKUWxqIvkDMr1GA0SjMKQ3k28wwyI6gpEAQPAdbdFiMKFmKBPwYbc%2BMvpHH%2BTSsGy6rWKzp5Kx39IiEnaq9tElaEx7VNLpLXtZo73FXlhwryCPj8bIy%2FgATcTVRNhmQx7%2Fq2fFemz4%2FHnyx1FaYsq5%2BZy%2BYM7F9JswdKkXR6fupqnE1zead7mvYiX%2FuXuA2zbkQkk34b3MWq2tPum10vN5VsjSbLZuZAhwE29SQlKMvmX%2FN6R0stoo%2FGWkXrzIK4v2RuxeHlKc7CDXjG7t9RcJTi60Rlrks3GS1Pl6cpmbZcHSF8my7%2FpRRxsp2nMImixskGOqUB27QAftB7qIdW1DxG%2BrHQmGHjbMgtNUA5oM42MFjYX0Yg1V19I%2Bk5EpN8lT%2Fn6RKdRwo%2FQvHYKSRh4qqgJigb0%2B39eLEshN%2FYoK3oUfOqCbPo0r0bk777hTaphNQHO52BvouO9HaQRke7hs1Dl9jBzEkHP8L0rp%2BRUiCgkzuFePHJVvUMtJmcJIote7Terq6hWm%2B2Yjn0eEWCaq1tgaqPwcW2rCYb&X-Amz-Signature=946f0ac47f98f05d3b908ed2499d9b2f1cc540a620966bf906c51456d619a29e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

