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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEROI5YR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD58Cgn7fUv0kpa64E49dwSiwuChWx6Q1wBTHeIrbAwKgIge6%2Bk8eIPcn1XSPmhJIzs4%2FZKOtVu6I6d1LkMePNsXUAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJqPdf4GDqoS%2BUnLjCrcA6Z4X29AbmeZZz3IsT0w0QCJvSg18dZ5wsXYrpxUyssY9xCd57iIjalscLbK%2BrMeC%2FIn40JKOiLcVyKWg8lX2wUNRXSTgAjXBkj5OoUcMItf5oCFJmmrjNKvqSwk68aQ4yprSyGIGVVdUc4jFzCyWWs85dzPIhfEjvb54oGBrOnm46%2BKIM%2FkgWJ7Bjp1jfG%2FhzvLlCpvkysJ%2BDnrfelA%2BZEgrmMbsAnEPo5pYEDSP%2FsJLFoO9wAx4US22eiWOYokUMr%2FsxPX3dz8WFrXa8YMIyDh90%2BB2XCTSd1UjYcuI9oW396gdhjLxOc%2BJTPi91hUSqyLP060lzbL4QcsSUgfwqp9J8M%2BPc29rMN5Ia3HVwtFDIk4MAIHSKf87tuhGXuwvC2KbDCd7bc1NateP4iYooFfY13ZHHosmmj3DCkyvSmHRGr9WzOtZYl7KnOUtG6XeCU74JrAaoegiAlPkcIAycN7dy2eQ%2FygG4JzLgWvFwg5cWzfTbfQ3ymR%2BiTwLI%2BIlPNdN1Os%2BM0agXDSvaAkn4QeHu6DnV0cc9Dfmc4HcHPEfeMbmjkGK6X1JleRyccPA27WKflhHH7DJeO%2BJkypsG4zGygDk%2Fm%2B9j2IZ6DkM0czLE%2FQaZeF4BqKp7k6MLDbwckGOqUBcGlrXgYPWO6pKoK2KE%2BOJQC5ERoCEiCZ%2FdlSrZVLTS200E0nQcGk5ZgDzEuAuUtMEbYRB72USUM8Z7IbhRiZwxqqHVTDfcGVwmovwEFsaUaBN3kvDcAfukXE577QcUVBcFmpDeKEPRJh36f9h6MOzloY14A%2B1qlXdd9cun3jaF4YKBHukNaLCdWBYsfGC3oOc6apXG%2FDWVEXuGilHAVBayXreNhK&X-Amz-Signature=5b3d96661980b2ca132007b2f9e8279eb10793a4d09a798d30a62e3b9e4af8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

