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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLJ6BTY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCxKNZ1vCXupjhPzrWXxhjLL5Yrc5KH9Ww1DfFWqXnU2QIhAMXwwe%2FmUJhRyQ%2FMivaCtZyY3z8qtep0P08BHo%2BCB0j%2FKv8DCCsQABoMNjM3NDIzMTgzODA1IgwgXKsjcyyPyL%2F%2BXEsq3AOUAAx8ZV7cmsyrBsiqIWPpyf8HF982edI%2FuJ8LM0CV7cuRbh8e703I05Ii9DO6g6A8QhyrxVTTFMfwTdiZcQ8jFCeQ0uYwD8V9bZE70NJ6LEK3QWQSfd16%2BxQy0321cxvu2skLXcEK6n9HW7Ro5hoHoHf0VeqRctfoSizBDOsOudUED0vxpM6jaCMd3ggbkavXMU8Z83YBiLrF5N1ovWXrfq7r97jdjrK91U0K7nyqFyFVNlrC%2F76gWPLLCsKUEZ5jeXxs8H8Tj2a%2Bos9gK%2FSnZhDj3JMUIUks%2BdzTAguiciEaZHlInivFlI89DtJVgGte2Wa08Q2Karg65WBwN%2BRu091itOeWWaSaDKZskgJ%2FJD%2F2mJyrdzezRN9Np%2FREaw5ecFPEHaSfIoVDEO%2BHg0eojxN3tLw68Npm%2FaoVQu6LWogT2HmkkWEDUZaD1%2B46ReUos3sSHsN1DUwk1Nj1D4dadoE%2BiqCGGNHfcCnLNBHhzJtSlTd4x49c4bCohSEvP21I7KagRicTlK4caywW3gikYm4ZEhiJ%2B1tDM5ITxbiWazu5RqFtKz1IjgN%2Blrcn1isqm93%2BILAb5xBenyqY7ZTEJj6yU9ArSt6%2BBREBq5UWopUGg%2B8dHs0Yv%2FgqMTDpksDJBjqkATXidpslR58wcMfmP6UhPbrbIMgfvZwR1cNSJgjQLpiHYfujKRAMmoocSnXmE7uUxj2wp3lHGHFXKe8tlEZrz40M%2FHL%2BLC4VFOFu0LH0uJqfRBf8bDzgIRNeRe4kuBhIRg7CpG4bLhWpiRQVxcEUwE3QgBXOKoz7wYIXhzs18FdODFHJMNQBItTF7lmEsTf10kfq6HYbnvb3b7VwovKp5bUG1A7d&X-Amz-Signature=f67ceb4e2ef4e8c7d28523179ac99221eb5fbf45ce3ff5a88c8cc703854438a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

