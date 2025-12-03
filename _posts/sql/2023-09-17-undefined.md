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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJ4CK4R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC%2B0CJ4P%2FET8NYfbbvAoQp3CD5SHKzhY%2FO%2FAiW8Ryk%2BwQIgMq0wFxJRe7NxhKHyoGUMyKZdz%2FqLM981AaOsXXFBhhcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPhsqb3Z2HRADCC9lircAxBUmQ7zZaqQbQd7HWNlWbZkFah3SqnLaPRKO028zl3WBuyRWAycYdti5Yo0j7moN8q60oSjBVdUMEwO6CrUcg07svz7HkHm3WIMCvSb8YNlsxN7VMJUMPyljL9dPVYz4fiQMKxei0Ew%2FZMp7PnI46S8lmDSq1tKkPm7eDwJbZ8uzOaGevlLMdu25C7lG8QBOIkV%2FKypaHA1dT4ttIk7xXL6oKtzrg%2FQKB0H37mMKcoF5LvpRLYRzdpx%2Fdjd%2Bd9ZzWeKtjfI7DOuJc4ryQ2I%2BlSGjJ%2BgRNF%2FXS7Gg78vsVXyADii75OkmHyHOzROdhB%2FcFSrLdatzo8o6pihgv2sK4ozYZmIrXaC2DPTYAXmGYf0%2F4p7y5QXwRXxpfIP1KxHI2tZntFXYPHi4Rd2cVo1iE2i%2FJIisEXB0P5TYpFBRajjxn2ylWpvpBlJfPVuN7j9ccuQOqSpvph5OlG04uT5itJs8N3aLoSMDomHbiFNuvd0LpFyu1Iw92axKaKZg1QfMOZ9AFOMW1AH49bBOzsPTDGwpz9ee3UTxIe%2FG9LRcl%2BRn90xbipRx9TFIMJipzrDDv2BTf%2B1VQjFnR47p9CYW7beYbmQgIJGU3ExcC6RdcGn4Aw%2BAlKr2kUKrtV2MMCWvskGOqUB0TQbIj5PYzP3rYo41astW8y0xWkUNAPEUX2vwGeXmNk8vEr3V5FGjfVRm7wAbZfj8w0mmetM2Rdy5Ove%2BvGHSwheZbXQ%2FNTNAvDiusTFUB1KwrzaU794ayy2W1GOSyOPwmA8sa6yXeg3vNLfS%2BItDzcPHYdcum%2B0PnOtGPAtnH6N03ujJBmdcnRGPhuHyVI2y5kNKeiASZCiaVkBZndtWR%2FVbuua&X-Amz-Signature=adda3cc14ba6b633ee819f4bbf9239f72356ced4edf4cc71f932f8484332b897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

