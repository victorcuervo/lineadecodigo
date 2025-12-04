---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMSBIU3E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICmtG25SsvYWgCaO4YIXGEDlh5Y4%2FLhe5fko1Vjp9WgZAiEA91Qgg%2B2vfhsLgyprVufCazQWZa%2BF9XJXfjDYFQcnS1kq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOnNKUtZ4mIJ9lFxjyrcA9tSYqPYFk3Y6CWcejm3OsIUi8Tt4c%2BEOVDJMdRUpjtB0HUBrNklLgBmDn3kUrRo9Q%2F1Qr7Ihh6iDNhVHnekz0W6yO9jHcKLXbx4%2F7aIt5pdLDc1Wx0SC7B%2BKP0q9BAFzTSncdtVMeXzTGyj4kz7LoGW3wuIqDVAXKJRyDkGk5KglJwTqhvARqVbBgftKQWLky%2BBL36FE0hI2mpSTjD9%2BkF7CyHFmB%2FAQGorGZol0kJr%2BExAauXiXP2BIXoyqrMhAkaadCDWUP9eKWoo0Klylg1ZTCT9URyknADk3vwiR69o72Eohha3Fc45S8t%2BLEtP5QVLBqNglKChQB5mSWiVQD47aYvOGEUdJBw2RFxpkNXK6oyA0inosM5SLNcpL9QQPCKNdSiAg2qexmblqmaEWBlyOiebaw9qOi2SaQtT2699wkij3E7EbXCXG0wEpASCSpIBlxdKpNNUtFj2vMbAncvLUXMp1hiXEKNFDxoNEhhUUxuu5O1rlS1klhfrfUfsGGCb7O3cr3hStXszaGA5nckTsE5DCW5WvWXIdR5H4hIRjqIDJQPkWlVdwqHfKTQl%2FRCY8QGJRwSANNjzO2y8e4RpI1ZLHS5E9XHfeidg3GbaDhe5TJVZ1qWZTKM8MO7Uw8kGOqUBiYWAtONT3KDvTBbN9PgV3w01SktpwgpbBWFHnbd6o6F%2FbuJg0tBM8%2BDBoib%2F1TBqCUc%2FxYf%2F0p2scg%2BfRVL2u70aSCY%2BVDp5D3V9m0C1Xahghu4KsKUS4sVr%2BofLi07x8%2BQkQGXSX%2FPwJb4Y3rZzZ0ScZ%2BCLikJjAx7EJlQV9P%2FrmhJfxgF%2Bz1Io%2BTSTXe4mVVdITFr4lnvm%2BXtywqoVz24Zk44C&X-Amz-Signature=5fb3fd40ddd544fdcdcee7684ed47defb05ab19afa5abc22ab3b612fffefc3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

